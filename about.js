let timer = 300
let intervalId = setInterval(() => {
  let sign = document.getElementById('sign')
  timer --
    document.getElementById('registerDate').innerHTML=`${(Math.floor(timer / 60))}: ${timer % 60}`
    sign.onclick = function(){
      if(timer <= 0){
        clearInterval()
        document.getElementById('exampleModalLabel').style.display='none'
        alert('Sorry We Cannot Register Period Is Out, Fine 5000 If Interested click 0k')
      }
    }
}, 1000)




function generateData(){
    let data = JSON.parse(localStorage.getItem('savedData'));
    let grid = document.getElementById('grid')
    grid.innerHTML=''
    data.forEach((element, index) => {
        const row = document.createElement('tr');
        const sno = document.createElement('th');
        sno.scope = 'row';
        sno.textContent = index + 1;
      
        const studentName = document.createElement('td');
        studentName.textContent = element.Studentname;
      
        const academyName = document.createElement('td');
        academyName.textContent = element.Academyname;
      
        const score = document.createElement('td');
        score.textContent = element.personScore;
      
        row.appendChild(sno);
        row.appendChild(studentName);
        row.appendChild(academyName);
        row.appendChild(score);
      
        grid.appendChild(row);
      });
      
}
generateData()