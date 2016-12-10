$(document).ready(function(){
  var $menu = $("#sidebar-wrapper");

  $(document).on("click", ".js-menu-open", function(){
    console.log("Open action");
    $menu.addClass("open");
    return false;
  }).on("click", ".js-menu-close", function(){
    console.log("Close action");
    $menu.removeClass("open");
    return false;
  });
});
