import { getElement } from '../utils.js';

const cartOverlay = getElement('.cart-overlay');
const closeCartbtn = getElement('.cart-close');
const toggleCartbtn = getElement('.toggle-cart');

toggleCartbtn.addEventListener('click', () =>{
    cartOverlay.classList.add('show');
})


closeCartbtn.addEventListener('click', () =>{
    cartOverlay.classList.remove('show');
})


export const openCart = () => {
    cartOverlay.classList.add('show')
};
