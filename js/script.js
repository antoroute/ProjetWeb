window.addEventListener('scroll',()=>{
    const{scrollTop}=document.documentElement;
    var sticky=document.getElementById("sticky-header");
    if(scrollTop>=220){
        sticky.style.position="fixed";
        sticky.style.top="0px";
    }
    else{
        sticky.style.position="absolute";
        sticky.style.top="220px";
    }
})


