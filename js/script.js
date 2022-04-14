const score = document.querySelector('.score span');
const holes = document.querySelectorAll('.hole');
const pBtn = document.querySelector('.buttons .play');
const sBtn = document.querySelector('.buttons .stop');
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';

  window.addEventListener('click', () => {
    cursor.style.animation = 'wack 0.1s ease';
    setTimeout(() => {
      cursor.style.removeProperty('animation');
    }, 100);
  });
});

pBtn.addEventListener('click', () => {
  pBtn.style.display = 'none';
  sBtn.style.display = 'inline-block';

  let hole;
  let points = 0;

  const startGame = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 9);
    hole = holes[arrayNo];

    let image = document.createElement('img');
    image.setAttribute('src','./images/mole.png');
    image.setAttribute('class', 'mole');
    hole.appendChild(image);

    setTimeout(() => {
      hole.removeChild(image);
    }, 600);
  }, 800);

  window.addEventListener('click', (e) => {
    if (e.target === hole) score.innerText = ++points;
  });

  sBtn.addEventListener('click', () => {
    clearInterval(startGame);
    sBtn.style.display = 'none';
    pBtn.style.display = 'inline-block';
    score.innerText = 0;
  });
});
