let btn = document.querySelectorAll(".drum");


btn.forEach((ele) => {
  ele.addEventListener('click', (e) => {
      let buttonkey=e.target.innerText;
      makesound(buttonkey);
      addanimation(buttonkey);
  });
});

document.addEventListener('keydown',(e)=>{
    let buttonpress=e.key;
    makesound(buttonpress);
    addanimation(buttonpress);
})


function makesound(key){
  switch (key) {
    case "w":
      let audioele = new Audio("/sounds/crash.mp3");
      audioele.play();
      break;
    case "a":
      let audioele1 = new Audio("/sounds/kick-bass.mp3");
      audioele1.play();
      break;
    case "s":
      let audioele2 = new Audio("/sounds/snare.mp3");
      audioele2.play();
      break;
    case "d":
      let audioele3 = new Audio("/sounds/tom-1.mp3");
      audioele3.play();
      break;
    case "j":
      let audioele4 = new Audio("/sounds/tom-2.mp3");
      audioele4.play();
      break;
    case "k":
      let audioele5 = new Audio("/sounds/tom-3.mp3");
      audioele5.play();
      break;
    case "l":
      let audioele6 = new Audio("/sounds/tom-4.mp3");
      audioele6.play();
      break;
    default:
      break;
  }
}




function addanimation(key){
   let activebutton=document.querySelector('.'+key);

   activebutton.classList.add("pressed");

   setTimeout(function(){
      activebutton.classList.remove("pressed");
   },100)
}


let btn1=document.querySelector(".btn");

btn1.addEventListener('click',toggle);


let flag=true;
function toggle(){
   if(flag){
     document.body.style.backgroundColor="white";
   }
   else{
    document.body.style.backgroundColor="black";
   }
   flag=!flag;
}



