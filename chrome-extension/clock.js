 const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    function tikTok() {
      const dateOutput = document.getElementById('date');
      const timeOutput = document.getElementById('time');

      const currentDate = new Date()
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const date = currentDate.getDate();
      const day = weekday[currentDate.getDay()];

      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      const timeFormat = `${hours}:${minutes}:${seconds}`;
      timeOutput.textContent = timeFormat;

      const dateFormat = `${year}-${month}-${date}, ${day}`;
      dateOutput.textContent = dateFormat;
    }
    tikTok();
    setInterval(tikTok, 1000);