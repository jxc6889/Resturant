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

}
  