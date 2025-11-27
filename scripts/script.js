document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.header__theme-menu-button');
  const body = document.body;

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Удаляем активный класс со всех кнопок
      themeButtons.forEach(btn => {
        btn.classList.remove('header__theme-menu-button_active');
        btn.disabled = false;
      });

      // Добавляем активный класс на нажатую кнопку
      button.classList.add('header__theme-menu-button_active');
      button.disabled = true;

      // Определяем тему
      let theme = 'dark';
      if (button.classList.contains('header__theme-menu-button_type_light')) {
        theme = 'light';
      } else if (button.classList.contains('header__theme-menu-button_type_auto')) {
        // Авто режим - определяем по системным настройкам
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          theme = 'light';
        } else {
          theme = 'dark';
        }
      }

      // Устанавливаем тему
      body.setAttribute('data-theme', theme);
    });
  });

  // Инициализация темы при загрузке
  const activeButton = document.querySelector('.header__theme-menu-button_active');
  if (activeButton) {
    activeButton.click();
  }
});
