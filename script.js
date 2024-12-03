function debugImage() {
    let logo = document.getElementById('logo');

    
    switch (true) {
        case window.innerWidth >= 300 && window.innerWidth < 700:
        logo.src = 'images/logoPhone.png';
    break;
    case window.innerWidth >= 700 && window.innerWidth < 1039:
        logo.src = 'images/logoTablet.png';
        loadItensTablet()
    break;
    case window.innerWidth >= 1040 && window.innerWidth < 2048:
        logo.src = 'images/logoDesktop.png';
        loadItensDesktop()
    break;
    }
}

 let itemData = [
        {price: '$2.00', stars: '12345'},
        {price: '$3.00', stars: '12345'},
        {price: '$4.00', stars: '12345'},
        {price: '$5.00', stars: '12345'}
    ]


function loadItensTablet() {
    let productContainers = document.querySelectorAll('.products-container')

    productContainers.forEach((item, index) => {  
        let box = document.createElement('div')
        box.classList.add('item')
        box.setAttribute('data-price', itemData[index].price || '$1.00')    
        box.setAttribute('data-stars', itemData[index].stars || '0')    
        item.appendChild(box)
            });        
    }   

function loadItensDesktop() {
    let productContainers = document.querySelectorAll('.products-container')

    productContainers.forEach((item, index) => {  
        let box = document.createElement('div')
        box.classList.add('item')
        box.setAttribute('data-price', itemData[index].price || '$1.00')    
        box.setAttribute('data-stars', itemData[index].stars || '0')    
        item.appendChild(box)
            });        
    }   

window.addEventListener('load', debugImage)

