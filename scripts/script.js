document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.header__theme-menu-button');
  const page = document.querySelector('.page');

  // Функция для установки темы
  function setTheme(theme) {
    page.classList.remove('theme_light', 'theme_dark');
    
    if (theme !== 'auto') {
      page.classList.add(`theme_${theme}`);
    }
    
    localStorage.setItem('theme', theme);
  }

  // Функция для обновления активной кнопки
  function updateActiveButton(activeButton) {
    themeButtons.forEach(btn => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.disabled = false;
    });
    activeButton.classList.add('header__theme-menu-button_active');
    activeButton.disabled = true;
  }

  // Обработчики для кнопок
  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      let theme;
      if (button.classList.contains('header__theme-menu-button_type_light')) {
        theme = 'light';
      } else if (button.classList.contains('header__theme-menu-button_type_dark')) {
        theme = 'dark';
      } else {
        theme = 'auto';
      }
      
      setTheme(theme);
      updateActiveButton(button);
    });

    // Hover эффекты
    button.addEventListener('mouseenter', () => {
      if (!button.classList.contains('header__theme-menu-button_active')) {
        button.style.opacity = '0.6';
      }
    });

    button.addEventListener('mouseleave', () => {
      button.style.opacity = '1';
    });
  });

  const savedTheme = localStorage.getItem('theme') || 'auto';
  const activeButton = document.querySelector(`.header__theme-menu-button_type_${savedTheme === 'auto' ? 'auto' : savedTheme}`);
  
  if (activeButton) {
    setTheme(savedTheme);
    updateActiveButton(activeButton);
  }
});