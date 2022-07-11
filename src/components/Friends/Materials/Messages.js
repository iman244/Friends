import React from "react";

function Messages() {
  return (
    <>
      <li className="flex justify-start">
        <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
          <span className="block">Hi</span>
        </div>
      </li>
      <li className="flex justify-end">
        <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
          <span className="block">Hiiii</span>
        </div>
      </li>
      <li className="flex justify-end">
        <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
          <span className="block">how are you?</span>
        </div>
      </li>
      <li className="flex justify-start">
        <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
          <span className="block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </span>
        </div>
      </li>
    </>
  );
}

export default Messages;
