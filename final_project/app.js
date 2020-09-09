const BLM = 'https://drive.google.com/uc?id=1hRh2uRHJ5qlpBdnkBs4YrJvLzkKD2O-T'
const rectifier = 'https://drive.google.com/uc?id=11GtLCvkCPeXi8Fjmmv2YP0BZeKWdiBAh'
const ETC ='https://drive.google.com/uc?id=1wOm4wALUDNZkwLJ_plfwX2PpvmuuRBeM'
const LOCDOC = 'https://drive.google.com/uc?id=17CTH7U-LPRLtS2HhZnzi7_DHck4pvM4K'
const images = [BLM, rectifier, ETC, LOCDOC]

let currentImgIndex = 0
const work = document.getElementById('work')
work.setAttribute('src', images[0])

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

console.log((images[3]))
next.addEventListener('click', () => {
        if(currentImgIndex >= images.length - 1){
            currentImgIndex = 0} else 
            {currentImgIndex += 1}
    
work.setAttribute('src', images[currentImgIndex])
})
prev.addEventListener('click', () => {

    console.log('prev works')
    if (currentImgIndex <= 1) {
        currentImgIndex = 3} else {
        currentImgIndex -= 1} 
    
  work.setAttribute('src', images[currentImgIndex])
})
