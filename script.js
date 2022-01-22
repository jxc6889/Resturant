{
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("navbar--hidden");
      } else {
        nav.classList.remove("navbar--hidden");
      }
  
      lastScrollY = window.scrollY;
    });

    var menuList = document.getElementById("menuList");
    
    function togglemenu(){
        if(menuList.style.display == "none"){
            menuList.style.display = "block";
            menuList.style.marginTop = "100px";
          
        }
        else{
            menuList.style.display = "none";
            menuList.style.margin = "0px";
            menuList.style.marginTop = "100px";
        }
    }
}
  