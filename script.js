{
    
    
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
    const menuheader = ["header1", "header2", "header3","header4", "header5", "header6" , "header7" , "header8" , "header9"];
    function showmenu(menu){
        
        console.log(menu);
        for (let i = 1; i < 10; i++) {
            var item = document.getElementById("menu"+i);
            console.log("menu"+i)
            item.style.display = "none";
          }
        
        var show = document.getElementById(menu);
        show.style.display = "block";
        document.getElementById("menuheader").innerHTML = menuheader[Number(menu.charAt(menu.length - 1))-1];
        
        console.log(menu.charAt(menu.length - 1));
        
    }
    
  
    
    const slideshowImages = document.querySelectorAll(".intro .slideshow-img");
    const nextImageDelay = 5000;
    let currentImageCounter = 0;
    console.log("start "+currentImageCounter);
    //slideshowImages[currentImageCounter].style.display = "block";
    slideshowImages[currentImageCounter].style.opacity = 1;
    setInterval(nextImage, nextImageDelay);
    function nextImage(){
      //slideshowImages[currentImageCounter].style.display = "none";
      //slideshowImages[currentImageCounter].style.opacity = 0;
      slideshowImages[currentImageCounter].style.zIndex = -2;
      const tempCounter = currentImageCounter;
      setTimeout(() => {
        slideshowImages[tempCounter].style.opacity = 0;
      }, 1000);
      currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
      //slideshowImages[currentImageCounter].style.display = "block";
      slideshowImages[currentImageCounter].style.opacity = 1;
      slideshowImages[currentImageCounter].style.zIndex = -1;
      

    }
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if(scrolled > 360){
        document.getElementById("border").style.backgroundColor = "#262626";

      }
      else{
        document.getElementById("border").style.backgroundColor = "transparent";
      }
    });
}
  