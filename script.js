document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const navigation = document.querySelector('.navigation');
  const navBtns = document.querySelectorAll('.nav-btn');
  const videoSlides = document.querySelectorAll('.video-slide');
  const contents = document.querySelectorAll('.content');
  const sliderNavigation = document.querySelector('.slider-navigation');

  // Function to position slider-navigation below the active content's "Read More" link
  function positionSlider() {
    const activeContent = document.querySelector('.content.active');
    if (!activeContent) return;
    const readMoreLink = activeContent.querySelector('a');
    if (!readMoreLink) return;

    const rect = readMoreLink.getBoundingClientRect();
    const sectionRect = activeContent.parentElement.getBoundingClientRect();

    // Calculate top position relative to section.home
    const topPosition = rect.bottom - sectionRect.top + 10; // 10px margin below "Read More"

    sliderNavigation.style.top = `${topPosition}px`;
    sliderNavigation.style.left = '50%';
    sliderNavigation.style.transform = 'translateX(-50%)';
  }

  // Initial position on page load
  positionSlider();

  // Toggle navigation menu
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
  });

  // Video slider navigation
  navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.querySelector('.nav-btn.active').classList.remove('active');
      btn.classList.add('active');

      document.querySelector('.video-slide.active').classList.remove('active');
      videoSlides[index].classList.add('active');

      document.querySelector('.content.active').classList.remove('active');
      contents[index].classList.add('active');

      // Reposition slider-navigation after content change
      positionSlider();
    });
  });
});
