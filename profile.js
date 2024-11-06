// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(res.data);
    };
    fetchProfile();
  }, []);
  
  if (!profile) return <div>Loading...</div>;
  
  return (
    <div className="p-4">
      <img src={profile.avatar} alt="Profile" className="w-24 h-24 rounded-full" />
      <h2 className="text-xl">{profile.name}</h2>
      <p>{profile.email}</p>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default Profile;
