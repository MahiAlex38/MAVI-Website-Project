//WOW
$(function(){
  new WOW().init();
})
//NAVBAR BG
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
//HOME OWL CAROUSEL
$(function(){
  $('#content-display').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 300,
    loop: true,
    nav: true,
    dots:false,
    autoplayHoverPause: true,
    responsive:{
      0:   { items: 1 },
      480: { items: 1 },
      768: { items: 1 },
      1020: {items:1}
    }
  });
});
//team

$(function(){
  $('#team-members').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 300,
    loop: true,
    autoplayHoverPause: true,
    
  });
});
//status
$(function(){
  $('.counter').counterUp({
        delay:10,
        time:2500
  })

})