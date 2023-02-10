import project from './project';

const projectController = (() => {
  const projectList = [project('testName1', 'testDescription1'), project('testName2', 'testDescription2')];

  const getProjects = () => projectList.slice();

  const getProject = (index) => projectList[index];

  const addProject = (prj) => projectList.push(prj);

  const deleteProject = (index) => { this.projectList = projectList.splice(index, 1); };

  return {
    getProjects, getProject, addProject, deleteProject,
  };
})();

export default projectController;
