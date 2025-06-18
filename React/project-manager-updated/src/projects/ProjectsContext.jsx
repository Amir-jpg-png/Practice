import { createContext, useReducer, useRef } from "react";

export const ProjectsContext = createContext(
    {
        selectedProjectId: undefined,
        projects: [],
        handleStartAddProject: () => { },
        handleAddProject: () => { },
        handleSelectProject: () => { },
        handleDeleteProject: () => { },
        handleAddTask: () => { },
        handleDeleteTask: () => { },
        

    }
);

export default function ProjectsContextProvider({ children }) {
    function projectsReducer(state, action) {
        switch (action.type) {
            case "START_ADD_PROJECT":
                return {
                    ...state,
                    selectedProjectId: undefined,
                }
            case "ADD_PROJECT":
                return {
                    ...state,
                    selectedProjectId: undefined,
                    
                }
            case "SELECT_PROJECT":
                return {
                    ...state,
                    selectedProjectId: undefined,
                    
                }
            case "DELETE_PROJECT":
                return {
                    ...state,
                    selectedProjectId: undefined,
                    
                }
            default:
                return state;
        }

    }

    const [projects, dispatch] = useReducer(projectsReducer, {
        selectedProjectId: undefined,
        projects: []
    });

    function handleStartAddProject() {
        dispatch({type: "START_ADD_PROJECT"})
    }

    function handleAddProject() {
        dispatch({type: "ADD_PROJECT"})
    }

    function handleSelectProject() {
        dispatch({type: "SELECT_PROJECT"})
    }

    function handleDeleteProject() {
        dispatch({type: "DELETE_PROJECT"})
    }

    const projectsCtx = {
        selectedProjectId: projects.selectedProjectId,
        projects: projects.projects,
        handleStartAddProject,
        handleAddProject,
        handleSelectProject,
        handleDeleteProject
    };

    return (
        <ProjectsContext.Provider value={projectsCtx}>
            {children}
        </ProjectsContext.Provider>
    );
}