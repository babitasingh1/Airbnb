const subHeadrDivs = document.querySelectorAll(".subHeaderDivs");
const mainheader = document.querySelector(".mainHeader");
const subHeader = document.querySelector(".subHeader");
const scrollHeader = document.querySelector(".headerOnScroll");
console.log(subHeadrDivs);
function hidescr() {
  if (window.scrollY > 0) {
    subHeader.classList.add("subHeader_hide");
    mainheader.classList.add("mainHeader_hide");

    scrollHeader.classList.add("headerOnScroll_show");
    console.log("hide");
  } else {
    subHeader.classList.remove("subHeader_hide");
    mainheader.classList.remove("mainHeader_hide");

    scrollHeader.classList.remove("headerOnScroll_show");
  }
}
window.addEventListener("scroll", hidescr);
