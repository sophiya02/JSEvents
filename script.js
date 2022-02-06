// const ans=document.getElementById("name-input");
// console.log(ans);
// function verify(){
//     let b= confirm("is the name correct?");
//     if(b)
//     {
//         window.alert("your name is " + ans.value);
//     }
// }

// document.getElementById("n-btn").addEventListener('click', verify);
// const pass=document.getElementById("pass-input");
// const con_pass=document.getElementById("con-pass-input");
// function verifyP(){
    
//     if(pass.value==con_pass.value)
//     {
//         window.alert("correct password");
//     }
//     else
//     {
//         window.alert("incorrect password");
//     }
// }
// document.getElementById("p-btn").addEventListener('click', verifyP);
let sc_calci=document.getElementById("sc_calci");
let form=document.getElementById("form");
let page=document.getElementById("page");
let scBtn=document.getElementById("sc-btn");
let formBtn=document.getElementById("form-btn");
let pageBtn=document.getElementById("page-btn");
function showSc(){
    
    if(sc_calci.style.display==="none")
    {
        scBtn.classList.add("active");
        formBtn.className=formBtn.className.replace("active","");
        pageBtn.className=pageBtn.className.replace("active","");
        page.style.display="none";
        form.style.display="none";
        sc_calci.style.display="block";
    }
    else
    {
        scBtn.className=scBtn.className.replace("active","");
        sc_calci.style.display="none";
    }
}
function showForm(){
    
    if(form.style.display==="none")
    {
        formBtn.classList.add("active");
        scBtn.className=scBtn.className.replace("active","");
        pageBtn.className=pageBtn.className.replace("active","");
        sc_calci.style.display="none";
        page.style.display="none";
        form.style.display="block";
    }
    else
    {
        formBtn.className=formBtn.className.replace("active","");
        form.style.display="none";
    }
}
function showPage(){
   
    if(page.style.display==="none")
    {
        pageBtn.classList.add("active");
        scBtn.className=scBtn.className.replace("active","");
        formBtn.className=formBtn.className.replace("active","");
        sc_calci.style.display="none";
        form.style.display="none";
        page.style.display="block";
        
    }
    else
    {
        pageBtn.className=pageBtn.className.replace("active","");
        page.style.display="none";
    }
}

scBtn.addEventListener("click", showSc);
formBtn.addEventListener("click", showForm);
pageBtn.addEventListener("click", showPage);