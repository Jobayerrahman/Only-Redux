
export default function Button({children, handler,increment}){
    return (
            <button
                class={`${increment ? "bg-indigo-400" : "bg-red-400"} text-white px-3 py-2 rounded shadow`}
                onClick={handler}
            >
                {children}
            </button>
    )
}