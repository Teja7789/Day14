document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".main-menu").classList.toggle("show")
  );
  $(document).ready(function(){
    // Activate the Carousel, but pause it from the start
    $("#myCarousel").carousel("pause");
          
    // Click on the button to start sliding 
    $("#myBtn").click(function(){
      $("#myCarousel").carousel("cycle");
    });
  
    // Click on the button to stop sliding 
    $("#myBtn2").click(function(){
      $("#myCarousel").carousel("pause");
    });
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
      
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#myCarousel").carousel("next");
    });
  });
function name(params) {}