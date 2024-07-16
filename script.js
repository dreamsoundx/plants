const burger = document.getElementById('burger');
const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav__link');
const burger2 = document.getElementById('burger2');
const headerOverlay = document.querySelector('.header__overlay');

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.toggle('open');
  });
});

burger.addEventListener('click', function () {
  header.classList.toggle('open');
});
burger2.addEventListener('click', function () {
  header.classList.toggle('open');
});
headerOverlay.addEventListener('click', function () {
  header.classList.toggle('open');
});

console.log(`Ваша оценка - 85 баллов 
Отзыв по пунктам ТЗ:
Выполненные пункты:
1) Блок header 

2) Секция welcome 

3) Секция about 

4) Секция service 

5) Секция prices 

6) Секция contacts 

7) Блок footer 

8) Блок header 

9) Секция welcome 

10) Секция about 

11) Секция service 

12) Секция prices 

13) Секция contacts 

14) Блок footer 

15) нет полосы прокрутки при ширине страницы от 1440рх до 380px 

16) нет полосы прокрутки при ширине страницы от 380px до 320рх 

17) при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка 

18) при нажатии на бургер-иконку плавно появляется адаптивное меню 

19) адаптивное меню соответствует цветовой схеме макета 

20) при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран 

21) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (все, кроме Account, она пока просто закрывает меню) 

22) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна 

`);
