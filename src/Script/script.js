let checkDishes = "";
let checkDrinks = "";
let checkDesserts = "";

function selectDish(selectedItem) {
    const selected = document.querySelector(".dishes .selected");

    if (selected) {
        selected.classList.remove("selected");
        selected.getElementsByClassName("item-bottom")[0].children[1].remove();
    }
    selectedItem.classList.add("selected");
    selectedItem.getElementsByClassName("item-bottom")[0].innerHTML += '<ion-icon name="checkmark-circle" class="icon-format"></ion-icon>';

    checkDishes = selectedItem;

    finishButton();
}

function selectDrink(selectedItem) {
    const selected = document.querySelector(".drinks .selected");

    if (selected) {
        selected.classList.remove("selected");
        selected.getElementsByClassName("item-bottom")[0].children[1].remove();
    }

    selectedItem.classList.add("selected");
    selectedItem.getElementsByClassName("item-bottom")[0].innerHTML += '<ion-icon name="checkmark-circle" class="icon-format"></ion-icon>';

    checkDrinks = selectedItem;

    finishButton();
}

function selectDessert(selectedItem) {
    const selected = document.querySelector(".desserts .selected");

    if (selected) {
        selected.classList.remove("selected");
        selected.getElementsByClassName("item-bottom")[0].children[1].remove();
    }

    selectedItem.classList.add("selected");
    selectedItem.getElementsByClassName("item-bottom")[0].innerHTML += '<ion-icon name="checkmark-circle" class="icon-format"></ion-icon>';

    checkDesserts = selectedItem;

    finishButton();
}

function finishButton() {
    if (checkDishes && checkDrinks && checkDesserts) {
        const button = document.getElementById('button');
        button.disabled = false;
        button.classList.add('button-enabled');
        button.innerHTML = "Fechar Pedido";
    }
}

function sendOrder() {

    let message = "Olá, gostaria de fazer o pedido:\n"
    message += "- Prato: " + checkDishes.getElementsByClassName("name")[0].innerHTML + "\n"
    message += "- Bebida: " + checkDrinks.getElementsByClassName("name")[0].innerHTML + "\n"
    message += "- Sobremesa: " + checkDesserts.getElementsByClassName("name")[0].innerHTML + "\n";

    let dishPrice = Number(checkDishes.getElementsByClassName("item-bottom")[0].children[0].innerHTML.replace('R$', '').replace(",", "."));
    let drinkPrice = Number(checkDrinks.getElementsByClassName("item-bottom")[0].children[0].innerHTML.replace('R$', '').replace(",", "."));
    let dessertPrice = Number(checkDesserts.getElementsByClassName("item-bottom")[0].children[0].innerHTML.replace('R$', '').replace(",", "."));

    let totalPrice = dishPrice + drinkPrice + dessertPrice;

    message += "Total: R$ " + totalPrice.toFixed(2);
    let formated_message = encodeURIComponent(message);

    const url = "https://wa.me/?text=" + formated_message;
    window.open(url);
}

// let products = [
//     {
//       id: 1,
//       type: "food",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg",
//       name: "X-Economia",
//       description: "Pra matar a fome",
//       value: 10.9,
//     },
//     {
//       id: 2,
//       type: "food",
//       image: "https://images-gmi-pmc.edge-generalmills.com/6467a87b-0186-410b-bf19-96ed4dc32936.jpg",
//       name: "X-Super Bacon",
//       description: "Bacon nunca é demais",
//       value: 14.9,
//     },
//     {
//       id: 3,
//       type: "food",
//       image: "https://s2.glbimg.com/fBiB3TLGUkDC-cO3Oz2NT9xM8xo=/smart/e.glbimg.com/og/ed/f/original/2016/06/09/hamburguer_vegetariano_madero_-_jpg.jpg",
//       name: "Vegetariano",
//       description: "Pra todos os gostos",
//       value: 19.9,
//     },
//     {
//       id: 4,
//       type: "food",
//       image: "https://s2.glbimg.com/fBiB3TLGUkDC-cO3Oz2NT9xM8xo=/smart/e.glbimg.com/og/ed/f/original/2016/06/09/hamburguer_vegetariano_madero_-_jpg.jpg",
//       name: "Arrebenta Tudo",
//       description: "Muito bacon e cheddar",
//       value: 24.9,
//     },
//     {
//       id: 5,
//       type: "food",
//       image: "https://cdn6.campograndenews.com.br/uploads/noticias/2021/05/28/889782e4b48f56196129fb84f7126f65216c072f.jpeg",
//       name: "X-Desafio",
//       description: "Tão grande que nem cabe na foto",
//       value: 29.9,
//     },
//     {
//       id: 1,
//       type: "drink",
//       image: "https://hiperideal.vteximg.com.br/arquivos/ids/197362-1000-1000/55723-4.jpg?v=637830468563800000",
//       name: "Coca Cola",
//       description: "Lata 350ml",
//       value: 5,
//     },
//     {
//       id: 2,
//       type: "drink",
//       image: "https://images.tcdn.com.br/img/img_prod/858764/refrigerante_fanta_laranja_lata_350ml_c_06_1301_1_77f85b0d9fd22841694b65386be4048b.jpg",
//       name: "Fanta Laranja",
//       description: "Lata 350ml",
//       value: 5,
//     },
//     {
//       id: 3,
//       type: "drink",
//       image: "https://savegnagoio.vtexassets.com/arquivos/ids/372500/CervejaBohemiaLata473ML.jpg?v=638082789434200000",
//       name: "Bohemia",
//       description: "Latão 473ml",
//       value: 7,
//     },
//     {
//       id: 4,
//       type: "drink",
//       image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/455/258/products/78983679833561-e6469648d8640d1aff16552331889779-640-0.png",
//       name: "Eisenbahn",
//       description: "Latão 473ml",
//       value: 7,
//     },
//     {
//       id: 5,
//       type: "drink",
//       image: "https://us-southeast-1.linodeobjects.com/storage/armazem-online/media/uploads/produto/cerveja_budweiser_lt_473ml_3440656d-2d91-4f48-87a7-2cc898b78f77.jpeg",
//       name: "Budweiser",
//       description: "Latão 473ml",
//       value: 7,
//     },
//     {
//       id: 1,
//       type: "dessert",
//       image: "https://s2.glbimg.com/PSo7shjUPc3x5w_8zMTj3J4ZrEM=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/E/p/KwxNhgRFSwV6vTBCzmqA/petit-gateau.jpg",
//       name: "Petit Gateau",
//       description: "Acompanha sorvete de creme",
//       value: 14.9,
//     },
//     {
//       id: 2,
//       type: "dessert",
//       image: "https://s2.glbimg.com/wJmq1MqeOZZ-VSLlDxRLdL2zj60=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/1/N/aQD0fhQs2qW7qlFw0bTA/bolo-de-chocolate-facil.jpg",
//       name: "Bolo de chocolate",
//       description: "Com granulado",
//       value: 4.9,
//     },
//     {
//       id: 3,
//       type: "dessert",
//       image: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/desserts-&-bakery/torta-holandesa/main-header.jpg",
//       name: "Torta Holandesa",
//       description: "Deliciosa torta holandesa",
//       value: 9.9,
//     },
//     {
//       id: 4,
//       type: "dessert",
//       image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/8fafc3935c766bf8c9f1331a325e48a9.jpg",
//       name: "Cheesecake",
//       description: "Muito cremoso",
//       value: 9.9,
//     },
//     {
//       id: 5,
//       type: "dessert",
//       image: "https://img.itdg.com.br/images/recipes/000/024/104/263980/263980_original.jpg",
//       name: "Pudim",
//       description: "Feito com leite condensado",
//       value: 7.9,
//     },
//   ];