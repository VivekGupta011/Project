import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Logincompo } from '@/components/Login';
import { Login } from './_components';
type FormData = {
  identifier: string;
  password: string;
};
const Loginn = () => {
  return <Login />;
};

export default Loginn;
