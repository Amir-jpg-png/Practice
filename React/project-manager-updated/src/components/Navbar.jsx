import FancyButton from "./FancyButton";
import { useContext } from "react";
import { ProjectsContext } from "../projects/ProjectsContext";

export default function Navbar() {

    const projectCssClasses = "text-stone-400 my-2 hover:text-stone-200 hover:bg-stone-800 px-2 py-2 rounded-sm w-full text-left";

    const {projects, handleStartAddProject} = useContext(ProjectsContext);

    return (
        <aside className=" mt-6 bg-stone-900 w-1/3 max-w-80 rounded-r-lg p-8 text-stone-50">
            <h2 className="text-xl text-stone-200 uppercase font-bold my-6">Your Projects</h2>
            <FancyButton onClick={handleStartAddProject}>+ Add Project</FancyButton>
            <ul className="mt-4">
                {projects.length > 0 && projects.projects.map(project => (
                    <li key={project.id} className={projectCssClasses}>
                        {project.title}
                    </li>
                ))}
            </ul>
        </aside>
    );
}