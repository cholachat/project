

  function toggleText(linkNumber) {
    // Hide all texts
    for (let i = 1; i <= 3; i++) {
        document.getElementById('text' + i).style.display = 'none';
    }

    // Show the selected text
    document.getElementById('text' + linkNumber).style.display = 'block';
}

$(window).on('load scroll', function(){

    var elem = $('.animated');
  
    elem.each(function () {
  
      var isAnimate = $(this).data('animate');
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > elemOffset - wh + (wh / 2)){
        $(this).addClass(isAnimate);
      }
    });
  
  });

