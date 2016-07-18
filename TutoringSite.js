$(document).ready(function(){
  $(".navLists").click(function(){

    $(".navLists").css({"border-bottom": "none", "background-color": "#efefef", "font-size": "1" });
    $(this).css({"border-bottom": "2px solid black", "background-color": "lightblue", "font-size": "110%"});
    alert(this);
  });

  $(document).click(function(event){
      var clickover = $(event.target);
      var $navbar = $(".navbar-collapse");
      var _opened = $navbar.hasClass("in");
      if(_opened == true && !clickover.hasClass("navbar-toggle")){
        $navbar.collapse("hide");
      }
  });

});
