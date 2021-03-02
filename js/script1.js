const gallary = document.querySelectorAll('.gallary');
const thumbs = document.querySelectorAll('.thumbs');
let  imgs = document.images;

let zoom;

imgs[0].addEventListener('load',()=>{

    for (let i = 0; i < thumbs.length; i++){
        const imgs = thumbs[i].children;
        let button;
        let ul = document.createElement('ul');
        gallary[i].append(ul);

        for (let j = 0; j < imgs.length; j++) {
            button = document.createElement('li');
            button.addEventListener('click', buttonClick.bind(null, j))
            button.addEventListener('mouseover', buttonOver.bind(null, j))
            button.addEventListener('mouseout', buttonOut)
            ul.append(button);
        }
        const buttons = document.querySelectorAll(`.gallary:nth-child(${i+1})>ul>li`);
        
        let imgW;
        let imgMR;
        let imgML;
        let imgWF = new Array(imgs.length);

        for (let j = 0; j < imgs.length; j++) {
            imgW = imgs[j].getBoundingClientRect().width;
            imgMR = parseInt(getComputedStyle(imgs[j]).marginRight);
            imgML = parseInt(getComputedStyle(imgs[j]).marginLeft);
            imgWF[j] = imgW + imgMR + imgML;
        }
    
         function buttonClick(j){ 
            let pos = -imgWF[j] * j;
            thumbs[i].style.left = pos + 'px';
        }

        function buttonOver(j){ 
            zoom = document.createElement('div');
            console.log(this)
            zoom.className = 'zoom';
            zoom.style.backgroundImage = `url(${imgs[j].src})`;
            buttons[j].append(zoom);
        }

        function buttonOut(){ 
            zoom.remove();
        }
    }
})