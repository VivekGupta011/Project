'use client';
import { ErrorIcon } from '@/components/icon/erroricon';
import { PasswordHideIcon } from '@/components/icon/hidepass';
import { PasswordShowIcon } from '@/components/icon/showpassword';
import React, { useState } from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { className, error, type, ...rest }: Props,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={passwordVisible ? 'text' : type}
          className={`tracking-widest border text-base px-5 py-3.5 text-vink-blue-dark font-medium outline-none w-full relative ${className} ${
            error ? 'border-red-500' : 'border-vink-grey-dark '
          }`}
          {...rest}
        />
        {error && (
          <div className="absolute right-0 -translate-x-1/2 -translate-y-1/2 top-1/2">
            <ErrorIcon />
          </div>
        )}
        {!error && type === 'password' && (
          <div
            className="absolute right-0 -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <PasswordHideIcon /> : <PasswordShowIcon />}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
