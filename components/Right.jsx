import React from "react";

const Right = () => {
  return (
    <div className="right-sidebar bg-gray-100 p-4 w-80 h-full">
      <div className="suggestions bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Suggestions</h2>
        <ul>
          <li className="mb-2">Jane Smith - UX Designer</li>
          <li className="mb-2">Mike Johnson - Product Manager</li>
          <li className="mb-2">Emily Davis - Data Scientist</li>
        </ul>
      </div>
      <div className="trending bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Trending Topics</h2>
        <ul>
          <li className="mb-2">#ReactJS</li>
          <li className="mb-2">#WebDevelopment</li>
          <li className="mb-2">#AI</li>
        </ul>
      </div>
    </div>
  );
};

export default Right;
