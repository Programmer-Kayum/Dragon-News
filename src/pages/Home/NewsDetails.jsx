import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RIghtSide from "../shared/RightSide/RIghtSide";
import { FiBookmark, FiShare2, FiStar, FiEye } from "react-icons/fi";

const NewsDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file in the public folder
    const fetchData = async () => {
      try {
        const response = await fetch("../../../public/news.json");
        const data = await response.json();
        const itemData = data.find((item) => item._id === id); // Find item by ID
        setItem(itemData);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchData();
  }, [id]); // Re-run effect if the id changes

  console.log(item);

  if (!item) return <p>Loading...</p>;
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-4 mt-5">
        <div className="col-span-3">
          <div>
            <div className="max-w-md my-3 bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
              {/* Top Section */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-2">
                  <img src={item.author.img} className="w-8 h-8 rounded-full" />
                  <div className="text-sm">
                    <p className="font-semibold">{item.author.name}</p>
                    <p className="text-gray-500">
                      {item.author.published_date}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3 text-gray-600">
                  <FiBookmark className="cursor-pointer hover:text-gray-800" />
                  <FiShare2 className="cursor-pointer hover:text-gray-800" />
                </div>
              </div>

              {/* Image */}
              <img src={item.image_url} className="w-full h-48 object-cover" />

              {/* Title */}
              <h2 className="px-4 my-2 text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h2>

              {/* Description */}
              <p className="px-4 py-2 text-gray-700">{item.details}</p>

              {/* Bottom Section */}
              <div className=" px-4 py-3 border-t">
                <div className="flex justify-between  text-gray-600">
                  <div className="flex gap-2">
                    <FiStar className="cursor-pointer hover:text-yellow-500" />
                    <FiStar className="cursor-pointer hover:text-yellow-500" />
                    <FiStar className="cursor-pointer hover:text-yellow-500" />
                    <FiStar className="cursor-pointer hover:text-yellow-500" />
                  </div>
                  <div className="flex gap-4">
                    <span className="mt-1">
                      <FiEye />
                    </span>
                    <span>{item.total_view}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RIghtSide></RIghtSide>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
