let fillForm=document.getElementById("fillForm");
let formBlock=document.getElementById("form");
let formH=document.getElementById("form-h");
let formP=document.getElementById("form-p");
let uname=document.getElementById("name-inp");
let email=document.getElementById("email-inp");
    let pass=document.getElementById("pass-inp");
    let conPass=document.getElementById("con-pass-inp");

let formSub=document.getElementById("form-submit");
let profile= document.getElementById("profile");
let log=false,reg=false,regn=false,regp=false,dislog=false;
let usernameValue="", emailValue="", passValue="", conPassValue="", usernameReg="", passReg="";
// function logreg(){
//     fillForm.reset();
//         if(log==false)
//         {
//             formH.innerText="Register";
//             formP.innerHTML=   `Already Registered? <a>Login Here</a>`;
//             email.style.display="block";
//             conPass.style.display="block";
//             uname.className="";
//                 pass.className="";
//                 conPass.className="";
//                 email.className="";
//             conPass.setAttribute('required');
//             email.setAttribute('required');
//             log=true;
//         }
//         else{

//                 formH.innerText="Login";
//                 formP.innerHTML=`Don't have an account? <a >Register Here</a>`;
//                 uname.className="";
//                 pass.className="";
//                 email.style.display="none";
//                 conPass.removeAttribute('required');
//                 email.removeAttribute('required');
//                 conPass.style.display="none";
//                 log=false;
                

//         }
//     console.log("log: "+log);
// }
formP.addEventListener('click',()=>{
    if(dislog==false)
    logP();
    else regP();
});

function showProfilepage(){
    // console.log(true);
    document.getElementById("name-div").innerHTML=usernameValue;
    document.getElementById("email-div").innerHTML=emailValue;
    profile.style.display="block";
    fillForm.style.display="none";
    formP.style.display="none";
}

uname.addEventListener('input',(e)=>{
    if(reg==false)
    usernameValue=e.target.value;
    else
    usernameReg=e.target.value;
    if(usernameValue.length>=6 || usernameReg.length>=6)
    {
        regn=true;
        uname.classList.remove('fail');
        uname.classList.add('success');
    }
    else if( regn == true && usernameReg.length>=6)
    {
        uname.classList.remove('fail');
        uname.classList.add('success');
    }
    else if(uname.classList.contains('fail')==false)
    {
        uname.classList.remove('success');
        uname.classList.add('fail');
    }
})
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
email.addEventListener('input',(e)=>{
    emailValue=e.target.value;
    if(validateEmail(emailValue))
    {
        email.classList.remove('fail');
        email.classList.add('success');
    }
    else if(email.classList.contains('fail')==false)
    {
        email.classList.remove('success');
        email.classList.add('fail');
    }
})
pass.addEventListener('input',(e)=>{
    if(regp==false)
    {
        passValue=e.target.value;
        console.log(conPassValue);
    }
    else
    passReg=e.target.value;
    if(passValue.length>=6)
    {
        regp=true;
        pass.classList.remove('fail');
        pass.classList.add('success');
    }
    else if(regp==true && passReg.length>=6)
    {
        // regp=true;
        pass.classList.remove('fail');
        pass.classList.add('success');
    }
    else if(pass.classList.contains('fail')==false)
    {
        pass.classList.remove('success');
        pass.classList.add('fail');
    }
})
conPass.addEventListener('input',(e)=>{
    conPassValue=e.target.value;
    console.log(conPassValue);
    if(conPassValue.length>=6 && passValue==conPassValue)
    {
        
        conPass.classList.remove('fail');
        conPass.classList.add('success');
    }
    else if(conPass.classList.contains('fail')==false)
    {
        conPass.classList.remove('success');
        conPass.classList.add('fail');
    }

})
function regP(){
    usernameValue="";
            emailValue="";
            passValue="";
            conPassValue="";
    fillForm.reset();
    formH.innerText="Register";
            formP.innerHTML=   `Already Registered? <a>Login Here</a>`;
            email.style.display="block";
            conPass.style.display="block";
            uname.className="";
                pass.className="";
                conPass.className="";
                email.className="";
            conPass.setAttribute('class','required');
            email.setAttribute('class', 'required');
            dislog=false;
}
function logP(){
    usernameReg="";
             passReg="";
    fillForm.reset();
                formH.innerText="Login";
                formP.innerHTML=`Don't have an account? <a >Register Here</a>`;
                uname.className="";
                pass.className="";
                email.style.display="none";
                conPass.removeAttribute('required');
                email.removeAttribute('required');
                conPass.style.display="none";
                dislog=true;
}
function showInfo(){
    if(reg==false && log==false){
        if(conPass.classList.contains('success')==true && 
            pass.classList.contains('success')==true &&
            email.classList.contains('success')==true &&
            uname.classList.contains('success')==true )
        {
            alert('successfully registered');
            reg=true;
            logP();
        }
        else 
        {
            if(conPass.classList.contains('success')==false)
            alert("password doesn't match");
            if(pass.classList.contains('success')==false)
            alert("Invalid password. Password length must be greater than 6.");
            if(email.classList.contains('success')==false)
            alert("Invalid email. *****@***.***");
            if(uname.classList.contains('success')==false)
            alert("Invalid username. User name must be minimum of 6 characters");
            usernameValue="";
            emailValue="";
            passValue="";
            conPassValue="";
            regP();
        }
    }
    else if(reg==true && log==false)
    {
        if(usernameReg==usernameValue && passReg==passValue)
        {
            alert('successfully logged in');
            log=true;
            showProfilepage();
        }
        else
         {
             alert('wrong username password');
             usernameReg="";
             passReg="";
             logP();
         }
    }
    
}

// formSub.addEventListener('click',(e)=>{
//     e.preventDefault()
//     saveInfo();
// })
fillForm.addEventListener('submit',(e)=>{
    // console.log(e);
    e.preventDefault()
    showInfo();
})
