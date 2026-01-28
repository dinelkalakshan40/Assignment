import { useState } from "react";
import dashboardData from "../data/dashboardData";
import Cart from "./Cart";

function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredData = dashboardData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
        <div className="p-6">
            
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-6 w-full sm:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredData.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500">
                        No matching cards found.
                    </p>
                ) : (
                    filteredData.map((card) => (
                        <Cart
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            active={card.active}
                        />
                    ))
                )}
            </div>
        </div>
  );
}
export default Dashboard;
