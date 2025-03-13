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
                        academic : ["North-Western State Medical University (NWSMU) in St. Petersburg, Russia offers undergraduate, graduate, and postgraduate degrees in medicine, dentistry, pharmacy, nursing, and other medical and healthcare-related areas. The university is known for its high-quality education and innovative research. Teaching staff Practical physicians, Academicians of the Russian Academy of Sciences, Honored doctors of Russia, Candidates of medical sciences, and Doctors of medical sciences"],
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
                        name: "Saint Petersburg State Pediatric Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774047/Russia_university_2_je0ada.png",
                        slug: "saint-petersburg-state-pediatric-medical-university",
                        country : "russia",
                        overview : ["Saint-Petersburg State Pediatric Medical University was founded in 1925 as Academic and Research Institute of Maternal health and childhood protection on the hospital basement on 7th of January in 1925. For many decades, the University is an international center of higher medical education. Over the past half-century it graduated several thousand of foreign students from 70 countries from 4 continents. Currently, University is opened for students from over 50 countries. In University may be taken person of either sex, nation and race, regardless of political or religious beliefs of any state that has diplomatic relations with the Russian Federation. Our students and lecturers are laureates and prizewinners of rather international and Russian contests. Every year our students take part in competitions of scientific works for St. Petersburg Government grants and have a success. Students have a practice in our hospital (one of the biggest in Russia) from first days in university. They learn from practitioners who work in our clinic."],
                        academic : ["Saint Petersburg State Pediatric Medical University (SPbSPMU) is a medical university located in St. Petersburg, Russia. It is the oldest pediatric higher education institution in the world. SPbSPMU has a state license and accreditation to provide training in English language, medicine according to the state standards"],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741773931/russia_university_2_academic_pic_gudu5w.jpg",
                        faculties : [
                            "Faculty of Pediatrics",
                            "Faculty of General Medicine",
                            "Faculty of Clinical Psychology",
                            "Faculty of Dentistry",
                            "Faculty of Post Graduate & Additional Professional Education",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["Post Graduate & Additional Professional Education","General Medical Council (GMC)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
            
                    {
                        name: "Ivanovo State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774367/Russia_university_3_academic_pic_tllnxr.webp",
                        slug: "ivanovo-state-medical-university",
                        country : "russia",
                        overview : ["Ivanovo State Medical University was established in 1930. From that time to nowadays the University trained more than 25000 doctors. Now almost 3000 students are trained at the University. The teaching staff of the University includes more than 400 instructors, among them 70 Doctors of Science and more than 270 Candidates of Science. The university emerges to be the best top universities in Russia for furnishing high-quality education to the students in the arena of Medicine. The medical education strategy proposed by the University is authorized by the Ministry of Education and Science of Russia."],
                        academic : ["IvSU offers 23 Bachelor's degree programs, 17 Master's degree programs, ten PhD programs, and a specialist's degree in fundamental and applied chemistry. A wide range of opportunities for developing their creative abilities and enriching their cultural knowledge."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741773931/russia_university_2_academic_pic_gudu5w.jpg",
                        faculties : [
                            "Faculty of Nursing Management",
                            "Faculty of General Medicine",
                            "Faculty of Clinical Psychology",
                            "Faculty of Postgraduates in specialties",
                            "Faculty of Pathological Anatomy",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["Ministry of Education, Science, Culture and Sport of the Republic of Russia","Quality Assurance (ANQA)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
                    
                    {
                        name: "Tver State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774108/russia_university_6_r8rekd.jpg",
                        slug: "tver-state-medical-university",
                        country : "russia",
                        overview : ["Tver State Medical University established in 1902 holds a prominent position in Russia offering Best study equipment and rich diversified culture that are crucial for success. From a pioneering dental institute established in 1902 to a leading medical institution in Russia, Tver State Medical College boasts a rich legacy of shaping the future of healthcare. Tver State Medical University stands as a testament to the rich legacy of medical education in Russia, proudly upholding its position as one of the oldest and most esteemed medical universities in Russia."],
                        academic : ["Tver State Medical University is considered as one of the best education institutes for MBBS in Russia. Tver State Medical University is usually among the top ten medical educational establishments according to the annual official rating of the 48 Russian Medical Educational Institutions.Academic programs"],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774134/russia_university_6_academic_pic_ds6xuj.webp",
                        faculties : [
                            "Faculty of Dental Medicine.",
                            "Faculty of General Medicine",
                            "Faculty of Pharmacy",
                            "Faculty of Pediatrics",
                            "Faculty of Postgraduate Studies",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["Education Commission for Foreign Medical Graduates (ECFMG)","FAIMER","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },



                    //kryztanuniversity

                    {
                        name: "Asian Medical Institute",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854620/Kyrgyzstan_mbbs_university_1_n5hxtq.jpg",
                        slug: "asian-medical-institute",
                        country : "kyrgyzstan ",
                        overview : ["The Asian Medical Institute (ASMI), located in Kant, Kyrgyzstan, has emerged as a leading medical institution, attracting students from around the globe who aspire to pursue careers in healthcare. It offers a range of medical programs. ASMI has gained recognition for its commitment to providing high-quality education at affordable tuition fees, making it an attractive option for students seeking a cost-effective medical education abroad. ASMI's faculty comprises experienced professionals and scholars who are passionate about teaching and mentoring the next generation of medical practitioners. The university also provides students with access to modern facilities, well-equipped laboratories, and a comprehensive library, ensuring they have the resources they need to excel in their studies."],
                        academic : ["The Asian Medical Institute (ASMI), located in Kant, Kyrgyzstan, has emerged as a leading medical institution, attracting students from around the globe who aspire to pursue careers in healthcare. It offers a range of medical programs. ASMI has gained recognition for its commitment to providing high-quality education at affordable tuition fees, making it an attractive option for students seeking a cost-effective medical education abroad. The university's dedication to academic excellence is reflected in its curriculum, which is designed to meet international standards and equip students with the knowledge and skills necessary to succeed in the medical profession."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854613/Kyrgyzstan_mbbs_university_1_academic_pic_iorlud.jpg",
                        faculties : [
                            "Department of Dentistry",
                            "Department of General Medicine",
                            "Department of Nursing",
                            "Department of Obstetrics",
                            "Department of Paediatrics",
                            "Department of Psychiatry",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["World Health Organization (WHO)","Medical Council of India (MCI)","Foundation for the Advancement of Education and International Medical Research (FAIMER)","National Medical Commission of India (NMC)"],
                    },
                
                      {
                        name: "OSH State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854652/Kyrgyzstan_mbbs_university_2_tce3f1.jpg",
                        slug: "osh-state-medical-university",
                        country : "kyrgyzstan",
                        overview : ["Osh State Medical University, a prominent institution in Kyrgyzstan, has a long-standing tradition of welcoming and training international students, dating back to 1993. Over the years, the International Medical Faculty at Osh State University has fostered a diverse and vibrant academic community, attracting students from over twenty countries across the globe. This rich tapestry of cultures creates a unique and enriching learning environment for all students. Currently, Osh State Medical University boasts a student body of over 3,500, with more than a thousand international students representing countries such as India, Pakistan, Nepal, Palestine, Syria, Turkey"],
                        academic : ["Osh State Medical University, a prominent institution in Kyrgyzstan, offers a comprehensive range of medical education programs, catering to aspiring healthcare professionals at various stages of their academic journeys. The university provides undergraduate programs, including the MBBS (Bachelor of Medicine, Bachelor of Surgery) degree, which forms the foundation for a career in medicine. In addition to the MBBS program, Osh State Medical University also offers MD (Doctor of Medicine) and BDS (Bachelor of Dental Surgery) programs, providing students with diverse pathways to specialize in their chosen fields within the healthcare sector. These undergraduate programs are designed to provide students with a strong foundation in basic medical sciences, clinical skills, and ethical principles, preparing them for the challenges and rewards of a medical career."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741855648/Kyrgyzstan_mbbs_university_2_academic_pic_d3fw2c.jpg",
                        faculties : [
                            "Department of Anatomy",
                            "Department of Biochemistry",
                            "Department of Community Medicine",
                            "Department of Forensic Medicine",
                            "Department of Microbiology",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["World Directory of Medical Schools (WDOMS)","National Medical Commission of India (NMC)","World Health Organization (WHO)","Affiliated with the International Medical Education Directory (IMED)"],
                    },
                
                     {
                        name: "International School of Medicine (ISM)",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854694/Kyrgyzstan_mbbs_university_3_xhfwx8.png",
                        slug: "international-school-of-medicine",
                        country : "kyrgyzstan",
                        overview : ["The International School of Medicine (ISM) in Bishkek, Kyrgyzstan, stands as a prominent private medical university, offering a wide array of programs, including undergraduate, postgraduate, and doctoral degrees in various medical specialties. This diverse offering allows aspiring medical professionals to pursue their educational goals at different stages of their careers, from initial medical training to advanced specialization and research. ISM has earned a strong reputation for its commitment to academic excellence, attracting students from around the world who seek a high-quality medical education."],
                        academic : ["The academic structure at the International School of Medicine (ISM) in Bishkek, Kyrgyzstan, is designed to provide students with a comprehensive and well-rounded medical education, combining a strong foundation in theoretical knowledge with essential practical skills. The program spans a total of six years, beginning with five years of intensive theoretical study. During this phase, students delve into the core principles of medical science, covering a wide range of subjects, from anatomy and physiology to pharmacology and pathology. The curriculum is designed to provide students with a deep understanding of the human body, disease processes, and treatment modalities, laying the groundwork for their future clinical practice."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741857500/Kyrgyzstan_mbbs_university_4_academic_plhcd3.webp",
                        faculties : [
                            "Department of Humanitarian Disciplines",
                            "Department of Nursing",
                            "Department of Internal Medicine",
                            "Department of Surgery",
                            "Department of Public Health",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["MCI (Medical Council of India)","World Health Organization (WHO)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
                
                      {
                        name: "Kyrgyz State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854706/Kyrgyzstan_mbbs_university_4_bclzvu.webp",
                        slug: "kyrgyz-state-medical-university",
                        country : "kyrgyzstan",
                        overview : ["Kyrgyz State Medical Academy (KSMA), a leading government university located in Bishkek, Kyrgyzstan, has established itself as a leading center for medical education in the region. With a rich history and a commitment to academic excellence, KSMA attracts students from around the world, particularly those seeking a high-quality medical education at an affordable cost. To become a leading center of medical education and science in the Asian region, a medical institution must cultivate a multifaceted approach encompassing academic excellence, research innovation, and community engagement. This vision necessitates a commitment to attracting and retaining top-tier faculty, fostering a stimulating learning environment, and providing students with access to cutting-edge resources and technology."],
                        academic : ["Kyrgyz State Medical Academy (KSMA) in Bishkek, Kyrgyzstan, stands as a leading institution in medical education, offering a comprehensive range of programs for aspiring healthcare professionals. These programs span all levels of study, from undergraduate to postgraduate and doctoral degrees, providing students with a clear pathway to advance their medical careers. KSMA's commitment to academic excellence has earned it global recognition. The university is considered a top medical institution in Kyrgyzstan and is recognized by prestigious international organizations such as the World Health Organization, ensuring that its degrees are respected and valued worldwide. This international recognition opens doors for graduates to pursue professional opportunities in various countries, expanding their career horizons."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854698/Kyrgyzstan_mbbs_university_3_academic_jc78kg.jpg",
                        faculties : [
                            "Department of Clinical Pharmacology",
                            "Department of Biochemistry",
                            "Department of Clinical Epidemiology",
                            "Department of Medicine and Nursing",
                            "Department of General Medicine",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["Medical Council of India (MCI)","FAIMER","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
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