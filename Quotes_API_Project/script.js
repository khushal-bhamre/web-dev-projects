
const quotecontent =document.querySelector(".quote");
const authorname =document.querySelector("#authorName");
const btn = document.querySelector("button");

const url="https://api.quotable.io/random";

async function getQuote(){
    btn.classList.add("loading");
    btn.innerText="Loading Quote....";
    const promiseresponse= await fetch(url);
    const response = await promiseresponse.json()
    let quote =response.content;
    quotecontent.innerText = quote;
    let authorvalue =response.author;
    authorname.innerText = authorvalue;
    btn.classList.remove("loading");
    btn.innerText="New Quote";
}

//random-quote
btn.addEventListener('click',()=>{
    getQuote();
})

const copy=document.querySelector(".copy");
const read = document.querySelector(".sound");
const twitter =document.querySelector(".twitter");
 

//speak
function speaking(){
     let utterthis = new SpeechSynthesisUtterance(`${quotecontent.innerText} by ${authorname.innerText}` );
     speechSynthesis.speak(utterthis);
}

read.addEventListener("click",()=>{
    speaking();
});

//copy
const spanbtn=document.querySelector("span");

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(quotecontent.innerText);
    spanbtn.classList.add("copiednext");
    setTimeout(()=>{
    spanbtn.classList.remove("copiednext");
    },1000);
})


twitter.addEventListener('click',()=>{
    let twitterurl = `https://twitter.com/intent/tweet?text= ${quotecontent.innerText}`;
    window.open(twitterurl,"_blank")
})



