import React, { useEffect, useState } from "react";

function Navbar() {
  const navItems = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#project">Project</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`max-w-screen-2xl mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-10 
      ${sticky ? "bg-slate-600" : ""}`}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="flex justify-between items-center py-3">
          <div className="flex flex-row">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-700 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <div className="text-3xl font-bold">Alok Kumar Gupta</div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">{navItems}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
