window.addEventListener("load", solve);

function solve() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const summaryInput = document.getElementById('summary');
    const addBtn = document.getElementById('add-btn');

    const draftList = document.getElementById('draft-list');
    const publishedList = document.getElementById('published-list');

    addBtn.addEventListener('click', onAdd);

    function onAdd(e) {
      if (e) e.preventDefault();

      const title = titleInput.value.trim();
      const author = authorInput.value.trim();
      const summary = summaryInput.value.trim();

      if (title === '' || author === '' || summary === '') {
         return;
      }

      const li = document.createElement('li');
      const article = document.createElement('article');
      
      const titleP = document.createElement('p');
      titleP.textContent = title;

      const authorP = document.createElement('p');
      authorP.textContent = author;

      const summaryP = document.createElement('p');
      summaryP.textContent = summary;

      article.appendChild(titleP);
      article.appendChild(authorP);
      article.appendChild(summaryP);

      const buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'buttons';

      const editBtn = document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit';

      const approveBtn = document.createElement('button');
      approveBtn.className = 'approve-btn';
      approveBtn.textContent = 'Approve';
      
      buttonsDiv.appendChild(editBtn);
      buttonsDiv.appendChild(approveBtn);

      li.appendChild(article);
      li.appendChild(buttonsDiv);

      draftList.appendChild(li);

      titleInput.value = '';
      authorInput.value = '';
      summaryInput.value = '';
      addBtn.disabled = true;

      editBtn.addEventListener('click', () => {
            titleInput.value = title;
            authorInput.value = author;
            summaryInput.value = summary;

            addBtn.disabled = false;

            li.remove();
        });

      approveBtn.addEventListener('click', () => {
         buttonsDiv.remove();

         const publishBtn = document.createElement('button');
         publishBtn.className = 'publish-btn';
         publishBtn.textContent = 'Publish';

         li.appendChild(publishBtn);
         publishedList.appendChild(li);

         publishBtn.addEventListener('click', () => {
            li.remove();
            addBtn.disabled = false;
         });
      });
   }
}
  
solve();