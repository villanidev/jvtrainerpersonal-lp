// adicionar active nos links
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function () {
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//carroussel
$(document).ready(function () {
  var multipleCardCarousel = document.querySelector("#carouselExampleControls");
  if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
      wrap: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on(
      "click",
      function () {
        if (scrollPosition < carouselWidth - cardWidth * 3) {
          scrollPosition += cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            300
          );
        }
      }
    );
    $("#carouselExampleControls .carousel-control-prev").on(
      "click",
      function () {
        if (scrollPosition > 1) {
          scrollPosition -= cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            300
          );
        }
      }
    );
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
});

//envio email
/*$(document).ready(function () {
  $("#contact-form").on("submit", function (event) {
    event.preventDefault();

    var data = {
      name: $("#nomeInput").val(),
      email: $("#emailInput").val(),
      message: $("#areaMensagemInput").val(),
    };

    $("#submitBtn").prop("disabled", true);

    $.ajax("http://localhost:8080/api/v1/send-contact-email", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      crossDomain: true,
      dataType: "text", //representa a responsa do servidor que é void ""
      timeout: 2000, // timeout para 2 segundos
    })
      .done(function () {
        alert("Email enviado!");
        document.getElementById("contact-form").reset();
        $("#submitBtn").prop("disabled", false);
      })
      .fail(function (error) {
        alert("Oops...Ocorreu um erro, tente mais tarde");
        console.log(JSON.stringify(error));
        document.getElementById("contact-form").reset();
        $("#submitBtn").prop("disabled", false);
      });
  });
});*/
