/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ConfirmRegistration = (props) => {
  const [error, setError] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const token = query.get('token');
    console.log(token);
    axios
      .get('https://explore-rwanda-online.herokuapp.com/api/v1/users/confirm-account', {
        params: {
          token,
        },
      })
      .then((response) => {
        console.log(response);
        props.history.replace({
          pathname: '/register-success',
          message: response.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          setError('Confirm registration failed');
        }
      });
  }, []);

  return (
    <div className="px-6 py-12 font-semibold bg-gray-300 border-tertiary border-1 shadow-md object-cover rounded mx-4 my-8">
      <p className="text-center text-red-600">
        {error}, back to{' '}
        <Link className="text-blue-600" to="/">
          Register
        </Link>
      </p>
    </div>
  );
};

export default ConfirmRegistration;
