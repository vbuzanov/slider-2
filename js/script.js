const gallary = document.querySelector('.gallary');
const window1 = document.querySelector('.window');
const thumbs = document.getElementById('thumbs');
const imgs = thumbs.children;
const buttons = document.querySelectorAll('.gallary>ul>li');
let zoom;

imgs[0].addEventListener('load',()=>{
    let imgW;
    let imgMR;
    let imgML;
    let imgWF = new Array(imgs.length);

    for (let i = 0; i < imgs.length; i++){
        imgW = imgs[i].getBoundingClientRect().width;
        imgMR = parseInt(getComputedStyle(imgs[i]).marginRight);
        imgML = parseInt(getComputedStyle(imgs[i]).marginLeft);
        imgWF[i] = imgW + imgMR + imgML;
    }
  
    let pos = 0;

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', ()=>{
             
            pos = 0;
            
            for (let j = 0; j < i; j++){
                pos -= imgWF[j];
            }
        
            thumbs.style.left = pos + 'px';
         })
 
         buttons[i].addEventListener('mouseover', ()=>{
            zoom = document.createElement('div');
            zoom.className = 'zoom';
            zoom.style.backgroundImage = `url(${imgs[i].src})`;
            buttons[i].append(zoom);
        })
        buttons[i].addEventListener('mouseout', ()=>{
            zoom.remove();
        })
    }
})







































// let small = document.images[0];
// let smallW = small.getBoundingClientRect().width
// let smallH = small.getBoundingClientRect().height
// let bigSrc = small.dataset.big;
// let zoom;
// small.addEventListener('mouseover', ()=>{
//     zoom = document.createElement('div')
//     zoom.className = 'zoom'
//     zoom.style.backgroundImage = `url(${bigSrc})`
//     small.after(zoom)
// })
// small.addEventListener('mouseout', ()=>{
//     zoom.remove()
// })

// small.addEventListener('mousemove', (event)=>{
//     let x = event.offsetX*100/smallW
//     let y = event.offsetY*100/smallH
//     zoom.style.backgroundPosition = `${x}% ${y}%`
// })
























/* 





let slider = document.querySelector('.slider')
let window1 = document.querySelector('.window')
let thumbs = document.getElementById('thumbs')
let imgs = thumbs.children;
let buttons = document.querySelectorAll('.slider>span')

imgs[0].addEventListener('load',()=>{
    let imgW 
    let imgMR
    let imgML
    let imgWF = new Array(imgs.length)

    for (let i = 0; i < imgs.length; i++) {
        imgW = imgs[i].getBoundingClientRect().width
        imgMR = parseInt(getComputedStyle(imgs[i]).marginRight)
        imgML = parseInt(getComputedStyle(imgs[i]).marginLeft)
        imgWF[i] = imgW + imgMR + imgML
    }
 
    let imgsLength = imgs.length
    let pos = 0
    let count = 0
    buttons[count].style.color = 'rgb(212, 206, 206)';
    let interval = setInterval(moveImg, 3000);
    function moveImg(){
        buttons[count].style.color = 'gray';
        count++;
        pos -= imgWF[count]
        if(count>=imgsLength){
            count = 0
            pos = 0
            thumbs.style.left = 0 + 'px'
            buttons[count].style.color = 'rgb(212, 206, 206)';
        }
        thumbs.style.left = pos + 'px'
        buttons[count].style.color = 'rgb(212, 206, 206)';
    }

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('mouseover', ()=>{
            imgs[i].style.transform = 'scale(1.1)';
            clearInterval(interval);
        })
        
        imgs[i].addEventListener('mouseout', ()=>{
            imgs[i].style.transform = '';
            interval = setInterval(moveImg, 3000);
        })
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', ()=>{
            clearInterval(interval);
            buttons[count].style.color = 'gray';
            count = i;
            pos = 0
            
            for (let j = 0; j < i; j++) {
                pos -= imgWF[j];
            }
        
            thumbs.style.left = pos + 'px'
            buttons[count].style.color = 'rgb(212, 206, 206)';
            interval = setInterval(moveImg, 3000);
        })
    }
})







let small = document.images[0];
let smallW = small.getBoundingClientRect().width
let smallH = small.getBoundingClientRect().height
let bigSrc = small.dataset.big;
let zoom;
small.addEventListener('mouseover', ()=>{
    zoom = document.createElement('div')
    zoom.className = 'zoom'
    zoom.style.backgroundImage = `url(${bigSrc})`
    small.after(zoom)
})
small.addEventListener('mouseout', ()=>{
    zoom.remove()
})

small.addEventListener('mousemove', (event)=>{
    let x = event.offsetX*100/smallW
    let y = event.offsetY*100/smallH
    zoom.style.backgroundPosition = `${x}% ${y}%`
}) */