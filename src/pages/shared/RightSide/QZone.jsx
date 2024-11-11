import swimming from "../../../assets/swimming.png";
import play from "../../../assets/playground.png";
import classRoom from "../../../assets/class.png";
import bg from "../../../assets/bg.png";

const QZone = () => {
  return (
    <div>
      <div className=" bg-gray-100 rounded-lg my-5 lg:p-5 mx-4 lg:mx-0">
        <h2 className="text-2xl font-bold">Q Zone</h2>
        <div className="max-w-sm mt-8 rounded-lg overflow-hidden shadow-lg">
          <img src={swimming} className="w-full h-64 object-cover" />
        </div>
        <div className="max-w-sm my-3 rounded-lg overflow-hidden shadow-lg">
          <img src={classRoom} className="w-full h-64 object-cover" />
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
          <img src={play} className="w-full h-64 object-cover" />
        </div>
      </div>
      <div className="mb-5  lg:ml-0 lg:mx-2 ml-10">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
