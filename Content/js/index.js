const listMenuToggle = (e) => {
  if (e.classList.contains('active')) {
    e.classList.remove('active');
  }
  else {
    e.classList.add('active');
  }
}

const openSearchMenu = (e) => {
  const input = e.querySelector('input');
  if (!e.classList.contains('active')) {
    e.classList.add('active');
  }
}

const openSearchKeyPress = (e) => {
  const key = e.keyCode || e.which;
  const searchInput = document.getElementById('search-block');
  if (key == 13) {
    searchInput.classList.remove('active');
  }
}

window.addEventListener('scroll', function () {
  const header = document.getElementById('header-id');
  if (pageYOffset > 80) {
    header.classList.add('fixed');
  }
  else {
    header.classList.remove('fixed');
  }
});

$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});