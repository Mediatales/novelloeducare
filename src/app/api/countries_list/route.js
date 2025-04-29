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
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742376445/Uzbekistan_logo_bxyjnu.png'
      },

      {
        country: 'Kyrgyzstan',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854591/Kyrgyzstan_logo_dhosw2.png'
      },
      {
        country: 'Kazakhstan',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360305/Kazakhstan_logo_dirinj.png'
      },
      {
        country: 'Georgia',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361434/Georgia_logo_jtyuel.png'
      },
      {
        country: 'Armenia',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742362801/Armenia_nw2yy1.png'
      },
      {
        country: 'Belarus',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363200/Belarus_logo_xhpod2.png'
      },
      {
        country: 'Bangladesh',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370629/Bangladesh_logo_spccuq.png'
      },
      {
        country: 'Nepal',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371911/Nepal_logo_jmuugf.png'
      },
      {
        country: 'Poland',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374876/poland_logo_rajiqp.png'
      },
      {
        country: 'Dubai',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375108/dubai_logo_eey2a7.png'
      },
      
      {
        country: 'Bosnia',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1743491879/Bosnia_logo_kghkis.png',
      },
      {
        country: 'Serbia',
        flag_link:'https://res.cloudinary.com/dqggm4k7u/image/upload/v1743578496/Serbia_logo_geldrr.png'
      },

      {
        country: 'Moldova',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744701885/Moldova_logo_wfnvx1.png',
      },
      {
        country: 'Ukraine',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375712/Ukrain_logo_tpapan.png'
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