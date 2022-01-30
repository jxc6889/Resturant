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
    function showmenu(menu){
        
        console.log(menu);
        for (let i = 1; i < 10; i++) {
            var item = document.getElementById("menu"+i);
            console.log("menu"+i)
            item.style.display = "none";
          }
        
        var show = document.getElementById(menu);
        show.style.display = "block";
        
    }
    const navToggle = document.querySelector('.nav_toggle');
    navToggle.addEventListener('click',()=>{
        document.body.classList.toggle('nav_open');
    });
}
  