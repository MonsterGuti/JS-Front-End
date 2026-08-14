function solve() {
    const eventInput = document.getElementById('event');
    const noteInput = document.getElementById('note');
    const dateInput = document.getElementById('date');
    const saveBtn = document.getElementById('save');

    const upcomingList = document.getElementById('upcoming-list');
    const eventsList = document.getElementById('events-list');
    const deleteBtn = document.querySelector('#events .delete');

    saveBtn.addEventListener('click', onSave);

    function onSave(e) {
        if (e) e.preventDefault();

        const eventValue = eventInput.value.trim();
        const noteValue = noteInput.value.trim();
        const dateValue = dateInput.value.trim();

        if (!eventValue || !noteValue || !dateValue) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'event-item';

        const eventContainer = document.createElement('div');
        eventContainer.className = 'event-container';

        const article = document.createElement('article');

        const pName = document.createElement('p');
        pName.textContent = `Name: ${eventValue}`;

        const pNote = document.createElement('p');
        pNote.textContent = `Note: ${noteValue}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Date: ${dateValue}`;

        article.appendChild(pName);
        article.appendChild(pNote);
        article.appendChild(pDate);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        const editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'Edit';

        const doneBtn = document.createElement('button');
        doneBtn.className = 'btn done';
        doneBtn.textContent = 'Done';

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(doneBtn);

        eventContainer.appendChild(article);
        eventContainer.appendChild(buttonsDiv);
        li.appendChild(eventContainer);

        editBtn.addEventListener('click', () => {
            eventInput.value = eventValue;
            noteInput.value = noteValue;
            dateInput.value = dateValue;

            upcomingList.removeChild(li);
        });

        doneBtn.addEventListener('click', () => {
            upcomingList.removeChild(li);

            const endedLi = document.createElement('li');
            endedLi.className = 'event-item';

            const endedArticle = document.createElement('article');

            const endedPName = document.createElement('p');
            endedPName.textContent = `Name: ${eventValue}`;

            const endedPNote = document.createElement('p');
            endedPNote.textContent = `Note: ${noteValue}`;

            const endedPDate = document.createElement('p');
            endedPDate.textContent = `Date: ${dateValue}`;

            endedArticle.appendChild(endedPName);
            endedArticle.appendChild(endedPNote);
            endedArticle.appendChild(endedPDate);

            endedLi.appendChild(endedArticle);
            eventsList.appendChild(endedLi);
        });

        upcomingList.appendChild(li);

        eventInput.value = '';
        noteInput.value = '';
        dateInput.value = '';
    }

    deleteBtn.addEventListener('click', () => {
        eventsList.innerHTML = '';
    });
}

solve();