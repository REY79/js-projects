
const btn = document.querySelector('button');

function random(rey) {
  return Math.floor(Math.random() * (rey+1));
}

btn.onclick = function() {
  const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = randomColor;
}

//How about using this to make a dark/light mode for your portfolio site? other ideas you could explore with this?

console.log("hello");