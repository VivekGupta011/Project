'use client';
import { Button, Input, RadioButton } from '@/components/layouts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema, loginFormData } from '../_schemas/login';
import { getTokenFromLocalCookie, setToken } from '../../../lib/auth';
import { checkLogin } from '../_services/login';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ProcessingLoader } from '@/components/icon/loader';

const LoginForm = () => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const submitHandler = async (data: loginFormData) => {
    setIsSubmitting(true);
    const response = await checkLogin(data);
    setIsSubmitting(false);
    if (!response.ok) {
      alert('failed!');
    } else {
      const data = await response.json();
      console.log('data:');
      console.log(data);
      setToken(data);
      router.push('/');
      const jwtData = getTokenFromLocalCookie();

      alert('success!' + jwtData);
    }
  };

  const errorMsg =
    errors.root?.serverError.message ??
    errors.identifier?.message ??
    errors.password?.message;

  return (
    <form
      className="flex flex-col items-center justify-start gap-5"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="text-lg font-medium text-center text-black">
        CREATE AN ACCOUNT
      </h2>

      <Input
        {...register('identifier')}
        placeholder="Email*"
        name="identifier"
        type="email"
        error={errors.identifier?.message}
      />

      <Input
        {...register('password')}
        placeholder="Password"
        type="password"
        error={errors.password?.message}
      />
      {errorMsg && (
        <div className="w-full p-1 text-xs font-semibold text-center text-red-600 border border-red-500">
          {errorMsg}
        </div>
      )}
      <Button type="submit" btnStyle="LIGHT_PURPLE" className="w-full">
        {isSubmitting ? <ProcessingLoader /> : 'Sign in'}
      </Button>
    </form>
  );
};

export default LoginForm;
