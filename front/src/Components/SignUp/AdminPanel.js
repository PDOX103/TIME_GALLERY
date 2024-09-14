import { useEffect, useState } from 'react';
import React from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
//   const [userProfile, setUserProfile] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/user-details', {
//           method: 'GET',
//           credentials: 'include', // Send cookies with the request
//         });

//         const json = await response.json();

//         if (response.ok) {
//           setUserProfile(json.data); // Set the user data (use json.data based on the API response structure)
//         } else {
//           console.error('Failed to fetch user details:', json.message);
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

  return (
    <div className="min-h-[calc(100vh-120px)] flex">
      <aside className="bg-white min-h-full w-full max-w-60 flex flex-col items-center pt-4 customShadow">
        <div className="h-32 bg-red-100 flex justify-center items-center w-60 -mt-4">
          {/* Avatar */}
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://i.pinimg.com/564x/cd/5a/7b/cd5a7bf0cfd2fb98a708f3d0b2afeee6.jpg"
              />
            </div>
          </div>

          {/* Display user name */}
          {/* {userProfile && (
            <div className="mt-2 text-center">
              <h2 className="text-lg font-bold">{userProfile.name}</h2>
              <p className="text-sm text-gray-500">{userProfile.email}</p> 
            </div>
          )} */}
        </div>
      </aside>

      <main className="w-full">
        <h1 className="text-xl font-bold p-4">Admin Panel</h1>
        {/* Add more content here */}
      </main>
    </div>
  );
};

export default AdminPanel;
