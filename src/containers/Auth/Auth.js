/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import accomodationImage from '../../assets/images/accomodationImage.png';
import { auth } from '../../store/actions/index';
import logo from '../../assets/icons/logo.svg';
import { logoCSS, buttonCSS } from '../../styles/index';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/NavBar';
import SignupSkeleton from '../../skeletons/Signup/SignupSkeleton';
import classes from './Auth.module.css';

const schema = yup.object().shape({
  firstName: yup.string().required('No first name provided'),
  lastName: yup.string().required('No last name provided'),
  email: yup.string().email().required('No email provided'),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Auth = (props) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    props.onAuth(data.firstName, data.lastName, data.email, data.password);
  };

  const logoClasses = [...logoCSS];
  const buttonClasses = [...buttonCSS];
  if (props.loading) {
    logoClasses.push('animate-spin');
    buttonClasses.push('cursor-not-allowed');
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (props.message) {
      props.history.push({
        pathname: '/register-success',
        message: props.message,
      });
    } else if (props.error && props.error.includes('Network')) {
      toast.warning('Sorry, We are in troubleshoting the system', {
        position: 'top-center',
      });
    } else if (props.error) {
      toast.error(props.error, {
        position: 'top-center',
      });
      reset({});
    }
  }, [props.message, props.error]);

  return (
    <div className="bg-gray-100 w-full m-0">
      <Header />
      {!loaded ? (
        <SignupSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 card hover:shadow-lg w-3/4 mx-auto">
          <div className="md:w-4/6 md:col-span-2 py-4 mx-auto">
            <div className="flex justify-between items-center w-max">
              <img className={logoClasses.join(' ')} src={logo} alt="log" />
              <span className="font-bold">Create an Account</span>
            </div>
            <p className="text-blue-300">People all over the world come to visit Rwanda</p>
            <div className={classes.Auth}>
              <ToastContainer />
              <form
                data-testid="form"
                className="grid mt-4 md:grid-cols-2 text-left gap-1 w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="md:col-span-1 md:w-5/6 flex-row">
                  <label htmlFor="firstName">
                    <span className="font-semibold">First Name:</span>
                    <input
                      className="outline-none focus:bg-gray-300 focus:border-gray-700 mt-1 w-full border-gray-400 border-2 rounded-sm py-1 px-2"
                      id="firstName"
                      type="text"
                      name="firstName"
                      ref={register}
                    />
                  </label>
                  <p className="text-red-500 text-center">{errors.firstName?.message}</p>
                </div>

                <div className="flex-row w-full">
                  <label htmlFor="lastName">
                    <span className="font-semibold">Last Name:</span>
                    <input
                      className="outline-none focus:bg-gray-300 focus:border-gray-700 mt-1 w-full border-gray-400 border-2 rounded-sm py-1 px-2"
                      type="text"
                      name="lastName"
                      ref={register}
                    />
                  </label>
                  <p className="text-red-500 text-center">{errors.lastName?.message}</p>
                </div>

                <div className="md:col-span-full flex-row w-full">
                  <label htmlFor="email">
                    <span className="font-semibold">E-mail:</span>
                    <input
                      className="outline-none focus:bg-gray-300 focus:border-gray-700 mt-1 w-full border-gray-400 border-2 rounded-sm py-1 px-2"
                      type="email"
                      name="email"
                      ref={register}
                    />
                  </label>
                  <p className="text-red-500 text-center">{errors.email?.message}</p>
                </div>

                <div className="md:col-span-full relative flex-row w-full">
                  <label htmlFor="password">
                    <span className="font-semibold">Password:</span>
                    <input
                      className="col-span-2 outline-none focus:bg-gray-300 focus:border-gray-700 mt-1 w-full border-gray-400 border-2 rounded-sm py-1 px-2"
                      type={passwordShown ? 'text' : 'password'}
                      name="password"
                      ref={register}
                    />
                    <svg
                      onClick={togglePasswordVisiblity}
                      className="absolute w-5 h-5 right-2 top-9 hover:text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                  <p className="text-red-500 text-center">{errors.password?.message}</p>
                </div>

                <input className={buttonClasses.join(' ')} type="submit" value="Register" />
              </form>
            </div>
          </div>
          <div className="col-start-3 hidden md:block">
            <img
              src={accomodationImage}
              alt="accomodation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  message: state.auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  onAuth: (firstName, lastName, email, password) =>
    dispatch(auth(firstName, lastName, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
