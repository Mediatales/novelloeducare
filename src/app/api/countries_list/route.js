import { NextResponse } from 'next/server';

export async function GET() {
  try {

    const countries = [
      {
        country: 'uzbekistan',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png',
        mainImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793558/img_container_wsmqin.png",
        overviewText : "Uzbekistan has become an attractive destination for aspiring medical students, including those from India and beyond. Known for its esteemed medical universities.",
        overviewImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793987/ov_img_sny10k.png",
        quickFacts : ["Tashkent" , "40%" , "Uzbekistani Som" , "Approx. 3.5 crores"],
        univeristes : [
            {
                name : "aushduahs"
            }
        ],
        keyPoints : [
            {
                heading : "Academic Qualification",
                desc : "50% marks in PCB in 12th standard (40% for reserved categories)."
            },
            {
                heading : "Age Requirement",
                desc : "50% marks in PCB in 12th standard (40% for reserved categories)."
            },
        ],
        whyChoose : [
            {
                heading : "Academic Qualification",
                desc : "50% marks in PCB in 12th standard (40% for reserved categories)."
            },
            {
                heading : "Age Requirement",
                desc : "50% marks in PCB in 12th standard (40% for reserved categories)."
            },
        ],
        advantages : ["Low cost of education" , "Best Place"],
        advantageImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739825183/img_nbxth7.png",
        

      },
      {
        country: 'russia',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1741757438/Russia_logo_gwfmaw.png'
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