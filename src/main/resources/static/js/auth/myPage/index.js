// $(function () {
//   const partNameEl = document.getElementById("partName");
//
//   switch (partCode) {
//     case 'A' :
//       partNameEl.innerHTML = "경영";
//       break;
//     case 'B' :
//       partNameEl.innerHTML = "사업";
//       break;
//     case 'C' :
//       partNameEl.innerHTML = "운영";
//       break;
//     case 'D' :
//       partNameEl.innerHTML = "연구";
//       break;
//     default :
//       partNameEl.innerHTML = "없음";
//   }
// });
$(document).on('click', '#add', function () {
    window.open("/project/employee/list", "팝업 테스트", "width=800, height=600, top=20, left=40");
});