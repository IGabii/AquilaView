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

    // Bloquea mantener presionado solo en la capa de protección
    document.querySelectorAll('.capa-bloqueo').forEach(capa => {
      capa.addEventListener('touchstart', function (e) {
        e.preventDefault();
      }, { passive: false });
    });

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

    
window.onload = function() {
    const contenedor = document.getElementById('contenedor-galeria');
    
    // IMPORTANTE: Esta ruta debe subir 3 niveles para llegar a 'galeria'
    // desde /html/LMGSM/fotosLMGSM/
    const rutaCarpeta = "../../../galeria/viajeRosario-5toAno/";
    const totalFotos = 220;

    if (contenedor) {
        let acumuladorHTML = "";
        for (let i = 1; i <= totalFotos; i++) {
            acumuladorHTML += `
                <div class="foto-item">
                    <a href="${rutaCarpeta}${i}.jpg" data-lightbox="rosario">
                        <div class="capa-proteccion">AquilaView</div>
                        <img src="${rutaCarpeta}${i}.jpg" alt="Foto ${i}" loading="lazy">
                    </a>
                </div>`;
        }
        contenedor.innerHTML = acumuladorHTML;
    }
};