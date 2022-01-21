const subHeadrDivs = document.querySelectorAll(".subHeader-Divisions");
const mainheader = document.querySelector(".mainHeader");
const subHeader = document.querySelector(".subHeader");
const scrollHeader = document.querySelector(".headerOnScroll");
const globeIcon = document.querySelector(".fa-globe");
const siteName = document.querySelector(".mainHeader-divisions-1__name");
const siteIcon = document.querySelector(".fa-airbnb");
const rightCornerHeadings = document.querySelector(
  ".mainHeader-divisions-3__headings"
);
console.log(subHeadrDivs);
function hidescr() {
  if (window.scrollY > 0) {
    // subHeader.classList.add("subHeader_hide");
    // mainheader.classList.add("mainHeader_hide");
    rightCornerHeadings.classList.add("changeColorToBlack");
    globeIcon.classList.add("changeColorToBlack");
    siteName.classList.add("changeColorToPink");
    siteIcon.classList.add("changeColorToPink");
    mainheader.classList.add("changeBackground");
    subHeader.classList.add("changeWidth");
    subHeadrDivs.forEach((div) => div.classList.add("mainHeader_hide"));

    //scrollHeader.classList.add("headerOnScroll_show");
  } else {
    // subHeader.classList.remove("subHeader_hide");
    // mainheader.classList.remove("mainHeader_hide");

    // scrollHeader.classList.remove("headerOnScroll_show");
    rightCornerHeadings.classList.remove("changeColorToBlack");
    globeIcon.classList.remove("changeColorToBlack");
    siteName.classList.remove("changeColorToPink");
    siteIcon.classList.remove("changeColorToPink");
    mainheader.classList.remove("changeBackground");
    subHeader.classList.remove("changeWidth");

    subHeadrDivs.forEach((div) => div.classList.remove("mainHeader_hide"));
  }
}
window.addEventListener("scroll", hidescr);
