import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const { country } = params;

        // This is your countries data - you can move this to a separate data file
        const countries = [
            {
                country: 'uzbekistan',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793558/img_container_wsmqin.png",
                overviewText: "Uzbekistan has become an attractive destination for aspiring medical students, including those from India and beyond. Known for its esteemed medical universities.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793987/ov_img_sny10k.png",
                quickFacts: ["Tashkent", "40%", "Uzbekistani Som", "Approx. 3.5 crores"],
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
                eligibilityPoints: [
                    {
                        title: "Academic Qualification",
                        description: "50% marks in PCB in 12th standard (40% for reserved categories)."
                    },
                    {
                        title: "Age Requirement",
                        description: "50% marks in PCB in 12th standard (40% for reserved categories)."
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "Academic Qualification",
                        description: "50% marks in PCB in 12th standard (40% for reserved categories)."
                    },
                    {
                        title: "Age Requirement",
                        description: "50% marks in PCB in 12th standard (40% for reserved categories)."
                    },
                ],
                advantages: ["Low cost of education", "Best Place"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739825183/img_nbxth7.png",
            },
            {
                country: 'albekistan',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793558/img_container_wsmqin.png",
                overviewText: "Uzbekistan has become an attractive destination for aspiring medical students, including those from India and beyond. Known for its esteemed medical universities.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793987/ov_img_sny10k.png",
                quickFacts: ["Tashkent", "40%", "Uzbekistani Som", "Approx. 3.5 crores"],
                univeristes: [
                    {
                        name: "Albek University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741069514/img_container_tqemkk.png",
                        slug: "albek-university",
                        country : "albekistan"
                    },
                ],
                eligibilityPoints: [
                    {
                        title: "Academic Qualification",
                        description: "50% marks in PCB in 12th standard (40% for reserved categories)."
                    },
                    {
                        title: "Age Requirement",
                        description: "50% marks in PCB in 12th standard (40% for reserved categories)."
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "Academic Qualification",
                        description: "50% marks in PCB in 12th standard (40% for reserved categories)."
                    },
                    {
                        title: "Age Requirement",
                        description: "50% marks in PCB in 12th standard (40% for reserved categories)."
                    },
                ],
                advantages: ["Low cost of education", "Best Place"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739825183/img_nbxth7.png",
            },
            
        ];

        const countryData = countries.find(c => c.country.toLowerCase() === country.toLowerCase());

        if (!countryData) {
            return NextResponse.json(
                { error: 'Country not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ data: countryData });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch country data' },
            { status: 500 }
        );
    }
}