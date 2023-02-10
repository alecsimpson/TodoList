import './style.css';
import projectController from './projectController';
import project from './project';

const displayController = (() => {
  const body = document.querySelector('body');

  const container = document.createElement('div');
  container.id = 'container';
  body.appendChild(container);

  const sideBar = document.createElement('div');
  sideBar.className = 'sidebar';
  container.appendChild(sideBar);

  const content = document.createElement('div');
  content.className = 'content';
  container.appendChild(content);

  const populateSideBar = () => {
    const viewAllProjects = document.createElement('div');
    viewAllProjects.className = 'view-all-projects';
    viewAllProjects.innerText = 'Projects';
    viewAllProjects.addEventListener('click', displayProjects);
    sideBar.appendChild(viewAllProjects);

    // Sets up project list on sidebar
    projectController.getProjects().forEach((prj, index) => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project-sidebar-item';
      projectDiv.setAttribute('project-id', index);
      projectDiv.innerText = prj.name;
      projectDiv.addEventListener('click', displayProjectDetails);
      sideBar.appendChild(projectDiv);
    });
  };

  const displayProjects = () => {
    clearContent();
    projectController.getProjects().forEach((prj, index) => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project-preview';
      projectDiv.setAttribute('project-id', index);
      projectDiv.innerText = prj.name;
      projectDiv.addEventListener('click', displayProjectDetails);
      content.appendChild(projectDiv);
    });
  };

  const displayProjectDetails = (event) => {
    clearContent();
    const project = projectController.getProject(event.srcElement.getAttribute('project-id'));
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-details';
    projectDiv.innerHTML = `<div>${project.name}</div><div>${project.description}</div>`;
    content.appendChild(projectDiv);
  };

  return {
    populateSideBar,
  };
})();

function clearContent() {
  document.querySelector('.content').innerHTML = '';
}

export default displayController;
