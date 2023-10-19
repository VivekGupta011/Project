import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import { setToken } from '@/lib/auth';
import { date } from 'yup';

interface ErrorResponse {
  error: {
    message: string;
  };
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const apiUrl = `${process.env.BASE_API_URL}/api/auth/local`;
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.JWT_TOKEN}`,
      },
    };
    const response = await axios.post(
      apiUrl,
      {
        identifier: data.identifier,
        password: data.password,
      },
      config
    );

    if (response.status === 200) {
      // Extract the JWT and other data from the response
      const jwtToken = response.data.jwt; // Assuming the JWT key is 'jwt' in the response
      const userData = response.data.user; // Assuming the user data is present in the 'user' key

      // Store the JWT and user data in cookies or state (optional)
      //setToken({ jwt: jwtToken, user: userData });

      // Return the JWT and user data as part of the response
      return NextResponse.json({ jwt: jwtToken, user: userData });
    } else {
      // Handle other successful response statuses if needed
      return NextResponse.json('Unexpected response status', {
        status: response.status,
      });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        // If there is a response in the error, handle it
        const errorResponseData = axiosError.response.data as ErrorResponse; // Type assertion
        const errorMessage = errorResponseData.error.message;
        const errorStatus = axiosError.response.status;
        return NextResponse.json(errorMessage, { status: errorStatus });
      } else {
        // Handle other Axios errors
        return NextResponse.json('Axios error without response');
      }
    } else {
      // Handle other non-Axios errors
      return NextResponse.json('Unknown error');
    }
  }
}
