
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

function finishButton(){
    const button = document.getElementById('button');
    if(checkDishes && checkDrinks && checkDesserts){
        button.disabled = false;
        button.classList.add('button-enabled');
        button.innerHTML = "Fechar Pedido";
    }
}

function sendOrder() {

    let message = "Olá, gostaria de fazer o pedido:/n" 
    message += "- Prato: " + checkDishes.querySelector("name").innerHTML + "/n" 
    message += "- Bebida: " + checkDrinks.querySelector("name").innerHTML + "/n" 
    message += "- Sobremesa: " + checkDesserts.querySelector("name").innerHTML + "/n";
    
    /*
    encodeURIComponent(message);
    window.open()
    //https://wa.me/?text=urlencodedtext
    */
    alert(message);
}

