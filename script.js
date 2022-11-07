const Btn = document.querySelectorAll('.es-info__Btn')
const Content = document.querySelectorAll('.es-info__hiddenCtn')
const BtnIcon = document.querySelectorAll('.es-info__BtnIcon')
for (let i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener('click', () => {
      Content[i].classList.toggle('es-info__active');
      BtnIcon[i].classList.toggle('es-info__rotate');
    });
  }