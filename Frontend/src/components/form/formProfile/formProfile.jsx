import React, { useState, useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import Axios from 'axios';

const ProfileEditForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('authToken');
        console.log('Token yang digunakan: ', token);
  
        if (!token) {
          setMessage('Token tidak tersedia, silakan login kembali.');
          setLoading(false);
          return;
        }
  
        const response = await Axios.get('http://127.0.0.1:8000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
  
        console.log('Response dari server: ', response.data);
  
        if (!response.data) {
          setMessage('Response tidak valid');
          return;
        }
  
        const { name, email } = response.data;
  
        console.log('Nama dan email dari server: ', name, email);
  
        // Perbarui formData
        setFormData({
          name: name ?? '',
          phone: '', 
          email: email ?? '',
          password: '',
        });
  
        setIsEditing(false);
        setMessage('');
      } catch (error) {
        console.error('Error saat mengambil profil:', error.response);
        setMessage('Terjadi kesalahan saat memuat profil');
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);
  
  
  
  
  console.log('State formData sebelum render: ', formData);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await Axios.put(
        'http://127.0.0.1:8000/api/profile',
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          password: formData.password || undefined, // Only send password if it is updated
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        }
      );

      setMessage(response.data.message || 'Profile updated successfully.');
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
      setMessage(
        error.response?.data?.message || 'Failed to update profile. Please try again.'
      );
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setMessage('');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

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
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-md focus:outline-none"
              />
            ) : (
              <p className="text-lg font-medium">{formData.name}</p>
            )}
          </div>

          {/* Phone Number */}


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
              <p className="text-lg font-medium">********</p>
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

        {/* Message */}
        {message && <p className="mt-4 text-center text-yellow-400">{message}</p>}
      </div>
    </div>
  );
};

export default ProfileEditForm;