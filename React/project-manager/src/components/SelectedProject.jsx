import { forwardRef } from "react";
import Modal from "./Modal";


const SelectedProject = forwardRef(({ project, onAddTask, onDeleteTask, onDeleteProject }, ref) => {

    return (
        <div className="ml-12 mt-12 pt-12 w-[35rem]">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-stone-700">{project.title}</h2>
                <button className="text-stone-800 hover:text-stone-950" onClick={onDeleteProject}>Delete</button>
            </div>
            <p className="text-sm text-stone-500 mb-2">
                {new Date(project.dueDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}
            </p>
            <p className="mb-2 text-stone-700 whitespace-pre-wrap">{project.description}</p>
            <hr className="border-stone-300 border-[1px]"/>
            <h2 className="text-2xl font-bold text-stone-800 my-4">
                Tasks
            </h2>
            <input type="text" ref={ref} className="rounded-sm bg-stone-300 mb-4"/>
            <button className="ml-4 text-stone-800 hover:text-stone-950" onClick={onAddTask} >Add Task</button>
            {project.tasks.length === 0 ? <p className="text-stone-800">This project does not have any tasks yet.</p> : 
            <ul className="p-4 mt-8 rounded-md bg-stone-100"> {project.tasks.map((task) => (
                <li key={task} className="flex justify-between my-4">
                    {task}
                    <button className="text-stone-800 hover:text-red-600" onClick={() => onDeleteTask(task)}>
                        Clear
                    </button>
                </li>
            ))}</ul>
            }
        </div>
        
    );
});

export default SelectedProject;
