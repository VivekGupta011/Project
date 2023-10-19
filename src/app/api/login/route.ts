interface RequestBody {
  identifier: string;
  password: string;
}

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  // try {

  //   // token
  //   // Actual authentication token
  //   const token = 'd805e24541cc693e43439a36d76be59ab3420b669e5bc6da655a071df20c3232bbad0176762530748f9651ac31359eb95dbf66a784fc8ab51f08763444a4181ddc4bc5f95885090629914bbec7f8f36b6b0b4f22684cb5e5bc56a6c10ba1000b7d4891a801dac5a44a6636e0745a07b37dd9f7641f76e793cc6a3b17cfc33d33';
  //   // Replace with your Strapi API endpoint for login
  //   const apiUrl = 'http://admin.vinkcard.mydevsystems.com/api/auth/local';
  //   const { identifier, password }: RequestBody = await req.json();

  //   const strapiResponse = await axios.post(apiUrl, {
  //     identifier,
  //     password,
  //   }, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return NextResponse.json({ message: 'Authentication successful', data: identifier, data2: password });

  //   // if (response.status === 200) {
  //   //   // Authentication was successful
  //   //   return NextResponse.json({ message: 'Authentication successful' });
  //   // } else {
  //   //   // Handle other successful response statuses if needed
  //   //   return NextResponse.json({ message: 'Unexpected response status', status: response.status });
  //   // }
  // } catch (err) {
  //   console.error('Error:', err);

  //   return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  // }
  try {
    const { identifier, password }: RequestBody = await req.json();
    // Actual authentication token
    const token = 'd805e24541cc693e43439a36d76be59ab3420b669e5bc6da655a071df20c3232bbad0176762530748f9651ac31359eb95dbf66a784fc8ab51f08763444a4181ddc4bc5f95885090629914bbec7f8f36b6b0b4f22684cb5e5bc56a6c10ba1000b7d4891a801dac5a44a6636e0745a07b37dd9f7641f76e793cc6a3b17cfc33d33';

    const apiUrl = 'http://admin.vinkcard.mydevsystems.com/api/auth/local';

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      apiUrl,
      {
        identifier: identifier,
        password: password,
      },
      config
    );
    console.log("Response:", response);

    if (response.status === 200) {
      // Authentication was successful
      return NextResponse.json({ message: 'Authentication successful' });
      // Handle the response data here if needed
    } else {
      // Authentication failed, handle the error
      return NextResponse.json({ message: 'Authentication failed' });
    }

  } catch (error) {
    console.error('Error:', error);
    // Handle any other errors here
    return NextResponse.json({ message: 'Authentication faileddd  ' });
  }
}
