const projects = document.querySelectorAll(".project");
const drop = document.querySelector(".drop");
const showcase = document.querySelector(".showcase");

let start,
offsetY,
offsetX,
targetRect,
target,
dropped = false,
expanded = false;

const stopped = () => {
  start = false;
  if (target) {
    showcase.classList.remove("is-dragging");
    target.classList.remove("is-selected");
    drop.classList.remove("is-active");
    drop.classList.remove("is-ready");
    /*  */
    console.log(11+'++++++++++++');
  }
  if (dropped) {
    showcase.classList.add("is-preview");
    target.classList.add("is-expanded");
    drop.classList.add("is-dropped");
    drop.textContent = "CLOSE";
    expanded = true;
    /*  */
    /* 动画触发 */
    //this=>window
    
      $('.wenzi').css({"display":"block"})
    
    


  } else {
    drop.classList.remove("is-dropped");
    showcase.classList.remove("is-preview");
    target.classList.remove("is-expanded");
    drop.textContent = "DROP HERE";
    expanded = false;

    //动画结束
    $('.wenzi').css({"display":"none"})

    console.log(1233+'++++++++++++');
  }
};

const started = (e, type) => {
  start = true;
  target = e.target;
  if (type === "touch") {
    console.log(e.touches[0]);
    offsetY = target.offsetWidth / 2 + target.offsetTop;
    offsetX = target.offsetWidth / 2 + target.offsetLeft;
    console.log(1234+'++++++++++++');
  } else {
    offsetY = e.offsetY + target.offsetTop;
    offsetX = e.offsetX + target.offsetLeft;
  }
  targetRect = target.getBoundingClientRect();
  target.classList.add("is-selected");
  showcase.classList.add("is-dragging");
};
// 页面加载就出现
projects.forEach(project => {
  project.addEventListener("mousedown", e => {
    started(e, "mouse");
  });
  project.addEventListener("touchstart", e => {
    started(e, "touch");
  });
  console.log(12345+'++++++++++++');
});

const docUp = () => {
  if (!expanded && target) {
    stopped();
    console.log(122+'++++++++++++');
    console.log(123456+'++++++++++++');
  }

};

document.addEventListener("mouseup", () => {
  docUp();
});
document.addEventListener("touchend", () => {
  docUp();
});

const docMove = (e, type) => {
  let clientX = 0,
  clientY = 0;

  if (type === "touch") {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }

  if (
  clientY > drop.offsetTop &&
  clientY < drop.offsetTop + drop.offsetHeight &&
  clientX > drop.offsetLeft &&
  clientX < drop.offsetLeft + drop.offsetWidth &&
  start &&
  !expanded)
  {
    drop.classList.add("is-ready");
    dropped = true;
  } else {
    drop.classList.remove("is-ready");
    dropped = false;
  }

  if (start && !expanded) {
    target.style.transform = `translateY(${clientY -
    offsetY}px) translateX(${clientX - offsetX}px)`;
  }
  // 鼠标移动
  console.log(1234567+'++++++++++++');

};

document.addEventListener("mousemove", e => {
  docMove(e, "mouse");
});
document.addEventListener("touchmove", e => {
  docMove(e, "touch");
});

drop.addEventListener("click", () => {
  if (expanded) {
    dropped = false;
    target.style.transform = "none";
    stopped();
  }
  console.log(12345678+'++++++++++++');

});