
function Card({ title, description, active }) {
    return (
        <div
            className="p-4 rounded-lg shadow-md transition transform hover:scale-105 focus-within:ring-2"
        >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p>{description}</p>
            {!active && (
                <span className="text-sm text-red-500 mt-2 block">Inactive</span>
            )}  
        </div>
    );
}
export default Card;