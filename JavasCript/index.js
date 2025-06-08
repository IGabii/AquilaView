const menu = document.getElementById('menu')
        menu.addEventListener('click', () => {
        menu.classList.toggle('menu-activo');
        })

//================================================================//

const images = document.querySelectorAll(' .img ');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const claseModal = document.querySelector('.bx.bx-x')

images.forEach(image =>{
    image.addEventListener('click',()=>{
        addImage(image.getAttribute('src'),image.getAttribute('alt'));
    })
})

const addImage = (srcImage, altImage)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage ;
}

claseModal.addEventListener('click',()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
})





/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle','nav-menu')