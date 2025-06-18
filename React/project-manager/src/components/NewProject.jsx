import Input from "./Input";

export default function NewProject({onCancel, refArr, onSave}) {
    return (
        <div className="w-[35rem] m-auto">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="bg-stone-800 rounded-md px-4 py-2 text-stone-200 hover:bg-stone-950" onClick={onSave}>Save</button>
                </li>
            </menu>
            <Input ref={refArr[0]} label="Title" />
            <Input ref={refArr[1]} label="Description" isTextArea />
            <Input ref={refArr[2]} type="date" label="Due Date"/>
        </div>
    )
}