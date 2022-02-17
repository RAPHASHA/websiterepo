window.onscroll = function(){navfunction()};

var navibar = document.getElementById("navig");

var sticky = navibar.offsetTop;

function navfunction(){
    if(window.pageYOffset >= sticky){
        navibar.classList.add("sticky")
    }else{
        navibar.classList.remove("stcky");  
    }
}