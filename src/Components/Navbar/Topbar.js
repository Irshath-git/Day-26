import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Topbar() {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          class="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i class="fa fa-bars"></i>
        </button>

        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
        <div>
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">
            Irshath
          </span>
          <img
            class="img-profile rounded-circle"
            style={{ width: 30 }}
            src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"
          />
        </div>
        <button
          onClick={() => setVisible(!isVisible)}
          class={
            isVisible
              ? "nav-link dropdown-toggle show"
              : "nav-link dropdown-toggle"
          }
          id="navbarDropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded={isVisible}
          style={{ border: "none", background: "none" }}
        />

        <div
          class={
            isVisible
              ? "dropdown-menu dropdown-menu-right shadow animated--grow-in show"
              : "dropdown-menu dropdown-menu-right shadow animated--grow-in"
          }
          aria-labelledby="navbarDropdownMenuLink"
        >
          <a
            class="dropdown-item"
            to={"/"}
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <Link class="nav-link" to={"/"}>
              <FontAwesomeIcon icon={faSignOut} />
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>LogOut</span>
            </Link>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Topbar;
