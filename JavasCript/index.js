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



document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.shiftKey && e.key === 'I')) {
    e.preventDefault();
    }
    if (e.key === 'F12') {
    e.preventDefault();
    }
});


// Evita clic derecho
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

    // Evita arrastrar imágenes
    document.addEventListener('dragstart', function (e) {
      e.preventDefault();
    });

    // Bloquea mantener presionado (para móviles)
    document.addEventListener('touchstart', function (e) {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    }, { passive: false });

    // Bloquea atajos de teclado comunes
    document.addEventListener('keydown', function (e) {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i'))
      ) {
        e.preventDefault();
      }
    });
