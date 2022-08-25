const numeroConselho = document.querySelector('.numero-conselho');
const fraseConselho = document.querySelector('.conselho');
const repetir = document.querySelector('.repetir');

repetir.addEventListener('click', pegarConselho);

async function pegarConselho() {
  fetch('https://api.adviceslip.com/advice')
    .then((result) => result.json())
    .then((conselho) => {
      fraseConselho.innerText = `"${conselho.slip.advice}"`;
      numeroConselho.innerText = `#${conselho.slip.id}`;
      console.log(conselho);
    });
}

pegarConselho();
