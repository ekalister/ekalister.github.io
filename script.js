$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
});

function send() {
  emailjs
    .send("service_pl67x3e", "template_2eycbz8", {
      to_name: "Edi",
      from_name: document.querySelector("#from_name").value,
      message: document.querySelector("#message").value,
      email_to: "ekalister@student.unipu.hr",
    })
    .then(
      (response) => {
        console.log("succes", response.status);
      },
      (error) => {
        console.log(error);
      }
    );
}

document.querySelector(".send").addEventListener("click", send);
