let circle = document.querySelector('.circle');
let left=0;
let topPosition = 0;
window.addEventListener('keydown',function(e){
    if(e.keyCode==39){
        left+=2;
        circle.style.left = left + 'px';

        if(left>window.screen.width){
            left = 0;
            circle.style.left = left + 'px';
        }
    }
    else if(e.keyCode==37){
        left-=2;
        circle.style.left = left + 'px';

        if(left<-50){
            left = window.screen.width;
            circle.style.left = left + 'px';
        }
    }

    else if(e.keyCode==40){
        topPosition+=2;
        circle.style.top = topPosition + 'px';
    }

    else if(e.keyCode==38){
        topPosition-=2;
        circle.style.top = topPosition + 'px';

        if(topPosition<-50){
            topPosition = window.screen.height;
            circle.style.top = topPosition + 'px';
        }
    }

    

    window.addEventListener("keydown" , function(e){
        if(e.key=="Enter"){
            var leftMini =circle.style.left.slice(0,circle.style.left.length-2)
            let topMini = circle.style.top.slice(0,circle.style.top.length-2)
            const newDiv= document.createElement("div");
            var container= document.querySelector(".container");
            newDiv.classList.add("small-circle");
            newDiv.style.left=Number(leftMini) + 50 + "px";
            newDiv.style.top=Number(topMini) + 50 +"px";
            circle.style.width=circle.style.width.slice(0,circle.style.width.length-2)-15 + "px";
            circle.style.height=circle.style.height.slice(0,circle.style.height.length-2)-15 + "px";
            console.log(circle.style.width)
            mainbox.append(newDiv)
        }
    })


})