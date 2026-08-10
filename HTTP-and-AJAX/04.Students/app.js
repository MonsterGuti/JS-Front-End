function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/collections/students';
    const tableBody = document.querySelector('#results tbody');
    const form = document.getElementById('form');

    loadStudents();

    form.addEventListener('submit', createStudent);

    async function loadStudents() {
        try {
            const response = await fetch(URL);
            
            if (!response.ok) {
                throw new Error('Failed to fetch students.');
            }

            const data = await response.json();
            tableBody.innerHTML = '';

            Object.values(data).forEach(student => {
                const tr = document.createElement('tr');

                const firstNameTd = document.createElement('td');
                firstNameTd.textContent = student.firstName;

                const lastNameTd = document.createElement('td');
                lastNameTd.textContent = student.lastName;

                const facultyNumberTd = document.createElement('td');
                facultyNumberTd.textContent = student.facultyNumber;

                const gradeTd = document.createElement('td');
                gradeTd.textContent = Number(student.grade).toFixed(2);

                tr.appendChild(firstNameTd);
                tr.appendChild(lastNameTd);
                tr.appendChild(facultyNumberTd);
                tr.appendChild(gradeTd);

                tableBody.appendChild(tr);
            });
        } catch (error) {
            alert(error.message);
        }
    }

    async function createStudent(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const firstName = formData.get('firstName').trim();
        const lastName = formData.get('lastName').trim();
        const facultyNumber = formData.get('facultyNumber').trim();
        const grade = formData.get('grade').trim();

        if (!firstName || !lastName || !facultyNumber || !grade || isNaN(grade)) {
            return;
        }

        const studentData = {
            firstName,
            lastName,
            facultyNumber,
            grade: Number(grade)
        };

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(studentData)
            });

            if (!response.ok) {
                throw new Error('Failed to create student.');
            }

            form.reset();

            await loadStudents();

        } catch (error) {
            alert(error.message);
        }
    }
}

attachEvents();