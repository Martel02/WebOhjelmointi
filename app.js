const routes = {
    '/': 'views/home.html',
    '/animelista': 'views/animelist.html',
    '/portfolio': 'views/portfolio.html',
  };
  
  const app = document.getElementById('app');
  
  const navigateTo = url => {
    window.history.pushState({}, '', url);
    loadContent(url);
  };
  
  const loadContent = url => {
    const path = url === '/' ? '/' : url;
    const contentPath = routes[path] || routes['/'];
    fetch(contentPath)
      .then(response => response.text())
      .then(html => {
        app.innerHTML = html;
      })
      .catch(err => {
        app.innerHTML = '<h1>404 - Page Not Found</h1>';
      });
  };
  
  // Handle back/forward navigation
  window.onpopstate = () => {
    loadContent(window.location.pathname);
  };
  
  // Event delegation for navigation links
  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        navigateTo(e.target.href.replace(window.location.origin, ''));
      }
    });
    // Initial content load
    loadContent(window.location.pathname);
  });
  