//whatsapp
document.getElementById("FormularioContacto").addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("Textarea1").value;

    var whatsappLink = "https://api.whatsapp.com/send/?phone=1153245449&text=Nombre:%20" + encodeURIComponent(nombre) + "%0AEmail:%20" + encodeURIComponent(email) + "%0AMensaje:%20" + encodeURIComponent(mensaje);

    window.location.href = whatsappLink;
  });

  //carrusel caso de exito
  $(document).ready(function() {
    var currentIndex = 0; 
    var cardCount = $(".card").length; 

    function updateCardVisibility() {
      $(".card").removeClass("active");
      $(".card").eq(currentIndex).addClass("active");
    }
    function changeCard(index) {
      currentIndex = index;
      updateCardVisibility();
      updateCarouselPosition();
    }

  
    function updateCarouselPosition() {
      var translateValue = -currentIndex * 100 + "%";
      $(".carousel").css("transform", "translateX(" + translateValue + ")");
    }


    $(".circle").on("click", function() {
      var targetIndex = $(this).data("target");
      changeCard(targetIndex);
    });

    $(window).on("resize", function() {
      if ($(window).width() < 768) {
        $(".card").removeClass("active");
        $(".card").eq(currentIndex).addClass("active");
        $(".carousel").css("transform", "translateX(0)");
      } else {
        updateCardVisibility();
        updateCarouselPosition();
      }
    });

    updateCardVisibility();

    setInterval(function() {
      if (currentIndex < cardCount - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCardVisibility();
      updateCarouselPosition();
    }, 5000);
  });




  // backgorund animate
  var numberOfCircles = 20;
      var circlesList = document.getElementById("circlesList");
      for (var i = 0; i < numberOfCircles; i++) {
        var li = document.createElement("li");
        li.style.left = getCirclePosition(i);
        li.style.animationDelay = getAnimationDelay(i);
        circlesList.appendChild(li);
      }

      function getCirclePosition(index) {
        var positions = [
          "25%",
          "10%",
          "70%",
          "40%",
          "65%",
          "75%",
          "35%",
          "50%",
          "20%",
          "85%",
          "22%",
          "8%",
          "74%",
          "48%",
          "55%",
          "73%",
          "32%",
          "80%",
          "10%",
          "81%",
        ];
        return positions[index];
      }
      function getAnimationDelay(index) {
        var delays = [
          "0s",
          "4s",
          "30s",
          "0s",
          "15s",
          "40s",
          "9s",
          "35s",
          "4s",
          "20s",
          "2s",
          "9s",
          "37s",
          "1s",
          "19s",
          "38s",
          "13s",
          "37s",
          "5s",
          "24s"
        ];
        return delays[index];
      }