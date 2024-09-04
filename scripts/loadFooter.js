document.addEventListener("DOMContentLoaded", function () {
  let footerPath;
  footerPath = "/html_elements/footer.html";

  fetch(footerPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
