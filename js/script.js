const btn = document.querySelectorAll('main button');
const audio = document.querySelectorAll('main audio');
let count = 0;
let numb = document.querySelector('main article h1');
let github = document.querySelector('i.fa-github');

btn[0].addEventListener('click', function(){
   audio[0].play();
   numb.innerHTML = count + 1;
   count++;
   numb.classList.add('shake');
   numb.classList.toggle('quakes');
   document.body.style.background = '#1e1e1e';
   document.body.style.color = '#1d77c0';
   btn[0].classList.add('shadow');
   github.style.color = '#fff';
})

btn[1].addEventListener('click', function(){
   audio[1].play();
   numb.innerHTML = count -=count;
   numb.classList.add('shake');
   numb.classList.toggle('quakes');
   document.body.style.background = '#fff';
   document.body.style.color = '#1e1e1e';
   btn[0].classList.remove('shadow');
   github.style.color = '#1e1e1e';
})