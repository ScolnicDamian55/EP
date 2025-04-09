document.getElementById('startButton').addEventListener('click', () => {
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const statusText = document.getElementById('statusText');
  
    const interval = setInterval(() => {
      if (progress < 100) {
        progress++;
        progressBar.style.width = `${progress}%`;
        statusText.textContent = `Прогресс: ${progress}%`;
      } else {
        clearInterval(interval);
      }
    }, 100);
  });
  