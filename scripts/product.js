
//-------------quantity counter function--------------------------------
let dec = document.getElementById("dec");
let inc = document.getElementById("inc");

let i = 1;
document.getElementById("count-num").innerText = i;

let decreaseFunc = () => {
  let count = document.getElementById("count-num").innerText;
  let i = count;
  if (count > 1 && count !== "1") {
    i--;
    document.getElementById("count-num").innerText = i;
  }
};
let increaseFunc = () => {
  let count = document.getElementById("count-num").innerText;
  let i = count;
  if (count >= 1) {
    i++;
    document.getElementById("count-num").innerText = i;
  }
};

//--------------inc/dec function invoke-----------------------------------
dec.addEventListener("click", decreaseFunc);
inc.addEventListener("click", increaseFunc);

//---------------product details append on html--------------------------------
let appendProductDetails = (data) => {
  if (!data) return;

  let prod_main_img = document.getElementById("main-img");
  prod_main_img.src = data.image;

  let prod_second_img = document.getElementById("second-img");
  prod_second_img.src = data.image2;

  let prod_third_img = document.getElementById("third-img");
  prod_third_img.src = data.image3;

  let prod_title = document.getElementById("product-title");
  prod_title.innerText = data.title;

  let prod_price = document.getElementById("price");
  prod_price.innerText = `$${data.dolar.toFixed(2)}`;
};

//-----------append function invoke-----------------------------------------------
let product_details = JSON.parse(localStorage.getItem("productDetails")) || null;
appendProductDetails(product_details);


//----------------add to cart function--------------------------------------------
let arr =JSON.parse(localStorage.getItem("cartItem")) || []
function AddCart(){
  arr.push(product_details)
  localStorage.setItem("cartItem", JSON.stringify(arr));
  alert("Added to Cart")
  let cont = document.getElementById("Show");
  cont.innerText = "";
  let btn1 = document.createElement("button");
  btn1.innerText = "View my cart";
  btn1.addEventListener("click", function ViewCart(){
    window.location.href = "Cart.html"
  })


  let btn2 = document.createElement("button");
  btn2.innerText = "Continue Shopping";
  btn2.addEventListener("click", function Continue(){
    window.location.href = "index.html"
  })

  cont.append(btn1, btn2)
}
function BuyNow(){
  window.location.href = "checkout.html"
}

//-------------redirect to cart------------------------------------------------------
let redirect_to_cart = document.getElementById("wishlist");
redirect_to_cart.addEventListener("click", (e) => {
  window.location.href = "cart.html";
});
