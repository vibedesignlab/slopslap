document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('.mobile-menu-trigger');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const drawer = document.querySelector('.mobile-menu-drawer');
  const closeButton = document.querySelector('.mobile-menu-close');
  const menuLinks = drawer?.querySelectorAll('a') ?? [];
  let lastFocused = null;

  if (!trigger || !overlay || !drawer || !closeButton) {
    return;
  }

  const setOpen = (isOpen) => {
    if (isOpen) {
      lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    }

    trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    overlay.classList.toggle('is-open', isOpen);
    drawer.classList.toggle('is-open', isOpen);
    overlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    document.body.classList.toggle('mobile-menu-open', isOpen);

    if (isOpen) {
      closeButton.focus();
    } else if (lastFocused) {
      lastFocused.focus();
    }
  };

  trigger.addEventListener('click', () => setOpen(true));
  closeButton.addEventListener('click', () => setOpen(false));
  overlay.addEventListener('click', () => setOpen(false));
  menuLinks.forEach((link) => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  });
});
