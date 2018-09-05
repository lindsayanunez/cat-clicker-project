function Cat(name, image){
  this.name = name;
  this.image = image;
}

Cat.prototype.displayClicks = function(){
  let clicks = 0;
  let cat = document.getElementById('cat');
  let clickCount = document.querySelector('.clickCount');

  cat.addEventListener('click', function() {
  clicks ++;
  clickCount.innerHTML = clicks;
  });
}

let cat1 = new Cat('Aria','/img/cat1.jpg')
let cat1 = new Cat('Leo','/img/cat2.jpg')