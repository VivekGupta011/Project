import React from 'react';
import Link from 'next/link';

const LoginDetail = () => {
  return (
    <>
      <div className="flex justify-end py-3">
        <p className=" text-[#2963FF] underline">Forgot Password?</p>
      </div>
      <div className="flex justify-center py-3">
        <p className="font-semibold text-black ">Don’t you have an account?</p>
      </div>
      <div className="flex justify-center py-3 w-fullfont-semibold text-[#065D4D] bg-transparent  border-[#065D4D] border-2 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
        <Link className="" href="/register">
          <button>Sign up</button>
        </Link>
      </div>
    </>
  );
};

export default LoginDetail;
