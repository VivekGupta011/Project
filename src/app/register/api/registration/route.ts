import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

interface ErrorResponse {
  error: {
    message: string;
  };
}

export async function POST(request: Request) {
  try {
    const userData = await request.json();
    userData.username = userData.email;
    const url = `${process.env.BASE_API_URL}/api/auth/local/register`;
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.JWT_TOKEN}`,
      },
    };

    const response = await axios.post(url, userData, config);
    // console.log(response.data);

    if (response.status === 200) {
      // Request was successful
      return NextResponse.json('success');
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
