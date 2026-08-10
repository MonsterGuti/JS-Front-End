function solution() {
    const mainSection = document.getElementById('main');
    const LIST_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const DETAILS_URL = 'http://localhost:3030/jsonstore/advanced/articles/details/';

    loadArticles();

    async function loadArticles() {
        try {
            const response = await fetch(LIST_URL);

            if (!response.ok) {
                throw new Error('Failed to fetch articles list.');
            }

            const articles = await response.json();
            mainSection.innerHTML = '';

            Object.values(articles).forEach(article => {
                const accordionDiv = document.createElement('div');
                accordionDiv.className = 'accordion';

                accordionDiv.innerHTML = `
                    <div class="head">
                        <span>${article.title}</span>
                        <button class="button" id="${article._id}">More</button>
                    </div>
                    <div class="extra">
                        <p></p>
                    </div>
                `;

                const button = accordionDiv.querySelector('button');
                button.addEventListener('click', toggleContent);

                mainSection.appendChild(accordionDiv);
            });

        } catch (error) {
            alert(error.message);
        }
    }

    async function toggleContent(e) {
        const button = e.target;
        const articleId = button.id;
        const accordionDiv = button.parentElement.parentElement;
        const extraDiv = accordionDiv.querySelector('.extra');
        const pElement = extraDiv.querySelector('p');

        if (button.textContent === 'More') {
            try {
                const response = await fetch(`${DETAILS_URL}${articleId}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch article details.');
                }

                const data = await response.json();

                pElement.textContent = data.content;
                extraDiv.style.display = 'block';
                button.textContent = 'Less';

            } catch (error) {
                alert(error.message);
            }
        } else {
            extraDiv.style.display = 'none';
            button.textContent = 'More';
        }
    }
}

solution();