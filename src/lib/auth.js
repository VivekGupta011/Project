import Router from 'next/router';
// import Cookies from 'js-cookie';

// setting userInfo and jwt
export const setToken = data => {
  if (typeof window === 'undefined') {
    return;
  }
  // Cookies.set('id', data.user.id);
  // Cookies.set('username', data.user.username);
  // Cookies.set('jwt', data.jwt);

  // if (Cookies.get('username')) {
  //   Router.reload('/');
  // }
};

// removing data at logout
export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  // Cookies.remove('id');
  // Cookies.remove('jwt');
  // Cookies.remove('username');

  Router.reload('/');
};

// get token from browser
export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt');
};

// get token form server side component
export const getTokenFromServerCookie = req => {
  if (!req.headers.cookie || '') {
    return undefined;
  }
  const jwtCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith('jwt='));
  if (!jwtCookie) {
    return undefined;
  }
  const jwt = jwtCookie.split('=')[1];
  return jwt;
};

// get id from local cookie
export const getIdFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();
  if (jwt) {
    return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then(data => {
      return data.id;
    });
  } else {
    return;
  }
};
