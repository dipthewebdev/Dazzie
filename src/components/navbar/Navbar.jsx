import "./Navbar.scss";
import Notifications from "../../img/NotificationBell.svg";
import Divider from "../../img/divider-1@1x.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="overlap-group">
        <div className="container"></div>
        <img className="notification-bell" src={Notifications} />
        <div className="profile">
          <div className="container-1"></div>
          <div className="flex-col">
            <div className="sumanto ">Sumanto</div>
            <div className="cashier ">Cashier</div>
          </div>
        </div>
        <img className="divider" src={Divider} />
        <div className="logo">
          <div className="logo-placeholder"></div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="title mulish-bold-mirage-24px">Dazzie</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
