import React from "react";

const Profile = () => {
  return (
    <div className="max-w-screen-md m-8 mx-auto p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <img
          src="/images/user.svg" // Replace with your avatar image path
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover mr-6"
        />
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">John Doe</h1>
          <p className="text-gray-600">john.doe@example.com</p>
          <p className="text-gray-600">Joined: January 1, 2023</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Profile Information
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Full Name:</span>
            <span className="text-gray-800">John Doe</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span className="text-gray-800">john.doe@example.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone:</span>
            <span className="text-gray-800">+123 456 7890</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Location:</span>
            <span className="text-gray-800">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Account Settings
        </h2>
        <div className="space-y-4">
          <button className="w-full text-left py-2 px-4 border rounded-md text-gray-800 hover:bg-gray-50">
            Change Password
          </button>
          <button className="w-full text-left py-2 px-4 border rounded-md text-gray-800 hover:bg-gray-50">
            Privacy Settings
          </button>
          <button className="w-full text-left py-2 px-4 border rounded-md text-gray-800 hover:bg-gray-50">
            Manage Subscriptions
          </button>
          <button className="w-full text-left py-2 px-4 border rounded-md text-red-600 hover:bg-red-50">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
