import "./sidebar.scss";
import Menu from "../../img/menu.svg";
import Divider from "../../img/divider.svg";
import SecondaryColor from "../../img/---secondary-color@2x.svg";
import UserCircle from "../../img/usercircle.svg";
import User from "../../img/user.svg";
import Orders from "../../img/orders.svg";
import Settings from "../../img/seettings.svg";
import Package from "../../img/Package.svg";
import Coupon from "../../img/CouponDiscount.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="activeContainer">
          <Link to="/">
            <img src={Menu} className="menu" alt="menu" />
          </Link>
        </div>
        <Link to="/charts">
          <img src={Orders} className="chartStatistics" />
        </Link>
        <div className="Element10">
          <Link to="/customer">
            <img src={SecondaryColor} className="secondary" />
            <img src={UserCircle} className="primary" />
          </Link>
        </div>
        <img src={Package} className="chartStatistics" />
        <img src={Coupon} className="CouponDiscount" />
        <img src={User} className="Icon1" />
        <div className="RoundActionSearch">
          <img src={Settings} className="IconColor1" />
        </div>
      </div>
      <img src={Divider} className="divider" />
    </div>
  );
};

export default Sidebar;
