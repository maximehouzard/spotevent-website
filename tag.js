(function() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-18DZD2SESK';
  document.head.appendChild(script);

  // Initialiser le dataLayer et la fonction gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }

  // Configurer le tag
  gtag('js', new Date());
  gtag('config', 'G-18DZD2SESK');
})();
