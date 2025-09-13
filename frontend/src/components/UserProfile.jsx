import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * Profile Component
 * Displays user profile information with animation effects
 * Requires authentication to access
 */
const Profile = () => {
  // Redux and Router hooks
  const isAuthenticated = useSelector((state) => !!state.auth.token);
  const navigate = useNavigate();

  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  /**
   * Authentication check effect
   * Redirects to home page if user is not authenticated
   */
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Early return if no user data is found
  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 md:px-6 md:py-8">
      {/* Profile Container with fade-in animation */}
      <div
        className="w-full max-w-4xl p-6 md:p-14 text-center opacity-0 animate-fadeIn"
        style={{ animation: "fadeIn 1s ease-out forwards" }}
      >
        {/* Welcome Header */}
        <h1 className="text-3xl md:text-6xl font-extrabold mb-6 md:mb-12 tracking-wide text-blue-500">
          Welcome, {user?.username}!
        </h1>
        {/* User Information Card */}
        <div className="text-lg md:text-xl space-y-6 md:space-y-8 bg-gray-800/40 p-6 md:p-12 rounded-xl md:rounded-3xl shadow-2xl border border-gray-700">
          {/* Username Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <span className="text-gray-400 text-lg md:text-xl">👤 Username:</span>
            <span className="font-medium text-xl md:text-2xl">{user?.username}</span>
          </div>
          {/* Email Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <span className="text-gray-400 text-lg md:text-xl">📧 Email:</span>
            <span className="font-medium text-xl md:text-2xl break-all">{user?.email}</span>
          </div>
          {/* Phone Number Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <span className="text-gray-400 text-lg md:text-xl">📞 Phone:</span>
            <span className="font-medium text-xl md:text-2xl">{`+91 ${user?.phoneNumber}`}</span>
          </div>
        </div>
      </div>
      {/* CSS Animation Definition */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Profile;
