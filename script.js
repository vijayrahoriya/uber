const dropdown = document.querySelector('nav .dropdown'),
    dropdownList = document.querySelector('nav .dropdown ul'),
    dropdownIcon = document.querySelector('nav .dropdown i'),
    langEl = document.querySelectorAll('header .lang'),
    langModal = document.querySelector('header .lang-modal'),
    modalClose = document.querySelector('.lang-modal .close'),
    langs = document.querySelectorAll('.lang-modal .langs div'),
    dropdownOptions = document.querySelectorAll('.dropdown ul li'),
    productsDropdown = document.querySelector('nav li.products'),
    products = document.querySelector('nav li.products ul'),
    mobileShowIcon = document.querySelector('nav .right span i'),
    mobileEl = document.querySelector('.mobile'),
mobileDropdown = document.querySelector('.mobile .dropdown'),
mbileMenu = document.querySelector('.mobile .dropdown ul'),
mobileIcon = document.querySelector('.mobile .dropdown i'),
mobileProducts = document.querySelector('.mobile .products'),
productsMenu = document.querySelector('.mobile .products ul');


const showDropdown = (dropdownList, dropdownIcon) => {
    console.log(dropdownList, dropdownIcon)
    dropdownList.classList.toggle('active')
    dropdownIcon.classList.contains('fa-chevron-down') ? dropdownIcon.classList.replace('fa-chevron-down', 'fa-chevron-up') : dropdownIcon.classList.replace('fa-chevron-up', 'fa-chevron-down')
}

document.body.addEventListener('click', (e) => {
    if (dropdown.contains(e.target)) {
        showDropdown(dropdownList, dropdownIcon);
    } else {
        dropdownList.classList.remove('active')
        dropdownIcon.classList.replace('fa-chevron-up', 'fa-chevron-down')
    }
})

//mobile screen
document.body.addEventListener('click', (e) => {
    if (mobileDropdown.contains(e.target)) {
        mbileMenu.classList.toggle('active')
        mobileIcon.classList.contains('fa-chevron-down') ? dropdownIcon.classList.replace('fa-chevron-down', 'fa-chevron-up') : mobileIcon.classList.replace('fa-chevron-up', 'fa-chevron-down')
    }
})

mobileShowIcon.addEventListener('click',(e)=>{
    if(mobileShowIcon.classList.contains('fa-bars')){
        mobileEl.classList.add('active')
        mobileShowIcon.classList.replace('fa-bars', 'fa-times')
        document.body.style.overflow = 'hidden'
    }else{
        productsMenu.classList.remove('active')
        mobileEl.classList.remove('active')
        mobileShowIcon.classList.replace('fa-times', 'fa-bars')
        document.body.style.overflow = 'auto'
    }
})

mobileProducts.addEventListener('click', ()=>{
    productsMenu.classList.add('active')
})

document.body.addEventListener('click', (e) => {
    if (productsDropdown.contains(e.target)) {
        products.classList.toggle('active')
    } else {
        products.classList.remove('active')
    }
})


dropdownOptions.forEach(li => {
    li.addEventListener('click', (e) => {
        dropdown.querySelector('span').innerHTML = e.target.innerText
    })
})


langEl.forEach(lang=> {
    lang.addEventListener('click', () => {
        langModal.classList.add('active')
        document.body.style.overflow = 'hidden'
        mobileEl.style.zIndex = -1
    })
    
})

modalClose.addEventListener('click', () => {
    mobileEl.style.zIndex = 999
    mobileEl.classList.remove('active')
    mobileShowIcon.classList.replace('fa-times','fa-bars')
    langModal.classList.remove('active')
    document.body.style.overflow = 'auto'
})

langs.forEach(lang => {
    lang.addEventListener('click', (e) => {
        lang.parentElement.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        langEl.innerHTML = `<i class="fa-solid fa-globe"></i>
        ${e.target.innerText}`
    })
})

//home script
const infoBoxes = document.querySelectorAll('.home .info-box'),
    line = document.querySelector('.line'),
    homeBoxes = document.querySelectorAll('.home .home-box'),
    homeContainer = document.querySelector('.home');

let left = 0;
infoBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (index == 0) {
            line.style.left = `${10}%`
            homeBoxes[0].classList.remove('hide')
            homeBoxes[1].classList.add('hide')
            homeBoxes[2].classList.add('hide')
            homeContainer.classList.remove('second')
            homeContainer.classList.remove('third')

        } else if (index == 1) {
            line.style.left = `${40}%`
            homeBoxes[0].classList.add('hide')
            homeBoxes[1].classList.remove('hide')
            homeBoxes[2].classList.add('hide')
            homeContainer.classList.add('second')
            homeContainer.classList.remove('third')
        } else {
            line.style.left = `${70}%`
            homeBoxes[0].classList.add('hide')
            homeBoxes[1].classList.add('hide')
            homeBoxes[2].classList.remove('hide')
            homeContainer.classList.remove('second')
            homeContainer.classList.add('third')
        }
    })
})
