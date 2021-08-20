console.log("wlcm");
let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
let scrollTop=document.querySelector('.scroll-top')

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});
window.onscroll = ()=> {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')

    if(window.scrollY > 150){
      header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }


}

