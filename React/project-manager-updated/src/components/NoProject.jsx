import image from "../assets/no-projects.png"
import FancyButton from "./FancyButton";

export default function NoProject() {
    return (
        <div className="m-auto flex items-center justify-center flex-col">
                <img src={image} alt="No project" className="w-12 h-12 object-contain" />
                <h2 className="text-xl text-stone-600 font-semibold my-4">
                    No Project Selected
                </h2>
                <p className="text-stone-500 mb-6">
                    Select a project or get started with a new one
                </p>
                <FancyButton>Create new project</FancyButton>
        </div>
    );
}