(() => {
  const key = "april_cookie_consent";
  const banner = document.querySelector("[data-cookie-consent]");

  const applyConsent = (choice) => {
    const granted = choice === "accepted" ? "granted" : "denied";
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("consent", "update", {
      analytics_storage: granted,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  };

  const saved = window.localStorage.getItem(key);
  if (saved) {
    applyConsent(saved);
    return;
  }

  if (banner) {
    banner.hidden = false;
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cookie-choice]");
    if (!button) {
      return;
    }

    const choice = button.dataset.cookieChoice;
    window.localStorage.setItem(key, choice);
    applyConsent(choice);

    if (banner) {
      banner.hidden = true;
    }
  });
})();
