let menu=document.getElementById("menu");
let pageHead=document.getElementById("page_head");
let pageBody=document.getElementById("page_body");
let topIcon=document.getElementById("top");
function showTop(){
    topIcon.style.display="block";
    menu.classList.add("fixedTop");
}
function hideTop(){
    topIcon.style.display="none";
    menu.classList.remove("fixedTop");
}
console.log(innerHeight);
console.log(innerWidth);

window.addEventListener('scroll', (e)=>{
    // console.log(e);
    if(scrollY>=200)
    {
        showTop();
    }
    else
    {
        hideTop();
    }
})
topIcon.addEventListener("click",(e)=>{
    scrollTo(0,0);
})


