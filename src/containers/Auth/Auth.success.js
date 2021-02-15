/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const AuthSuccess = (props) => (
  <div className="px-6 py-12 font-semibold bg-gray-300 border-tertiary border-1 shadow-md object-cover rounded mx-4 my-8">
    <p className="text-center text-blue-600">{props.location.message}</p>
  </div>
);

export default AuthSuccess;
