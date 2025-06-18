import Navbar from "./components/Navbar";
import SelectedProject from "./components/SelectedProject";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import ProjectsContextProvider from "./projects/ProjectsContext";
import { ProjectsContext } from "./projects/ProjectsContext";
import { useContext } from "react";

function App() {

  const { projects } = useContext(ProjectsContext);

  let componentToRender;

  if (projects.selectedProjectId == null) {
    componentToRender = <NoProject />
  }
  else if (projects.selectedProjectId == undefined)
    componentToRender = <NewProject />
  else
    componentToRender = <SelectedProject />


  return (
    <ProjectsContextProvider>
      <main className="flex h-screen">
        <Navbar />
        {componentToRender}


      </main>

    </ProjectsContextProvider>
  );
}

export default App;
