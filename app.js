// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

// forEach는 각 배열 요소에 대해 제공된 함수를 한 번 실행합니다.
btns.forEach(function (btn) {
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
      count--;
    }
    else if(styles.contains('increase')){
      count++;
    }
    else{
      count= 0;

    }
    if(count > 0){
      value.style.color = "green";

    }

    if(count < 0){

      value.style.color = "red";
    }
    if(count === 0){

      value.style.color = "#222";
    }

    value.textContent = count;
  });
// foreach 배열을 순회하는 currentTarget : 이벤트 리스너가 달린 요소
//target : 실제 이벤트가 발생하는 요소
// 이벤트리스너란 이벤트가 발생했을 때 그 처리를 담당하는 함수 이벤트 핸들러 라고도 함
});


//btns.forEach(function (btn) {
//  btn.addEventListener("click", function(e){
  //  const styles = e.currentTarget.classList;
  //  if(styles.contains('decrease')){
  //    count--;
  //  }
  //  value.textContent = count;
  // decreas 버튼을 클릭 했을 때 -카운트가 1씩 늘어남
