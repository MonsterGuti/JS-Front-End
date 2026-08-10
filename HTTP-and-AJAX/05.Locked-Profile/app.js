function lockedProfile() {
    const URL = 'http://localhost:3030/jsonstore/advanced/profiles';
    const mainContainer = document.getElementById('main');

    mainContainer.innerHTML = '';

    loadProfiles();

    async function loadProfiles() {
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error('Failed to load profiles.');
            }

            const data = await response.json();

            Object.values(data).forEach((profile, index) => {
                const userIndex = index + 1; 
                const profileDiv = document.createElement('div');
                profileDiv.className = 'profile';

                profileDiv.innerHTML = `
                    <img src="./iconProfile2.png" class="userIcon" />
                    <label>Lock</label>
                    <input type="radio" name="user${userIndex}Locked" value="lock" checked>
                    <label>Unlock</label>
                    <input type="radio" name="user${userIndex}Locked" value="unlock">
                    <br>
                    <hr>
                    <label>Username</label>
                    <input type="text" name="user${userIndex}Username" value="${profile.username}" disabled readonly />
                    <div id="user${userIndex}HiddenFields" class="hiddenInfo">
                        <hr>
                        <label>Email:</label>
                        <input type="email" name="user${userIndex}Email" value="${profile.email}" disabled readonly />
                        <label>Age:</label>
                        <input type="number" name="user${userIndex}Age" value="${profile.age}" disabled readonly />
                    </div>
                    <button>Show more</button>
                `;

                const showMoreBtn = profileDiv.querySelector('button');
                showMoreBtn.addEventListener('click', toggleInfo);

                mainContainer.appendChild(profileDiv);
            });

        } catch (error) {
            alert(error.message);
        }
    }

    function toggleInfo(e) {
        const profileDiv = e.target.parentElement;
        
        const isUnlocked = profileDiv.querySelector('input[type="radio"][value="unlock"]').checked;
        const hiddenFieldsDiv = profileDiv.querySelector('.hiddenInfo');

        if (isUnlocked) {
            if (e.target.textContent === 'Show more') {
                hiddenFieldsDiv.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                hiddenFieldsDiv.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}

lockedProfile();