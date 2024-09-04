document.addEventListener("DOMContentLoaded", function () {
  let navPath;
  navPath = "/html_elements/nav.html";

  fetch(navPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-placeholder").innerHTML = data;
    });
});
