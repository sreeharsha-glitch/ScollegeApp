//SJSU CMPE 138 Spring 2022 TEAM2
function getProducts() {
    return fetch('demo/data/products.json').then(res => res.json()).then(d => d.data);
}

export {getProducts};