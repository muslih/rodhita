(function() {
  $(function() {
    var url;
    url = window.location.pathname;
    console.log(url);
    return $('nav a').each(function() {
      if ($(this).attr('href') === url) {
        return $(this).addClass('active');
      } else {
        return $('#nav li').first(function() {
          return a.addClass('active');
        });
      }
    });
  });

  $.vegas("slideshow", {
    backgrounds: [
      {
        src: "public/img/slide/slide-1.jpg",
        fade: 1000
      }, {
        src: "public/img/slide/slide-2.jpg",
        fade: 1000
      }, {
        src: "public/img/slide/slide-3.jpg",
        fade: 1000
      }
    ],
    preload: true
  })("overlay");

  $(function() {
    return $('section').hide();
  });

  $("#prevBtn").click(function() {
    return $.vegas('next');
  });

  $("#nextBtn").click(function() {
    return $.vegas('next');
  });

  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      return $("#toTop").fadeIn();
    } else {
      return $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function() {
    return $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });

  $(function() {
    var body;
    body = $('html').height();
    return $('#slider').find('li').css('height', body + 'px');
  });

  $(function() {
    var kontab, navtab, tab;
    $('#sliderwrap').mouseover(function() {
      $('#prevBtn').css('opacity', '0.9');
      return $('#nextBtn').css('opacity', '0.9');
    }).mouseleave(function() {
      $('#prevBtn').css('opacity', '0.1');
      return $('#nextBtn').css('opacity', '0.1');
    });
    tab = $('.tab');
    navtab = tab.children('ul').children('li');
    kontab = tab.children('section').children('article');
    navtab.first().addClass('aktif');
    kontab.hide();
    kontab.first().show();
    return navtab.on('click', function(event) {
      $('.kon' + $(this).attr('class')).slideDown();
      $('.kon' + $(this).attr('class')).siblings().slideUp();
      navtab.removeClass('aktif');
      return $(this).addClass('aktif');
    });
  });

  (function($) {
    return $('.upload').on('click', function() {
      if ($(this).children('button').text() === 'add') {
        $('#uploadavatar').slideDown();
        return $(this).children('button').text('cancel');
      } else {
        $(this).children('button').text('add');
        return $('#uploadavatar').slideUp();
      }
    });
  })(jQuery);

  $('.bisatutup').append($("<span class='tutup'>x</span>"));

  $('span.tutup').on('click', function() {
    return $(this).parent().fadeOut();
  });

}).call(this);
