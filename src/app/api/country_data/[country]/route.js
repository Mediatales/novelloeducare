import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const { country } = params;

        // This is your countries data - you can move this to a separate data file
        const countries = [
            {
                country: 'Uzbekistan',
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
                        academic : ["The Academic Lyceum at Samarkand State Medical University (Academic Lyceum No.1 at SamSMU) started in 2004-2005 to teach natural sciences. Initially, it was under different leadership but eventually integrated into Samarkand State Medical Institute. Now, with Director Associate Professor H.I. Mahmudova, it focuses on providing quality education in biology, chemistry, and other subjects. The lyceum has modern facilities and organizes events to discover students' talents. Graduates become Chemist Laboratory Technicians and have succeeded in national and international competitions. The lyceum aims to keep preparing skilled graduates for Uzbekistan's future."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741764850/Uzbekistan_university_1_academic_tnqmtt.png",
                        faculties : [
                            "Faculty of Medicine",
                            "Faculty of Pharmacy",
                            "Faculty of Higher Nursing",
                            "Faculty of pediatrics",
                            "Faculty of Dentistry",
                            "Faculty of Medical Pedagogy"


                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["Recognized by MCI","Recognized by FAIMER","NMC and WHO approved","United Nations Educational, Scientific and Cultural Organization (UNESCO)"],
                    },

                    {
                        name: "Tashkent Medical Academy University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767035/pic_5_hbwmul.jpg",
                        slug: "tashkent-medical-academy-university",
                        country: "uzbekistan",
                        overview: ["Between 1919 and 1931, the Faculty of Medicine at Tashkent State University was established, with Professor P. Sitnovsky becoming its Dean in 1919. Significant progress was made under the leadership of Professors KG Khrushchev and MI Slonim between 1921-1924 and 1924-1926. By 1923, the faculty had grown to 973 students, including 425 females. Various deans served during this period, such as PF Borovskii, NI Ragoza, and GP Fedorov."],
                        academic: ["Tashkent Medical Academy (TMA) provides a comprehensive selection of academic programs, catering to a diverse range of interests within the medical field. At the undergraduate level, TMA offers Bachelor's degrees in various disciplines, including general medicine, medical pedagogy, preventive medicine, nursing, medical biology, and management. These programs equip students with a strong foundation in their chosen areas of specialization, preparing them for careers in healthcare and related fields."],
                        academicImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767783/pic_1_jbp3ed.jpg",
                        faculties: [
                            "Faculty of Medicine",
                            "Faculty of pediatrics",
                            "Faculty of Medical Pedagogy",
                            "Faculty of Neuroscience",
                            "Faculty of Dentistry",
                            "Faculty of Pharmacy"
                        ],
                        facultyImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767120/pic_4_l3uszb.jpg",
                        affilationRecognition: ["Recognized by MCI (Medical Council of India)", "Recognized by FAIMER", "NMC and WHO approved", "United Nations Educational, Scientific and Cultural Organization (UNESCO)"]
                    },
                    
                    {
                        name: "Tashkent State Dental Institute",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767949/Top_Uzbekistan_university_4_sejpg7.jpg",
                        slug: "tashkent-state-dental-institute",
                        country : "uzbekistan",
                        overview : ["Founded in 2014, Tashkent State Dental Institute stands as a beacon of excellence in the heart of Tashkent, a city renowned for its architectural splendor and commitment to medical education. With its rapid growth, the institute has become a magnet for thousands of aspiring students annually, drawn by its reputation for providing top-tier education"],
                        academic : ["Tashkent State Dental Institute (TSDI), established in 2014, provides a comprehensive dental education. It offers a 5-year undergraduate program in dentistry, alongside postgraduate programs including residencies and master's degrees. TSDI focuses on preparing students for successful clinical practice and research careers in various specialized areas of dentistry."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741769987/Tashkent_state_dental_2_vwahxw.jpg",
                        faculties : [
                            "Faculty of Medicine",
                            "Faculty of Pharmacy",
                            "Faculty of Higher Nursing",
                            "Faculty of pediatrics",
                            "Faculty of Dentistry",
                            "Faculty of Medical Pedagogy"


                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741769966/Tashkent_state_dental_1_pfmhbj.jpg",
                        affilationRecognition : ["Recognized by the Medical Council of India (MCI).","NMC and WHO approved","Recognized by the Ministry of Health of the Republic of Uzbekistan"],
                    },

                    {
                        name: "Andijan State Medical Institute",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741771360/Andijan_State_Medical_Institute_pic_tv5sdz.png",
                        slug: "andijan-state-medical-institute",
                        country: "uzbekistan",
                        overview: ["Andijan State Medical Institute, situated in the ancient city of Fergana Valley, Andijan City. Established in 1955, Andijan State Medical Institute stands as a leading national institution in the Republic of Uzbekistan. Offering education across more than 56 diverse departments, it provides a comprehensive academic experience for aspiring medical professionals."],
                        academic: ["Andijan State Medical Institute provides a broad spectrum of educational opportunities within the healthcare field. At the undergraduate level, the institute offers Bachelor's degrees in a substantial number of subjects, specifically 29, encompassing a wide array of medical, pediatric, and dental courses. This extensive offering allows students to specialize in their areas of interest, gaining a solid foundation for their future careers in healthcare. In addition to these Bachelor's programs, Andijan State Medical Institute also provides vocational courses, further expanding its educational reach."],
                        academicImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741771856/pic_1_kjrd1l.jpg",
                        faculties: [
                            "Faculty of Medicine",
                            "Faculty of pediatrics",
                            "Department of Surgery",
                            "Faculty of Gynecology",
                            "Faculty of Dentistry",
                            "Faculty of Pharmacy"
                        ],
                        facultyImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741771871/pic_7_hue4cz.jpg",
                        affilationRecognition: ["Recognized by the National Medical Commission (NMC)", "World Health Organization (WHO)", "Recognized by the Ministry of Health of the Republic of Uzbekistan"]
                    },
                    
                ],
                eligibilityPoints: [
                    {
                        title: "Academic Qualification",
                        description: "50% marks in PCB in 12th standard (40% for reserved categories)."
                    },
                    {
                        title: "Age Requirement",
                        description: "Be at least 17 years old by December 31 of the year of admission."
                    },
                    {
                        title: "Entrance Exam",
                        description: "Must qualify the NEET exam to be eligible for MBBS admission"
                    },
                    {
                        title: "NMC Recognition",
                        description: "MBBS degrees from Uzbekistan are recognized by the (NMC) in India."
                    },

                    
                    
                ],
                mbbsBenefits: [
                    {
                        title: "Affordable Cost",
                        description: "Compared to many other countries, the tuition fees and overall cost of living in Uzbekistan are significantly lower, making it a budget-friendly choice for international students."
                    },
                    {
                        title: "Study Duration",
                        description: "MBBS in Uzbekistan offers a 6-year program (5 years of education + 1 year internship), similar to many other countries but shorter and more affordable than the USA."
                    },
		    {
                        title: "Practical Exposure",
                        description: "The MBBS curriculum in Uzbekistan includes a substantial practical component with internships in affiliated hospitals, ensuring hands-on clinical experience."
                    },
{
                        title: "Quality Education",
                        description: "Uzbekistan boasts well equipped medical universities with experienced faculty and modern teaching methods, providing a high standard of medical education."
                    },

                ],
                advantages: ["Low cost of education", "English medium instruction" ,"Globally Recognized Degrees" ,"Quality clinical training"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739825183/img_nbxth7.png",
            },



            {
                country: 'russia',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1741757438/Russia_logo_gwfmaw.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741756592/mbbs_in_russia_2_qtrur5.jpg",
                overviewText: "Studying MBBS in Russia is a popular choice for Indian students because of its quality education, modern facilities, and affordable costs. Russian medical universities are recognized worldwide by organizations like the World Health Organization (WHO) and the National Medical Commission (NMC) of India. This means that students who graduate from these universities are qualified to practice medicine globally. ",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741757948/mbbs_in_russia_deprzx.jpg",
                quickFacts: ["Moscow", "30%", "Russian Ruble", "Approx. 14.45 crores"],
                univeristes: [
                    {
                        name: "North-Western State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741758303/russia_university_1_suz32t.jpg",
                        slug: "north-western-state-medical-university",
                        country : "russia",
                        overview : ["North-Western State Medical University named after I.I. Mechnikov (NWSMU) was founded on October 12, 2011 as a result of the merger of the two oldest educational medical institutions in Russia - St. Petersburg Medical Academy of Postgraduate Education and St. Petersburg State Medical Academy named after Mechnikov.The founder of the University is the Ministry of Health of the Russian Federation.The activity of the University is based on close cooperation and coordination of educational, clinical and research activities - this allows training competent specialists who have modern knowledge and are able to apply it in practice."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        faculties : [
                            "Medical Faculty",
                            "Faculty of Medical Pedagogy",
                            "Faculty of Higher Nursing"
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["World Health Organization (WHO)","Medical Council of India (MCI)","Russian Ministry of Health","National Medical Commission of India (NMC)"],
                    },

                    {
                        name: "North-Western State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741758303/russia_university_1_suz32t.jpg",
                        slug: "north-western-state-medical-university",
                        country : "russia",
                        overview : ["North-Western State Medical University named after I.I. Mechnikov (NWSMU) was founded on October 12, 2011 as a result of the merger of the two oldest educational medical institutions in Russia - St. Petersburg Medical Academy of Postgraduate Education and St. Petersburg State Medical Academy named after Mechnikov.The founder of the University is the Ministry of Health of the Russian Federation.The activity of the University is based on close cooperation and coordination of educational, clinical and research activities - this allows training competent specialists who have modern knowledge and are able to apply it in practice."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        faculties : [
                            "Medical Faculty",
                            "Faculty of Medical Pedagogy",
                            "Faculty of Higher Nursing"
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["World Health Organization (WHO)","Medical Council of India (MCI)","Russian Ministry of Health","National Medical Commission of India (NMC)"],
                    },

                    {
                        name: "North-Western State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741758303/russia_university_1_suz32t.jpg",
                        slug: "north-western-state-medical-university",
                        country : "russia",
                        overview : ["North-Western State Medical University named after I.I. Mechnikov (NWSMU) was founded on October 12, 2011 as a result of the merger of the two oldest educational medical institutions in Russia - St. Petersburg Medical Academy of Postgraduate Education and St. Petersburg State Medical Academy named after Mechnikov.The founder of the University is the Ministry of Health of the Russian Federation.The activity of the University is based on close cooperation and coordination of educational, clinical and research activities - this allows training competent specialists who have modern knowledge and are able to apply it in practice."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        faculties : [
                            "Medical Faculty",
                            "Faculty of Medical Pedagogy",
                            "Faculty of Higher Nursing"
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["World Health Organization (WHO)","Medical Council of India (MCI)","Russian Ministry of Health","National Medical Commission of India (NMC)"],
                    },
                ],
                eligibilityPoints: [
                    {
                        title: "Academic Qualification",
                        description: "Have completed 10+2 or equivalent with Physics, Chemistry, Biology, and English as core subjects."
                    },
                    {
                        title: "Age Requirement",
                        description: "Be at least 17 years old by December 31 of the year of admission."
                    },
                    {
                        title: "Minimum Marks",
                        description: "Have at least 50% in Physics, Chemistry, and Biology."
                    },
                    {
                        title: "Admission Documents",
                        description: "Submit scanned copies of mark sheets and pass certificates of class 10 and 12, passport colored photographs, and a scanned copy of the NEET results."
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "Affordable Tuition Fees",
                        description: "Russian medical universities offer considerably lower tuition fees compared to many other countries, making it accessible for students from diverse economic backgrounds."
                    },
                    {
                        title: "Globally Recognized Degree",
                        description: "MBBS degrees from reputable Russian universities are recognized by the World Health Organization (WHO) and other international bodies, allowing graduates to practice medicine globally. "
                    },
		    {
                        title: "No Entrance Exams",
                        description: ": Unlike some countries, admission to MBBS programs in Russia often does not require a separate entrance exam. "
                    },
		    {
                        title: "Extensive Practical Exposure",
                        description: "Russian medical universities provide ample opportunities for hands-on clinical practice in well-equipped hospitals, preparing students for real-world medical scenarios. "
                    },
                ],
                advantages: ["Low cost of education", "Best Place" ,"Globally Recognized Degrees" ,"Scholarship Opportunities"],
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