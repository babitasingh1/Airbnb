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
  }
}
window.addEventListener("scroll", hidescr);
