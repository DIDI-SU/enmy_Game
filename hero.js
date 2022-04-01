//class로 다시해보기
class Hero {}

//function으로진행
//용사가있는 div데려오기
let heros = document.querySelector(".heros");
let heroClass = heros.classList;
let bg = document.querySelector("#bg");
let el = bg.getBoundingClientRect();
console.log(el);
let herosloca = el.width / 2;

let herosHeight = bg.height;

///1. 용사구현
// 버튼이 눌리는 경우 용사의 모습이 오 왼으로 바뀐다
//바뀌는건 해결 그런데 이제 연속으로 눌렀을경우에도 바뀌는 문제 발생
//그래서 이번에는 전체 클래스를 다밀고 붙이는 방식으로시도
//성공 후 진행!
//2. 용사 움직이게하기 배경div를 데려와 넓이 파악하기
//positon 통해서 시도, 그런데 이동이 조금 이상해서 다시확인 필요=> 부모를 확인해야했는데 그걸확인안해서 그런거였음 ㅇㅇ!!!111

var direction = 1;
document.addEventListener("keydown", checkKey);
function checkKey(e) {
  if (e.code === "ArrowUp") {
    heroClass.remove(heroClass);
    heroClass.add("heros");
    console.log(e.clientX);
  } else if (e.code === "ArrowDown") {
    heroClass.remove(heroClass);
    heroClass.add("herosBack");
  } else if (e.code === "ArrowLeft") {
    heroClass.remove(heroClass);
    heroClass.add("herosLeft");
    heros.style.left = `${herosloca - 5}px`;
    herosloca -= 5;
  } else if (e.code === "ArrowRight") {
    heroClass.remove(heroClass);
    heroClass.add("herosRight");
    heros.style.right = `${herosloca - 5}px`;
    herosloca -= 5;
  }
}
