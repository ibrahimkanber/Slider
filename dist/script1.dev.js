"use strict";

var models = [{
  name: "Bmw-418-d",
  image: "img/bmw.jpg",
  link: 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
}, {
  name: "Mazda CX-3",
  image: "img/mazda.jpg",
  link: 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
}, {
  name: "Volvo S60",
  image: "img/volvo.jpg",
  link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
}, {
  name: "Skoda SuperB",
  image: "img/skoda.jpg",
  link: 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
}, {
  name: "Honda Civic",
  image: "img/honda.jpg",
  link: 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
}];
var index = 2;
var random = false;
var carright = document.querySelector(".fa-arrow-circle-right");
carright.addEventListener("click", right);

function right() {
  index++;
  index >= models.length ? (index = 0, showSlide(index)) : showSlide(index);
} ///


var carleft = document.querySelector(".fa-arrow-circle-left");
carleft.addEventListener("click", left);

function left() {
  index--;
  index >= 0 ? showSlide(index) : index = models.length - 1, showSlide(index);
} ///


var arrows = document.querySelectorAll(".fas");
arrows.forEach(function (item) {
  item.addEventListener("mouseenter", function (e) {
    clearInterval(myvar);
  });
  item.addEventListener("mouseleave", function () {
    myvar = setInterval(auto, 2000);
  });
}); /////

function showSlide(index) {
  var image = document.querySelector(".card-img-top");
  image.setAttribute("src", models[index].image);
  var carname = document.querySelector(".card-title");
  carname.textContent = models[index].name;
  var carlink = document.querySelector(".card-link");
  carlink.setAttribute("href", models[index].link);
}

var prev;

function auto() {
  if (random) {
    var rndm = function rndm() {
      do {
        index = Math.round(Math.random() * (models.length - 1));
      } while (prev == index);

      prev = index;
    };

    rndm();
  } else {
    right();
  }

  showSlide(index);
}

myvar = setInterval(auto, 2000);