import { NextResponse } from 'next/server';

export async function GET() {
  try {

    const countries = [

      {
        country: 'France',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744364304/france_university_isnmbw.png'
      },

      {
        country: 'Italy',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744359180/italy_logo_mhs4en.png'
      },

      {
        country: 'Australia',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744347853/Australia_logo_pfy93j.png'
      },

      {
        country: 'USA',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744365265/USA_logo_vwf1or.png'
      },

      {
        country: 'Canada',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744354555/canada_logo_na4lal.png'
      },

      {
        country: 'Uk',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744607101/UK_logo_pmutsi.png'
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