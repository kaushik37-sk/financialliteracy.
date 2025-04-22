// Function to get the count from localStorage or initialize it
function getVisitorCount() {
  return localStorage.getItem('visitorCount') || 0;
}

// Function to increment and save the count
function incrementVisitorCount() {
  let count = parseInt(getVisitorCount()) + 1;
  localStorage.setItem('visitorCount', count);
  return count;
}

// Function to display the count
function displayVisitorCount() {
  const counterElement = document.querySelector('.website-counter');
  const count = incrementVisitorCount();
  counterElement.textContent = count;
}

// Call the display function when the page loads
document.addEventListener('DOMContentLoaded', displayVisitorCount);

// Changing language based on user's preference (example: Spanish)
function changeLanguage(lang) {
  if (lang === 'es') {
    document.querySelector('.welcome-title').textContent = 'Bienvenido a Finveda';
    document.querySelector('.welcome-text').textContent = 'No confíes ciegamente, ve la verdad antes de avanzar.';
    document.querySelector('.btn-start').textContent = 'Comienza a leer reseñas';
  }
  else {
    document.querySelector('.welcome-title').textContent = 'Welcome to Finveda';
    document.querySelector('.welcome-text').textContent = 'Don\'t trust blindly, see the truth before moving forward.';
    document.querySelector('.btn-start').textContent = 'Start Reading Reviews';
  }
}

// You can call this function like: changeLanguage('es'); to switch to Spanish
