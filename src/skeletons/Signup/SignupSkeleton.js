import React from 'react';
import Skeleton from 'react-loading-skeleton'
import classes from '../../containers/Auth/Auth.module.css';

const SignupSkeleton = () => (
  <section className="">
    <div className="grid grid-cols-1 md:grid-cols-3 card hover:shadow-lg w-3/4 mx-auto">
        <div className="md:w-4/6 md:col-span-2 py-4 mx-auto">
          <div className="flex justify-between items-center w-max">
            <Skeleton height={30} width={30} style={{ borderRadius: "50%" }} />
            <span className="font-bold">Create an Account</span>
          </div>
          <p className="text-blue-300">People all over the world come to visit Rwanda</p>
          <div className={classes.Auth}>
          <form data-testid="form" className="grid grid-cols-1 mx-auto mt-4 gap-2 w-full">
            <div className="grid gap-2 md:grid-cols-2">
              <Skeleton height={30} />
              <Skeleton height={30} />
            </div>
            <Skeleton height={30} />
            <Skeleton height={30} />
            <br />
            <Skeleton height={30} style={{ width: '70%' }} />
          </form>
        </div>
      </div>
      <div className="col-start-3 hidden md:block">
        <Skeleton height={500} className="w-full" />
      </div>
    </div>
  </section>
);

export default SignupSkeleton;
