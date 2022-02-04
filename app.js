const priceRange = document.querySelector('#priceRange');
let price 
priceRange.addEventListener('input', (event) => {
    price = (event.target.value)/10;
    if(price % 10 == 0){
        document.querySelector('.dollars').innerHTML = price + ".00"
    }else{
        document.querySelector('.dollars').innerHTML = price + "0"
    }
})
/* const priceRange = document.querySelector('#priceRange')
const price = document.querySelector('.dollars')
priceRange.oninput = () => {
    price.innerHTML = priceRange.value
} */