"use strict";

"use strict";

function addToChart(product) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + 1;
}

function removeFromChart(product) {
    let quantity = document.getElementById(product).value;
    if (quantity > 0) {
        document.getElementById(product).value = parseInt(quantity) - 1;
    }
}

function addTwoMore(product) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + 2;
}

function addThreeMore(product) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + 3;
}

function addfiveMore(product) {
    let quantity = document.getElementById(product).value;
    document.getElementById(product).value = parseInt(quantity) + 5;
}

function resetChart(product) {
    document.getElementById(product).value = 0;
}

    