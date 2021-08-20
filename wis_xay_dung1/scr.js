// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// // lấy ra nhiều elements trong .ta;b-item
// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");

// const tabActive = $('.tab-item.active');


// tabs.forEach((tab, index) => {
//     const pane = panes[index];

//     tab.onclick = function () {
//         // ktra xem có phần từ nào khác đang 'active'
//         $('.tab-item.active').classList.remove('active');
//         $('.tab-pane.active').classList.remove('active');

//         this.classList.add('active');//chuyển class active cho element khac
//         pane.classList.add('active');
//     }
// });
var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("tab-pane");
 
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
};

