


document.addEventListener('DOMContentLoaded',function(){
    console.log("i am loaded");
    const taskinput = document.getElementById('taskinput')
    const addtaskbtn = document.getElementById('addtaskbtn')
    const tasklist =document.getElementById('tasklist')

    function handleinput(tasktext){
        
        if(tasktext != ''){
            const liele=document.createElement('li');
            liele.textContent = tasktext;
            
            liele.innerHTML += '<button class="deletebtn" >❌</button>'
            tasklist.appendChild(liele);
            taskinput.value="";
    
            tasklist.addEventListener('click',(event)=>{
                   if(event.target.classList.contains("deletebtn")){
                      event.target.parentNode.remove();
                   }
            })
        }
        else{
            alert("Add task");
        }
    }

    addtaskbtn.addEventListener('click',()=>{
        const tasktext = taskinput.value.trim();
         handleinput(tasktext);
    })

    document.addEventListener('keydown',(event)=>{
        const btnpress=event.key; 
        const tasktext = taskinput.value.trim();
        if(event.key==="Enter"){
           handleinput(tasktext);
        }
    }) 


})


