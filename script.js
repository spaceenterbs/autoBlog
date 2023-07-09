$(document).ready(function () {
  if ($.localStorage.isSet("memo")) {
    $(".tarea").val($.localStorage.get("memo")); // textarea에 저장한 값을 가져온다
  }
  /* 문서가 준비 됐을 때 괄호 안의 자바스크립트 코드가 실행 된다; jquery 사용시 적어줘야 함 */
  $(".btn_save").click(function () {
    $.localStorage.set("memo", $(".tarea").val());
    alert("저장되었습니다.");
    // alert($(".tarea").val()); // textarea의 값을 가져온다
  });
});
