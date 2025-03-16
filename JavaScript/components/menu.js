// Seleciona o botão de alternância e o menu
export function inicializarMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.textContent = 'Menu';
    document.querySelector('.menu').prepend(menuToggle);
  
    menuToggle.addEventListener('click', () => {
      document.querySelector('.menu').classList.toggle('active');
    });
  }