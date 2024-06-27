import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-indigo-500 shadow-md px-4 py-2 rounded-md flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            Time-Gallery⌚
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-64 lg:w-80 pl-8"
            />
            <svg
              className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 11a4 4 0 100-8 4 4 0 000 8zm2 2l-2 2m2-2l2 2m-2-2V6"
              />
            </svg>
          </div>
          <div className="relative">
            <button className="btn btn-ghost btn-circle">
              <img src='./front/images/shopping-cart.png'/>
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://i.pinimg.com/564x/cd/5a/7b/cd5a7bf0cfd2fb98a708f3d0b2afeee6.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white border rounded-lg mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <a className="flex justify-between items-center text-gray-700 hover:bg-gray-100">
                  Profile
                  <span className="badge bg-blue-500 text-white">New</span>
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:bg-gray-100">Settings</a>
              </li>
              <li>
                <a className="text-gray-700 hover:bg-gray-100">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
