let useScore=0;
let compScore=0;

let msg=document.querySelector('#msg');


const us=document.querySelector("#user-score");
const cs=document.querySelector("#comp-score");

const choices=document.querySelectorAll('.choice');

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})


const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random() *3);
     return options[idx];
}


const playgame =(userchoice)=>{
    const compchoice= genCompchoice();

    if(userchoice === compchoice){
        draw();
    }  
    else{
        let userwin=true;
        if(userchoice ==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice === "paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}


const showwinner=(userwin,u,c)=>{
    if(userwin){
        msg.innerText=`You win! ${u} defeat ${c} `;
        msg.style.backgroundColor="green";
        useScore++;
        us.innerText=useScore;
    }
    else{
        msg.innerText=`You loose! ${c} defeat ${u} `;
        msg.style.backgroundColor="red";
        compScore++;
        cs.innerText=compScore;
    }
}

const draw=()=>{
    msg.innerText="Game Draw!";
    msg.style.backgroundColor=" #808080";
}