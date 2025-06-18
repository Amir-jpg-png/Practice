import Button from "./Button";
import Input from "./Input";

export default function NewProject() {
    return (
        <div className="w-[35rem] m-auto flex flex-col gap-5">
        <div className="flex items-center justify-end gap-2 mt-6">
            <Button>Cancel</Button>
            <button className="bg-stone-800 text-stone-50 rounded-md px-4 py-2">Save</button>
        </div>
        <Input label="Title" type="text" />
        <Input label="Description" type="text" isTextArea />
        <Input label="Due Date" type="date" />
        </div>
    );
}