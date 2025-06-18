export default function FancyButton({ children , ...props}) {
    return (
        <button className="text-stone-400 bg-stone-800 px-4 py-2 rounded-md" {...props}>
            {children}
        </button>
    );
}