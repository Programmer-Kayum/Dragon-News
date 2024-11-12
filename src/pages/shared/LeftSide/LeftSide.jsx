import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllCategory from "./AllCategory";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="shadow-2xl px-2">
        <h2 className="text-2xl font-bold px-3">All Category</h2>
        {categories.map((category) => (
          <Link
            className="block  bg-sky-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-xl font-bold border-2 p-3 my-2 rounded-lg "
            key={category.id}
          >
            <AllCategory category={category}></AllCategory>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
