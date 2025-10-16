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

  // navState: 0 = closed (default), 1 = open
  var navState = 0;

  function setNavState(state) {
    navState = state ? 1 : 0;
    if (navState === 1) {
      $('#nav-toggle').attr('aria-expanded','true').addClass('open');
      $('#links').addClass('open');
      // prevent body scroll and ensure overlay covers page content
      $('body').addClass('nav-open');
      // reveal items one-by-one
      $('#links a').removeClass('show');
      $('#links a').each(function(i, el){
        setTimeout(function(){ $(el).addClass('show'); }, i * 100);
      });
    } else {
      // close immediately, then clear per-item state
      $('#nav-toggle').attr('aria-expanded','false').removeClass('open');
      $('#links').removeClass('open');
      // restore body scroll
      $('body').removeClass('nav-open');
      $('#links a').removeClass('show');
    }
  }

  // ensure initial closed state on load
  setNavState(0);

  // hamburger toggle using navState
  $('#nav-toggle').on('click', function(e){
    e.stopPropagation();
    setNavState(navState === 1 ? 0 : 1);
  });

  // close menu when a nav link is clicked (mobile)
  $('#links a').on('click', function(){
    setNavState(0);
  });

  // close when clicking outside header
  $(document).on('click', function(e){
    if(!$(e.target).closest('#header').length){
      setNavState(0);
    }
  });

  // reset menu on resize (desktop -> mobile switch)
  $(window).on('resize', function(){
    if($(window).width() > 900){
      setNavState(0);
    }
  });

  // close menu on scroll (mobile only)
  $(window).on('scroll', function(){
    if (navState === 1 && $(window).width() <= 900) {
      setNavState(0);
    }
  });
}); 
// keep track of current viewport width and update on resize
var width = $(window).width();
$(window).on('resize', function(){
  width = $(window).width();
  // if switching to desktop ensure nav is closed
  if(width > 900){
    setNavState(0);
  }
});

// use current width at scroll time (prevents stale width)
window.onscroll = function(){
  var w = $(window).width();
  if (w >= 900) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $("#middle").css("background-size","150% auto");
    } else {
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