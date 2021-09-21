let cartcount = localStorage.getItem("cartcount");
const cartvalue = document.getElementById("cartcount");
let product = {
    id:null,
    name: null,
    price: null,
    description: null,
    photo: null
}


window.onload = function () {
    //localStorage.clear()

    setcartvalue()
    showproductincart()
   

    for (let i = 1; i <= cartcount; i++) {
        if (localStorage.getItem(`product${i}`)) {
            document.getElementById(`prodaddcart${i}`).style.display = "none"
            document.getElementById(`prodremovecart${i}`).style.display = "block"
        }
    }
}


function addtocart(productid) {
    cartcount++;
    document.getElementById(`prodaddcart${productid}`).style.display = "none"
    document.getElementById(`prodremovecart${productid}`).style.display = "block"
    localStorage.setItem("cartcount", cartcount);
    setcartvalue();
    console.log(cartcount);
    addproducttocart(productid)
    showproductincart()

}

function removefromcart(productid) {
    cartcount--;
    document.getElementById(`prodaddcart${productid}`).style.display = "block"
    document.getElementById(`prodremovecart${productid}`).style.display = "none"
    localStorage.setItem("cartcount", cartcount);
    setcartvalue();
    console.log(cartcount);
    localStorage.removeItem(`product${productid}`);
    showproductincart()
}

function addproducttocart(productid) {
    product.id = productid;
    product.name = document.getElementById(`prodhead${productid}`).innerText;
    product.price = document.getElementById(`prodprice${productid}`).innerText;
    product.photo = document.getElementById(`prodimg${productid}`).src;
    product.description = document.getElementById(`proddescrption${productid}`).innerText;
    localStorage.setItem(`product${productid}`, JSON.stringify(product))
}

function setcartvalue() {
    if (localStorage.getItem("cartcount")) {
        cartvalue.innerText = localStorage.getItem("cartcount");
        console.log(cartcount);
    } else {
        cartvalue.innerText = 0;
    }
}

function showproductincart() {
    for (let i = 1; i <= 6; i++) {
        if (JSON.parse(localStorage.getItem(`product${i}`))) {
            if(document.getElementById(`cartitem${i}`)){
                continue;
            }
            let cartproduct = JSON.parse(localStorage.getItem(`product${i}`));
            let card = `    <div class="card"  id="cartitem${1}">
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
        } else {

            continue;
        }
    }


}




