
$(document).ready(function () {
  AOS.init();
  new WOW().init();
})


var Pic = document.getElementById('pic').cloneNode();
document.getElementById('container').appendChild(Pic);
var line = document.createElement('div'); line.className = 'line';
document.getElementById('container').appendChild(line);


var tl = new TimelineMax({ repeat: -1 });

for (var i = 50; i--;) {
  tl.to(Pic, R(0.03, 0.17), { opacity: R(0, 1), y: R(-1.5, 1.5) })
};

tl.to(line, tl.duration() / 2, { opacity: R(0.1, 1), x: R(0, 300), ease: RoughEase.ease.config({ strength: 0.5, points: 10, randomize: true, taper: "none" }), repeat: 1, yoyo: true }, 0);

function R(max, min) { return Math.random() * (max - min) + min };


$(".wraping .judul").attr({ "data-aos": "fade-in", "data-aos-delay": "500", "data-aos-duration": "500", "data-aos-easing": "linear" });

$(".wraping .data p").attr({ "data-aos": "fade-in", "data-aos-delay": "700", "data-aos-duration": "500", "data-aos-easing": "linear" });

$(".wraping .jepret").attr({ "data-aos": "fade-in", "data-aos-delay": "700", "data-aos-duration": "500", "data-aos-easing": "linear" });

// $(".wraping .foto").attr({ "data-aos": "fade-in", "data-aos-delay": "1000", "data-aos-duration": "500", "data-aos-easing": "linear" });