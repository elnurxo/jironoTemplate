$(function () {
  // AOS Plugin
  AOS.init({
    duration: 800,
    offset: 300,
    delay: 0,
  });
  // Counter Plugin
  $(".num").counterUp({delay:10,time:1000})
  // Hamburger Click
  $("#hamburgerclick").click(function () {
    if ($("#midline").width() == "30") {
      $("#topline").css({
        transform: "rotate(45deg)",
        width: "31px",
        transition: ".3s linear",
      });
      $("#midline").css({
        opacity: "0",
        width: "0px",
        transition: ".3s linear",
      });
      $("#bottomline").css({
        transform: "rotate(-45deg)",
        width: "31px",
        transition: ".3s linear",
      });
      addNavbarAccordion();
    } else {
      $("#topline").css({ transform: "rotate(0)", width: "21px" });
      $("#midline").css({ opacity: "1", width: "30px" });
      $("#bottomline").css({ transform: "rotate(0)", width: "21px" });
      removeNavbarAccordion();
    }
  });

  function addNavbarAccordion() {
    $(".dropdownnav").css({ height: "200px", transition: ".3s linear" });
  }

  function removeNavbarAccordion() {
    $(".dropdownnav").css({ height: "0px", transition: ".3s linear" });
  }
  //NAVBAR SCROLL
  $(document).scroll(function () {
    if ($(window).width() > 992) {
      if (window.scrollY < 60) {
        $(".myNavbar").css({
          height: "77px",
          "background-color": "transparent",
          "box-shadow": "0",
          transition: ".3s",
        });
        $(".logo").css({ height: "100px", transition: ".3s" });
        $(".links").css({ "line-height": "100px", transition: ".3s" });
        $(".buttons").css({ "line-height": "100px", transition: ".3s" });
        $(".myNavbar").css("box-shadow", "none");
      } else {
        $(".myNavbar").css({
          height: "77px",
          "background-color": "#fff",
          "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          transition: ".3s",
        });
        $(".logo").css({ height: "77px", transition: ".3s" });
        $(".links").css({ "line-height": "77px", transition: ".3s" });
        $(".buttons").css({ "line-height": "77px", transition: ".3s" });
      }
    }
  });
});
//SELECT PRICE TABLE
let selectplan = document.querySelectorAll(".selectplan");
selectplan.forEach((ev) => {
  ev.addEventListener("click", function (e) {
    e.preventDefault();
    let selected = this.closest(".pricingtable");
    selectplan.forEach((element) => {
      let selectedid = e.target.closest(".pricingtable").getAttribute("id");
      let othersid = element.closest(".pricingtable").getAttribute("id");
      if (othersid !== selectedid) {
        element.closest(".pricingtable").classList.remove("selectedprice");
      }
      selected.classList.add("selectedprice");
    });
  });
});
// LOADER
window.addEventListener("DOMContentLoaded", () => {
  $("#loadingwrapper").css({
    display: "block",
    visibility: "visible",
    opacity: "1",
  });
  setTimeout(removeLoader, 777);
});
function removeLoader() {
  $("#loadingwrapper").fadeOut(500, function () {
    $("#loadingwrapper").remove();
  });
}


