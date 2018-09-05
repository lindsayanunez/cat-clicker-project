function displayClicks(){
  let clicks = 0;
  let cat = document.getElementById('cat');
  let clickCount = document.querySelector('.clickCount');

  cat.addEventListener('click', function() {
  clicks ++;
  clickCount.innerHTML = clicks;
  });
}

displayClicks();