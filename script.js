let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };

    });

}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider",{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

var swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader,3000);
}

window.onload = fadeOut;


   const cartItems = document.getElementById('cart-items');
   const cartTotal = document.getElementById('cart-total');
   const clearCartButton = document.getElementById('clear-cart');
   const cartModal = document.getElementById('cart-modal');
   
  
   const cart = [];
 
  
   function addToCart(name, price) {
       cart.push({ name, price });
       updateCart();
   }
 
  
   function removeFromCart(index) {
       cart.splice(index, 1);
       updateCart();
   }
 
 
   function updateCart() {
       cartItems.innerHTML = '';
       let total = 0;
 
       for (let i = 0; i < cart.length; i++) {
           const item = cart[i];
           const li = document.createElement('li');
           li.textContent = item.name + ' - $' + item.price;
           const removeButton = document.createElement('button');
           removeButton.textContent = 'Remove';
           removeButton.addEventListener('click', () => removeFromCart(i));
           li.appendChild(removeButton);
           cartItems.appendChild(li);
           total += item.price;
       }
 
       cartTotal.textContent = total.toFixed(2);
   }
 

   clearCartButton.addEventListener('click', () => {
       cart.length = 0;
       updateCart();
   });


   function showCart() {
       cartModal.style.display = 'block';
   }

   
   function closeCart() {
       cartModal.style.display = 'none';
   }

 
   window.onclick = function(event) {
       if (event.target == cartModal) {
           closeCart();
       }
   }


