// Start on #home
    var url = document.URL, 
      index = url.indexOf("#"),
      hash = index != -1 ? url.substring(index+1) : "";

    if(hash === ""){
        location.hash = "#home";
    }

//Smooth Scroll
$(".navbar ul a").on("click", function (e) {
  // 1
  e.preventDefault();
  // 2
  const href = $(this).attr("href");
  // 3
  $("html, body").animate({ scrollTop: $(href).offset().top }, 300);
});

//Light Contact
function onLight(){
  var form = document.getElementById("contact-form");
  form.style.animationName = "light-form";
  form.addEventListener('animationend', function(){
    form.style.animationName = '';
  });
 }
