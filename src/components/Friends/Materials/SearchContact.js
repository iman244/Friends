import React, { useState } from "react";

function SearchContact({ setQueryFullName }) {
  return (
    <div className="mx-3 my-3">
      <div className="relative text-gray-600">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-gray-300"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input
          type="search"
          className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
          name="search"
          placeholder="Search"
          onChange={(event) => {
            setQueryFullName(event.target.value);
          }}
          // value={queryFullName}
          required
        />
      </div>
    </div>
  );
}

export default SearchContact;
