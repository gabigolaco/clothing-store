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
        {price: 'R$2.00', stars: '12345'},
        {price: 'R$3.00', stars: '12345'},
        {price: 'R$4.00', stars: '12345'},
        {price: 'R$5.00', stars: '12345'}
    ]


function loadItensTablet() {
    let productContainers = document.querySelectorAll('.products-container')

    productContainers.forEach((item, index) => {  
        let box = document.createElement('div')
        box.classList.add('item')
        box.setAttribute('data-price', itemData[index].price || 'R$1.00')    
        box.setAttribute('data-stars', itemData[index].stars || '0')    
        item.appendChild(box)
            });        
    }   

function loadItensDesktop() {
    let productContainers = document.querySelectorAll('.products-container')

    productContainers.forEach((item, index) => {  
        for (let i = 0; i < 1; i++) {
            let box = document.createElement('div')
            box.classList.add('item')
            box.setAttribute('data-price', itemData[index].price || 'R$1.00')    
            item.appendChild(box)
        }
            });        
    }   

function checkBox() {
let productContainers = document.querySelectorAll('.products-container');
let width = window.innerWidth;
        
    productContainers.forEach((item, index) => {
    if (width < 700 && item.children.length > 3) {
        item.children[item.children.length - 1].remove();
    }
    
    if (width < 1039 && item.children.length > 4) {
    item.children[item.children.length - 1].remove();
    }
    
    if (width > 1039 && item.children.length < 4) {
    for (let i = 0; i < 1; i++) {
    let box = document.createElement('div');
    box.classList.add('item');
    box.setAttribute('data-price', itemData[index].price || 'R$1.00');
    item.appendChild(box);
}
    }

    if (width > 1039 && item.children.length === 3) {
    let box = document.createElement('div');
    box.classList.add('item');
    box.setAttribute('data-price', itemData[index].price || 'R$1.00');
    item.appendChild(box);
    }
    });
        }
    

window.addEventListener('resize', checkBox);
window.addEventListener('load', debugImage);
window.addEventListener('load', loadStars)

