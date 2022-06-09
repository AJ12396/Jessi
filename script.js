/*https://notrix.at/img/news/00/why-debby-ryan-s-disney-show-jessie-got-cancelled.jpg
  https://i.ytimg.com/vi/-XNys4_jzuE/maxresdefault.jpg
  https://static.wikia.nocookie.net/dublagem/images/a/aa/Jessie.jpeg/revision/latest?cb=20220316194012&path-prefix=pt-br
  https://img.quizur.com/f/img5fc7a165d79df5.92207253.jpg?lastEdited=1606918517*/
var motivos = [
  "2-É muito educativa", //índice 0
  "3-Da para aprender muitas coisa", //índice 1
  "4-Tem animais exóticos", //índice 2
  "5-Os personagens são muito estilosos" //índice 3
];
var imagens = [
  "https://notrix.at/img/news/00/why-debby-ryan-s-disney-show-jessie-got-cancelled.jpg", //0
  "https://i.ytimg.com/vi/-XNys4_jzuE/maxresdefault.jpg", //1
  "https://static.wikia.nocookie.net/dublagem/images/a/aa/Jessie.jpeg/revision/latest?cb=20220316194012&path-prefix=pt-br", //2
  "https://img.quizur.com/f/img5fc7a165d79df5.92207253.jpg" //3
];

var i = 0;
function b() {
  document.getElementById("motivo").innerHTML= motivos[i]
  document.getElementById("img_j").src= imagens[i]
  i++;
  if(i>3) {
    i= 0;
  }
}