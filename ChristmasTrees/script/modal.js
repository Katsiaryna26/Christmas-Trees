const buttonsOrder = document.querySelectorAll('.product__button_order');
const buttonsMore = document.querySelectorAll('.product__button_more');

const overlayOrder = document.querySelector('.overlay_order');
const overlayConsultation = document.querySelector('.overlay_consultation');

const order = overlayOrder.querySelector('.modal__order')

buttonsOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click',()=>{
        overlayOrder.classList.add('overlay_active');

        order.value = buttonOrder.dataset.order;
    })
    
});

buttonsMore.forEach(buttonMore => {
    buttonMore.addEventListener('click',()=>{
        overlayConsultation.classList.add('overlay_active');

        order.value = buttonMore.dataset.order;
    })
    
});


overlayOrder.addEventListener('click', event =>{
    const target = event.target;

    if (target === overlayOrder|| target.closest('.modal__close')){
        overlayOrder.classList.remove('overlay_active');
    }
})

overlayConsultation.addEventListener('click', event =>{
    const target = event.target;

    if (target === overlayConsultation|| target.closest('.modal__close')){
        overlayConsultation.classList.remove('overlay_active');
    }
})