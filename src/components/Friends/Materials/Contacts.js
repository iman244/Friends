import React from "react";

function Contacts() {
  return (
    <>
      <li>
        <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
            alt="username"
          />
          <div className="w-full pb-2">
            <div className="flex justify-between">
              <span className="block ml-2 font-semibold text-gray-600">
                Jhon Don
              </span>
              <span className="block ml-2 text-sm text-gray-600">25 minutes</span>
            </div>
            <span className="block ml-2 text-sm text-gray-600">bye</span>
          </div>
        </a>
      </li>
      <li>
        <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
            alt="username"
          />
          <div className="w-full pb-2">
            <div className="flex justify-between">
              <span className="block ml-2 font-semibold text-gray-600">Same</span>
              <span className="block ml-2 text-sm text-gray-600">50 minutes</span>
            </div>
            <span className="block ml-2 text-sm text-gray-600">Good night</span>
          </div>
        </a>
      </li>
      <li>
        <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
            alt="username"
          />
          <div className="w-full pb-2">
            <div className="flex justify-between">
              <span className="block ml-2 font-semibold text-gray-600">Emma</span>
              <span className="block ml-2 text-sm text-gray-600">6 hour</span>
            </div>
            <span className="block ml-2 text-sm text-gray-600">Good Morning</span>
          </div>
        </a>
      </li>
    </>
  );
}

export default Contacts;
