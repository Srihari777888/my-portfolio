// Wait until the page is fully loaded, then run
document.addEventListener('DOMContentLoaded', () => {
  const skillsBtn = document.getElementById('skills-toggle');
  const skillsList = document.getElementById('skills-list');

  const hobbiesBtn = document.getElementById('hobbies-toggle');
  const hobbiesList = document.getElementById('hobbies-list');

  const photosBtn = document.getElementById('photos-toggle');
  const photosList = document.getElementById('photos-list');

  // Reusable function: wire up any toggle button + list pair
  function setupToggle(btn, list, showText, hideText) {
    btn.addEventListener('click', () => {
      list.classList.toggle('hidden');
      const isHidden = list.classList.contains('hidden');
      btn.textContent = isHidden ? showText : hideText;
    });
  }

  setupToggle(skillsBtn, skillsList, 'Show Skills', 'Hide Skills');
  setupToggle(hobbiesBtn, hobbiesList, 'Show Hobbies', 'Hide Hobbies');
  setupToggle(photosBtn, photosList, 'Show Photos', 'Hide Photos');
});
