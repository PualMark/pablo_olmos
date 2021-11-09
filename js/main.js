// Start on #home
    var url = document.URL, 
      index = url.indexOf("#"),
      hash = index != -1 ? url.substring(index+1) : "";

    if(hash === ""){
        location.hash = "#home";
    }

//Smooth Scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});

//Email
window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("my-form");
  var status = document.getElementById("status");


  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks! :)";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "We are full! :(";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});


function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
