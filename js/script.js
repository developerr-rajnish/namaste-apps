// hamburger toggle   
$(".hamburger").click(function () { 
  $(".navbar").toggleClass("active");  
  $(".line-1").toggleClass("rotate-line-1");
  $(".line-3").toggleClass("rotate-line-2");
  $(".line-2").toggleClass("remove-line-3");
  check();
}); 

// click body to hide      
$("#main_sec").click(function(){           
  $(".navbar").removeClass("active");     
});

$("#mybox").click(function(){             
  $(".navbar").removeClass("active");
});
$(".setting-box").click(function(){                          
  $(".navbar").removeClass("active");  
});
  
$(".myform2").click(function(){                                                  
  $(".navbar").removeClass("active");  
});



// slide navbar
function check() {
  let nav = document.querySelector(".navbar");
  if (!nav.classList.contains("active")) {
    nav.classList.add("close");
  } else {
    nav.classList.add("open");
    nav.classList.remove("close");
  }
}

// add remove class navbar
$(document).ready(function () {
  $(".nav-item1").click(function () {
    $(".nav-link1").addClass("navbar_active");
    $(".nav-link2").removeClass("navbar_active");
    $(".nav-link3").removeClass("navbar_active");
    $(".nav-link4").removeClass("navbar_active");
    $(".nav-link5").removeClass("navbar_active");
    $(".nav-link6").removeClass("navbar_active");
    $(".nav-link7").removeClass("navbar_active");
    $(".nav-link8").removeClass("navbar_active");
    $(".nav-link9").removeClass("navbar_active");   
  });

  $(".nav-item2").click(function () {
    $(".nav-link1").removeClass("navbar_active");
    $(".nav-link2").addClass("navbar_active");
    $(".nav-link3").removeClass("navbar_active");
    $(".nav-link4").removeClass("navbar_active");
    $(".nav-link5").removeClass("navbar_active");
    $(".nav-link6").removeClass("navbar_active");
    $(".nav-link7").removeClass("navbar_active");
    $(".nav-link8").removeClass("navbar_active");
    $(".nav-link9").removeClass("navbar_active");
  });

  $(".nav-item3").click(function () {
    $(".nav-link1").removeClass("navbar_active");
    $(".nav-link2").removeClass("navbar_active");
    $(".nav-link3").addClass("navbar_active");
    $(".nav-link4").removeClass("navbar_active");
    $(".nav-link5").removeClass("navbar_active");
    $(".nav-link6").removeClass("navbar_active");
    $(".nav-link7").removeClass("navbar_active");
    $(".nav-link8").removeClass("navbar_active");
    $(".nav-link9").removeClass("navbar_active");
  });

  $(".nav-item4").click(function () {
    $(".nav-link1").removeClass("navbar_active");
    $(".nav-link2").removeClass("navbar_active");
    $(".nav-link3").removeClass("navbar_active");
    $(".nav-link4").addClass("navbar_active");
    $(".nav-link5").removeClass("navbar_active");
    $(".nav-link6").removeClass("navbar_active");
    $(".nav-link7").removeClass("navbar_active");
    $(".nav-link8").removeClass("navbar_active");
    $(".nav-link9").removeClass("navbar_active");
  });

  $(".nav-item5").click(function () {
    $(".nav-link1").removeClass("navbar_active");
    $(".nav-link2").removeClass("navbar_active");
    $(".nav-link3").removeClass("navbar_active");
    $(".nav-link4").removeClass("navbar_active");
    $(".nav-link5").addClass("navbar_active");
    $(".nav-link6").removeClass("navbar_active");
    $(".nav-link7").removeClass("navbar_active");
    $(".nav-link8").removeClass("navbar_active");
    $(".nav-link9").removeClass("navbar_active");
  });

  $(".nav-item6").click(function () {
    $(".nav-link1").removeClass("navbar_active");
    $(".nav-link2").removeClass("navbar_active");
    $(".nav-link3").removeClass("navbar_active");
    $(".nav-link4").removeClass("navbar_active");
    $(".nav-link5").removeClass("navbar_active");
    $(".nav-link6").addClass("navbar_active");
    $(".nav-link7").removeClass("navbar_active");
    $(".nav-link8").removeClass("navbar_active");
    $(".nav-link9").removeClass("navbar_active");
  });

  $(".nav-item7").click(function () {
    $(".nav-link1").removeClass("navbar_active");
    $(".nav-link2").removeClass("navbar_active");
    $(".nav-link3").removeClass("navbar_active");
    $(".nav-link4").removeClass("navbar_active");
    $(".nav-link5").removeClass("navbar_active");
    $(".nav-link6").removeClass("navbar_active");
    $(".nav-link7").addClass("navbar_active");
    $(".nav-link8").removeClass("navbar_active");
    $(".nav-link9").removeClass("navbar_active");
  });

  $(".nav-item8").click(function () {
    $(".nav-link1").removeClass("navbar_active");
    $(".nav-link2").removeClass("navbar_active");
    $(".nav-link3").removeClass("navbar_active");
    $(".nav-link4").removeClass("navbar_active");
    $(".nav-link5").removeClass("navbar_active");
    $(".nav-link6").removeClass("navbar_active");
    $(".nav-link7").removeClass("navbar_active");
    $(".nav-link8").addClass("navbar_active");
    $(".nav-link9").removeClass("navbar_active");
  });

  $(".nav-item9").click(function () {  
    $(".nav-link1").removeClass("navbar_active");
    $(".nav-link2").removeClass("navbar_active");
    $(".nav-link3").removeClass("navbar_active");
    $(".nav-link4").removeClass("navbar_active");
    $(".nav-link5").removeClass("navbar_active");
    $(".nav-link6").removeClass("navbar_active");
    $(".nav-link7").removeClass("navbar_active");
    $(".nav-link8").removeClass("navbar_active");   
    $(".nav-link9").addClass("navbar_active");
  });
});




var show = function(id) {
	document.getElementById(id).style.display ='block';   
	document.getElementById("menushadow").style.display ='block';      
}

var hide = function(id) {
	document.getElementById(id).style.display ='none';      
  document.getElementById("menushadow").style.display ='none';      
}    












   