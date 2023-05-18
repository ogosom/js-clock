const timeDiv = document.getElementById('time');
const todayDiv = document.getElementById('today');

function updateTime() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString('ko-KR', options);
  const time = now.toLocaleTimeString('ko-KR', { hour12: false });

  todayDiv.textContent = date;
  timeDiv.textContent = time;
}


function padZero(number) {
  return number.toString().padStart(2, '0');
}

setInterval(updateTime, 1000);
