// $(document).ready(function(){
//     $(".designimg").click(function(){
//       $(".designimg").slideDown('1500').hide('1000');
//       $(".design").show('1500');
//     });
//     $(".design").click(function(){
//       $(".design").slideUp('1500');
//       $("designimg").slideDown('1500');
//     });
//   });

// $(document).ready(function() {
//     $(".clickable").click(function() {
//       $(".design").toggle();
//       $(".designimg").toggle();
//     });
//   });$(document).ready(function() {

  $("#design").click(function(){
    $("#dshow").toggle();
    $(".dimage").toggle();
  })

  $("#development").click(function(){
    $("#development-showing").toggle();
    $(".hide-development-image").toggle();
  })

  $("#productManagement").click(function(){
    $("#product-management-showing").toggle();
    $(".hide-product-management").toggle();
  })
