function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/orders/';
    
    const nameInput = document.getElementById('name');
    const quantityInput = document.getElementById('quantity');
    const dateInput = document.getElementById('date');

    const orderBtn = document.getElementById('order-btn');
    const editOrderBtn = document.getElementById('edit-order');
    const loadOrdersBtn = document.getElementById('load-orders');

    const listContainer = document.getElementById('list');

    let currentOrderId = null;

    loadOrdersBtn.addEventListener('click', loadOrders);
    orderBtn.addEventListener('click', createOrder);
    editOrderBtn.addEventListener('click', editOrder);

    async function loadOrders(e) {
        if (e) e.preventDefault();
        listContainer.innerHTML = '';

        try {
            const response = await fetch(baseUrl);
            if (!response.ok) return;

            const data = await response.json();

            Object.values(data).forEach(order => {
                const orderDiv = document.createElement('div');
                orderDiv.className = 'container';

                const h2Name = document.createElement('h2');
                h2Name.textContent = order.name;

                const h3Date = document.createElement('h3');
                h3Date.textContent = order.date;

                const h3Quantity = document.createElement('h3');
                h3Quantity.textContent = order.quantity;

                const changeBtn = document.createElement('button');
                changeBtn.className = 'change-btn';
                changeBtn.textContent = 'Change';

                const doneBtn = document.createElement('button');
                doneBtn.className = 'done-btn';
                doneBtn.textContent = 'Done';

                orderDiv.appendChild(h2Name);
                orderDiv.appendChild(h3Date);
                orderDiv.appendChild(h3Quantity);
                orderDiv.appendChild(changeBtn);
                orderDiv.appendChild(doneBtn);

                listContainer.appendChild(orderDiv);

                changeBtn.addEventListener('click', () => {
                    nameInput.value = order.name;
                    quantityInput.value = order.quantity;
                    dateInput.value = order.date;
                    currentOrderId = order._id;

                    orderDiv.remove();

                    orderBtn.disabled = true;
                    editOrderBtn.disabled = false;

                });
                doneBtn.addEventListener('click', async () => {
                    await fetch(`${baseUrl}${order._id}`, {
                        method: 'DELETE'
                    });
                    loadOrders();
                });
            });

            editOrderBtn.disabled = true;
            orderBtn.disabled = false;

            } catch (err) {
            console.error(err);
        }
    }

    async function createOrder(e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const quantity = quantityInput.value.trim();
        const date = dateInput.value.trim();

        if (!name || !quantity || !date) {
            return;
        }

        try {
            await fetch(baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, quantity, date })
            });

            clearInputs();

            loadOrders();
        } catch (err) {
            console.error(err);
        }
    }

    async function editOrder(e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const quantity = quantityInput.value.trim();
        const date = dateInput.value.trim();

        if (!name || !quantity || !date || !currentOrderId) {
            return;
        }

        try {
            await fetch(`${baseUrl}${currentOrderId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    quantity,
                    date,
                    _id: currentOrderId
                })
            });

            currentOrderId = null;

            clearInputs();
            editOrderBtn.disabled = true;
            orderBtn.disabled = false;

            loadOrders();
        } catch (err) {
            console.error(err);
        }
    }

    function clearInputs() {
        nameInput.value = '';
        quantityInput.value = '';
        dateInput.value = '';
    }
}

attachEvents();