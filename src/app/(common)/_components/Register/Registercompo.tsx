'use client';
import React from 'react';
import Image from 'next/image';
import loginRight from '../../../../../public/assests//bg@2x.png'
import vinklogolarge from '../../../../../public/assests/black logo.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Back } from '../icon/Backicon';


type LoginFormValues = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
  organizaion: string;
};

interface LoginFormProps {
  onSubmit: SubmitHandler<FormData>;
}

const Registercompo = () => {

  const router = useRouter();
  const notify = () => {
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const [checkpassword, setCheckpassword] = useState(false);
  const [isIndividual, setIsIndividual] = useState(true); // Initialize as true

  const handleIndividualChange = () => {
    setIsIndividual(!isIndividual); // Toggle the state when the checkbox is clicked
    clearFormData(); // Clear form data when switching to Individual
  };

  const handleOrganizationChange = () => {
    setIsIndividual(!isIndividual); // Toggle the state when the checkbox is clicked
    clearFormData(); // Clear form data when switching to Organization
  };

  //   const { register, handleSubmit, formState } = useForm<FormData>();
  const { register, handleSubmit, getValues, formState, reset } =
    useForm<LoginFormValues>();


  // for empty data
  const clearFormData = () => {
    reset({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
      organizaion: '', // If we have an organization field
    });
  };

  // // Navigate to the "about" page
  const navigateToHometPage = () => {
    router.push('/');
  };

  const onSubmit = async (data: LoginFormValues) => {
    const { username, email, password, confirmpassword } = data;

    // Actual authentication token
    const token = '78a80ec469540f71e3d8ceda16a1b22398ad7583f0e21a50e21aa49b82bf80a165df5902f9be1fbdf071df8a9ea6244b351e6f4fd76d519f80eaf96f40e8fe240d12345667d7595f8635d40adce14817bd9f1540e48ad78e1ba7f02ae0f838d03c280ee300b7dcf763967f3e88160efb07bd0cf34018ad2d0919935f0ce2b11f';

    try {

      const res = await axios.post('/api/register', { ...data });
      if (res.statusText == "OK") {
        notify();
        <ToastContainer />
        toast.success('Successfully Registered!')
        alert('Successfully Registered!')
        navigateToHometPage();
      } else {
        toast.success('Successfully Failed!')

      }
      console.log("response:");
      console.log(res);
    } catch (error) {
      console.error('Error:', error);

      if (password !== confirmpassword) {
        console.log("password");
        setCheckpassword(true);
        return;
      }

      console.log('data:', data);
      console.log(data);
      setCheckpassword(false);
    }
  };






  // Define password validation rules
  const passwordValidation = {
    required: 'Password is required',
    minLength: {
      value: 6, // Change this value to set your minimum password length
      message: 'Password must be at least 6 characters long',
    },
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="grid grid-cols-12">
          <div className="h-screen col-span-6 hidden sm:block !bg-center !bg-no-repeat !bg-cover" style={{ background: `url(${loginRight.src})` }}></div>
          <div className="flex justify-center items-center sm:items-center lg:items-center col-span-12 py-4 sm:col-span-6">
            {/* back icon */}
            <div className='absolute top-[14px] right-[16px]'>
              <button onClick={() => { router.push('/') }}>  <Back /></button>
            </div>
            <div className=" px-8 py-10 bg-white sm:w-full md:w-1/2">
              <div className="flex justify-center h">
                <Image
                  src={vinklogolarge}
                  alt="External Image"
                  width={150}
                  height={80}
                />
              </div>
              <div className="flex justify-center">
                <p className="text-black">Register</p>
              </div>
              <div className='flex flex-row space-x-4'>
                <div className='w-1/2'>
                  <input
                    aria-labelledby="email"
                    placeholder=" First Name"
                    id="username"
                    type="text"
                    {...register('username', {
                      required: 'firstname is required',
                    })}
                    className="w-full py-3 pl-3 mt-4 text-xs font-medium leading-none text-black border rounded placeholder-black"
                  />
                  {formState.errors.email && (
                    <p className="error text-black py-3">
                      {' '}
                      Please add valid username and password!
                    </p>
                  )}
                </div>
                <div className='w-1/2'>
                  <input
                    aria-labelledby="email"
                    placeholder=" Last Name"
                    id="lastname"
                    type="text"
                    {...register('lastname', {
                      required: 'lastname is required',
                    })}
                    className="w-full py-3 pl-3 mt-4 text-xs font-medium leading-none text-black border rounded placeholder-black"
                  />
                  {formState.errors.email && (
                    <p className="error text-black py-3"> lastname is required</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  aria-labelledby="email"
                  placeholder=" Email/Mobile"
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  className="w-full py-3 pl-3 mt-4 text-xs font-medium leading-none text-black border rounded placeholder-black placeholder-black"
                />
                {formState.errors.email && (
                  <p className="error text-black py-3">
                    {' '}
                    Please add valid username and password!
                  </p>
                )}
              </div>

              <div className='flex flex-row justify-start items-baseline'>
                {/* Individual Radio Button */}
                <div className="mt-4 flex items-center mr-5">
                  <input
                    type="radio"
                    id="individualRadio"
                    name="accountType"
                    checked={isIndividual}
                    onChange={handleIndividualChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="individualRadio"
                    className={`cursor-pointer'
                    }`}
                  ></label>
                  <span>Individual</span>
                </div>

                {/* Organization Radio Button */}
                <div className="mt-2 flex items-center">
                  <input
                    type="radio"
                    id="organizationRadio"
                    name="accountType"
                    checked={!isIndividual}
                    onChange={handleOrganizationChange}
                    className="mr-2"
                  />
                  <label
                    htmlFor="organizationRadio"
                    className={`cursor-pointer'
                    }`}
                  ></label>
                  <span>Company</span>
                </div>
              </div>


              {
                !isIndividual && (
                  <div>
                    <input
                      aria-labelledby="email"
                      placeholder="Organization name"
                      id="organizaion"
                      type="text"
                      {...register('organizaion', {
                        required: 'Organization is required',
                      })}
                      className="w-full py-3 pl-3 mt-4 text-xs font-medium leading-none text-black border rounded placeholder-black"
                    />
                    {formState.errors.organizaion && (
                      <p className="error text-black py-3">
                        {' '}
                        Please add valid organization name!
                      </p>
                    )}
                  </div>
                )
              }

              <div className="w-full">
                <div className="relative flex items-center justify-center">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    {...register('password', passwordValidation)} // Apply validation rules
                    className="w-full py-3 pl-3 mt-4 text-xs font-medium leading-none text-black border rounded placeholder-black"
                  />


                </div>
                {formState.errors.password && (
                  <p className="error text-black py-3">{formState.errors.password.message}</p>
                )}
              </div>
              <div className="w-full">
                <div className="relative flex items-center justify-center">
                  <input
                    type="password" // Corrected from "confirmpassword"
                    placeholder="Re-enter password"
                    id="confirmpassword"
                    {...register('confirmpassword')} // Apply validation rules
                    className="w-full py-3 pl-3 mt-4 text-xs font-medium leading-none text-black border rounded placeholder-black"
                  />



                </div>
                {checkpassword && (
                  <p className="error text-black py-3">{"Password do not match!"}</p>
                )}
              </div>
              <div className="mt-8">
                <button
                  role="button"
                  type="submit"
                  className="w-full py-4 text-sm font-semibold leading-none text-white bg-[#FF5B9F]  border rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none hover:bg-indigo-600"
                >
                  Sign up
                </button>
              </div>
              <div>
                <p className='text-[#7E7E7E] my-5 mx-8 text-center'>By clicking the “Sign up” button, you are creating a Vink account and therefore you agree to Vink’s Terms of Use and Privacy Policy.</p>
              </div>
              <div className="flex justify-end py-3">
                <p className=" text-[#2963FF]">Forgot Password?</p>
              </div>
              <div className="flex justify-center py-3">
                <p className="text-black ">Don’t you have an account?</p>
              </div>
              <div className="flex justify-center py-3 w-fullfont-semibold text-[#8E45D0] bg-transparent  border-[#8E45D0] border-2 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                <Link className="" href="/login">
                  <button>Sign in</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </form >
    </>
  );
};

export default Registercompo;

