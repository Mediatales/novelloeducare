import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const { slug } = params;

        // This is your countries data - you can move this to a separate data file
        const countries = [
            {
                country: 'uzbekistan',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png',
                univeristes: [
                    {
                        name: "Samarkand State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741069514/img_container_tqemkk.png",
                        slug: "samarkand-state-medical-university",
                        country : "uzbekistan",
                        overview : ["Samarkand State Medical University, established in 1930 as the State Uzbek Medical Institute, has evolved significantly over its 90-year history. Following Uzbekistan`'`s independence in 1991, the university experienced notable growth with the implementation of various educational and healthcare reform programs. These initiatives led to the establishment of new faculties and courses, including traditional medicine." , "In December 2021, Uzbekistan introduced reforms granting greater autonomy to public higher education institutions, empowering Samarkand State Medical University to make independent decisions regarding curriculum development and international partnerships."],
                        academic : ["The Academic Lyceum at Samarkand State Medical University (Academic Lyceum No.1 at SamSMU) started in 2004-2005 to teach natural sciences. Initially, it was under different leadership but eventually integrated into Samarkand State Medical Institute. Now, with Director Associate Professor H.I. Mahmudova, it focuses on providing quality education in biology, chemistry, and other subjects."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        faculties : [
                            "Medical Faculty",
                            "Faculty of Medical Pedagogy",
                            "Faculty of Higher Nursing"
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["Recognized by MCI","Recognized by FAIMER"],
                    },
                ],
            },
            {
                country: 'albekistan',
                univeristes: [
                    {
                        name: "Albek University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741069514/img_container_tqemkk.png",
                        slug: "albek-university",
                        country : "albekistan"
                    },
                ],
            },
        ];

        // Find the university across all countries
        let foundUniversity = null;
        for (const country of countries) {
            const university = country.univeristes.find(uni => uni.slug === slug);
            if (university) {
                foundUniversity = university;
                break;
            }
        }

        if (!foundUniversity) {
            return NextResponse.json(
                { error: 'University not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ data: foundUniversity });
    } catch (error) {
        console.error('Error fetching university data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch university data' },
            { status: 500 }
        );
    }
} 