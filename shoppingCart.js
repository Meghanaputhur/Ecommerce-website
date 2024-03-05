let productsInCart = [];            /*nummber of products present in the card*/
const parentElement = document.querySelector("#buyItems");       /*items in the list*/
const cartSumPrice = document.querySelector("#sum-prices");                      //rate of products in the list
const products = document.querySelectorAll('#product-under');               

const updateShoppingCartHTML = function(){
    if(productsInCart.length > 0){

    }
    else{
        document.querySelector('.checkout').classList.add('hidden');
        parentElement.innerHTML
    }
}

function  updateProductsInCart(product){
    for(let i=0; i < productsInCart.length; i++){
        if(productsInCart[i].id == product.id){
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);

}



products.forEach(product => {                                     //for each and every product
    product.addEventListener('click', (e) => {                    //adding event
        if( e.target.idList.contains('addToCart')){    
            const productId = e.target.dataset.productId;
            const productName  =  product.querySelector('.productName').innerHTML;
            const productPrice = product.querySelector('productPrice').innerHTML;
            const productImage = product.querySelector('img').src;
            let productToCart = {
                name : productName,
                image : productImage,
                id : productId,
                count : 1,
                price :  +productPrice,
                basePrice : +productPrice
            }
            updateProductsInCart(productToCard);
            updateShoppingCartHTML();
        }
    });
});