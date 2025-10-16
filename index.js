$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });

  // moved: handle "view my work" button to show/scroll to projects
  $('#view-work').on('click', function(e){
    e.preventDefault();
    var $work = $('#work');
    if($work.length){
      $('html,body').animate({ scrollTop: $work.offset().top }, 700);
      $work.find('.project').addClass('show'); // reveal projects (CSS can animate .show)
    }
  });

  // contact form: open user's mail client with prefilled message to owner
  $('#contact-form').on('submit', function(e){
    e.preventDefault();
    var name = $('#contact-name').val().trim();
    var email = $('#contact-email').val().trim();
    var message = $('#contact-message').val().trim();
    if(!name || !email || !message){
      alert('Please fill all fields.');
      return;
    }
    var subject = encodeURIComponent('Portfolio message');
    var body = encodeURIComponent(message);
    var mailto = 'mailto:rabijacksonjohn@gmail.com?subject=' + subject + '&body=' + body;
    // open user's mail client with prefilled email
    window.location.href = mailto;
  });
}); 
var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);