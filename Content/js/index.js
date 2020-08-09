const listMenuToggle = (e) => {
  const headerList = document.querySelectorAll('.main-header__li');
  headerList.forEach(listItem => {
    listItem.classList.remove('main-header__li--active');
  });
  if (e.classList.contains('main-header__li--active')) e.classList.remove('main-header__li--active');
  else e.classList.add('main-header__li--active');
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

const animateBlocks = () => {
  const containers = document.querySelectorAll('.animated-container');
  for (let containerIndex = 0; containerIndex < containers.length; containerIndex++) {
    const container = containers[containerIndex];
    const animationBlocks = container.querySelectorAll('.animated-container__block');
    for (let blockIndex = 0; blockIndex < animationBlocks.length; blockIndex++) {
      const block = animationBlocks[blockIndex];
      if (inViewport(block)) {
        setTimeout(() => {
          block.classList.add('animated-container__block--finished');
        }, 10 * containerIndex * blockIndex);
      }
      else {
        setTimeout(() => {
          block.classList.remove('animated-container__block--finished');
        }, 10 * containerIndex * blockIndex);
      }
    }
  }
}

window.addEventListener('scroll', () => {
  const header = document.getElementById('header-id');
  if (pageYOffset > 80) {
    header.classList.add('main-header--fixed');
  }
  else {
    header.classList.remove('main-header--fixed');
  }
  animateBlocks();
});

const inViewport = (element) => {
  const elementProps = element.getBoundingClientRect();
  return !(elementProps.top > innerHeight || elementProps.bottom < 0);
}

const mobileMenuHandler = (e) => {
  const header = document.querySelector('#header-id');
  e.classList.toggle('burger--active');
  header.classList.toggle('main-header--active')
}

document.addEventListener("DOMContentLoaded", () => {
  animateBlocks();
  document.addEventListener('click', (e) => {
    const headerListItem = document.querySelectorAll('.main-header__li');
    if (!e.target.classList.contains('main-header__link')) {
      headerListItem.forEach(listItem => {
        listItem.classList.remove('main-header__li--active');
      });
    }
  })
});