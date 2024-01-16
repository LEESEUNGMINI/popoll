document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("main_nav");
  var navh2 = document.getElementById("main_h2");
  var headerHeight = document.querySelector("header").offsetHeight;
  var navp = document.getElementById("main_p");
  var navhelp = document.getElementById("right_Help");

  window.addEventListener("scroll", function () {
    var scrolled = window.scrollY;

    if (scrolled >= headerHeight / 4) {
      navbar.classList.add("scrolled");
      navh2.classList.add("scrolled");
      navp.classList.add("scrolled");
      navhelp.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      navh2.classList.remove("scrolled");
      navp.classList.remove("scrolled");
      navhelp.classList.remove("scrolled");
    }
  });
});

// 스냅
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

const snapDiv = document.getElementById("snap_div");

snapDiv.addEventListener("mousedown", handleMouseDown);
snapDiv.addEventListener("touchstart", handleTouchStart);

snapDiv.addEventListener("mouseleave", handleMouseLeave);
snapDiv.addEventListener("touchcancel", handleTouchCancel);

snapDiv.addEventListener("mouseup", handleMouseUp);
snapDiv.addEventListener("touchend", handleTouchEnd);

snapDiv.addEventListener("mousemove", handleMouseMove);
snapDiv.addEventListener("touchmove", handleTouchMove);

// 스크롤 중에 부드러운 효과를 위해 requestAnimationFrame을 사용합니다.
let isScrolling = false;

snapDiv.addEventListener("scroll", () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      // 여기에 부드러운 스크롤 중의 추가적인 처리를 추가할 수 있습니다.
      isScrolling = false;
    });
  }
  isScrolling = true;
});

function handleMouseDown(e) {
  startDragging(e.pageX - snapDiv.offsetLeft);
}

function handleTouchStart(e) {
  startDragging(e.touches[0].pageX - snapDiv.offsetLeft);
}

function handleMouseLeave() {
  stopDragging();
}

function handleTouchCancel() {
  stopDragging();
}

function handleMouseUp() {
  stopDragging();
}

function handleTouchEnd() {
  stopDragging();
}

function handleMouseMove(e) {
  moveScroll(e.pageX - snapDiv.offsetLeft);
}

function handleTouchMove(e) {
  moveScroll(e.touches[0].pageX - snapDiv.offsetLeft);
}

function startDragging(x) {
  isDragging = true;
  startX = x;
  scrollLeft = snapDiv.scrollLeft;
  snapDiv.style.cursor = "grabbing";
}

function stopDragging() {
  isDragging = false;
  snapDiv.style.cursor = "grab";
}

function moveScroll(x) {
  if (!isDragging) return;
  event.preventDefault();
  const walk = (x - startX) * 2;
  snapDiv.scrollLeft = scrollLeft - walk;
}
