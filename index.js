import { products } from "./db/products.js";
const productcontainer=document.getElementById("products");
for(let product of products){
    const cardcontainer=document.createElement("div");
    cardcontainer.classList.add("card","card-vetical","d-flex","direction-column","relative","shadow");
    // image container
    const imagecontainer=document.createElement("div");
    imagecontainer.classList.add("card-image-container");
    const image=document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src",product.img)
    image.setAttribute("alt",product.name);
    cardcontainer.appendChild(image);
    // card details container
    const carddetailscontainer=document.createElement("div");
    carddetailscontainer.classList.add("card-details");
    const brandcontainer=document.createElement("div");
    brandcontainer.classList.add("card-title");
    brandcontainer.innerText=product.brand;
    carddetailscontainer.appendChild(brandcontainer);
    // card discription container
    const description =document.createElement("div");
    description.classList.add("card-description");
    const name=document.createElement("p");
    name.classList.add("card-des");
    name.innerText=product.name;
    description.appendChild(name);
    // price 
    const price=document.createElement("p");
    price.classList.add("card-price");
    price.innerText=`Rs. ${product.newPriceprice} `;
    // old price and discount
    const oldPrice=document.createElement("span");
    oldPrice.classList.add("price-strike-through");
    oldPrice.innerText=`Rs. ${product.oldPrice}`;
    price.appendChild(oldPrice);
    // discoutn
    const discount=document.createElement("span");
    discount.classList.add("discount");
    discount.innerText=`${product.discount} % OFF`;
    price.appendChild(discount);
    description.appendChild(price);
    // ratings container
    const Ratings=document.createElement("p");
    Ratings.classList.add("d-flex","align-center");
    //rating
    const rating=document.createElement("span");
    rating.innerText= product.rating;
    Ratings.appendChild(rating);
    //star
    const star=document.createElement("span");
    star.classList.add("material-icons-outlined");
    star.innerText= "star";

    Ratings.appendChild(star);
    description.appendChild(Ratings);
    carddetailscontainer.appendChild(description);
    //cta button container
    const ctabutton= document.createElement("div");
    ctabutton.classList.add("cta-btn");
    const cartbutton=document.createElement("button");
    cartbutton.classList.add("button-btn-primary","btn-icon","cart-btn","d-flex","align-center","justify-center","gap","cursor","btn-margin");
    const cart=document.createElement("span");
    cart.classList.add("material-icons-outlined");
    cart.innerText= "shopping_cart";
    cartbutton.appendChild(cart);
    cartbutton.innerText="Add to cart";
    ctabutton.appendChild(cartbutton);
    carddetailscontainer.appendChild(ctabutton);
    cardcontainer.appendChild(imagecontainer);
    cardcontainer.appendChild(carddetailscontainer);
    
    productcontainer.appendChild(cardcontainer);
}