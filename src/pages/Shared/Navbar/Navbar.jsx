import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  // nav hamburger button work
  const [themeMenuOpened, setThemeMenuOpened] = useState(false);
  const themeMenu = useRef(null);
  const themeMenuButton = useRef(null);
  useEffect(() => {
    if (!themeMenuOpened) {
      document.activeElement.blur();
    } else if (
      themeMenuOpened &&
      !themeMenu.current.contains(document.activeElement)
    ) {
      setThemeMenuOpened(false);
    }
  }, [themeMenuOpened]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/offered">Order</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to={isAdmin ? "dashboard/adminhome" : "dashboard/userhome"}>
              Dashboard
            </Link>
          </li>
          <span className="ml-2 mt-3 text-yellow-200">{user.displayName}</span>
          <span className="ml-2 mt-2 mr-2">
            {user.photoURL ? (
              <img
                className="rounded-full h-7 w-6"
                src={user.photoURL}
                alt="user"
              />
            ) : (
              <FontAwesomeIcon icon={faUser} style={{ color: "yellow" }} />
            )}
          </span>
          <li className="btn-handle">
            <Link to="/dashboard/mycart">
              <button className="btn-sm text-xl">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                <span className="badge badge-secondary ml-3">
                  {cart?.length || 0}
                </span>
              </button>
            </Link>
          </li>
          <li className="btn-handle">
            <Link to="">
              <button onClick={handleLogOut} className="btn-sm uppercase">
                Logout
              </button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-red-600 text-white ">
        <div className="navbar-start">
          <div className="dropdown uppercase" ref={themeMenu}>
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden "
              // ref={themeMenuButton}
              onBlur={(e) => {
                setThemeMenuOpened(false);
              }}
              onClick={(e) => {
                if (themeMenuOpened) {
                  setThemeMenuOpened(false);
                } else {
                  setThemeMenuOpened(true);
                }
              }}
            >
              {!themeMenuOpened ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f7f9fd"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f0f2f5"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-800 text-xl text-white rounded-box w-52"
              onBlur={(e) => {
                themeMenuButton.current.focus();
              }}
              onFocus={(e) => {
                setThemeMenuOpened(true);
              }}
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <button className="btn btn-ghost normal-case text-xl">
              Restro 98
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal pl-44 pr-44 uppercase">
            {navOptions}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
