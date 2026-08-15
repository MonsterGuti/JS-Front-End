function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/matches/';

    const hostInput = document.getElementById('host');
    const scoreInput = document.getElementById('score');
    const guestInput = document.getElementById('guest');

    const addMatchBtn = document.getElementById('add-match');
    const editMatchBtn = document.getElementById('edit-match');
    const loadMatchesBtn = document.getElementById('load-matches');

    const listContainer = document.getElementById('list');
    let currentEditId = null;
    
    loadMatchesBtn.addEventListener('click', loadMatches);
    addMatchBtn.addEventListener('click', addMatch);
    editMatchBtn.addEventListener('click', editMatch);

    async function loadMatches() {
        listContainer.innerHTML = '';

        try{
            const response = await fetch(baseUrl);
            const data = await response.json();

            Object.values(data).forEach(match => {
                const li = document.createElement('li');
                li.className = 'match';

                const infoDiv = document.createElement('div');
                infoDiv.className = 'info';

                const hostP = document.createElement('p');
                hostP.textContent = match.host;

                const scoreP = document.createElement('p');
                scoreP.textContent = match.score;

                const guestP = document.createElement('p');
                guestP.textContent = match.guest;

                infoDiv.appendChild(hostP);
                infoDiv.appendChild(scoreP);
                infoDiv.appendChild(guestP);

                const btnWrapperDiv = document.createElement('div');
                btnWrapperDiv.className = 'btn-wrapper';

                const changeBtn = document.createElement('button');
                changeBtn.className = 'change-btn';
                changeBtn.textContent = 'Change';

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = 'Delete';

                btnWrapperDiv.appendChild(changeBtn);
                btnWrapperDiv.appendChild(deleteBtn);

                li.appendChild(infoDiv);
                li.appendChild(btnWrapperDiv);

                listContainer.appendChild(li);

                changeBtn.addEventListener('click', () => {
                    hostInput.value = match.host;
                    scoreInput.value = match.score;
                    guestInput.value = match.guest;

                    currentEditId = match._id;

                    editMatchBtn.disabled = false;
                    addMatchBtn.disabled = true;
                });

                deleteBtn.addEventListener('click', async () => {
                    await fetch(`${baseUrl}${match._id}`, {
                        method: 'DELETE'
                    });

                    await loadMatches();
                });
            });
            editMatchBtn.disabled = true;
            addMatchBtn.disabled = false;
        } catch (error) {
            console.error('Error loading matches:', error);
        }
    }
    async function addMatch() {
        const host = hostInput.value.trim();
        const score = scoreInput.value.trim();
        const guest = guestInput.value.trim();

        if (!host || !score || !guest) {
            return;
        }

        await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ host, score, guest })
        });

        hostInput.value = '';
        scoreInput.value = '';
        guestInput.value = '';

        await loadMatches();
    }

    async function editMatch() {
        if (!currentEditId) return;

        const host = hostInput.value.trim();
        const score = scoreInput.value.trim();
        const guest = guestInput.value.trim();

        if (!host || !score || !guest) {
            return;
        }

        await fetch(`${baseUrl}${currentEditId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ host, score, guest, _id: currentEditId })
        });

        hostInput.value = '';
        scoreInput.value = '';
        guestInput.value = '';
        currentEditId = null;

        editMatchBtn.disabled = true;
        addMatchBtn.disabled = false;

        await loadMatches();
    }
}

attachEvents();