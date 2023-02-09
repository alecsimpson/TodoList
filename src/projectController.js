import project from './project';

const projectController = (() => {
  const projectList = [project()];

  const getProjects = () => projectList.slice();

  return { getProjects };
})();

export default projectController;
