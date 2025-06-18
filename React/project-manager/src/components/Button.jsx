export default function Button ({children, onClick}) {

    const className = "bg-stone-800 rounded-md px-4 py-2 text-stone-400 hover:bg-stone-700 mb-6"

    return(
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}