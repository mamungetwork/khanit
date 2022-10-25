// Client Review Slider **************
var swiper = new Swiper(".mySwiper", { spaceBetween: 30 });

// FAQ Accordion **************
const faqItem = document.querySelectorAll(".faq_content");

for (const faq of faqItem) {
  faq.addEventListener("click", function () {
    for (item of faqItem) {
      if (item) {
        item.classList.remove("active");
      }
    }
    faq.classList.toggle("active");
  });
}

/* ******************* Navbar Show Hide on Scroll  ******************* */
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});

/* ******************* Responsive Navbar  ******************* */
const burgerMenu = document.querySelector(".burger_menu");
const navBar = document.querySelector(".nav_links");

burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("nav_menu_active");
  burgerMenu.classList.toggle("menu_open");
});
