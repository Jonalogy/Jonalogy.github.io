$(document).ready(function(){
  console.log("main.js loaded")
  sideBarMedia()
  $(window).resize(function(){
    sideBarMedia()
  })


}) //End of DOM content loaded


function sideBarMedia(){
  let screenWidth = $('body').width()
  let sidebar = $('#sidebar_spacer').width()
  console.log(screenWidth, sidebar)
  $('.sidebar-holder').toggleClass("hide-sidebar", screenWidth < 800)
}
