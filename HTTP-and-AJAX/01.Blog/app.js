function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);
}

let postsData = {};

async function loadPosts() {
    try {
        const url = 'http://localhost:3030/jsonstore/blog/posts';
        const response = await fetch(url); 

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        postsData = await response.json();
        const selectPosts = document.getElementById('posts');
        selectPosts.innerHTML = '';

        Object.values(postsData).forEach(post => {
            const option = document.createElement('option');
            option.value = post.id; 
            option.textContent = post.title;
            selectPosts.appendChild(option);
        });

    } catch (error) {
        alert(error.message);
    }
}

async function viewPost() {
    try {
        const selectedPostId = document.getElementById('posts').value;
        if (!selectedPostId) return;

        const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
        const response = await fetch(commentsUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const commentsData = await response.json();

        const currentPost = postsData[selectedPostId];

        document.getElementById('post-title').textContent = currentPost.title;
        document.getElementById('post-body').textContent = currentPost.body;

        const relatedComments = Object.values(commentsData).filter(c => c.postId === selectedPostId);

        // 5. Рендерираме коментарите в списъка
        const commentsUl = document.getElementById('post-comments');
        commentsUl.innerHTML = '';

        relatedComments.forEach(c => {
            const li = document.createElement('li');
            li.id = c.id;
            li.textContent = c.text;
            commentsUl.appendChild(li);
        });

    } catch (error) {
        alert(error.message);
    }
}

attachEvents();