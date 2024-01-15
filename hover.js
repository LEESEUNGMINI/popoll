// 각 Snap 아이템의 인덱스를 저장하는 배열
var snapItemIndexes = [];

// Intersection Observer 설정
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      // 뷰포트 내에 들어온 Snap 아이템의 인덱스를 가져옴
      var index = snapItemIndexes.indexOf(entry.target.id);

      // 뷰포트 내에 들어온 Snap 아이템이면 호버 효과 추가, 아니면 제거
      if (entry.isIntersecting) {
        addHoverEffect(index);
      } else {
        removeHoverEffect(index);
      }
    });
  },
  { threshold: 0.5 }
); // 뷰포트의 50% 이상이 보이면 콜백 실행

// 각 Snap 아이템에 대해 Observer 등록
document.querySelectorAll(".snap-item").forEach(function (item, index) {
  observer.observe(item);
  snapItemIndexes.push(item.id);
});

// 호버 효과 추가 함수
function addHoverEffect(index) {
  var snapItem = document.getElementById(snapItemIndexes[index]);
  snapItem.classList.add("hover-effect");
}

// 호버 효과 제거 함수
function removeHoverEffect(index) {
  var snapItem = document.getElementById(snapItemIndexes[index]);
  snapItem.classList.remove("hover-effect");
}
