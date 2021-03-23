const open_btn = document.getElementById('open_btn');
const clost_btn = document.getElementById('close_btn');
open_btn.onclick = function(){

    document.querySelector(".modal_content").classList.add("show_modal");
    document.body.style.backgroundImage = "linear-gradient( 115deg,rgba(58, 58, 158, 0.8), rgba(136, 136, 206, 0.7)),  url('./images/hero.jpeg')";
}
clost_btn.onclick=function(){
    document.querySelector(".modal_content").classList.remove("show_modal");
    document.body.style.backgroundImage = "url('./images/hero.jpeg')";
}