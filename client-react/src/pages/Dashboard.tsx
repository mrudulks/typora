import React from 'react';
export const Dashboard: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Welcome to your dashboard!
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                This is a protected page. You can only see this if you're authenticated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};