function debugImage() {
    let logo = document.getElementById('logo');

    
    switch (true) {
        case window.innerWidth >= 300 && window.innerWidth < 700:
        logo.src = 'images/logoPhone.png';
    break;
    case window.innerWidth >= 700 && window.innerWidth < 1000:
        logo.src = 'images/logoTablet.png';
    break;
    case window.innerWidth >= 1000 && window.innerWidth < 2048:
        logo.src = 'images/logoDesktop.png';
    break;
    }
}

function loadStars() {
    let item = document.getElementsByClassName(item)
    let num = item.getAttribute(data-stars)
    console.log(item)
    console.log(num)
}

window.addEventListener('load', debugImage)