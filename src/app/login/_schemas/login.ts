import { InferType, object, ref, string } from 'yup';

export const loginFormSchema = object({
  identifier: string()
    .max(70, 'Too Long!')
    .email('Invalid email address.')
    .required('Email is required.'),
  password: string().required('Password is required.'),
});

export type loginFormData = InferType<typeof loginFormSchema>;
