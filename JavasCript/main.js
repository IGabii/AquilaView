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