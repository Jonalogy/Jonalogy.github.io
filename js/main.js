$(document).ready(function(){
  console.log("DOM Content Loaded")

  //Side Bar Media Query
  sideBarMedia();
  $(window).resize(function(){sideBarMedia()})

  //Nav Links
  $('.project-nav-link').click(function(event){
    $('.gif-panels').addClass("hide-gif-panels");
    var point = this;
    var name = point.getAttribute('name');
    console.log(point, name)
    $('#' + name + '-panel').removeClass("hide-gif-panels");
  })


}) //End of DOM content loaded

function sideBarMedia(){
  let screenWidth = $('body').width()
  let sidebar = $('#sidebar_spacer').width()
  console.log(screenWidth, sidebar)
  $('.sidebar-holder').toggleClass("hide-sidebar", screenWidth < 800)
}
