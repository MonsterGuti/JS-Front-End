function storeProvision(provision, delivery) {
    let store = {};
    for (let i = 0; i < provision.length; i += 2) {
        let product = provision[i];
        let quantity = Number(provision[i + 1]);
        
        store[product] = quantity;
    }
    for (let i = 0; i < delivery.length; i += 2) {
        let product = delivery[i];
        let quantity = Number(delivery[i + 1]);

        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {

            store[product] = quantity;
        }
    }
    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}