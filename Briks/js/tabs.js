const europeanProjectsBtn = document.getElementById('european-projects-btn');
const modernProjectsBtn = document.getElementById('modern-projects-btn');
const authorProjectsBtn = document.getElementById('author-projects-btn');
const europeanProjects = document.getElementById('european-projects');
const modernProjects = document.getElementById('modern-projects');
const authorProjects = document.getElementById('author-projects');
const greenBorders = document.querySelectorAll('.our-projects h5');

function changeStyles(modernProjectsNew, authorProjectsNew, europeanProjectsNew, modernProjectsBtnNew, europeanProjectsBtnNew, authorProjectsBtnNew, greenBordersNew) {
  modernProjects.style.display = modernProjectsNew;
  authorProjects.style.display = authorProjectsNew;
  europeanProjects.style.display = europeanProjectsNew;
  modernProjectsBtn.style.textDecoration = modernProjectsBtnNew;
  authorProjectsBtn.style.textDecoration = authorProjectsBtnNew;
  europeanProjectsBtn.style.textDecoration = europeanProjectsBtnNew;
}

europeanProjectsBtn.addEventListener('click', () => changeStyles('none', 'none', 'flex', 'none', 'underline #30674F', 'none'));
authorProjectsBtn.addEventListener('click', () => changeStyles('none', 'flex', 'none', 'none', 'none', 'underline #30674F'));
modernProjectsBtn.addEventListener('click', () => changeStyles('flex', 'none', 'none', 'underline #30674F', 'none', 'none'));