'use client';
import React from 'react';
import Image from 'next/image';
import loginRight from '../../../../../public/assests//bg@2x.png';
import vinklogolarge from '../../../../../public/assests/black logo.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import { checkLogin } from '@/app/login/_services/login';
import Link from 'next/link';
import { Back } from '../icon/Backicon';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import LoginDetail from '@/app/login/_components/LoginDetail';
import LoginLogo from '@/app/login/_components/LoginLogo';

type LoginFormValues = {
  identifier: any;
  password: string;
};

interface LoginFormProps {
  onSubmit: SubmitHandler<FormData>;
}

const Logincompo = () => {
  const router = useRouter();
  //   const { register, handleSubmit, formState } = useForm<FormData>();
  const { register, handleSubmit, getValues, formState } =
    useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    console.log('data:');
    console.log(data);
    const response = await checkLogin(data);
    console.log('response:');
    console.log(response);
    if (!response.ok) {
      alert('failed!');
    } else {
      router.push('/');
      alert('success!');
    }
    console.log('logindata:');
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12">
          <div
            className="h-screen md:col-span-7 hidden sm:block !bg-center !bg-no-repeat !bg-cover"
            style={{ background: `url(${loginRight.src})` }}
          ></div>
          {/* back icon */}
          <div className="absolute top-[14px] right-[16px]">
            <button
              onClick={() => {
                router.push('/');
              }}
            >
              {' '}
              <Back />
            </button>
          </div>
          {/* component */}
          <div className="flex items-center justify-center col-span-12 py-4 sm:items-center lg:items-center md:col-span-5">
            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}

            <div className="w-1/2 py-10 bg-white">
              <LoginLogo />
              <div>
                {/* <label
                  id="email"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Email/Mobile
                </label> */}
                <input
                  aria-labelledby="email"
                  placeholder=" Email/Mobile"
                  id="identifier"
                  type="email"
                  {...register('identifier', {
                    required: 'Email is required',
                  })}
                  className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-black placeholder-black border rounded"
                />
                {formState.errors.identifier && (
                  <p className="py-3 text-black error">
                    {' '}
                    Please add valid username and password!
                  </p>
                )}
              </div>
              <div className="w-full mt-6">
                {/* <label
                  htmlFor="pass"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Password
                </label> */}
                <div className="relative flex items-center justify-center">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-black placeholder-black border rounded"
                  />
                </div>
                {formState.errors.password && (
                  <p className="py-3 text-black error">
                    {formState.errors.password.message}
                  </p>
                )}
              </div>
              <div className="mt-8">
                <button
                  role="button"
                  type="submit"
                  className="w-full py-4 text-sm font-semibold leading-none text-white bg-[#FF5B9F] border rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none hover:bg-indigo-600"
                >
                  login
                </button>
              </div>
              <LoginDetail />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Logincompo;
