export default function Button({ children , ...props}) {
    return (
        <button className="text-stone-800 hover:text-stone-950" {...props}>
            {children}
        </button>
    );
}