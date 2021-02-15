import React from 'react';
import { Link } from 'react-router-dom';
import Mia from '../../assets/images/profile.jpg';

function CartTestmonials() {
  return (
    <div className="shadow-lg bg-white  flex flex-col justify-around items-center mb-10 md:mb-0">
      <div className="w-2/4  px-4 pt-5">
        <img
          src={Mia}
          alt="Mia"
          className="h-32 w-32 object-cover shadow-lg rounded-full border-none overflow-hidden "
        />
      </div>
      <div>
        <h3 className="text-blue-500 text-2xl font-semibold">Mia Benitha</h3>
        <p>Student at UR</p>
      </div>
      <div className="flex justify-between">
        <p className="px-10 py-5 text-center">
        Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.
        Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.
        Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
      <div className="pb-5 text-blue-600 ">
        <Link to="/">
          <i className="fab fa-twitter pr-2 hover:text-blue-400" />
        </Link>
        <Link to="/">
          <i className="fab fa-facebook pr-2 hover:text-blue-400" />
        </Link>
        <Link to="/">
          <i className="fab fa-linkedin hover:text-blue-400" />
        </Link>
      </div>
    </div>
  );
}

export default CartTestmonials;
