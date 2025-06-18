import { forwardRef } from "react"

const Input = forwardRef(({ label, isTextArea, ...props }, ref) => {
    const style = "w-full rounded-sm bg-stone-300 focus:border-b-2 focus:border-stone-500 focus:outline-none mb-4"

    return (
        <p className="flex flex-col my-4">
            <label className="text-sm font-bold text-stone-500 uppercase m-0">{label}</label>
            {isTextArea ? <textarea ref={ref} className={style} {...props} /> : <input ref={ref} className={style} {...props} />}
        </p>
    )
})

export default Input