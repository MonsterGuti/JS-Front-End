document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputForm = document.getElementById('input');
    const shopForm = document.getElementById('shop');

    const inputArea = inputForm.querySelector('textarea');
    const outputArea = shopForm.querySelector('textarea');
    const tbody = shopForm.querySelector('tbody');

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!inputArea.value) return;

        const items = JSON.parse(inputArea.value);

        for (const item of items) {
            const tr = document.createElement('tr');

            const tdImg = document.createElement('td');
            const img = document.createElement('img');
            img.src = item.img;
            tdImg.appendChild(img);

            const tdName = document.createElement('td');
            const pName = document.createElement('p');
            pName.textContent = item.name;
            tdName.appendChild(pName);

            const tdPrice = document.createElement('td');
            const pPrice = document.createElement('p');
            pPrice.textContent = item.price;
            tdPrice.appendChild(pPrice);

            const tdFactor = document.createElement('td');
            const pFactor = document.createElement('p');
            pFactor.textContent = item.decFactor;
            tdFactor.appendChild(pFactor);

            const tdCheck = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            tdCheck.appendChild(checkbox);

            tr.appendChild(tdImg);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdFactor);
            tr.appendChild(tdCheck);

            tbody.appendChild(tr);
        }
    });

    shopForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const checkedBoxes = Array.from(tbody.querySelectorAll('input[type="checkbox"]:checked:not(:disabled)'));

        if (checkedBoxes.length === 0) return;

        const boughtNames = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        for (const checkbox of checkedBoxes) {
            const row = checkbox.parentElement.parentElement;

            const name = row.children[1].children[0].textContent;
            const price = Number(row.children[2].children[0].textContent);
            const decFactor = Number(row.children[3].children[0].textContent);

            boughtNames.push(name);
            totalPrice += price;
            totalDecFactor += decFactor;
        }

        const avgDecFactor = totalDecFactor / checkedBoxes.length;

        outputArea.value = `Bought furniture: ${boughtNames.join(', ')}\n` +
            `Total price: ${totalPrice}\n` +
            `Average decoration factor: ${avgDecFactor}`;
    });
}