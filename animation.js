window.onload = function(){

// MOVING CART
    var cart_icon = document.querySelector('.cart');
    TweenLite.to(cart_icon, 1.5, { ease: Bounce.easeOut, y: "20" });
//Moving MENU
    var menu = document.querySelector('.menu');
    TweenLite.to(menu, 1.5, { ease: Bounce.easeOut, y: "20px" });




// SCROLL ANIMATION
    var arrow = document.querySelector('.arrow-up');
    arrow.onclick = function() {
        TweenLite.to(window, 1, {scrollTo:{y:"#top", offsetY:150}});
      }

    window.addEventListener('scroll', function(){
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            document.querySelector('.arrow-up').style.display = "block";
          } else {
            document.querySelector('.arrow-up').style.display = "none";
          }
    });


// ADD TO CART BUTTON
    var add_to_cart =  document.querySelectorAll('.btn');

    for(const button of add_to_cart) {
        button.addEventListener('click', function(_e) {
            _e.preventDefault();
            console.log(_e.target);
            TweenLite.from(".btn", 2, {backgroundColor: "#25b4b1", ease: Power3.easeIn});
        });
    }



//Banner

    var main_tl = new TimelineMax();

var first = document.querySelectorAll('.first');
    second = document.querySelectorAll('.second');
    court = document.getElementById('court');
    korb = document.getElementById('korb');
    ball = document.getElementById('ball');
    ball2 = document.getElementById('ball2');
    logo = document.querySelector('.last_logo');
    
    
    

    
main_tl.set([korb, first, second,ball,ball2, court, logo], {opacity:0});

main_tl.to(korb, 2 , {opacity:.8});
main_tl.to(".webfirst", 1 , {opacity:1, y:30, ease: Power3.easeOut});
main_tl.to(".websecond", 1 ,{opacity:1, y:50, ease: Power3.easeOut});
main_tl.to(".webfirst, .websecond", 1, {autoAlpha: 0});
main_tl.to(korb, 1, {autoAlpha:0});
main_tl.to(court, 2, {opacity:1});
main_tl.to(".gamefirst", 1 , {opacity:1, y:0, ease: Power3.easeOut});
main_tl.to(".gamesecond", 1 ,{opacity:1, y:50, ease: Power3.easeOut});
main_tl.to(ball, 1, {opacity:1, y:70, ease: Bounce.easeOut});
main_tl.to(ball2, 1, {opacity:1, y:70, ease: Bounce.easeOut});
main_tl.to(ball, 0.4 , {rotation:-360, scale:1});
main_tl.to(ball2, 0.4, {rotation:360, scale:1});
main_tl.to([ball, ball2, ".gamefirst",".gamesecond"], 1, {right:-2000})
main_tl.to(court, 1, {autoAlpha:0});
main_tl.to(logo, 2, {autoAlpha:1, opacity:1});
main_tl.to(logo, 1, {autoAlpha:0});
};


        

    