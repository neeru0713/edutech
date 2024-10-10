import React from 'react';

const Account = ({ user }) => {
  return (
    <div className="p-0 md:p-6">
      <h2 className="font-bold text-xl mb-4">Account Details</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="mb-2"><strong>Name:</strong> {user?.name}</p>
        <p className="mb-2"><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
};

export default Account;
