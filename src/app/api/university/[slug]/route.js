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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["Post Graduate & Additional Professional Education","General Medical Council (GMC)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
            
                    {
                        name: "Ivanovo State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774108/russia_university_6_r8rekd.jpg",
                        slug: "ivanovo-state-medical-university",
                        country : "russia",
                        overview : ["Ivanovo State Medical University was established in 1930. From that time to nowadays the University trained more than 25000 doctors. Now almost 3000 students are trained at the University. The teaching staff of the University includes more than 400 instructors, among them 70 Doctors of Science and more than 270 Candidates of Science. The university emerges to be the best top universities in Russia for furnishing high-quality education to the students in the arena of Medicine. The medical education strategy proposed by the University is authorized by the Ministry of Education and Science of Russia."],
                        academic : ["IvSU offers 23 Bachelor's degree programs, 17 Master's degree programs, ten PhD programs, and a specialist's degree in fundamental and applied chemistry. A wide range of opportunities for developing their creative abilities and enriching their cultural knowledge."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774134/russia_university_6_academic_pic_ds6xuj.webp",
                        faculties : [
                            "Faculty of Nursing Management",
                            "Faculty of General Medicine",
                            "Faculty of Clinical Psychology",
                            "Faculty of Postgraduates in specialties",
                            "Faculty of Pathological Anatomy",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["Ministry of Education, Science, Culture and Sport of the Republic of Russia","Quality Assurance (ANQA)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
                    
                    {
                        name: "Tver State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774367/Russia_university_3_academic_pic_tllnxr.webp",
                        slug: "tver-state-medical-university",
                        country : "russia",
                        overview : ["Tver State Medical University established in 1902 holds a prominent position in Russia offering Best study equipment and rich diversified culture that are crucial for success. From a pioneering dental institute established in 1902 to a leading medical institution in Russia, Tver State Medical College boasts a rich legacy of shaping the future of healthcare. Tver State Medical University stands as a testament to the rich legacy of medical education in Russia, proudly upholding its position as one of the oldest and most esteemed medical universities in Russia."],
                        academic : ["Tver State Medical University is considered as one of the best education institutes for MBBS in Russia. Tver State Medical University is usually among the top ten medical educational establishments according to the annual official rating of the 48 Russian Medical Educational Institutions.Academic programs"],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741773931/russia_university_2_academic_pic_gudu5w.jpg",
                        faculties : [
                            "Faculty of Dental Medicine.",
                            "Faculty of General Medicine",
                            "Faculty of Pharmacy",
                            "Faculty of Pediatrics",
                            "Faculty of Postgraduate Studies",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["Education Commission for Foreign Medical Graduates (ECFMG)","FAIMER","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },

                    {
                        name: "Kabardino-Balkarian State University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742544076/russia_university_4_eu0ebv.jpg",
                        slug: "kabardino-balkarian-state-university",
                        country : "russia",
                        overview : ["Kabardino-Balkarian State University, founded in 1957 in Nalchik, Russia, has evolved into a prominent hub for scientific, educational, informational, social, and cultural development within the region. Its contributions to the academic landscape have been widely recognized, evidenced by the Certificate of Merit and Medal awarded by the State Duma on its 50th anniversary, acknowledging its outstanding services and achievements. Further cementing its reputation, the university was ranked among the top 100 universities in Russia in 2008, and in 2010, it received an honorary diploma from the All-Russian contest 100 Best Universities of Russia in the field of science and education. Kabardino-Balkarian State University operates as a comprehensive educational institution, integrating various levels of academic programs, including higher education, secondary education, postgraduate studies, and additional professional education. This multifaceted approach enables the university to cater to a diverse range of educational needs and contribute to the development of a skilled workforce. Today, it holds a distinguished 11th position among classical universities in Russia, reflecting its commitment to academic excellence and innovation. With over 65 departments and a teaching staff of more than 800 highly qualified educators, the university provides a rich and stimulating learning environment for thousands of students. Its dedication to fostering intellectual growth and contributing to the advancement of knowledge has solidified its position as a leading educational institution in Russia."],
                        academic : ["Kathmandu University School of Medical Sciences (KUSMS), while prominently recognized for its medical programs, extends its academic offerings to encompass a diverse range of disciplines, catering to a broad spectrum of student interests. Beyond the fields of medicine and allied health sciences, KUSMS provides programs in economics, education, and social sciences, reflecting its commitment to fostering a well-rounded educational environment. This multifaceted approach allows students to explore various academic paths and contribute to different sectors of society. Notably, KUSMS has gained significant popularity for its affordable medical programs, making quality medical education accessible to a wider range of aspiring healthcare professionals."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742544082/Russia_university_4_academic_pic_ms0hnc.jpg",
                        faculties : [
                            "Faculty of Anatomy & Physiology",
                            "Faculty of General Practice",
                            "Faculty of Stomatology (Dentistry)",
                            "Faculty of Nursing",
                            "Faculty of Microbiology",
                            "Faculty of Pharmacology",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["(UNESCO) The United Nations Educational, Scientific and Cultural Organization recognizes KBSU","The Medical Council of India recognizes KBSU","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
                    
                    {
                        name: "Ryazan State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742546574/Russia_university_5_yf8sgn.jpg",
                        slug: "ryazan-state-medical-university",
                        country : "russia",
                        overview : ["Ryazan State Medical University, established in 1950 and named after the Nobel Prize-winning physiologist Ivan Pavlov, is a renowned medical institution in Russia. Its legacy of excellence is built upon a foundation of rigorous academic standards and a commitment to producing highly skilled healthcare professionals. The university has cultivated strong international collaborations, partnering with esteemed institutions such as the American Pharmaceutical Convention and the University of Arizona. This global engagement has fostered a rich exchange of knowledge and expertise, enhancing the university's educational offerings and broadening the horizons of its students and faculty."],
                        academic : ["Ryazan State Medical University (RSMU), located in Ryazan Oblast, Russia, is a comprehensive medical institution offering a diverse array of academic programs spanning UNESCO ISCED-2011 Levels 5-8.  RSMU employs innovative teaching methods, such as evidence-based medicine, e-textbooks, and multimedia resources, to enhance the learning experience.  Its extensive clinical base, encompassing local and regional medical institutions, drugstores, and national health resorts, provides students with practical exposure, while modern diagnostic and therapy tools within its clinical sub-departments ensure a state-of-the-art training environment."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742546616/Russia_university_6_academic_pic_yxsrpz.jpg",
                        faculties : [
                            "Faculty of General Medicine",
                            "Faculty of Preventive Health",
                            "Faculty of Pharmacy",
                            "Faculty of Dentistry",
                            "Faculty of Pediatrics",
                            "Faculty of Clinical Psychology",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["FAIMER","The Medical Council of India","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
                    
                     {
                        name: "Bashkir State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742549380/Russia_university_8_pic_tu7r7b.webp",
                        slug: "bashkir-state-medical-university",
                        country : "russia",
                        overview : ["Bashkir State Medical University, established in 1932 and located in Ufa City, Bashkortostan, Russia, holds a distinguished position as one of the top ten medical universities in the Russian Federation. It serves as the central hub for medical and pharmaceutical science within the Bashkortostan Republic, playing a crucial role in advancing healthcare education and research in the region. Notably, Bashkir State Medical University has been granted a license by the Ministry of Education of the Russian Federation, enabling it to provide comprehensive medical training to international students. This accreditation underscores the university's commitment to meeting international standards and fostering a diverse student body."],
                        academic : ["Bashkir State Medical University (BSMU) provides a comprehensive and diverse array of medical programs, catering to a wide spectrum of aspiring healthcare professionals.  The university offers foundational undergraduate programs such as MBBS (General Medicine), Dentistry, Pediatrics, Pharmacy, and Preventive Medicine, ensuring a robust foundation in various medical disciplines.  Recognizing the importance of accessibility and internationalization, BSMU provides these programs in both English and Russian languages, attracting a diverse student body from across the globe.  Beyond its undergraduate offerings, BSMU extends its academic reach to postgraduate studies, enabling medical professionals to specialize in their chosen fields and advance their careers."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742549813/Russia_university_8_academic_pic_gpfdbm.jpg",
                        faculties : [
                            "Faculty of General Medicine",
                            "Faculty of Pediatric",
                            "Faculty of Pharmaceutical",
                            "Faculty of Dentistry",
                            "Faculty of Preventive Medicine",
                            "Faculty of Management and Graduate Nurses",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["FAIMER","The Medical Council of India","National Medical Commission of India (NMC)","ECFMG"],
                    },
                    
                      {
                        name: "OMSK State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742550952/russia_university_9_pic_zovmg2.webp",
                        slug: "omsk-state-medical-university",
                        country : "russia",
                        overview : ["Omsk State Medical University, established in 1920, is a prominent medical institution in Omsk, Russia.  It has a rich history, evolving from a medical faculty to its current university status. The university maintains strong international ties with institutions in Western Europe, the US, and Japan, and features 59 departments staffed by highly qualified professors.  With a vast library of over 600,000 resources and modern computer facilities, students have access to extensive learning materials.  Clinical training takes place in major municipal hospitals equipped with advanced diagnostic tools, led by experienced faculty.  The university continuously enhances its teaching methods using modern technology, including the integration of simulation-based learning, virtual reality, and artificial intelligence. This ensures students receive a cutting-edge education that prepares them for the evolving demands of the medical field. The university also takes pride in its active Students Scientific Society, which fosters a culture of research and innovation among students. The society provides a platform for students to engage in research projects, present their findings at conferences, and publish their work in scientific journals. This not only enhances their academic skills but also cultivates a spirit of inquiry and discovery."],
                        academic : ["Omsk State Medical University provides a focused medical education, offering a single undergraduate program: the MBBS degree. This six-year program is designed to provide comprehensive medical training. Emphasizing personalized attention, the university maintains small class sizes, creating a conducive learning environment that allows for individual student engagement and fosters a strong student-faculty interaction."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742551194/Russia_university_9_academic_bwp0py.webp",
                        faculties : [
                            "Faculty of Medicine",
                            "Faculty of Pediatric",
                            "Faculty of Preventive medicine",
                            "Faculty of Stomatology",
                            "Faculty of Pharmaceutics",
                            "Faculty of Graduate Nurses",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["FAIMER","The Medical Council of India","National Medical Commission of India (NMC)","ECFMG"],
                    },
                    
                     {
                        name: "Ulyanovsk state University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742553741/Russia_university_10_pic_xwubpj.webp",
                        slug: "ulyanovsk-state-university",
                        country : "russia",
                        overview : ["Ulyanovsk State University (USU) was founded in 1988 as a branch of Moscow State University named after M.V. Lomonosov, the best university in the country and one of the most authoritative universities in the world. In 1996, USU received the status of an independent university. The MBBS program at USU is meticulously designed to meet global standards, ensuring that graduates are well-prepared to practice medicine in diverse healthcare settings.  A key factor contributing to the program's appeal is its accreditation and recognition by various esteemed global bodies, which not only validates the quality of education provided but also enhances the career prospects of its graduates."],
                        academic : ["Ulyanovsk State University (USU), a distinguished institution within the Russian academic scene, presents a comprehensive array of academic programs designed to cater to a multitude of scholarly interests. Among its offerings, the university's six-year MBBS program stands out as a particularly renowned course of study, attracting aspiring medical professionals from across the globe.  USU prides itself on its diverse and highly qualified faculty, comprised of experienced educators and researchers who are dedicated to providing students with a rich and stimulating learning environment."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742553756/Russia_university_10_academic_pic_l8nkrx.jpg",
                        faculties : [
                            "Faculty of Medicine",
                            "Faculty of Pediatric",
                            "Faculty of Preventive medicine",
                            "Faculty of Stomatology",
                            "Faculty of Pharmaceutics",
                            "Faculty of Graduate Nurses",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["FAIMER","The Medical Council of India","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["Medical Council of India (MCI)","FAIMER","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },


                   //kazakhastan
                   
                   
                    {
                        name: "Kazakh Russian Medical University (KRMU)",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741863239/Kazakhstan_mbbs_university_1_jqwqxp.webp",
                        slug: "kazakh-russian-medical-university-(krmu)",
                        country : "kazakhstan",
                        overview : ["Kazakh Russian Medical University, a distinguished private medical institution located in Almaty, Kazakhstan, has earned a stellar reputation as a leading destination for students seeking a high-quality MBBS education abroad. Established in 1992, and formerly known as Kazakhstan Medical University, this institution has consistently ranked among the top medical universities in the country, attracting aspiring medical professionals from around the globe. Founded by Dr. Mukhtar Aliyevich Aliyev, a respected member of the Kazakh Academy of Sciences, the university benefits from the vision and leadership of a prominent figure in the medical community. At the heart of the university's success lies its vibrant and dedicated faculty, a collective of over 200 lecturers comprised of renowned doctors, esteemed international scientists, and distinguished Kazakh medical professionals. This impressive assembly of experts provides students with unparalleled access to knowledge, mentorship, and diverse perspectives, solidifying the university's position as a top choice for MBBS studies in Kazakhstan."],
                        academic : ["Kazakh Russian Medical University (KRMU) provides a comprehensive six-year MBBS program, consisting of five years of rigorous academic training followed by a one-year clinical internship. This structure ensures that graduates are well-prepared for the practical demands of the medical profession, having gained both theoretical knowledge and hands-on experience. The program's instruction is delivered in English, making it an ideal choice for international students seeking a globally recognized medical education. KRMU's degrees are widely recognized, thanks to accreditations from numerous international institutions, opening doors for graduates to pursue diverse career paths around the world."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741863311/Kazakhstan_mbbs_university_1_academic_pic_hdwmy6.webp",
                        faculties : [
                            "Department of Dentistry",
                            "Department of General Medicine",
                            "Department of Nursing",
                            "Department of Obstetrics",
                            "Department of Paediatrics",
                            "Department of Psychiatry",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["World Health Organization (WHO)","Medical Council of India (MCI)","Foundation for the Advancement of Education and International Medical Research (FAIMER)","Recognized by the Ministry of Education and Science of the Republic of Kazakhstan"],
                    },
                
                      {
                        name: "Kazakh National Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741865640/Kazakhstan_mbbs_university_2_hcc1iv.jpg",
                        slug: "kazakh-national-medical-university",
                        country : "kazakhstan",
                        overview : ["Kazakh National Medical University, a venerable institution established in 1931, holds a distinguished position as the #1 university in Kazakhstan, a testament to its unwavering commitment to academic excellence and groundbreaking medical research. Recognized as a 'National University' in 2001, this prestigious institution, located in the vibrant city of Almaty, has a rich history of nurturing some of the world's most renowned physicians and medical experts. Kazakh National Medical University has been a pivotal force in shaping healthcare. Kazakh National Medical University (KazNMU) offers a compelling combination of academic excellence and student-friendly features. The university boasts a highly qualified faculty comprised of experienced teachers, professors, and practicing doctors, ensuring students receive expert guidance and mentorship."],
                        academic : ["Kazakh National Medical University (KazNMU), located in Almaty, Kazakhstan, stands as a leading institution for medical education, offering a comprehensive range of programs, including undergraduate, postgraduate, and doctoral degrees. Aspiring medical professionals can pursue their educational goals in a variety of specializations, ensuring a well-rounded and in-depth understanding of the medical field. It is particularly renowned for its MBBS programs, attracting students from around the globe who seek a high-quality medical education. The university is widely recognized as a leader in medical education and medicine, contributing significantly to advancements in healthcare and medical research, both in Kazakhstan and internationally."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360828/Kazakhstan_mbbs_university_2_academic_pic_rsiwtu.jpg",
                        faculties : [
                            "Department of Anatomy",
                            "Department of Biochemistry",
                            "Department of Community Medicine",
                            "Department of Forensic Medicine",
                            "Department of Microbiology",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["Affiliated with the Health Ministry of Kazakhstan.","National Medical Commission of India (NMC)","World Health Organization (WHO)","Foundation for Advancement of International Medical Education and Research (FAIMER)"],
                    },
                
                     {
                        name: "Al-Farabi National Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360833/kazakhstan_mbbs_university_3_cwe7th.jpg",
                        slug: "al-farabi-national-medical-university",
                        country : "kazakhstan",
                        overview : ["Al-Farabi Kazakh National University (KazNU), a distinguished public university located in Almaty, Kazakhstan, is renowned for its exceptional medical education programs and its significant contributions to the field of healthcare. As one of the oldest and most prestigious universities in Kazakhstan, KazNU has a rich history of academic excellence and is consistently ranked among the top educational institutions in Central Asia. The university's medical faculty is particularly well-regarded, attracting aspiring medical professionals from across the globe who seek a high-quality education in a dynamic and stimulating environment. KazNU's medical programs cover a wide range of disciplines, from general medicine and surgery to specialized fields like cardiology, oncology, and neurology, providing students with a comprehensive and well-rounded medical education."],
                        academic : ["Al-Farabi Kazakh National University (KazNU), situated in Almaty, Kazakhstan, offers a diverse range of academic programs, encompassing medical sciences, engineering, humanities, and many other fields. This comprehensive offering allows students to pursue their educational goals across a broad spectrum of disciplines, fostering intellectual curiosity and preparing them for a variety of career paths. KazNU is renowned for its commitment to providing high-quality education, earning it a place among the top medical universities globally. This recognition reflects the university's dedication to academic excellence, innovative research, and the development of highly skilled professionals in the medical field and beyond."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360860/Kazakhstan_mbbs_university_3_academic_pic_xhbsml.jpg",
                        faculties : [
                            "Department of Anatomy",
                            "Department of Nursing",
                            "Department of Internal Medicine",
                            "Department of Surgery",
                            "Department of Fundamental Medical",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["MCI (Medical Council of India)","World Health Organization (WHO)","National Medical Commission of India (NMC)","KazNU is a member of the International Association of Universities)"],
                    },
                
                      {
                        name: "South Kazakh Medical Academy",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360874/kazakhstan_mbbs_university_4_k9rzgp.jpg",
                        slug: "south-kazakh-medical-academy",
                        country : "kazakhstan",
                        overview : ["Shymkent South Kazakhstan Medical Academy (SKMA), established in 1979, has a long-standing tradition of excellence in medical education and has consistently ranked among the top medical universities in Kazakhstan. Over the years, SKMA has earned a stellar reputation for its commitment to providing high-quality medical training and fostering a vibrant academic community. The academy's dedication to innovation and research has attracted students and faculty from around the globe, creating a diverse and intellectually stimulating environment. SKMA's modern campus provides students with access to state-of-the-art facilities, well-equipped laboratories, and a comprehensive library, ensuring they have the resources necessary to excel in their studies"],
                        academic : ["South Kazakhstan Medical Academy (SKMA), located in Shymkent, Kazakhstan, offers a full range of medical education programs, encompassing undergraduate, postgraduate, and doctoral degrees. Aspiring medical professionals can pursue their academic goals in a variety of fields, from general medicine and pediatrics to specialized areas like surgery, obstetrics and gynecology, and cardiology. The academy's undergraduate programs provide a strong foundation in basic medical sciences and clinical skills, preparing students for the rigors of medical practice. Postgraduate programs allow physicians to further specialize in their chosen field, enhancing their expertise and expanding their career opportunities."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360901/Kazakhstan_mbbs_university_4_academic_jwjzjc.jpg",
                        faculties : [
                            "Department of Chemistry",
                            "Department of Biochemistry",
                            "Department of Molecular Biology",
                            "Department of Medicine and Nursing",
                            "Department of Microbiology",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["Medical Council of India (MCI)","The Ministry of Education and Science of the Republic of Kazakhstan","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },


                //georgia

                {
                    name: "International School of Medical",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361665/Georgia_mbbs_university_1_pic_xgpd3e.jpg",
                    slug: "international-school-of-medical",
                    country : "georgia",
                    overview : ["The International School of Medicine at Alte University, located in Tbilisi, Georgia, provides aspiring medical and dental professionals with the opportunity to pursue their education in English. This allows students from diverse backgrounds to access high-quality medical training in a globalized setting. The school's programs are not only internationally recognized, ensuring graduates can pursue careers worldwide, but are also taught by a distinguished faculty of experienced medical professionals and international professors. This combination of recognition and expertise creates a rich learning environment for students. The school is a member of the Association for Medical Education in Europe (AMEE) and the European Association for Quality Assurance in Higher Education (ENQA)."],
                    academic : ["The International School of Medicine at Alte University, situated in the vibrant city of Tbilisi, Georgia, provides a unique opportunity for international students to pursue their dreams of becoming medical or dental professionals. This school offers holistic and state-of-the-art programs in both medicine and dentistry, designed specifically to cater to the needs of students from around the globe. A key feature of the International Medical School is its adherence to the rigorous standards set by the World Federation for Medical Education (WFME)."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361670/Georgia_mbbs_university_1_academic_pic_godlo8.jpg",
                    faculties : [
                        "Department of Anatomy",
                        "Department of Clinical Anatomy and operational Surgery",
                        "Department of Histology, Cytology and Embryology",
                        "Department of Bioethics",
                        "Department of Psychology",
                        "Department of Forensic Medicine",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["World Health Organization (WHO)","United Nations Organization (UNO)","Educational Commission for graduates in foreign medicine (ECFMG)","Foundation for the Advancement of Education and International Medical Research (FAIMER)"],
                },
            
                  {
                    name: "East European University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361703/Georgia_mbbs_university_2_pic_x9cyw0.png",
                    slug: "east-european-university",
                    country : "georgia",
                    overview : ["East European University (EEU), a private institution of higher learning established in 2012, is located in the heart of Tbilisi, the vibrant capital city of Georgia. Since its inception, EEU has dedicated itself to providing a high-quality educational experience to a diverse student body, welcoming individuals from across the globe to its dynamic academic community. The university prides itself on fostering an environment that encourages intellectual curiosity, personal growth, and global citizenship. EEU offers a wide array of academic disciplines, encompassing both undergraduate and postgraduate levels, catering to a broad range of educational and career aspirations. The university's commitment to academic excellence is reflected in its carefully curated curriculum, which is designed to equip students with the knowledge, skills, and competencies necessary to thrive in an increasingly interconnected and competitive world."],
                    academic : ["East European University (EEU), located in Tbilisi, Georgia, offers a diverse range of academic programs, including undergraduate, master's, and doctoral degrees, catering to a wide array of academic interests and career aspirations. Students can choose from a variety of fields, allowing them to pursue their passions and develop expertise in their chosen disciplines. The university's commitment to quality education is underscored by its accreditation from the Georgian Ministry of Science and Education."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361779/Georgia_mbbs_university_2_academic_pic_wqryxy.jpg",
                    faculties : [
                        "Department of Anatomy",
                        "Department of Biochemistry",
                        "Department of Community Medicine",
                        "Department of Forensic Medicine",
                        "Department of Microbiology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["World Federation for Medical Education (WFME)","Educational Commission for Foreign Medical Graduates (ECFMG)","World Health Organization (WHO)","Foundation for Advancement of International Medical Education and Research (FAIMER)"],
                },
            
                 {
                    name: "Georgian National University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361768/Georgia_mbbs_university_3_pic_fudh9w.jpg",
                    slug: "georgian-national-university",
                    country : "georgia",
                    overview : ["Established in 2001, the Georgian National University SEU has quickly risen to become one of the leading private universities in Tbilisi, Georgia, earning a reputation for its commitment to academic excellence and cutting-edge research programs. Situated in a prime location within the capital city, the university's modern campus provides a stimulating and supportive environment for students from diverse backgrounds. Georgian National University SEU prides itself on offering a state-of-the-art educational experience, combining innovative teaching methodologies with a focus on practical skills and real-world applications. The university's faculty comprises experienced professionals and scholars who are dedicated to nurturing the intellectual curiosity and personal growth of their students. With a wide range of undergraduate, graduate, and doctoral programs across various disciplines, Georgian National University SEU caters to a broad spectrum of academic interests and career aspirations."],
                    academic : ["Georgian National University SEU, located in Tbilisi, Georgia, offers a wide range of medical courses to meet the diverse needs and aspirations of aspiring healthcare professionals, nurturing their talents and preparing them for successful careers in the medical field. These programs include the Bachelor of Medicine, Bachelor of Surgery (MBBS), dentistry, surgery, and pharmacy, providing students with a comprehensive foundation in their chosen field. In addition to its undergraduate offerings, the university also provides postgraduate courses, allowing medical professionals to further specialize and enhance their expertise."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361800/Georgia_mbbs_university_3_academic_pic_dxsjh5.jpg",
                    faculties : [
                        "Department of Anatomy",
                        "Department of Biochemistry",
                        "Department of Internal Medicine",
                        "Department of Forensic Medicine",
                        "Department of Fundamental Medical",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["MCI (Medical Council of India)","World Health Organization (WHO)","National Medical Commission of India (NMC)","FAIMER (Foundation for Advancement of International Medical Education and Research)."],
                },
            
                  {
                    name: "Batumi Shota Rustaveli State University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361820/Georgia_mbbs_university_4_pic_zuf6ut.jpg",
                    slug: "batumi-shota-rustaveli-state-university",
                    country : "georgia",
                    overview : ["Batumi Shota Rustaveli State University, a prominent public university in Georgia, offers a complete range of medical education programs at both the undergraduate and postgraduate levels. Situated in the beautiful coastal city of Batumi, the capital of the Adjara region, the university provides a unique and enriching learning environment for aspiring medical professionals. Named after the revered 12th-century Georgian poet Shota Rustaveli, the university embodies the spirit of intellectual curiosity and pursuit of knowledge. With a rich history and a commitment to academic excellence, Batumi Shota Rustaveli State University has become a leading center for medical education in the region. The university's medical programs are designed to equip students with the necessary knowledge, skills, and ethical values to excel in their medical careers. The curriculum is rigorous and comprehensive, covering a wide range of medical disciplines and incorporating the latest advancements in medical science and technology."],
                    academic : ["Batumi Shota Rustaveli State University, a distinguished institution of higher learning in Georgia, provides a wide range of academic programs, including vocational training, bachelor's degrees, master's degrees, doctoral studies, and single-level programs. This diverse range of offerings caters to a broad array of educational goals and professional aspirations, ensuring that students can find a program that aligns with their interests and career ambitions. As a multifunctional medical school, Batumi Shota Rustaveli State University delivers both professional and research-based education to undergraduate and postgraduate students in the field of medicine."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361831/Georgia_mbbs_university_4_academic_pic_x7sj1c.webp",
                    faculties : [
                        "Department of Anatomy",
                        "Department of Biochemistry",
                        "Department of Molecular Biology",
                        "Department of Medicine and Nursing",
                        "Department of Microbiology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["Medical Council of India (MCI)","UNESCO: The university is recognized by UNESCO","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                },


                //belarus

                {
                    name: "Belarusian State Medical University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363262/Belarus_mbbs_university_1_b37hx6.jpg",
                    slug: "belarusian-State-medical-university",
                    country : "belarus",
                    overview : ["Belarusian State Medical University stands as the premier higher medical educational institution in the Republic of Belarus, holding a position of well-earned authority and recognition that extends far beyond its national borders. This esteemed university, set to celebrate its centenary in November 2021, boasts a rich and storied history that traces its origins back to 1921. That year marked the establishment of the Belarusian State University, which initially housed the Faculty of Medicine. This foundational faculty, instrumental in shaping the future of medical education in Belarus, subsequently evolved into an independent educational institution in 1930, solidifying its commitment to specialized medical training. The university's dedication to producing qualified medical professionals is evident from its earliest days, with the first graduation of doctors occurring in 1925. Belarusian State Medical University has remained at the forefront of medical education, consistently adapting to the evolving needs of the healthcare sector and contributing significantly to the advancement of medical science and practice."],
                    academic : ["Belarusian State Medical University offers a strong MBBS program with many departments for both classroom learning and hands-on practice. They have over 70 departments, with a mix of classes focused on theory and clinical skills. The university places a high value on practical training, which includes simulated patient scenarios, hands-on laboratory work, and clinical rotations in hospitals. This type of training allows students to apply their knowledge in a real-world setting and develop the skills they need to be successful doctors. The university also offers a variety of extracurricular activities and research opportunities to help students further develop their skills and knowledge."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363277/Belarus_mbbs_university_1_academic_tosbrh.webp",
                    faculties : [
                        "Faculty of General Medicine",
                        "Faculty of Pediatrics",
                        "Faculty of Preventive Medicine",
                        "Faculty of Dental",
                        "Faculty of Preventive Medicine",
                        "Faculty of Pharmaceutical",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["World Health Organization (WHO)","Medical Council of India (MCI)","The National Medical Commission (NMC) recognizes BSMU","The Independent Agency for Accreditation and Rating (IAAR) exchanges information with BSMU"],
                },
            
                  {
                    name: "Gomel State Medical University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363295/Belarus_mbbs_university_2_mqvfae.webp",
                    slug: "gomel-state-medical-university",
                    country : "belarus",
                    overview : ["Gomel State Medical University, a distinguished public teaching university located in Gomel, Belarus, stands as a beacon of medical education and innovation within the region. Established with a commitment to providing high-quality medical training, the university has consistently aimed to train its students with the knowledge and skills necessary to excel in the evolving field of healthcare. In Gomel city, the university provides a conducive environment for learning and personal growth. One of the hallmarks of Gomel State Medical University is its dedication to incorporating advanced medical technologies into its curriculum and clinical practice. This emphasis on cutting-edge technology not only enhances the learning experience for students but also ensures that graduates are well-versed in the latest advancements in medical science."],
                    academic : ["Gomel State Medical University (GSMU) in Belarus provides a comprehensive range of academic programs, catering to aspiring healthcare professionals at both undergraduate and postgraduate levels. The university offers diverse fields of study, including medicine, dentistry, pharmacy, nursing, and public health, ensuring a broad spectrum of educational opportunities for students with varying interests and career aspirations. GSMU's commitment to providing a high-quality education is shown in its curriculum, which is well-designed to follow European standards."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363315/Belarus_mbbs_university_2_academic_hixo1e.jpg",
                    faculties : [
                        "Department of Anatomy",
                        "Faculty of General Medicine",
                        "Faculty of Medical Diagnostics",
                        "Department of Pathology",
                        "Department of Microbiology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["Recognized by the Medical Council of India (MCI)","Educational Commission for Foreign Medical Graduates (ECFMG)","World Health Organization (WHO)","Recognized by the European Medical Council"],
                },
            
                 {
                    name: "Grodno State Medical University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363336/Belarus_mbbs_university_3_h1o46s.jpg",
                    slug: "grodno-state-medical-university",
                    country : "belarus",
                    overview : ["Established in 1958, Grodno State Medical University in Belarus has solidified its position as a specialized institution dedicated to medicine and medical psychology, contributing significantly to the healthcare landscape of the nation. Situated in the historic city of Grodno, the university has evolved into a major educational center for healthcare in the Republic of Belarus, playing a crucial role in shaping the future of medical professionals. Throughout its history, Grodno State Medical University has focused on training highly skilled specialists across various medical disciplines, earning worldwide recognition for the exceptional quality of its educational programs. The university's commitment to excellence is reflected in its rigorous curriculum, experienced faculty, and state-of-the-art facilities, which collectively contribute to a stimulating and enriching learning environment for students."],
                    academic : ["Belarus stands as a compelling destination for aspiring medical professionals seeking a high-quality MBBS education, featuring a collection of top universities that consistently rank among the top institutions in the region. Among these, Belarusian State Medical University holds a prominent position, renowned for its long-standing tradition of academic excellence and its strong medical programs. Gomel State Medical University focuses on advanced medical technologies and practical experience. Grodno State Medical University specializes in medicine and medical psychology. Vitebsk State Medical University excels in medical education and produces highly skilled graduates."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363351/Belarus_mbbs_university_3_academic_nk8cxz.jpg",
                    faculties : [
                        "Faculty of General Medicine",
                        "Faculty of Pediatrics",
                        "Faculty of Medical Diagnostics",
                        "Faculty of Mental Health Medicine",
                        "Department of Microbiology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["GSMU is recognized by the GMC","FAIMER (Foundation for Advancement of International Medical Education and Research)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                },
            
                  {
                    name: "Batumi Shota Rustaveli State University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363917/Belarus_mbbs_university_4_tq5udd.jpg",
                    slug: "batumi-shota-rustaveli-state-university",
                    country : "belarus",
                    overview : ["Batumi Shota Rustaveli State University, nestled in the vibrant city of Batumi, Georgia, has a rich history dating back to its establishment in 1923. Batumi, the capital of Adjara, is a historically significant and culturally rich destination, making it an attractive location for students seeking an immersive educational experience. The university has become a popular choice for international students, particularly those from India, who are drawn to Georgia's burgeoning reputation as a hub for medical education. The country's appeal lies in its commitment to providing a robust infrastructure, delivering a high-quality education, and offering an ideal learning environment for aspiring medical professionals."],
                    academic : ["Batumi Shota Rustaveli State University distinguishes itself by offering both professional and research-based education for undergraduate and postgraduate students. The institution's dedication to academic excellence is further validated by its accreditation from esteemed international organizations, including the MCI (Medical Council of India), WHO (World Health Organization), and UNESCO. This recognition underscores the university's adherence to global standards of medical education and its commitment to producing competent and ethical healthcare professionals. Moreover, the university fosters close associations with leading educational institutions worldwide, facilitating the exchange of knowledge, resources, and best practices. By cultivating these international partnerships, Batumi Shota Rustaveli State University provides its students with unparalleled opportunities to broaden their horizons, expand their professional networks, and ultimately realize their aspirations in the field of medicine."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363900/Belarus_mbbs_university_4_academic_x5ptac.jpg",
                    faculties : [
                        "Department of Pathologyy",
                        "Department of Histology",
                        "Department of Internal Medicine",
                        "Department of General Surgery",
                        "Department of Emergency Medicine",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["Medical Council of India (MCI)","United Nations Educational, Scientific and Cultural Organization (UNESCO)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                },

                //bangladesh
                {
                    name: "Holy Family Red Crescent Medical",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742792893/Bangladesh_mbbs_university_5_pic_jl2ew5.webp",
                    slug: "holy-family-red-crescent-medical",
                    country : "bangladesh",
                    overview : ["The Holy Family Red Crescent Medical College has a rich history and a strong commitment to providing quality medical education and services. Here's a summary of its key points:", "Founding and Leadership: Established in the academic year 1999-2000, the college was inspired by the daughter of the Father of the Nation, Prime Minister Janonetri Sheikh Hasina. It was founded under the leadership of Sheikh Fazlul Karim Salim, MP, the Health Minister at that time. Sheikh Kabir Hossain served as the Chairman of the Bangladesh Red Crescent Society, and Professor Dr. Md. Maniruzzaman Bhuiyan was appointed as the Principal."],
                    academic : ["Holy Family Red Crescent Medical College offers a five-year program with a one-year rotating internship. The students will learn both academic and practical parts in English language understanding. Under the supervision of a medical specialist, complete a one-year internship in a hospital and learn how to deal with patients."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742792907/Bangladesh_mbbs_university_5_academic_pic_taxpkd.jpg",
                    faculties : [
                        "Faculty of Anatomy & Physiology",
                        "Faculty of General Practice",
                        "Faculty of Stomatology (Dentistry)",
                        "Faculty of Nursing",
                        "Faculty of Microbiology",
                        "Faculty of Pharmacology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["The Ministry of Health and Family Welfare (MOHFW)","Recognized by the World Health Organization","National Medical Commission of India (NMC)","Recognized by the Bangladesh Medical and Dental Council"],
                },
                
                {
                    name: "Medical College For Women & Hospital",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742794293/Bangladesh_mbbs_university_6_pic_tgnlz8.jpg",
                    slug: "medical-college-for-women-&-hospital",
                    country : "bangladesh",
                    overview : ["Medical College for Women & Hospital, a project of the Medical and Health Welfare Trust, was established in 1992 with a vision to create a medical college exclusively for women. Founded by Prof. A.Q.M. Badruddoza Choudhury, Former President of the People’s Republic of Bangladesh, Prof. M.R. Khan, National Chairman, Prof. A. M. Mujibul Haq, Founder Principal of MCWH, and Prof. Suraiya Jabeen, Founder Treasurer, the institute aims to educate selected female candidates for five academic years according to the syllabus of the Bangladesh Medical and Dental Council (BMDC) for an MBBS degree conferred by Dhaka University. Following graduation, students undergo closely supervised internship training for one year, contributing to the creation of high-quality career doctors for the nation."],
                    academic : ["The college provides two hostels with standard facilities for students, along with an in-house gymnasium. It boasts two libraries, one of which operates 24/7. The institute maintains a dedicated, highly qualified, and efficient full-time faculty and medical staff committed to delivering quality medical education to students selected through government procedures."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742794349/Bangladesh_mbbs_university_6_academic_pic_p2gdxp.jpg",
                    faculties : [
                        "Faculty of General Medicine",
                        "Faculty of Preventive Health",
                        "Faculty of Pharmacy",
                        "Faculty of Dentistry",
                        "Faculty of Pediatrics",
                        "Faculty of Clinical Psychology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["Member of British Medical Education","The Medical Council of India","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                },
                
                 {
                    name: "Sylhet Women Medical College Sylhet",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742795361/Bangladesh_mbbs_university_7_pic_nt25yu.jpg",
                    slug: "sylhet-women-medical-college-sylhet",
                    country : "bangladesh",
                    overview : ["In 2005, Holy Land Private Limited and Sylhet Health and Education Services Limited joined forces to establish Holy Sylhet Holding Limited, focusing on medical education and healthcare. This initiative led to the creation of Sylhet Women's Medical College and Hospital (SWMCH), with the approval of the Government of Bangladesh in 2007. Alongside, plans were made to develop a Dental College and a four-year Nursing College on a 3-acre property in Sylhet City."],
                    academic : ["Sylhet Women's Medical College (SWMC) in Bangladesh provides a 5-year MBBS program. This program culminates in a Bachelor of Medicine, Bachelor of Surgery degree. A mandatory one-year internship follows graduation. This comprehensive structure ensures practical experience for all SWMC medical graduates."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742795396/Bangladesh_mbbs_university_7_academic_a0cnvg.jpg",
                    faculties : [
                        "Department of Medicine",
                        "Department of Paediatrics",
                        "Department of Psychiatry",
                        "Department of Dermatology",
                        "Department of Cardiology",
                        "Department of Nephrology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["SWMC is associated with UNESCO","The Medical Council of India","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                },
                
                  {
                    name: "TMSS Medical College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742796176/Bangladesh_mbbs_university_8_pic_fdoyb8.jpg",
                    slug: "tmss-medical-college",
                    country : "bangladesh",
                    overview : ["TMSS was established with the noble purpose of serving the underprivileged, discriminated, neglected, exploited, and oppressed individuals, recognizing medical care as a fundamental human need. However, access to quality medical treatment for these marginalized groups has become scarce. To address this, TMSS expanded its efforts by establishing TMSS Medical College (TMC) in 2008, as part of its commitment to bolster healthcare services."],
                    academic : ["TMSS Medical College in Bangladesh requires a full six years to complete graduation, a duration that is structured into two distinct phases: the initial five years are dedicated to comprehensive classroom study, encompassing both theoretical knowledge and research-based learning, while the concluding year is committed to a mandatory internship, providing essential practical and experience-based training."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742796225/Bangladesh_mbbs_university_8_academic_pic_vxchqa.jpg",
                    faculties : [
                        "Department of Community Medicine",
                        "Department of Medicine",
                        "Department of Pathology",
                        "Department of Microbiology",
                        "Department of Pharmacology",
                        "Department of Forensic Medicine",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["FAIMER","The Medical Council of India","National Medical Commission of India (NMC)","Bangladesh Medical & Dental Council (BMDC) Ministry of Health and Family Welfare."],
                },
                
                 {
                    name: "Community Based Medical College Mymensingh",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742797125/Bangladesh_mbbs_university_9_pic_u9kynw.jpg",
                    slug: "community-based-medical-college-mymensingh",
                    country : "bangladesh",
                    overview : ["The Community Health Foundation Bangladesh was established in 1994 in Mymensingh by thirty distinguished philanthropists from various fields, under the leadership of the late Professor Dr. AIM Mafakhkharul Islam. Dr. Islam often emphasized", "A journey of thousands of miles begins with a single step.The Community Based Medical College Bangladesh (CBMCB), an initiative of the Community Health Foundation, aims to contribute modestly to the national endeavor of achieving a sustainable quality of life and environment through healthcare and scientific advancement."],
                    academic : ["Community Based Medical College Bangladesh (CBMCB) primarily offers the Bachelor of Medicine, Bachelor of Surgery (MBBS) program, and its website showcases a range of departments such as Microbiology, ENT, Nephrology, Obstetrics & Gynecology, Ophthalmology, Orthopedic Surgery, and Pathology, indicating a broad spectrum of medical education and training."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742797140/Bangladesh_mbbs_university_9_academic_pic_qkqeg6.jpg",
                    faculties : [
                        "Faculty of Medicine",
                        "Faculty of Pediatric",
                        "Faculty of Preventive medicine",
                        "Faculty of Stomatology",
                        "Faculty of Pharmaceutics",
                        "Faculty of Graduate Nurses",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["FAIMER","WFME [World Federation for Medical Education","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                },

                   {
                    name: "International Medical College Tongi",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742797758/Bangladesh_mbbs_university_10_pic_qnlvjz.webp",
                    slug: "international-medical-college-tongi",
                    country : "bangladesh",
                    overview : ["Established in 2000, International Medical College embarked on a mission to deliver high-caliber medical education, aspiring to cultivate proficient medical professionals capable of meeting global healthcare demands. Since its inception, the institution has experienced substantial growth, earning widespread acclaim for its unwavering commitment to academic excellence and its dedicated provision of comprehensive medical services."],
                    academic : ["International Medical College (IMC) in Tongi, Bangladesh, provides a diverse range of healthcare education, including a 5-year MBBS program, B.Sc. in Nursing, Post Basic B.Sc. in Nursing, B.Sc. in Health Technology (Laboratory), and ESL courses, catering to a wide array of medical and allied health professional aspirations."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742797803/Bangladesh_mbbs_university_10_academic_pic_cllwcq.jpg",
                    faculties : [
                        "Faculty of Medicine",
                        "Faculty of Anatomy",
                        "Faculty of Pathology",
                        "Faculty of Stomatology",
                        "Faculty of Pharmaceutics",
                        "Faculty of Obstetrics & Gynaecology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["FAIMER","United Nations Educational, Scientific and Cultural Organization (UNESCO)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                },
                {
                    name: "Dhaka National Medical College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370689/bangladesh_mbbs_university_1_pic_jcnfko.webp",
                    slug: "dhaka-national-medical-college",
                    country : "bangladesh ",
                    overview : ["Dhaka National Medical College's history is rooted in the Dhaka National Medical Institute Hospital, founded in 1925. This institution emerged from the Non-cooperation Movement, a campaign against British colonial rule in the Indian subcontinent. The movement, spearheaded by Mahatma Gandhi, Mawlana Muhammad Ali, and Mawlana Shawkat Ali, and organized jointly by the Indian National Congress and the Indian Muslim League, aimed to pressure the British government through peaceful resistance and self-reliance. The Dhaka National Medical Institute Hospital was built in Dhaka, near Bahadur Shah Park, on land donated by Raghunath Das, a local landowner. Many nationalists also donated money to help build and establish the hospital."],
                    academic : ["Dhaka National Medical College, a prestigious institution in Bangladesh, offers a comprehensive and rigorous 5-year MBBS course approved by the University of Dhaka. The college is recognized by MCI & BMDC, ensuring that its graduates are eligible to practice medicine in India and Bangladesh. It is also listed in the WHO directory of medical institutes., a testament to its commitment to quality education and healthcare standards"],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370714/Bangladesh_mbbs_university_1_academic_pic_khi7zl.jpg",
                    faculties : [
                        "Department of Anatomy",
                        "Department of Biochemistry",
                        "Department of Community Medicine",
                        "Department of Forensic Medicine",
                        "Department of Microbiology",
                        "Department of Pathology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["Recognized by the Bangladesh Medical and Dental Council (BMDC) ","Accredited by the Bangladesh Medical and Dental Council (BMDC)","World Health Organization (WHO)","National Medical Commission of India (NMC)"],
                },
            
                  {
                    name: "Bangladesh Medical College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370731/Bangladesh_mbbs_university_2_pic_kh4afx.webp",
                    slug: "bangladesh-medical-college",
                    country : "bangladesh",
                    overview : ["Bangladesh Medical College opened on April 24, 1986, and Dhaka University officially recognized it on May 10, 1988. The Bangladesh Medical and Dental Council also recognizes the college. The first students completed their initial two years of study and took their first professional MBBS exam at Dhaka University in March 1990. The World Health Organization listed the college in its World Directory of Medical Schools starting in 1986, meaning graduates are recognized worldwide. Graduates can get limited registration with the UK's General Medical Council and can take the US Medical License Examination (USMLE). The college has a new six-story building with plenty of parking, and most departments have spacious rooms, creating a comfortable and conducive learning environment for students. The college also has a well-stocked library, a modern computer lab, and a variety of extracurricular activities to help students develop their skills and interests."],
                    academic : ["Bangladesh Medical College is known for its excellent academic programs for international students. It offers one undergraduate course in Medicine and Health Sciences: the MBBS degree. This program takes five years to complete. This is renowned for its commitment to providing world-class medical education to students from all over the globe. The college offers a single undergraduate program in the field of Medicine and Health Sciences, the Bachelor of Medicine, Bachelor of Surgery (MBBS) degree. This comprehensive program is designed to equip aspiring medical professionals with the knowledge, skills, and ethical values necessary to excel in their careers."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370825/Bangladesh_mbbs_university_2_academic_pic_ibfjx1.jpg",
                    faculties : [
                        "Department of Anatomy",
                        "Department of Biochemistry",
                        "Department of Physiology",
                        "Department of Gynecology",
                        "Department of Microbiology",
                        "Department of Pharmacology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["The University of Dhaka granted affiliation to BMC","Accredited by the Bangladesh Medical and Dental Council (BMDC) ","World Health Organization (WHO)","National Medical Commission (NMC)"],
                },
            
                 {
                    name: "Tairunnessa Memorial Medical College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370837/Bangladesh_mbbs_university_3_pic_hmdecx.jpg",
                    slug: "tairunnessa-memorial-medical-college",
                    country : "bangladesh",
                    overview : ["Tairunnessa Memorial Medical College (TMMC) in Gazipur, Bangladesh was established in 1995 by Mohammad Shamsul Hoque. This respected institution has earned widespread recognition for its strong commitment to incorporating state-of-the-art technology into its teaching and clinical practices, thereby playing a pivotal role in the advancement of medical education and the enhancement of healthcare services across Bangladesh. The college's dedication to providing its students with a comprehensive and well-rounded medical education is further exemplified by its affiliation with the prestigious Dhaka University. This affiliation not only ensures the academic quality of the college's curriculum but also provides students with access to a wider network of resources and expertise."],
                    academic : ["Tairunnessa Memorial Medical College (TMMC) in Bangladesh provides a comprehensive medical education, offering a five-year Bachelor of Medicine, Bachelor of Surgery (MBBS) degree program that prepares aspiring physicians with the necessary knowledge and skills for a successful career in healthcare. Beyond its medical degree program, TMMC also houses a dedicated nursing college, further contributing to the healthcare infrastructure by offering a diploma in nursing and midwifery."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370854/Bangladesh_mbbs_university_3_academic_pic_fxt20i.jpg",
                    faculties : [
                        "Department of Anatomy",
                        "Department of Biochemistry",
                        "Department of Paediatrics",
                        "Department of Forensic Medicine",
                        "Department of Microbiology",
                        "Department of Medicine",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["The University of Dhaka","Accredited by the Bangladesh Medical and Dental Council (BMDC) ","World Health Organization (WHO)","National Medical Commission (NMC)"],
                },
            
                  {
                    name: "Jahurul Islam Medical College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370896/Bangladesh_mbbs_university_4_pic_kyz4zl.jpg",
                    slug: "kyrgyz-state-medical-university",
                    country : "bangladesh",
                    overview : ["Jahurul Islam Medical College (JIMC), established in 1992 by the visionary philanthropist Jahurul Islam, stands as a testament to his commitment to improving healthcare in Bangladesh. Jahurul Islam Medical College boasts its own dedicated campus, a sprawling expanse of buildings that house all departments, laboratories, a library, museums, a dissection hall, lecture theaters, a cafeteria, and hostels. The college's verdant campus, a lush oasis in the heart of Bajitpur, provides a pollution-free environment ideal for teaching and learning."],
                    academic : ["This university provides a comprehensive medical education culminating in an MBBS degree. The five-year program is enhanced by a mandatory one-year internship, ensuring graduates are well-prepared for practice. The degree is fully recognized by the Bangladesh Medical and Dental Council."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370924/Bangladesh_mbbs_university_4_academic_pic_m427kf.webp",
                    faculties : [
                        "Department of Anatomy",
                        "Department of Biochemistry",
                        "Department of Community Medicine",
                        "Department of Forensic Medicine",
                        "Department of Microbiology",
                        "Department of Pathology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["The University of Dhaka","Accredited by the Bangladesh Medical and Dental Council (BMDC) ","World Health Organization (WHO)","National Medical Commission (NMC)"],
                },

                //Nepal

                {
                    name: "Kathmandu University School of Medical Sciences",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371953/Nepal_mbbs_university_1_xyo84u.jpg",
                    slug: "kathmandu-university-school-of-medical-sciences",
                    country : "nepal ",
                    overview : ["Kathmandu University School of Medical Sciences (KUSMS), founded in 1994, is a constituent school of Kathmandu University, operating in partnership with Dhulikhel Hospital. Kathmandu University School of Medical Sciences (KUSMS) provides a diverse range of academic programs, catering to aspiring healthcare professionals in various disciplines. At the undergraduate level, KUSMS offers comprehensive programs such as the Bachelor of Medicine, Bachelor of Surgery (MBBS), dental surgery, physiotherapy, and nursing, providing students with a strong foundation in their chosen fields. These programs are designed to provide students with the knowledge and skills necessary for a successful career in healthcare. Beyond its undergraduate offerings, KUSMS also extends its academic reach to postgraduate studies, providing specialized training in both basic and clinical sciences."],
                    academic : ["Kathmandu University School of Medical Sciences (KUSMS), nestled in the scenic town of Dhulikhel, Nepal, provides a full range of academic programs for aspiring healthcare professionals. KUSMS offers a diverse selection of both undergraduate and postgraduate courses, catering to a wide spectrum of interests and career goals within the medical field. At the undergraduate level, students can pursue foundational degrees in medicine, nursing, and allied health sciences, gaining a strong base of knowledge and practical skills necessary for entry-level practice. These undergraduate programs are designed to equip students with the core competencies required for providing quality patient care and contributing to the healthcare system. Beyond these foundational programs, KUSMS also offers a variety of postgraduate courses, allowing medical professionals to specialize in their chosen areas of expertise."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371960/Nepal_mbbs_university_1_academic_ttwiza.jpg",
                    faculties : [
                        "Department of Surgery",
                        "Department of General Medicine",
                        "Department of Nursing",
                        "Department of Ophthalmology",
                        "Department of Paediatrics",
                        "Department of Psychiatry",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["World Health Organization (WHO)","The Ministry of Education, Nepal officially recognizes KUSMS","Kathmandu University recognizes KUSMS.","National Medical Commission of India (NMC)"],
                },
            
                  {
                    name: "Manipal College of Medical Sciences",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371980/NEPAL_MBBS_UNIVERSITY_2_fvtg4g.webp",
                    slug: "manipal-college-of-medical-sciences",
                    country : "nepal",
                    overview : ["Manipal College of Medical Sciences (MCOMS), situated in the picturesque city of Pokhara, Nepal, is a renowned private medical college dedicated to providing high-quality medical education. As a prominent institution under the Manipal Education and Medical Group, MCOMS offers a comprehensive range of academic programs, encompassing both undergraduate and postgraduate medical studies. Aspiring medical professionals can pursue their educational goals in a variety of disciplines, from the foundational MBBS degree to specialized postgraduate courses, allowing them to tailor their education to their specific interests and career aspirations. Manipal College of Medical Sciences (MCOMS provides a comprehensive and enriching learning environment, spread across two scenic campuses nestled in the Himalayan foothills: Deep Campus and Phulbari Campus."],
                    academic : ["Manipal College of Medical Sciences (MCOMS), located in Pokhara, Nepal, provides a comprehensive medical education, offering both undergraduate and postgraduate programs to aspiring healthcare professionals. These programs are designed to equip students with the necessary knowledge and skills for successful careers in medicine, covering a wide range of specialties and areas of focus. "],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372000/Nepal_mbbs_university_2_academic_iyg9ik.jpg",
                    faculties : [
                        "Department of Anatomy",
                        "Department of Biochemistry",
                        "Department of Community Medicine",
                        "Department of Forensic Medicine",
                        "Department of Microbiology",
                        "Department of Pathology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["Affiliated to Kathmandu University, Dhulikhel, Nepal ","National Medical Commission of India (NMC)","World Health Organization (WHO)","Part of the Manipal Education and Medical Group (MEMG) "],
                },
            
                 {
                    name: "Maharajgunj Medical Campus, IOM",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372017/Nepal_mbbs_university_3_jooxdb.jpg",
                    slug: "maharajgunj-medical-campus",
                    country : "nepal",
                    overview : ["Maharajgunj Medical Campus (MMC), a prominent institution dedicated to medical education and healthcare, is a constituent campus of the Institute of Medicine (IOM) at Tribhuvan University, located in the heart of Kathmandu, Nepal. Established in 1972, MMC has a rich history of contributing to the development of medical professionals and advancing healthcare in the country. Maharajgunj Medical Campus (MMC) in Kathmandu, Nepal, provides students with a well-rounded experience, offering a variety of academic programs complemented by robust facilities, including well-equipped labs, convenient canteens, and diverse sports options."],
                    academic : ["Maharajgunj Medical Campus (MMC), a constituent campus of the Institute of Medicine (IOM) in Kathmandu, Nepal, provides a wide array of academic opportunities for aspiring healthcare professionals. The campus offers programs at all levels, from foundational undergraduate degrees to advanced postgraduate and doctorate programs, ensuring a comprehensive educational pathway for those seeking careers in medicine and related fields. This diverse range of programs at MMC allows students to specialize in various areas of healthcare, contributing to the development of a well-rounded and highly skilled medical workforce in Nepal."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372032/Nepal_mbbs_university_3_academic_mhtger.jpg",
                    faculties : [
                        "Department of Humanitarian Disciplines",
                        "Department of Nursing",
                        "Department of Internal Medicine",
                        "Department of Surgery",
                        "Department of Public Health",
                        "Department of Therapy",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["MCI (Medical Council of India)","World Health Organization (WHO)","National Medical Commission of India (NMC)","Affiliated with TU"],
                },
            
                  {
                    name: "Nepal army institute of health science",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372048/Nepal_mbbs_university_4_cmdbm9.webp",
                    slug: "Nepal-army-institute-of-health-science",
                    country : "nepal",
                    overview : ["The Nepalese Army Institute of Health Sciences (NAIHS), a distinguished non-profit medical college situated in Kathmandu, Nepal, plays a vital role in healthcare education and service within the nation. NAIHS offers a range of comprehensive medical programs, including the Bachelor of Medicine, Bachelor of Surgery (MBBS) degree, as well as postgraduate degrees such as MD (Doctor of Medicine) and MS (Master of Surgery) in various scientific disciplines. Nepal presents a compelling proposition for students, offering a range of advantages that contribute to a positive and enriching educational experience. One key benefit is the availability of scholarships, which can significantly ease the financial burden of pursuing higher education, making it more accessible to a wider range of students."],
                    academic : ["The Nepalese Army Institute of Health Sciences (NAIHS), located in Kathmandu, Nepal, provides a diverse range of academic programs designed to cater to aspiring healthcare professionals at various stages of their educational journeys. NAIHS offers a comprehensive MBBS (Bachelor of Medicine, Bachelor of Surgery) program, a foundational degree for those seeking to become physicians. This program provides students with a robust understanding of medical sciences, clinical skills, and patient care, equipping them with the knowledge and expertise necessary for a successful medical career. In addition to the MBBS program, NAIHS also offers a B.Sc."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372055/Nepal_mbbs_university_4_academic_wmv7ab.jpg",
                    faculties : [
                        "Department of Clinical Pharmacology",
                        "Department of Biochemistry",
                        "Department of Clinical Epidemiology",
                        "Department of Medicine and Nursing",
                        "Department of General Medicine",
                        "Department of Pathology",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["Medical Council of India (MCI)","The NAIHS is affiliated with Tribhuvan University","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
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