import { NextResponse } from 'next/server';

export async function GET() {
  try {

    const countries = [

      {
        country: 'Russia',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1741757438/Russia_logo_gwfmaw.png'
      },

      {
        country: 'Uzbekistan',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png'
      },

      {
        country: 'Kyrgyzstan',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854591/Kyrgyzstan_logo_dhosw2.png'
      },

      
      
    ];

    return NextResponse.json({ data: countries });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch countries' },
      { status: 500 }
    );
  }
}