function attachEvents() {
    // Вземаме бутоните за изпращане и за опресняване на съобщенията
    document.getElementById('submit').addEventListener('click', addComment);
    document.getElementById('refresh').addEventListener('click', loadComments);

    const URL = 'http://localhost:3030/jsonstore/messenger';

    // 1. Функция за изпращане на ново съобщение (POST)
    async function addComment() {
        const authorInput = document.querySelector('[name="author"]');
        const contentInput = document.querySelector('[name="content"]');

        // Проверка дали някое от полетата е празно
        if (authorInput.value === '' || contentInput.value === '') {
            return;
        }

        // Изпращаме POST заявка с въведените данни
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: authorInput.value.trim(),
                content: contentInput.value.trim()
            })
        });

        // Зачистваме текстовите полета след изпращане
        authorInput.value = '';
        contentInput.value = '';
    }

    // 2. Функция за зареждане на всички съобщения (GET)
    async function loadComments() {
        const response = await fetch(URL);
        const data = await response.json();

        const messagesTextArea = document.getElementById('messages');
        
        // Форматираме съобщенията във вида "Автор: Съобщение"
        const comments = Object.values(data)
            .map(m => `${m.author}: ${m.content}`)
            .join('\n');

        messagesTextArea.value = comments;
    }
}

attachEvents();