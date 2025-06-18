import Button from "./Button";

export default function Navbar({onNewProject, projects, onSelectProject, selectedProject}) {
    return (
        <aside className="w-1/3 bg-stone-900 text-stone-50 mt-12 pt-12 rounded-r-lg md:w-80 px-12">
            <h2 className="text-2xl font-bold mb-6 uppercase">
                Your Projects
            </h2>
            <Button onClick={onNewProject}>
                + Add Project
            </Button>
            <ul>
                {projects.map((project) => {
                    let className = "hover:text-stone-200 hover:bg-stone-800 rounded-sm w-full text-left px-4 py-2"

                    if(selectedProject && project.id === selectedProject.id) {
                        className += " text-stone-200 bg-stone-800"
                    }
                    else {
                        className += " text-stone-400"
                    }

                    return (
                    <li key={project.id} className="mb-2">
                        <button className={className}
                         onClick={() => onSelectProject(project.id)}>
                            {project.title}
                        </button>
                    </li>
                    )
                })}
            </ul>
        </aside>
    );
}