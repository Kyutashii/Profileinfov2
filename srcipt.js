$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");  
    });

    // owl carouse1 script
    $('.carouse1').owlcarouse1({

    });
});

// typing animation script
var teped = new Typed(".typing", {
    Strings: ["Developer", "Designer", "Freelanacer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: ture
});