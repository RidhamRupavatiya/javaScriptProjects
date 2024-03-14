const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.id === 'green') {
      body.style.backgroundColor =  '#17f2bb';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor =  '#67b62f';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor =  '#66f0e1';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor =  '#bdf4d1';
    }
  });
});
