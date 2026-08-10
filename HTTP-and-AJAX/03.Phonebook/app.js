function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/phonebook';

    const phonebookUl = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');

    btnLoad.addEventListener('click', loadContacts);
    btnCreate.addEventListener('click', createContact);

    async function loadContacts() {
        try {
            const response = await fetch(URL);
            
            if (!response.ok) {
                throw new Error('Failed to load contacts.');
            }

            const data = await response.json();
            phonebookUl.innerHTML = '';

            Object.values(data).forEach(entry => {
                const li = document.createElement('li');
                li.textContent = `${entry.person}: ${entry.phone}`;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                
                deleteBtn.addEventListener('click', () => deleteContact(entry._id));

                li.appendChild(deleteBtn);
                phonebookUl.appendChild(li);
            });
        } catch (error) {
            alert(error.message);
        }
    }

    async function createContact() {
        const person = personInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!person || !phone) {
            return;
        }

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ person, phone })
            });

            if (!response.ok) {
                throw new Error('Failed to create contact.');
            }

            personInput.value = '';
            phoneInput.value = '';

            await loadContacts();
        } catch (error) {
            alert(error.message);
        }
    }

    async function deleteContact(id) {
        try {
            const deleteUrl = `${URL}/${id}`;
            const response = await fetch(deleteUrl, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete contact.');
            }

            await loadContacts();
        } catch (error) {
            alert(error.message);
        }
    }
}

attachEvents();