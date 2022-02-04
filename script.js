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
    const menuheader = ["Rice", "Noodles", "Fried Rice","Lunch Menu", "Appetizers", "Korean BBQ" , "Chef's Choice" , "Casserole" , "Grilled Fish", "Kid's Menu", "Soups and Stews"];
    function showmenu(menu){
        
        console.log(menu);
        for (let i = 1; i < 12; i++) {
          if(i < 10){
            var item = document.getElementById("menu0"+i);
            console.log("menu0"+i)
            item.style.display = "none";
          }
          else{
            var item = document.getElementById("menu"+i);
            console.log("menu"+i)
            item.style.display = "none";
          }
            
          }
          var menu_nunber = menu.substring(menu.length - 2);
          console.log(Number(menu_nunber));
        var show = document.getElementById(menu);
        show.style.display = "block";
        document.getElementById("menuheader").innerHTML = menuheader[Number(menu_nunber)-1];
        
        
        
        if(menu != "menu02"){
          document.getElementById("extra").style.display = "block";
         
          if(menu == "menu04"){
           
            document.getElementById("lunch-time").style.display = "block";
          }
          else{
            document.getElementById("lunch-time").style.display = "none";
          }
         
          if(menu == "menu06"){
            
            document.getElementById("kbbq").style.display = "block";
          }
          else{
            document.getElementById("kbbq").style.display = "none";
          }
          if(menu == "menu10"){
            document.getElementById("kid").style.display = "block";
          }
          else{
            document.getElementById("kid").style.display = "none";
          }
        }
        else{
          document.getElementById("extra").style.display = "none";
        
        }
        
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
      if(scrolled > 400){
        document.getElementById("border").style.backgroundColor = "#262626";

      }
      else{
        document.getElementById("border").style.backgroundColor = "transparent";
      }
    });
}
  