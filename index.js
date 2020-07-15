function openNav() {
    document.getElementById("mySidenav").style.width = "70%" //opens side navbar by 70 percent
    document.getElementById('backdrop').style.display = "block" //displays overlay
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById('backdrop').style.display = "none"
}




const slideIndex = [1, 1, 1, 1, 1, 1]; //
const slideId = ["wedding-slides", "fashion-slides", "landscape-slides", "product-slides", "food-slides", "portrait-slides"]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
showDivs(1, 4);
showDivs(1, 5)

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}




//Animate Smooth Scrolling with jquery

$('#home-link, #home-link-desktop').on('click', function(){
    const home = $('#home').position().top

    $('html, body').animate({
        scrollTop : home
    }, 1000)
})

$('#about-link, #about-link-desktop').on('click', function(){
    const about = $('#about').position().top

    $('html, body').animate({
        scrollTop : about
    }, 1000)
})

$('#works-link, #works-link-desktop').on('click', function(){
    const works = $('#works').position().top

    $('html, body').animate({
        scrollTop : works
    }, 1000)
})

$('#contact-link, #contact-link-desktop').on('click', function(){
    const contact = $('#contact').position().top

    $('html, body').animate({
        scrollTop : contact
    }, 1000)
})