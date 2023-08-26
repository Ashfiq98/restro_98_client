import {
  faBagShopping,
  faBarChart,
  faCalendar,
  faHome,
  faHomeAlt,
  faListAlt,
  faPhone,
  faPlusSquare,
  faShoppingCart,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO: load data from server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* flex flex-col items-center justify-center */}
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button lg:hidden bg-[#006353] text-white"
        >
          My Dashboard
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full  bg-[#006353] text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FontAwesomeIcon icon={faHome} style={{ color: "#dedede" }} />{" "}
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <FontAwesomeIcon
                    icon={faPlusSquare}
                    style={{ color: "#dedede" }}
                  />{" "}
                  Add an Item
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageitems">
                  <FontAwesomeIcon
                    icon={faListAlt}
                    style={{ color: "#dedede" }}
                  />{" "}
                  Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allusers">
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{ color: "#dedede" }}
                  />{" "}
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FontAwesomeIcon icon={faHome} style={{ color: "#dedede" }} />{" "}
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{ color: "#dedede" }}
                  />{" "}
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymenthistory">
                  <FontAwesomeIcon
                    icon={faWallet}
                    style={{ color: "#dedede" }}
                  />{" "}
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={{ color: "#dedede" }}
                  />{" "}
                  My Cart
                  <span className="badge badge-secondary ml-3">
                    {cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHomeAlt} style={{ color: "#dedede" }} />{" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FontAwesomeIcon icon={faBarChart} style={{ color: "#dedede" }} />{" "}
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{ color: "#dedede" }}
              />{" "}
              Shop
            </NavLink>
          </li>
          {!isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/contact">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#dedede" }}
                  />{" "}
                  Contact
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
