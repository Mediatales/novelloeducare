import { NextResponse } from 'next/server';

export async function GET() {
  try {

    const countries = [

      {
        country: 'Australia',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744347853/Australia_logo_pfy93j.png'
      },

      {
        country: 'Uk',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744607101/UK_logo_pmutsi.png'
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
        country: 'France',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744364304/france_university_isnmbw.png'
      },

      {
        country: 'Italy',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744359180/italy_logo_mhs4en.png'
      },  

      {
        country: 'New Zealand',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744792251/New_Zealand_logo_yzhew8.png'
      },

      {
        country: 'Finland',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744701398/Finland_logo_scomvp.png'
      },

      {
        country: 'Hungary',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744698223/hungary_logo_wrbhow.png'
      },

      {
        country: 'Poland',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374876/poland_logo_rajiqp.png'
      },

      {
        country: 'Germany',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744633985/germany_logo_qtxk4i.png'
      },

      {
        country: 'Dubai',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375108/dubai_logo_eey2a7.png'
      },

      {
        country: 'Malta',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744876330/Malta_logo_srniqy.webp'
      },

      {
        country: 'Singapore',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1745300117/Singapore_logo_ygamul.webp'
      },

      {
        country: 'Netherlands',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1745308641/Netherlands_logo_ckije9.webp'
      },

      {
        country: 'Sweden',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1745574673/Sweden_logo_anq9ac.png'
      },
        
      {
        country: 'Malaysia',
        flag_link: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745577722/Malaysia_logo_qdmbxt.webp"
      },

      {
        country: 'Switzerland',
        flag_link: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745660519/Switzerland_flag_dvwnrv.png"
      },

      {
        country: 'Ireland',
        flag_link: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745655699/Ireland_flag_rwujfc.png"
      },

      {
        country: 'Spain',
        flag_link: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745585088/Spain_logo_vsutcg.webp"
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