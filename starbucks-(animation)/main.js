let mainText = document.querySelector("h1")

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    //value 400이상이면
    if(value > 400){
        mainText.style.animation="disappear 1s ease-out forwards";
    }
});