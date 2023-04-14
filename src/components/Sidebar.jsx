import { Link, useLocation } from "react-router-dom";
import spotifyLogo from "../logo/Spotify_Logo.png";
import { FaHome, FaBookOpen } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getQueryAction, resetAction } from "../redux/actions";
import { Button, Form } from "react-bootstrap";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getQueryAction(search));
    setSearch("");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
      <div className="nav-container">
        <Link className="navbar-brand" to="/" onClick={() => dispatch(resetAction())}>
          <img src={spotifyLogo} alt="Spotify_Logo" width={131} height={40} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className="pt-3">
              <li>
                <Link className="nav-item nav-link" to="/" onClick={() => dispatch(resetAction())}>
                  <FaHome className="fs-4" />
                  &nbsp; Home
                </Link>
              </li>
              <li>
                <Link className="nav-item nav-link" to="/">
                  <FaBookOpen className="fs-4" />
                  &nbsp; Your Library
                </Link>
              </li>
              {location.pathname === "/" && (
                <li>
                  <Form className="input-group mt-3" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                    <div className="input-group-append" style={{ marginBottom: "4%" }}>
                      <Button
                        className="btn btn-outline-secondary"
                        onClick={handleSubmit}
                        type="submit"
                        id="button-addon1"
                      >
                        GO
                      </Button>
                    </div>
                  </Form>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-btn">
        <button className="btn signup-btn" type="button">
          Sign Up
        </button>
        <button className="btn login-btn" type="button">
          Login
        </button>
        <Link to="/">Cookie Policy</Link> | <Link to="/"> Privacy</Link>
      </div>
    </nav>
  );
};

export default Sidebar;
