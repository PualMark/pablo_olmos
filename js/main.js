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
