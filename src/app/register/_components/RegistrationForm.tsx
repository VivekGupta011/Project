'use client';
import { Button, Input, RadioButton } from '@/components/layouts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  registrationFormData,
  registrationFormSchema,
} from '../_schemas/registration';
import { addNewRegistration } from '../_services/registration';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ProcessingLoader } from '@/components/icon/loader';

const RegistrationForm = () => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<registrationFormData>({
    resolver: yupResolver(registrationFormSchema),
  });

  const submitHandler = async (data: registrationFormData) => {
    setIsSubmitting(true);
    const response = await addNewRegistration(data);
    if (!response.ok) {
      setIsSubmitting(false);
      const responseJson = await response.json();
      setError('root.serverError', {
        message:
          typeof responseJson === 'string'
            ? responseJson
            : 'Something went wrong. Please try again.',
      });
    } else {
      router.push('/login');
    }
  };

  const errorMsg =
    errors.root?.serverError.message ??
    errors.firstname?.message ??
    errors.lastname?.message ??
    errors.email?.message ??
    errors.userType?.message ??
    errors.password?.message ??
    errors.verifypassword?.message;

  return (
    <form
      className="flex flex-col items-center justify-start gap-5"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="text-lg font-medium text-center text-black">
        CREATE AN ACCOUNT
      </h2>
      <div className="grid w-full grid-cols-2 gap-5">
        <Input
          {...register('firstname')}
          placeholder="Firstname*"
          name="firstname"
          type="text"
          error={errors.firstname?.message}
        />
        <Input
          {...register('lastname')}
          placeholder="Lastname*"
          name="lastname"
          type="text"
          error={errors.lastname?.message}
        />
      </div>
      <Input
        {...register('email')}
        placeholder="Email*"
        name="email"
        type="email"
        error={errors.email?.message}
      />

      <div className="grid w-full grid-cols-2 gap-5">
        <RadioButton
          {...register('userType')}
          label="Individual User"
          error={errors.userType?.message}
        />
        <RadioButton
          {...register('userType')}
          label="Company"
          error={errors.userType?.message}
        />
      </div>

      <Input
        {...register('password')}
        placeholder="Password"
        type="password"
        error={errors.password?.message}
      />
      <Input
        {...register('verifypassword')}
        placeholder="Re-enter Password"
        name="verifypassword"
        type="password"
        error={errors.verifypassword?.message}
      />
      {errorMsg && (
        <div className="w-full p-1 text-xs font-semibold text-center text-red-600 border border-red-500">
          {errorMsg}
        </div>
      )}
      <Button type="submit" btnStyle="LIGHT_PURPLE" className="w-full">
        {isSubmitting ? <ProcessingLoader /> : 'Sign up'}
      </Button>
    </form>
  );
};

export default RegistrationForm;
