let print=document.getElementById("print");
let numBtn=Array.from(document.getElementsByClassName("num_btn"));
let output='';
let counter=document.getElementById("counter");
let count=0;
for(item of numBtn){
    item.addEventListener('click', (e)=>{
        if(e.target.innerText=='C')
        {
            output= output.substring(0, output.length-1);
        }
        else if(e.target.innerText=='='){
            count++;
            counter.innerHTML=count;
            output=eval(output);
            output=output.toString();
        }
        else{
            output+=e.target.innerText;
            
        }
        if(output.length==0)
        print.innerHTML="Enter the Operations";
        else
        print.innerHTML=output;
        
    })
}

document.addEventListener('keydown',(e)=>{
    c=e.key;
    // console.log(e);
    if(c=="Backspace")
    {
        output= output.substring(0, output.length-1);
    }
    else if(c=="Delete")
    {
        output="";
    }
    else if(c=="Enter" || c=='='){
        count++;
            counter.innerHTML=count;
        output=eval(output);
        output=output.toString();
    }
    else if(e.shiftKey)
    {
        if(c=="(" || c==")" || c=="%" || c=="+" || c=="*")
        output+=c;
    }
    else if((c>="0" && c<="9") || c=="-" || c=="/" || c=="%" || c=="+" || c=="*" || c==".")
    output+=c;
    if(output.length==0)
        print.innerHTML="Enter the Operations";
        else
        print.innerHTML=output;
})

