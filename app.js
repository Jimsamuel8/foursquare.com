
// menubar------------------------------

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click', () =>{ 
    menu.classList.toggle('.ion-ios-close');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('.ion-ios-close');
    navbar.classList.remove('active');
}


// CART------------------------------

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};


// Cart working JS------------------------------

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Making Function-------------------------------

function ready(){
    // Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("#cart-remove")
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {  
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
}

// Remove Items From Cart-------------------------------

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}

// Update total------------------------------------

function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("N", ""));
        var quantity = quantityElement.value;
        total= total + (price * quantity);

        document.getElementsByClassName('total-price')[0];
    }
}

