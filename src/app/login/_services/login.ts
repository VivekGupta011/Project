// login data type
type LoginCredentials = {
  identifier: string;
  password: string;
};

export const checkLogin = async (data: LoginCredentials) => {
  return await fetch(`/login/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
