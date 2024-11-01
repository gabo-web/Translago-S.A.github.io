let contadore = 0;
    const limite = 76;

    function aumentarContadore() {
      if (contadore < limite) {
        contadore++;
        document.getElementById('contadore').innerText = contadore;
      }
    }

    setInterval(aumentarContadore, 100); // Aumenta el contador cada segundo


let contador = 0;
    const limites = 65;

    function aumentarContador() {
      if (contador < limites) {
        contador++;
        document.getElementById('contador').innerText = contador;
      }
    }

    setInterval(aumentarContador, 100);


let contadora = 0;
    const limitez = 57;

    function aumentarContadora() {
      if (contadora < limitez) {
        contadora++;
        document.getElementById('contadora').innerText = contadora;
      }
    }
    setInterval(aumentarContadora, 100);


let contadoro = 0;
    const limitev = 1500;

    function aumentarContadoro() {
      if (contadoro < limitev) {
        contadoro++;
        document.getElementById('contadoro').innerText = contadoro;
      }
    }

    setInterval(aumentarContadoro, 10);

//-------------------------------------------------------------------------------------------------------//


function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  var button = content.previousElementSibling.querySelector('.toggle-button');

  if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'flex';
      button.textContent = '⬆️';
  } else {
      content.style.display = 'none';
      button.textContent = '⬇️';
  }
}

//-------------------------------------------------------------------------------------------------------//

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});

//-------------------------------------------------------------------------------------------------------//

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});