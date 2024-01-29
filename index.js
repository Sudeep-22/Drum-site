    var audio1=new Audio("sounds/tom-1.mp3");
    var audio2=new Audio("sounds/tom-2.mp3");
    var audio3=new Audio("sounds/tom-3.mp3");
    var audio4=new Audio("sounds/tom-4.mp3");
    var audio5=new Audio("sounds/snare.mp3");
    var audio6=new Audio("sounds/kick-bass.mp3");
    var audio7=new Audio("sounds/crash.mp3");

    for(var i=0;i<7;i++){
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            var words=this.innerHTML;
            handleClick(words);
        });
    }
        document.addEventListener("keydown",function(event){
            var word=event.key;
            handleClick(word);});
    
    // document.querySelectorAll("button")[0].addEventListener("click",handleClick1);
    // document.querySelectorAll("button")[1].addEventListener("click",handleClick2);
    // document.querySelectorAll("button")[2].addEventListener("click",handleClick3);
    // document.querySelectorAll("button")[3].addEventListener("click",handleClick4);
    // document.querySelectorAll("button")[4].addEventListener("click",handleClick5);
    // document.querySelectorAll("button")[5].addEventListener("click",handleClick6);
    // document.querySelectorAll("button")[6].addEventListener("click",handleClick7);

    function handleClick(text){
        switch(text){
            case "w":
                audio1.play();
            break;
            case "a":
                audio2.play();
            break;
            case "s":
                audio3.play();
            break;
            case "d":
                audio4.play();
            break;
            case "j":
                audio5.play();
            break;
            case "k":
                audio6.play();
            break;
            case "l":
                audio7.play();
            break;
            default:
                alert("Wrong input");
            break;
        }
    }

// function handleClick1(){
//     audio1.play();
// }
// function handleClick2(){
//     audio2.play();
// }
// function handleClick3(){
//     audio3.play();
// }
// function handleClick4(){
//     audio4.play();
// }
// function handleClick5(){
//     audio5.play();
// }
// function handleClick6(){
//     audio6.play();
// }
// function handleClick7(){
//     audio7.play();
// }