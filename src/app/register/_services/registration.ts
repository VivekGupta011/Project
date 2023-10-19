import { registrationFormData } from '../_schemas/registration';

export const addNewRegistration = async (data: registrationFormData) => {
  return await fetch(`/register/api/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
