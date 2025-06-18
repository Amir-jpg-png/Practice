import Navbar from "./components/Navbar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import NoProjects from "./components/NoProjects";
import { useState, useRef } from "react";
import Modal from "./components/Modal"


function App() {
  const [projectInstance, setProjectInstance] = useState("empty");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const dueDateRef = useRef('');
  const refs = [titleRef, descriptionRef, dueDateRef]
  const taskRef = useRef('');
  const modalRef = useRef('');


  function componentToRender(instance) {
    setProjectInstance(instance);
    if(instance === "empty" || instance === "new") {
      setSelectedProject(null);
    }
  }




  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    if(!title.trim() || !description.trim() || !dueDate.trim()) {
      modalRef.current.open()
      return;
    }


    const newProject = {
      title: title,
      description: description,
      dueDate: dueDate,
      id: Date.now(),
      tasks: []
    }

    setProjects((prevProjects) => [...prevProjects, newProject]);
    
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    dueDateRef.current.value = '';
    
    componentToRender("empty");
  }

  function handleSelectProject(id) {
    const project = projects.find((project) => project.id === id);
    setSelectedProject(project);
    componentToRender("selected");
  }

  function handleAddTask() {
    const task = taskRef.current.value;

    if(!task.trim()) {
      modalRef.current.open()
      return;
    }
    
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.id === selectedProject.id
          ? { ...project, tasks: [...project.tasks, task] }
          : project
      );
  
      const updatedSelectedProject = updatedProjects.find(p => p.id === selectedProject.id);
      setSelectedProject(updatedSelectedProject);
  
      return updatedProjects;
    });
  
    taskRef.current.value = '';
  }

  function handleDeleteTask(task) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) => {
        if (project.id === selectedProject.id) {
          const updatedTasks = [...project.tasks];
          const indexOfTask = updatedTasks.indexOf(task);
          if (indexOfTask !== -1) {
            updatedTasks.splice(indexOfTask, 1);
          }
          return { ...project, tasks: updatedTasks };
        }
        return project;
      });
  
      const updatedSelectedProject = updatedProjects.find(p => p.id === selectedProject.id);
      setSelectedProject(updatedSelectedProject);
  
      return updatedProjects;
    });
  }

  function handleDeleteProject() {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== selectedProject.id));
    setSelectedProject(null);
    componentToRender("empty");
  }
  


    


    


  return (
    <main className="h-screen flex gap-8">
      <Navbar onSelectProject={handleSelectProject} onNewProject={() => componentToRender("new")} projects={projects} selectedProject={selectedProject}/>
      {projectInstance === "empty" && <NoProjects onClick={() => componentToRender("new")}/>}
      {projectInstance === "new" && <NewProject refArr={refs} onCancel={() => componentToRender("empty")} onSave={handleSave}/>}
      {projectInstance === "selected" && <SelectedProject project={selectedProject} ref={taskRef} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onDeleteProject={handleDeleteProject}/>}
      <Modal ref={modalRef}>
        <h2 className="font-bold text-xl text-stone-800 mt-2">
          Invalid Input
        </h2>
        <p className="my-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="mb-4">
          Please make sure you provide a valid value for each input field.
        </p>
      </Modal>
    </main>
  );
}

export default App;