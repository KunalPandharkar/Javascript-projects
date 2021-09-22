
const cartvalue = document.getElementById("cartcount");
let product = {
    id: null,
    name: null,
    price: null,
    description: null,
    photo: null
}

let products = []
let cartlist = []

window.onload = function () {
    //localStorage.clear()

    setcartvalue()
    showproductincart()
    setproductlist();
    for (let i = 0; i < cartlist.length; i++) {
        if (localStorage.getItem(`product${cartlist[i]}`)) {
            document.getElementById(`prodaddcart${cartlist[i]}`).style.display = "none"
            document.getElementById(`prodremovecart${cartlist[i]}`).style.display = "block"
        }
    }
}

function setproductlist() {
    products = []
    let str = JSON.parse(localStorage.getItem("productlist"));

    for (key in str) {
        let value = str[key]
        products[key] = value
    }
}

function updatecartlist() {
    cartlist = []
    let str = JSON.parse(localStorage.getItem("productlist"));

    for (key in str) {
        let value = str[key]
        cartlist[key] = value
    }

    console.log(cartlist.length)
}

function setcartvalue() {
    updatecartlist()
    localStorage.setItem("cartcount", cartlist.length);
    if (localStorage.getItem("cartcount")) {
        cartvalue.innerText = localStorage.getItem("cartcount");

    } else {
        cartvalue.innerText = 0;
    }
}

function addtocart(productid) {

    document.getElementById(`prodaddcart${productid}`).style.display = "none"
    document.getElementById(`prodremovecart${productid}`).style.display = "block"
    addproducttocart(productid)
    showproductincart()
    setcartvalue();

}

function addproducttocart(productid) {
    product.id = productid;
    product.name = document.getElementById(`prodhead${productid}`).innerText;
    product.price = document.getElementById(`prodprice${productid}`).innerText;
    product.photo = document.getElementById(`prodimg${productid}`).src;
    product.description = document.getElementById(`proddescrption${productid}`).innerText;
    products.push(productid)
    localStorage.setItem(`productlist`, JSON.stringify(products))
    localStorage.setItem(`product${productid}`, JSON.stringify(product))

}

function removefromcart(productid) {

    document.getElementById(`prodaddcart${productid}`).style.display = "block"
    document.getElementById(`prodremovecart${productid}`).style.display = "none"
    products = products.filter(item => item !== productid);
    localStorage.setItem(`productlist`, JSON.stringify(products))
    localStorage.removeItem(`product${productid}`);
    removeproductfromcart(productid)
    showproductincart()
    setcartvalue();
}





function showproductincart() {

    updatecartlist();

    for (let i = 0; i < cartlist.length; i++) {
        if (document.getElementById(`cartitem${cartlist[i]}`)) {
            continue;
        }
        let cartproduct = JSON.parse(localStorage.getItem(`product${cartlist[i]}`));
        let card = `    <div class="card"  id="cartitem${cartlist[i]}">
            <img src="${cartproduct.photo}" class="card-img-top" alt="..." id="prodimg${i}">
            <div class="card-body">
                <h5 class="card-title" id="prodhead${i}"> ${cartproduct.name} </h5>
                <p class="card-text" id="proddescrption${i}"> ${cartproduct.description}
                </p>
                <span class="card-text mt-2">Price : <span class="fw-bolder text-success" id="prodprice${i}">${cartproduct.price}</span>/
                </span>


            </div>
        </div>`
        document.getElementById("cartitems").innerHTML += card;
    }
}

function removeproductfromcart(productid) {
    for (let i = 0; i < cartlist.length; i++) {
        if (productid === cartlist[i]) {
            document.getElementById(`cartitem${cartlist[i]}`).remove();
        }
    }
}







