$(document).ready(function() {
    $(".dropdown").click(function(){
      $(this).find(".dropdown-menu").show();
      $(this).find(".dropdown-menu").mouseleave(function(){
        $(this).hide();
      });
    })
  })