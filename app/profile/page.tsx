

"use client";
import { useState, useEffect } from 'react';
import { User, Phone, Mail, Calendar, Edit2, Shield, CheckCircle, X, Image as ImageIcon } from 'lucide-react';

interface UserProfile {
  id: string;
  name: string;
  email?: string;
  phone_number: string;
  role: string;
  status: string;
  createdAt: string;
  last_login_at?: string;
  image?: string;
}

interface UpdateFormData {
  name: string;
  phone_number: string;
  image: string;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  
  const [formData, setFormData] = useState<UpdateFormData>({
    name: '',
    phone_number: '',
    image: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const accessToken = getCookie("access_token");
      
      if (!accessToken) {
        setError("Please login to view your profile");
        setLoading(false);
        return;
      }

      const response = await fetch(
        "https://mcq-analysis.vercel.app/api/v1/user/auth",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
        }
      );

      const data = await response.json();

      if (response.ok && data.success && data.data) {
        setProfile(data.data);
        setFormData({
          name: data.data.name,
          phone_number: data.data.phone_number,
          image: data.data.image || ''
        });
      } else {
        setError("Failed to load profile");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setUpdateError(null);
  };

  const handleUpdateProfile = async () => {
    setUpdateLoading(true);
    setUpdateError(null);
    
    try {
      const accessToken = getCookie("access_token");
      
      if (!accessToken) {
        setUpdateError("Authentication required");
        setUpdateLoading(false);
        return;
      }

      const response = await fetch(
        "https://mcq-analysis.vercel.app/api/v1/user/self",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setUpdateSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setUpdateSuccess(false);
          fetchProfile(); // Refresh profile data
        }, 1500);
      } else {
        setUpdateError(data.message || "Failed to update profile");
      }
    } catch (err) {
      setUpdateError("Network error. Please try again.");
    } finally {
      setUpdateLoading(false);
    }
  };

  const openModal = () => {
    if (profile) {
      setFormData({
        name: profile.name,
        phone_number: profile.phone_number,
        image: profile.image || ''
      });
    }
    setIsModalOpen(true);
    setUpdateError(null);
    setUpdateSuccess(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdateError(null);
    setUpdateSuccess(false);
  };

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-800 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Profile</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <a
            href="/login"
            className="inline-block bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
            {/* Cover Image */}
            <div className="h-48 bg-gradient-to-r from-green-800 to-emerald-900 relative">
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Profile Info */}
            <div className="relative px-6 pb-6">
              {/* Avatar */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-20 mb-4">
                <div className="relative">
                  {profile.image ? (
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-8 border-white shadow-xl object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-green-800 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold border-8 border-white shadow-xl">
                      {getUserInitials(profile.name)}
                    </div>
                  )}
                  {profile.status === 'active' && (
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                  )}
                </div>

                {/* Name and Role */}
                <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left flex-1">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                    {profile.name}
                  </h1>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 capitalize">
                      <Shield className="w-4 h-4 mr-1" />
                      {profile.role}
                    </span>
                    {profile.status === 'active' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Active
                      </span>
                    )}
                  </div>
                </div>

                {/* Edit Button */}
                <button
                  onClick={openModal}
                  className="mt-4 sm:mt-0 flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition transform hover:scale-105 shadow-lg"
                >
                  <Edit2 className="w-5 h-5" />
                  <span className="font-semibold">Edit Profile</span>
                </button>
              </div>
            </div>
          </div>

          {/* Information Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-green-800" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                  Contact Information
                </h2>
              </div>

              <div className="space-y-4">
                {/* Phone Number */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Phone Number</p>
                    <p className="text-lg text-gray-900 font-medium">{profile.phone_number}</p>
                  </div>
                </div>

                {/* Email */}
                {profile.email && (
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Email Address</p>
                      <p className="text-lg text-gray-900 font-medium break-all">{profile.email}</p>
                    </div>
                  </div>
                )}

                {/* User ID */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">User ID</p>
                    <p className="text-sm text-gray-900 font-mono">{profile.id}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Details Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-800" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                  Account Details
                </h2>
              </div>

              <div className="space-y-4">
                {/* Account Created */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Account Created</p>
                    <p className="text-lg text-gray-900 font-medium">{formatDate(profile.createdAt)}</p>
                  </div>
                </div>

                {/* Last Login */}
                {profile.last_login_at && (
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Last Login</p>
                      <p className="text-lg text-gray-900 font-medium">{formatDate(profile.last_login_at)}</p>
                    </div>
                  </div>
                )}

                {/* Account Status */}
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-800 font-semibold mb-1">Account Status</p>
                      <p className="text-2xl text-green-900 font-bold capitalize">{profile.status}</p>
                    </div>
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">0</h3>
              <p className="text-gray-600 font-medium">Total Exams</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">0%</h3>
              <p className="text-gray-600 font-medium">Average Score</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">0</h3>
              <p className="text-gray-600 font-medium">Study Streak</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Edit Profile
              </h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {updateSuccess && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">Profile updated successfully!</span>
                </div>
              )}

              {updateError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-800 font-medium">{updateError}</span>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent transition outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent transition outline-none"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              {/* Image URL Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profile Image URL
                </label>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent transition outline-none"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  {formData.image && (
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-gray-200">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">Enter a direct image URL</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3 justify-end">
              <button
                onClick={closeModal}
                disabled={updateLoading}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateProfile}
                disabled={updateLoading}
                className="px-6 py-3 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-900 transition disabled:opacity-50 flex items-center gap-2"
              >
                {updateLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}