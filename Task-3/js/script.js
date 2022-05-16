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

    

    // else if(e.keyCode==13){
    //     console.log("hi");
    // }


})