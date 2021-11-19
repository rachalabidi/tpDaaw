

$(document).ready(function() { 

    $("div.mainContent").hide();
    
         var divs = $("#home, #user, #add, #del, #mod")
         
         $(".admin-panel .slidebar li a").click(function () 
          {
              $("div.mainContent").fadeIn().show();
              $("#" + $(this).attr("class")).fadeIn().show();
              divs.not(("#" + $(this).attr("class"))).hide();                  
         });   
    })
    
   
// TRYING LA METHOD GET BETWEEN 2 PAGES ACCUEIL "HOME" AND INDEX 
window.addEventListener('load', () => {

   const params = (new URL(document.location)).searchParams;
     const email = params.get('email');
    document.getElementById('r-email').innerHTML = email;
 })
// VALIDATION
$("#num").focusout(function() {
    var filter = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    var num = $(this).val();
    if(num !== ''){
      if(!filter.test(num)) {
        $('#num').css('color' , 'red');
        $('#numFocus').addClass('fb-warning');}}});