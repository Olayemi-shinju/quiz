let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let studentName = document.getElementById('studentName').value.trim()
  let academyName = document.getElementById('academyName').value.trim()
  localStorage.setItem('student', studentName)
    localStorage.setItem('academy', academyName)
  // Check if data already exists in local storage
  window.location.href='qui.html'
})

let timer = 300;
let intervalId = setInterval(() => {
  document.getElementById('registerDate').innerHTML = `${(Math.floor(timer / 60))}: ${timer % 60}`;
  timer--;
}, 1000);

document.getElementById('sign').onclick = function() {
  if (timer <= 0) {
    clearInterval(intervalId);
    document.getElementById('exampleModalLabel').style.display = 'none';
    alert('Sorry We Cannot Register Period Is Out, Fine 5000 If Interested click 0k');
  }
};

