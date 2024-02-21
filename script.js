function main() {
  // NAV
  const navItems = document.querySelectorAll('.nav-item');
  const menuCheckbox = document.querySelector('input#menu-option');
  navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
      menuCheckbox.checked = false;
    });
  });

  // SLIDER

  const slides = [
    {
      title: 'Papuma',
      imgUrl: './assets/papuma1.webp',
    },
    {
      title: 'Papuma',
      imgUrl: './assets/papuma2.webp',
    },
    {
      title: 'Papuma',
      imgUrl: './assets/papuma3.webp',
    },
    {
      title: 'Papuma',
      imgUrl: './assets/papuma4.webp',
    },
    {
      title: 'Papuma',
      imgUrl: './assets/papuma5.webp',
    },
    {
      title: 'Papuma',
      imgUrl: './assets/papuma6.webp',
    },
    {
      title: 'Papuma',
      imgUrl: './assets/papuma7.webp',
    },
  ];

  const slider = document.querySelector('.slider');
  const sliderContainer = document.querySelector('.slider-container');

  slides.forEach((slide) => {
    const sliderItem = createSliderItem(slide.imgUrl, slide.title);
    sliderContainer.appendChild(sliderItem);
  });

  const duplicate = sliderContainer.cloneNode(true);
  slider.append(duplicate);
}

function createSliderItem(imgUrl, title) {
  const li = document.createElement('li');
  li.classList.add('slider-item');
  li.innerHTML = `
    <img src="${imgUrl}" alt="${title}" />
  `;
  return li;
}

main();
