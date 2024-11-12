import React from "react";
import { FiBookmark, FiShare2, FiStar, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, author, title, thumbnail_url, details, total_view, image_url } =
    news;
  // const truncateText = (text, wordLimit) => {
  //   return (
  //     text.split(" ").slice(0, wordLimit).join(" ") +
  //     (text.split(" ").length > wordLimit ? "..." : "")
  //   );
  // };
  return (
    <div>
      <div className="max-w-md my-3 bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
        {/* Top Section */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <img src={author.img} className="w-8 h-8 rounded-full" />
            <div className="text-sm">
              <p className="font-semibold">{author.name}</p>
              <p className="text-gray-500">{author.published_date}</p>
            </div>
          </div>
          <div className="flex space-x-3 text-gray-600">
            <FiBookmark className="cursor-pointer hover:text-gray-800" />
            <FiShare2 className="cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        {/* Title */}
        <h2 className="px-4 text-xl font-bold text-gray-800 mb-2">{title}</h2>

        {/* Image */}
        <img src={image_url} className="w-full h-48 object-cover" />

        {/* Description */}
        {/* <p className="px-4 py-2 text-gray-700">
          {truncateText(details, 50)}
          <Link
            to={`news/${_id}`}
            className="text-blue-500 hover:underline font-medium ml-2"
          >
            Read more
          </Link>
        </p> */}

        {details.length > 200 ? (
          <p>
            {" "}
            {details.slice(0, 200)}{" "}
            <Link
              to={`news/${_id}`}
              className="text-blue-500 hover:underline font-medium ml-2"
            >
              Read more
            </Link>{" "}
          </p>
        ) : (
          <p>{details}</p>
        )}

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
              <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
