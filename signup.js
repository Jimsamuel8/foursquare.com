
// CART
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".carrt");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};


// Listen for form submit 
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();


    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var pws = getInputVal('password');
    var pwsconfirm = getInputVal('password');

    console.log(name);
}


// Function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}


