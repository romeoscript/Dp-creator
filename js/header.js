const barBtn = document.querySelector(".bar-btn");
//console.log(barBtn)
//Listen to click event
barBtn.addEventListener("click", function (e) {
  //target the nav-menu
  const navMenu = document.querySelector(".nav-menu");
  const openDiv = document.querySelector(".floatin__div");
  const openMenu = document.querySelector(".open");
  
  navMenu.classList.add("open");
  e.target.classList.add("close");
  e.target.innerHTML = "&#10006";
  openDiv.classList.add('opendiv')

  //close the nav-menu
  if (openMenu) {
    navMenu.classList.remove("open");
    e.target.innerHTML = "&#9776";
    e.target.classList.remove("close");
	openDiv.classList.remove('opendiv')
  }
});
