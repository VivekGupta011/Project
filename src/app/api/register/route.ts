interface RequestBody {
  username: string;
  email: string;
  password: string;
}

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    // token
    // Actual authentication token
    const token = '78a80ec469540f71e3d8ceda16a1b22398ad7583f0e21a50e21aa49b82bf80a165df5902f9be1fbdf071df8a9ea6244b351e6f4fd76d519f80eaf96f40e8fe240d12345667d7595f8635d40adce14817bd9f1540e48ad78e1ba7f02ae0f838d03c280ee300b7dcf763967f3e88160efb07bd0cf34018ad2d0919935f0ce2b11f';
    // Replace with your Strapi API endpoint for login
    const apiUrl = 'http://admin.vinkcard.mydevsystems.com/api/auth/local/register';
    const { username, email, password }: RequestBody = await req.json();

    const strapiResponse = await axios.post(apiUrl, {
      username,
      email,
      password,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (strapiResponse.statusText == 'OK') {
      return NextResponse.json({ message: "successful!" });
    } else {
      return NextResponse.json({ message: "failed!" });
    }

  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}


