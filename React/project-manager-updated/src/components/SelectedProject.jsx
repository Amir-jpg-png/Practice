import Button from "./Button";

export default function SelectedProject() {
    return (
        <div className="w-[35rem] mt-20 ml-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl text-stone-700 font-bold">Learning React</h2>
                <Button>
                    Delete
                </Button>
            </div>
                <p className="text-stone-400 my-2">Dec 29, 2024</p>
                <p className="whitespace-pre-wrap text-stone-700 mb-4">
                    {'Learn React from the ground up.\n\nStart with the basics, finish with advanced knowledge.'}
                </p>
            <div>
                <h2 className="text-xl text-stone-700 font-bold my-2">
                    Tasks
                </h2>
                <div>
                    <input type="text" className="bg-stone-200 focus:outline-none rounded-sm mr-4" />
                    <Button>
                        Add Task
                    </Button>
                </div>
                <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
                <ul>

                </ul>
            </div>
        </div>
    );
}