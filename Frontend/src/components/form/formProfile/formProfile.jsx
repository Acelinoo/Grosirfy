import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const ProfileEditForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    phone: '123456789',
    email: 'john.doe@example.com',
    password: 'password123',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log('Data saved:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[100%] max-w-[65%] bg-[#1ABC9C] p-6 ml-[15%] rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-white">Personal Information</h1>
          {!isEditing && (
            <button
              onClick={handleEditClick}
              className="text-white hover:text-gray-200 transition cursor-pointer"
            >
              <FiEdit size={24} />
            </button>
          )}
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-white">
          {/* Full Name */}
          <div>
            <p className="text-sm">Full Name</p>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
              />
            ) : (
              <p className="text-lg font-medium">{formData.fullName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <p className="text-sm">Phone Number</p>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
              />
            ) : (
              <p className="text-lg font-medium">{formData.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <p className="text-sm">Email</p>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
              />
            ) : (
              <p className="text-lg font-medium">{formData.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <p className="text-sm">Password</p>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
              />
            ) : (
              <p className="text-lg font-medium">{formData.password}</p>
            )}
          </div>
        </div>

        {/* Save/Cancel Buttons */}
        {isEditing && (
          <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileEditForm;