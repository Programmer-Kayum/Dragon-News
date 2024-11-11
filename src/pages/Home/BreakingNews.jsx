import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="bg-gray-200 lg:p-2 rounded-lg lg:my-5 my-2">
      <div className="flex ">
        <button className="btn btn-secondary"> Breaking</button>
        <Marquee pauseOnHover={true} speed={100}>
          <Link className="font-semibold lg:text-xl" to="/">
            I can be a React component, multiple React components.......
          </Link>
          <Link className="mx-5 font-semibold lg:text-xl" to="/">
            I can be a React component, multiple React components.....
          </Link>
          <Link className="font-semibold lg:text-xl" to="/">
            I can be a React component, multiple React components.....
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
