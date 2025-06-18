export default function Input({ label, type, isTextArea}) {

    const cssClasses = "w-full bg-stone-200 border-b-2 border-stone-300 focus:outline-none focus:border-stone-500"


    return (
        <p>
            <label className="font-semibold uppercase text-stone-500">{label}</label>
            {isTextArea ? <textarea className={cssClasses}/> : <input type={type} className={cssClasses} />}
        </p>
    );
}