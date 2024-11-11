import moment from "moment";
import logo from "../../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <p className="lg:text-xl lg:my-3">Journalism Without Fear or Favour</p>
      <p className="lg:text-xl text-red-400">
        {moment().format("dddd, MMMM DD, YYYY")}
      </p>
    </div>
  );
};

export default Header;
