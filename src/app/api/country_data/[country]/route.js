import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const { country } = params;

        // This is your countries data - you can move this to a separate data file
        const countries = [
            {
                country: 'Uzbekistan',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742376445/Uzbekistan_logo_bxyjnu.png',
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
                country: 'Russia',
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
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774108/russia_university_6_r8rekd.jpg",
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
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774367/Russia_university_3_academic_pic_tllnxr.webp",
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
        

            //kyrgyztan
            {
                country: 'Kyrgyzstan',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854591/Kyrgyzstan_logo_dhosw2.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854634/Mbbs_in_Kyrgyzstan_pic_awazh3.jpg",
                overviewText: "Kyrgyzstan offers a compelling combination of factors for those seeking a unique and affordable lifestyle. The country boasts a remarkably low cost of living, making it an attractive option for budget-conscious individuals and families. Kyrgyzstan has become an increasingly popular choice for international students, particularly those from India, seeking to pursue an MBBS degree. Several factors contribute to this growing interest, making Kyrgyzstan an attractive option for medical education abroad. One of the primary reasons is the affordability of tuition fees in Kyrgyz medical universities. Compared to many other countries offering MBBS programs, Kyrgyzstan provides a cost-effective alternative, allowing students to pursue their medical aspirations without incurring excessive financial burdens.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854602/Mbbs_in_Kyrgyzstan_overview_pic_o06k77.jpg",
                quickFacts: ["Bishkek", "30%", "Kyrgyzstani som", "Approx. 71 lakhs"],
                univeristes: [
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


                eligibilityPoints: [
                    {
                        title: "Education",
                        description: "You must have completed 10+2 from a recognized board of education "
                    },
                    {
                        title: "Age Requirement",
                        description: "Minimum 17 years old at the time of admission"
                    },
                    {
                        title: "Subjects",
                        description: "You must have studied Physics, Chemistry, and Biology in 10+2"
                    },
                    {
                        title: "Score",
                        description: "50% aggregate for general category, 40% for reserved category."
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "English Medium Instruction",
                        description: "All medical programs are taught in English, eliminating language barriers for Indian students."
                    },
                    {
                        title: "Globally Recognized Degree",
                        description: "Medical degrees from Kyrgyzstan are recognized by the World Health Organization (WHO), National Medical Commission (NMC) in India, and other."
                    },
		    {
                        title: "No Entrance Exams",
                        description:  "Admission to medical universities in Kyrgyzstan is usually based on merit without requiring any additional entrance exams."
                    },
		    {
                        title: "Quality Medical Education",
                        description: "Kyrgyz medical universities focus on providing a comprehensive curriculum with strong emphasis on practical training and clinical exposure."
                    },
                ],
                advantages: ["Quality Education", "No Donation Required" ,"Globally Recognized Degrees" ,"International Exposure"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854678/Mbbs_in_kyrgyzstan_university_pic_vrbz7l.jpg",
            },

            ///Kazakhstan 

           {
            country: 'Kazakhstan',
            flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360305/Kazakhstan_logo_dirinj.png',
            mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742541042/kazakhstan_city_aa1ij3.webp",
            overviewText: "Kazakhstan holds a prominent position on the world stage, largely due to its strong economy. This economic strength is driven by the country's rich natural resources, particularly its vast reserves of oil and natural gas. Kazakhstan has emerged as an increasingly attractive destination for international students seeking quality higher education at an affordable cost. Several factors contribute to its growing popularity, making it a compelling option for those looking to study abroad. One of the most significant advantages is the affordability of tuition fees in Kazakhstan compared to many Western countries.",
            overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741863220/Mbbs_in_Kazakhstan_overview_pic_zs9vya.jpg",
            quickFacts: ["Astana", "35%", "Tenge (KZT)", "Approx. 1.99 crores"],
            univeristes: [
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
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                    affilationRecognition : ["Medical Council of India (MCI)","The Ministry of Education and Science of the Republic of Kazakhstan","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                },
            ],


            eligibilityPoints: [
                {
                    title: "Education",
                    description: "You must have completed 10+2 from a recognized board of education "
                },
                {
                    title: "Age Requirement",
                    description: "You must be at least 17 years old and not more than 25 years old when you apply"
                },
                {
                    title: "Subjects",
                    description: "You must have studied Physics, Chemistry, and Biology in 10+2"
                },
                {
                    title: "Score",
                    description: "You must have scored at least 50% in Physics, Chemistry, and Biology in 10+2"
                },
            ],
            mbbsBenefits: [
                {
                    title: "English Medium Instruction",
                    description: "All medical programs are taught in English, eliminating language barriers for Indian students."
                },
                {
                    title: "Globally Recognized Degree",
                    description: "Medical degrees from Kazakhstan are recognized by the World Health Organization (WHO) and the Medical Council of India (MCI), allowing graduates to practice medicine worldwide."
                },
        {
                    title: "No Entrance Exams",
                    description: "Many universities in Kazakhstan do not require entrance exams for international students, simplifying the admission process."
                },
        {
                    title: "Quality Medical Education",
                    description: "Kazakhstan boasts well-established medical universities with modern infrastructure, experienced faculty, and a comprehensive curriculum adhering to international standards."
                },
            ],
            advantages: ["Quality Education", "No Donation Required" ,"Affordable Cost" ,"Clinical Exposure"],
            advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854678/Mbbs_in_kyrgyzstan_university_pic_vrbz7l.jpg",
           },



            ///Georgia


            {
                country: 'Georgia',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361434/Georgia_logo_jtyuel.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361645/Georgia_mbbs_abroad_2_cjhiay.webp",
                overviewText: "Georgia has become a popular choice for Indian students seeking quality medical education abroad. Georgia boasts several top-ranking universities with a strong reputation for producing skilled doctors. These universities offer modern facilities, experienced faculty, and a curriculum designed to meet international standards. Compared to other countries, Georgia offers a more affordable and accessible pathway to a medical degree, making it an attractive option for many students. This allows them to focus on their academic preparation and pursue their medical aspirations without the added stress of a highly competitive entrance exam. The welcoming environment and the opportunity to experience a different culture while pursuing their studies further enhance the appeal of studying MBBS in Georgia.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361619/Georgia_mbbs_overview_pic_kjbxgp.webp",
                quickFacts: ["Tbilisi", "20%", "Georgian Lari (GEL)", "Approx. 37.6 lakhs"],
                univeristes: [
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["Medical Council of India (MCI)","UNESCO: The university is recognized by UNESCO","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
                ],


                eligibilityPoints: [
                    {
                        title: "Education",
                        description: "Have a minimum of 50% marks in Physics, Chemistry, and Biology (PCB) in their 12th standard"
                    },
                    {
                        title: "Age Requirement",
                        description: "You must be at least 17 years old and not more than 25 years old when you apply"
                    },
                    {
                        title: "NEET",
                        description: "Have a valid score in the National Eligibility cum Entrance Test (NEET)"
                    },
                    {
                        title: "Reserved Category",
                        description: "Have a minimum of 40% marks in PCB for students from SC/ST/OBC category"
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "Easy Admission Process",
                        description: "Unlike some other countries, the admission process for MBBS in Georgia is usually straightforward with no need for extremely competitive entrance exams."
                    },
                    {
                        title: "Quality Clinical Exposure",
                        description: "Georgian medical colleges provide ample opportunities for practical training in well-equipped hospitals, ensuring a strong clinical foundation."
                    },
		    {
                        title: "Safe and Welcoming Environment",
                        description: "Georgia is considered a safe country with a friendly culture, making it a comfortable place for international students to live and study."
                    },
		    {
                        title: "International Exposure",
                        description: "Studying in Georgia provides exposure to different healthcare systems and the opportunity to interact with students from various backgrounds."
                    },
                ],
                advantages: ["Quality Education", "Experienced Faculty" ,"Affordable Cost" ,"Cultural Diversity"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361507/Georgia_mbbs_university_1_zktls4.jpg",
            },


            ///Armenia


            {
                country: 'Armenia',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742362801/Armenia_nw2yy1.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742362855/Armenia_mbbs_abroad_4_vwaotv.jpg",
                overviewText: "Armenia is a fantastic choice for international students dreaming of becoming doctors. It offers a winning combination of affordability, top-notch medical education taught in English, and a safe and budget-friendly lifestyle. This makes it a real game-changer, especially for students from countries where medical school can break the bank. After graduating, you'll need to pass additional exams like the FMGE to practice medicine in your home country. This is a common requirement for medical graduates from many countries, so it's important to factor this into your plans. Armenia boasts over 50 universities, both public and private, with renowned institutions like the American University of Armenia and Yerevan State University leading the pack. With thousands of international students already thriving in Armenia, it's a vibrant and welcoming place to pursue your medical aspirations.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742362875/Armenia_overview_pic_qfmgkf.jpg",
                quickFacts: ["Yerevan", "20%", "Armenian Dram (AMD)", "Approx. 27.8 lakhs"],
            //    univeristes: [
            //         {
            //             name: "International School of Medical",
            //             image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741863239/Kazakhstan_mbbs_university_1_jqwqxp.webp",
            //             slug: "international-school-of-medical",
            //             country : "georgia",
            //             overview : ["The International School of Medicine at Alte University, located in Tbilisi, Georgia, provides aspiring medical and dental professionals with the opportunity to pursue their education in English. This allows students from diverse backgrounds to access high-quality medical training in a globalized setting. The school's programs are not only internationally recognized, ensuring graduates can pursue careers worldwide, but are also taught by a distinguished faculty of experienced medical professionals and international professors. This combination of recognition and expertise creates a rich learning environment for students. The school is a member of the Association for Medical Education in Europe (AMEE) and the European Association for Quality Assurance in Higher Education (ENQA)."],
            //             academic : ["The International School of Medicine at Alte University, situated in the vibrant city of Tbilisi, Georgia, provides a unique opportunity for international students to pursue their dreams of becoming medical or dental professionals. This school offers holistic and state-of-the-art programs in both medicine and dentistry, designed specifically to cater to the needs of students from around the globe. A key feature of the International Medical School is its adherence to the rigorous standards set by the World Federation for Medical Education (WFME)."],
            //             academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741863311/Kazakhstan_mbbs_university_1_academic_pic_hdwmy6.webp",
            //             faculties : [
            //                 "Department of Anatomy",
            //                 "Department of Clinical Anatomy and operational Surgery",
            //                 "Department of Histology, Cytology and Embryology",
            //                 "Department of Bioethics",
            //                 "Department of Psychology",
            //                 "Department of Forensic Medicine",
            //             ],
            //             facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            //             affilationRecognition : ["World Health Organization (WHO)","United Nations Organization (UNO)","Educational Commission for graduates in foreign medicine (ECFMG)","Foundation for the Advancement of Education and International Medical Research (FAIMER)"],
            //         },
                
            //           {
            //             name: "East European University",
            //             image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741865640/Kazakhstan_mbbs_university_2_hcc1iv.jpg",
            //             slug: "east-european-university",
            //             country : "georgia",
            //             overview : ["East European University (EEU), a private institution of higher learning established in 2012, is located in the heart of Tbilisi, the vibrant capital city of Georgia. Since its inception, EEU has dedicated itself to providing a high-quality educational experience to a diverse student body, welcoming individuals from across the globe to its dynamic academic community. The university prides itself on fostering an environment that encourages intellectual curiosity, personal growth, and global citizenship. EEU offers a wide array of academic disciplines, encompassing both undergraduate and postgraduate levels, catering to a broad range of educational and career aspirations. The university's commitment to academic excellence is reflected in its carefully curated curriculum, which is designed to equip students with the knowledge, skills, and competencies necessary to thrive in an increasingly interconnected and competitive world."],
            //             academic : ["East European University (EEU), located in Tbilisi, Georgia, offers a diverse range of academic programs, including undergraduate, master's, and doctoral degrees, catering to a wide array of academic interests and career aspirations. Students can choose from a variety of fields, allowing them to pursue their passions and develop expertise in their chosen disciplines. The university's commitment to quality education is underscored by its accreditation from the Georgian Ministry of Science and Education."],
            //             academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741865650/Kazakhstan_mbbs_university_2_academic_pic_hsxlck.jpg",
            //             faculties : [
            //                 "Department of Anatomy",
            //                 "Department of Biochemistry",
            //                 "Department of Community Medicine",
            //                 "Department of Forensic Medicine",
            //                 "Department of Microbiology",
            //             ],
            //             facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            //             affilationRecognition : ["World Federation for Medical Education (WFME)","Educational Commission for Foreign Medical Graduates (ECFMG)","World Health Organization (WHO)","Foundation for Advancement of International Medical Education and Research (FAIMER)"],
            //         },
                
            //          {
            //             name: "Georgian National University",
            //             image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854694/Kyrgyzstan_mbbs_university_3_xhfwx8.png",
            //             slug: "georgian-national-university",
            //             country : "georgia",
            //             overview : ["Established in 2001, the Georgian National University SEU has quickly risen to become one of the leading private universities in Tbilisi, Georgia, earning a reputation for its commitment to academic excellence and cutting-edge research programs. Situated in a prime location within the capital city, the university's modern campus provides a stimulating and supportive environment for students from diverse backgrounds. Georgian National University SEU prides itself on offering a state-of-the-art educational experience, combining innovative teaching methodologies with a focus on practical skills and real-world applications. The university's faculty comprises experienced professionals and scholars who are dedicated to nurturing the intellectual curiosity and personal growth of their students. With a wide range of undergraduate, graduate, and doctoral programs across various disciplines, Georgian National University SEU caters to a broad spectrum of academic interests and career aspirations."],
            //             academic : ["Georgian National University SEU, located in Tbilisi, Georgia, offers a wide range of medical courses to meet the diverse needs and aspirations of aspiring healthcare professionals, nurturing their talents and preparing them for successful careers in the medical field. These programs include the Bachelor of Medicine, Bachelor of Surgery (MBBS), dentistry, surgery, and pharmacy, providing students with a comprehensive foundation in their chosen field. In addition to its undergraduate offerings, the university also provides postgraduate courses, allowing medical professionals to further specialize and enhance their expertise."],
            //             academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741857500/Kyrgyzstan_mbbs_university_4_academic_plhcd3.webp",
            //             faculties : [
            //                 "Department of Anatomy",
            //                 "Department of Biochemistry",
            //                 "Department of Internal Medicine",
            //                 "Department of Forensic Medicine",
            //                 "Department of Fundamental Medical",
            //             ],
            //             facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            //             affilationRecognition : ["MCI (Medical Council of India)","World Health Organization (WHO)","National Medical Commission of India (NMC)","FAIMER (Foundation for Advancement of International Medical Education and Research)."],
            //         },
                
            //           {
            //             name: "Batumi Shota Rustaveli State University",
            //             image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854706/Kyrgyzstan_mbbs_university_4_bclzvu.webp",
            //             slug: "batumi-shota-rustaveli-state-university",
            //             country : "georgia",
            //             overview : ["Batumi Shota Rustaveli State University, a prominent public university in Georgia, offers a complete range of medical education programs at both the undergraduate and postgraduate levels. Situated in the beautiful coastal city of Batumi, the capital of the Adjara region, the university provides a unique and enriching learning environment for aspiring medical professionals. Named after the revered 12th-century Georgian poet Shota Rustaveli, the university embodies the spirit of intellectual curiosity and pursuit of knowledge. With a rich history and a commitment to academic excellence, Batumi Shota Rustaveli State University has become a leading center for medical education in the region. The university's medical programs are designed to equip students with the necessary knowledge, skills, and ethical values to excel in their medical careers. The curriculum is rigorous and comprehensive, covering a wide range of medical disciplines and incorporating the latest advancements in medical science and technology."],
            //             academic : ["Batumi Shota Rustaveli State University, a distinguished institution of higher learning in Georgia, provides a wide range of academic programs, including vocational training, bachelor's degrees, master's degrees, doctoral studies, and single-level programs. This diverse range of offerings caters to a broad array of educational goals and professional aspirations, ensuring that students can find a program that aligns with their interests and career ambitions. As a multifunctional medical school, Batumi Shota Rustaveli State University delivers both professional and research-based education to undergraduate and postgraduate students in the field of medicine."],
            //             academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854698/Kyrgyzstan_mbbs_university_3_academic_jc78kg.jpg",
            //             faculties : [
            //                 "Department of Anatomy",
            //                 "Department of Biochemistry",
            //                 "Department of Molecular Biology",
            //                 "Department of Medicine and Nursing",
            //                 "Department of Microbiology",
            //             ],
            //             facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            //             affilationRecognition : ["Medical Council of India (MCI)","UNESCO: The university is recognized by UNESCO","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
            //         },
            //     ],


                eligibilityPoints: [
                    {
                        title: "Education",
                        description: "10+2 with Physics, Chemistry, and Biology"
                    },
                    {
                        title: "Age Requirement",
                        description: "You must be at least 17 years old and not more than 25 years old when you apply"
                    },
                    {
                        title: "Entrance Exam",
                        description: "NEET mandatory"
                    },
                    {
                        title: "Percentage Requirement",
                        description: "50% aggregate for general category, 40% for reserved categories"
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "Low Cost of Education",
                        description: "Compared to other European countries, medical education in Armenia is considerably cheaper, making it accessible to students from diverse backgrounds."
                    },
                    {
                        title: "MCI Approved Universities",
                        description: "Most medical universities in Armenia are recognized by the Medical Council of India (MCI), allowing graduates to easily practice medicine in India after clearing the necessary exams."
                    },
		    {
                        title: "High Quality Education",
                        description: "Armenian medical universities like Yerevan State Medical University have a strong reputation for providing quality medical education with experienced faculty."
                    },
		    {
                        title: "No Entrance Exams",
                        description: "Many universities in Armenia do not require additional entrance exams beyond the qualifying marks in 12th grade for admission to MBBS."
                    },
                ],
                advantages: ["Quality Education", "MCI/NMC recognized degree" ,"Affordable Cost" ,"Good exposure to clinical practice"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742362887/Armenia_university_advantage_pic_mpt50z.jpg",
            },

            //Belarus

            {
                country: 'Belarus',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363200/Belarus_logo_xhpod2.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363215/Belarus_mbbs_abroad_hero_p8jpgp.jpg",
                overviewText: "Belarus offers a fantastic opportunity! You can pursue a high-quality MBBS degree taught in English, with some courses offered in Russian at a very affordable cost. The 6-year program includes hands-on experience in top-modern hospitals, ensuring you're well-prepared for your future career. Plus, Belarus provides a safe and welcoming environment for international students. The best part? Top medical universities in Belarus are recognized by the National Medical Commission (NMC) and other key international bodies. This opens doors for you to practice medicine anywhere in the world!",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363223/Belarus_mbbs_abroad_overview_pic_n6mb9m.jpg",
                quickFacts: ["Minsk", "40%", "Belarusian Ruble (BYN) ", "Approx. 27.8 lakhs"],
                univeristes: [
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["Medical Council of India (MCI)","United Nations Educational, Scientific and Cultural Organization (UNESCO)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
   ],


                eligibilityPoints: [
                    {
                        title: "Entrance Exam",
                        description: "NEET qualification is mandatory for Indian students."
                    },
                    {
                        title: "Age Requirement",
                        description: "Minimum 17 years old at the time of admission"
                    },
                    {
                        title: "Academic Qualification",
                        description: "10+2 with Physics, Chemistry, and Biology"
                    },
                    {
                        title: "Percentage Requirement",
                        description: "Minimum 60% aggregate in 12th grade for general category students."
                    },
                    {
                        title: "Language Proficiency",
                        description: "English proficiency required for studying in Belarus."
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "Clinical Exposure",
                        description: "Students get ample clinical practice opportunities in well-equipped hospitals, ensuring hands-on learning experience."
                    },
                    {
                        title: "Easy Admission Process",
                        description: "The admission process for international students is generally considered straightforward, with less stringent requirements compared to other countries."
                    },
		    {
                        title: "Safe and Stable Environment",
                        description:  "Belarus is known for its safe and stable environment, providing a conducive learning atmosphere for international students."
                    },
		    {
                        title: "Quality Medical Education",
                        description: "Belarus boasts well-equipped medical universities with modern facilities and experienced faculty, providing a high standard of medical education."
                    },
                    {
                        title: "Cultural Exposure",
                        description: "Studying in Belarus allows students to experience a different culture while building a global network of peers."
                    },
                ],
                advantages: ["Quality Education", "No entrance exams" ,"Multicultural environment" ,"Student support"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363295/Belarus_mbbs_university_2_mqvfae.webp",
            },

            //Bangladesh

            {
                country: 'Bangladesh',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370629/Bangladesh_logo_spccuq.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370642/Bangladesh_abroad_1_ytizxn.jpg",
                overviewText: "MBBS in Bangladesh is gaining popularity among international students, especially those from India. It offers a compelling blend of affordability, quality education, and a familiar environment. The curriculum often aligns with the Indian system, making it easier for graduates to appear for the Foreign Medical Graduate Examination (FMGE) in India. Bangladesh boasts numerous well-equipped medical colleges and readily accessible healthcare facilities, providing ample opportunities for hands-on learning and clinical experience. The relatively lower cost of living and a cultural familiarity further enhance the appeal, making it a more accessible and comfortable option compared to other study abroad destinations.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370649/Bangladesh_abroad_overview_xetpnj.jpg",
                quickFacts: ["Dhaka", "20%", "Taka", "Approx. 17.3 crores"],
                univeristes: [
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["The University of Dhaka","Accredited by the Bangladesh Medical and Dental Council (BMDC) ","World Health Organization (WHO)","National Medical Commission (NMC)"],
                    },
                ],


                eligibilityPoints: [
                    {
                        title: "Education",
                        description: "You must have passed your 10th and 12th grade from a recognized board "
                    },
                    {
                        title: "Age Requirement",
                        description: "You must be at least 17 years old by December 31 of the year you are admitted "
                    },
                    {
                        title: "NEET",
                        description: "You must have passed the NEET UG exam in the year you are admitted"
                    },
                    {
                        title: "GPA",
                        description: "You must have a minimum GPA of 7.0 on a scale of 5, and a minimum GPA of 4.0 in Biology in 10+2."
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "Easy admission process",
                        description: "Compared to some other countries, the admission process for MBBS in Bangladesh is often considered simpler"
                    },
                    {
                        title: "No language barrier",
                        description: "English is widely spoken in Bangladeshi medical institutions, making it easier for international students to adapt."
                    },
		    {
                        title: "WHO and NMC recognition",
                        description:  "Most top medical colleges in Bangladesh are recognized by the World Health Organization (WHO) and the National Medical Commission (NMC), ensuring the degree's international validity."
                    },
		    {
                        title: "Quality Medical Education",
                        description: "Bangladeshi medical universities maintain a high standard of education with well-trained faculty and modern infrastructure."
                    },
                ],
                advantages: ["Cost-effective", "Postgraduate opportunities" ,"Globally Recognized Degrees" ,"Strong clinical exposure"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370938/Bangladesh_advantage_pic_au7djp.jpg",
            },

            //Nepal

            {
                country: 'Nepal',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371911/Nepal_logo_jmuugf.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371921/Mbbs_in_nepal_pic_vwvju5.jpg",
                overviewText: "Nepal is a land of breathtaking beauty, famed for its majestic Himalayan peaks, including Mount Everest, the world's highest mountain. The country's diverse topography ranges from lush subtropical lowlands to towering snow-capped summits, creating a stunning tapestry of landscapes.Nepal has become a popular destination for Indian students aspiring to pursue a career in medicine, offering a compelling combination of affordability, quality education, and geographical proximity. One of the primary reasons for Nepal's appeal is the relatively low tuition fees compared to many other countries offering MBBS programs. This makes medical education more accessible and affordable for Indian students, allowing them to pursue their dreams without the burden of exorbitant costs.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371928/Mbbs_in_nepal_overview_pic_ccu1yq.jpg",
                quickFacts: ["Kathmandu", "20%", "Nepalese rupee (NRs)", "Approx. 2.97 crores"],
                univeristes: [
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
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
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                        affilationRecognition : ["Medical Council of India (MCI)","The NAIHS is affiliated with Tribhuvan University","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                    },
                ],


                eligibilityPoints: [
                    {
                        title: "Education",
                        description: "Passed 12th grade with PCB and English"
                    },
                    {
                        title: "Age Requirement",
                        description: "You must be at least 17 years old and not more than 25 years old when you apply"
                    },
                    {
                        title: "Subjects",
                        description: "Physics, Chemistry, and Biology (PCB) as core subjects in 10+2 or equivalent."
                    },
                    {
                        title: "NEET",
                        description: "NEET (for Indian students) and the medical university's entrance exam in Nepal .You must have scored at least 50% in Physics, Chemistry, and Biology in 10+2 "
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "English Medium Instruction",
                        description: "Most medical colleges in the country offer instruction entirely in English."
                    },
                    {
                        title: "Globally Recognized Degree",
                        description: "Medical colleges in Nepal are recognized by the World Health Organization (WHO) and the National Medical Commission (NMC), ensuring the validity of the degree worldwide."
                    },
		    {
                        title: "No Entrance Exams",
                        description:  "Unlike in India where a separate entrance exam like NEET is mandatory, many Nepalese medical colleges accept students based on their NEET score, eliminating the need for another entrance test."
                    },
		    {
                        title: "Quality Medical Education",
                        description: "Nepali medical colleges offer a standard curriculum recognized by the NMC, ensuring the degree is globally accepted."
                    },

                    {
                        title: "Clinical Exposure",
                        description: "Many programs in Nepal incorporate early clinical exposure in the curriculum, allowing students to apply theoretical knowledge in a practical setting from the beginning. "
                    },
                ],
                advantages: ["Quality Education", "No Visa Required (for Indian Students)" ,"Clinical Exposure" ,"Cultural Similarity"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372074/Mbbs_in_nepal_university_pic_bufmuf.jpg",
            },


            //poland

            {
                country: 'Poland',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374876/poland_logo_rajiqp.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374886/Poland_mbbs_in_abroad_hero_nwsgyx.jpg",
                overviewText: "Poland offers a fantastic opportunity for international students who dream of becoming doctors. You can get a world-class medical education at a reasonable cost while studying in a beautiful European country. The best part? Polish medical degrees are highly respected throughout the European Union, opening doors for you to work and practice medicine across the continent after graduation.Most Polish universities offer English-taught programs, making it easy for students from all over the world to understand and succeed. The program typically lasts six years, combining five years of in-depth learning with a critical year of hands-on training in hospitals. This well-rounded approach ensures you graduate with the knowledge and practical skills needed to excel in the medical field.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374897/Poland_mbbs_in_abroad_overview_wa1nhg.jpg",
                quickFacts: ["Warsaw", "50%", "Polish Zloty (PLN)", "Approx. 3.67 crores"],
                // univeristes: [
                //     {
                //         name: "Asian Medical Institute",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854620/Kyrgyzstan_mbbs_university_1_n5hxtq.jpg",
                //         slug: "asian-medical-institute",
                //         country : "Poland ",
                //         overview : ["Poland offers a fantastic opportunity for international students who dream of becoming doctors. You can get a world-class medical education at a reasonable cost while studying in a beautiful European country. The best part? Polish medical degrees are highly respected throughout the European Union, opening doors for you to work and practice medicine across the continent after graduation.Most Polish universities offer English-taught programs, making it easy for students from all over the world to understand and succeed. The program typically lasts six years, combining five years of in-depth learning with a critical year of hands-on training in hospitals. This well-rounded approach ensures you graduate with the knowledge and practical skills needed to excel in the medical field."],
                //         academic : ["The Asian Medical Institute (ASMI), located in Kant, Kyrgyzstan, has emerged as a leading medical institution, attracting students from around the globe who aspire to pursue careers in healthcare. It offers a range of medical programs. ASMI has gained recognition for its commitment to providing high-quality education at affordable tuition fees, making it an attractive option for students seeking a cost-effective medical education abroad. The university's dedication to academic excellence is reflected in its curriculum, which is designed to meet international standards and equip students with the knowledge and skills necessary to succeed in the medical profession."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854613/Kyrgyzstan_mbbs_university_1_academic_pic_iorlud.jpg",
                //         faculties : [
                //             "Department of Dentistry",
                //             "Department of General Medicine",
                //             "Department of Nursing",
                //             "Department of Obstetrics",
                //             "Department of Paediatrics",
                //             "Department of Psychiatry",
                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                //         affilationRecognition : ["World Health Organization (WHO)","Medical Council of India (MCI)","Foundation for the Advancement of Education and International Medical Research (FAIMER)","National Medical Commission of India (NMC)"],
                //     },
                
                //       {
                //         name: "OSH State Medical University",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854652/Kyrgyzstan_mbbs_university_2_tce3f1.jpg",
                //         slug: "osh-state-medical-university",
                //         country : "kyrgyzstan",
                //         overview : ["Osh State Medical University, a prominent institution in Kyrgyzstan, has a long-standing tradition of welcoming and training international students, dating back to 1993. Over the years, the International Medical Faculty at Osh State University has fostered a diverse and vibrant academic community, attracting students from over twenty countries across the globe. This rich tapestry of cultures creates a unique and enriching learning environment for all students. Currently, Osh State Medical University boasts a student body of over 3,500, with more than a thousand international students representing countries such as India, Pakistan, Nepal, Palestine, Syria, Turkey"],
                //         academic : ["Osh State Medical University, a prominent institution in Kyrgyzstan, offers a comprehensive range of medical education programs, catering to aspiring healthcare professionals at various stages of their academic journeys. The university provides undergraduate programs, including the MBBS (Bachelor of Medicine, Bachelor of Surgery) degree, which forms the foundation for a career in medicine. In addition to the MBBS program, Osh State Medical University also offers MD (Doctor of Medicine) and BDS (Bachelor of Dental Surgery) programs, providing students with diverse pathways to specialize in their chosen fields within the healthcare sector. These undergraduate programs are designed to provide students with a strong foundation in basic medical sciences, clinical skills, and ethical principles, preparing them for the challenges and rewards of a medical career."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741855648/Kyrgyzstan_mbbs_university_2_academic_pic_d3fw2c.jpg",
                //         faculties : [
                //             "Department of Anatomy",
                //             "Department of Biochemistry",
                //             "Department of Community Medicine",
                //             "Department of Forensic Medicine",
                //             "Department of Microbiology",
                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                //         affilationRecognition : ["World Directory of Medical Schools (WDOMS)","National Medical Commission of India (NMC)","World Health Organization (WHO)","Affiliated with the International Medical Education Directory (IMED)"],
                //     },
                
                //      {
                //         name: "International School of Medicine (ISM)",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854694/Kyrgyzstan_mbbs_university_3_xhfwx8.png",
                //         slug: "international-school-of-medicine",
                //         country : "kyrgyzstan",
                //         overview : ["The International School of Medicine (ISM) in Bishkek, Kyrgyzstan, stands as a prominent private medical university, offering a wide array of programs, including undergraduate, postgraduate, and doctoral degrees in various medical specialties. This diverse offering allows aspiring medical professionals to pursue their educational goals at different stages of their careers, from initial medical training to advanced specialization and research. ISM has earned a strong reputation for its commitment to academic excellence, attracting students from around the world who seek a high-quality medical education."],
                //         academic : ["The academic structure at the International School of Medicine (ISM) in Bishkek, Kyrgyzstan, is designed to provide students with a comprehensive and well-rounded medical education, combining a strong foundation in theoretical knowledge with essential practical skills. The program spans a total of six years, beginning with five years of intensive theoretical study. During this phase, students delve into the core principles of medical science, covering a wide range of subjects, from anatomy and physiology to pharmacology and pathology. The curriculum is designed to provide students with a deep understanding of the human body, disease processes, and treatment modalities, laying the groundwork for their future clinical practice."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741857500/Kyrgyzstan_mbbs_university_4_academic_plhcd3.webp",
                //         faculties : [
                //             "Department of Humanitarian Disciplines",
                //             "Department of Nursing",
                //             "Department of Internal Medicine",
                //             "Department of Surgery",
                //             "Department of Public Health",
                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                //         affilationRecognition : ["MCI (Medical Council of India)","World Health Organization (WHO)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                //     },
                
                //       {
                //         name: "Kyrgyz State Medical University",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854706/Kyrgyzstan_mbbs_university_4_bclzvu.webp",
                //         slug: "kyrgyz-state-medical-university",
                //         country : "kyrgyzstan",
                //         overview : ["Kyrgyz State Medical Academy (KSMA), a leading government university located in Bishkek, Kyrgyzstan, has established itself as a leading center for medical education in the region. With a rich history and a commitment to academic excellence, KSMA attracts students from around the world, particularly those seeking a high-quality medical education at an affordable cost. To become a leading center of medical education and science in the Asian region, a medical institution must cultivate a multifaceted approach encompassing academic excellence, research innovation, and community engagement. This vision necessitates a commitment to attracting and retaining top-tier faculty, fostering a stimulating learning environment, and providing students with access to cutting-edge resources and technology."],
                //         academic : ["Kyrgyz State Medical Academy (KSMA) in Bishkek, Kyrgyzstan, stands as a leading institution in medical education, offering a comprehensive range of programs for aspiring healthcare professionals. These programs span all levels of study, from undergraduate to postgraduate and doctoral degrees, providing students with a clear pathway to advance their medical careers. KSMA's commitment to academic excellence has earned it global recognition. The university is considered a top medical institution in Kyrgyzstan and is recognized by prestigious international organizations such as the World Health Organization, ensuring that its degrees are respected and valued worldwide. This international recognition opens doors for graduates to pursue professional opportunities in various countries, expanding their career horizons."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854698/Kyrgyzstan_mbbs_university_3_academic_jc78kg.jpg",
                //         faculties : [
                //             "Department of Clinical Pharmacology",
                //             "Department of Biochemistry",
                //             "Department of Clinical Epidemiology",
                //             "Department of Medicine and Nursing",
                //             "Department of General Medicine",
                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                //         affilationRecognition : ["Medical Council of India (MCI)","FAIMER","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                //     },
                // ],


                eligibilityPoints: [
                    {
                        title: "Education",
                        description: "You must have completed 10+2 from a recognized board of education."
                    },
                    {
                        title: "Age Requirement",
                        description: "You must be at least 17 years old and not more than 25 years old when you apply "
                    },
                    {
                        title: "Subjects",
                        description: "You must have studied Physics, Chemistry, and Biology in 10+2"
                    },
                    {
                        title: "NEET & Score",
                        description: "Indian students must qualify for the NEET exam.You must have scored at least 60% in Physics, Chemistry, and Biology in 10+2."
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "English Medium Instruction",
                        description: "Most medical universities in Poland offer MBBS programs entirely in English, eliminating language barriers for international students. "
                    },
                    {
                        title: "Globally Recognized Degree",
                        description: "Medical degrees from Polish universities are recognized by the World Health Organization (WHO) and are accepted in many countries worldwide, including India."
                    },
		    {
                        title: "No Entrance Exams",
                        description:  "Many Polish medical universities do not require additional entrance exams beyond the 12th grade results, simplifying the admission process."
                    },
		    {
                        title: "Quality Medical Education",
                        description: "Polish medical universities are known for their high academic standards, experienced faculty, and modern facilities, ensuring a robust medical curriculum."
                    },

                    {
                        title: "European Exposure",
                        description:  "Studying in Poland provides students with the opportunity to live and experience European culture, with easy access to travel across the continent."
                    },
                ],
                advantages: ["Quality Education", "No Entrance Exams" ,"Post-Graduation Opportunities" ,"International Recognition"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374907/Poland_mbbs_in_abroad_advantage_pic_o6ywsg.jpg",
            },

            //Dubai

            {
                country: 'Dubai',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375108/dubai_logo_eey2a7.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375136/Dubai_mbbs_in_abroad_hero_uarhjb.jpg",
                overviewText: "Dubai has become a highly popular destination for international students pursuing MBBS degrees. Several factors contribute to its attractiveness. Dubai boasts world-class medical universities with modern facilities and experienced faculty. These institutions offer a rigorous and comprehensive medical education, preparing students with the knowledge and skills necessary to excel in the field.Dubai's multicultural environment provides a unique and enriching learning experience. Students from diverse backgrounds interact, fostering a global perspective and enhancing their understanding of different cultures and healthcare systems. This exposure to diverse viewpoints is invaluable in preparing future doctors to serve a globalized world.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375143/Dubai_mbbs_in_abroad_overview_elcbwa.webp",
                quickFacts: ["", "75%", "Dirham (AED)", "36.4 lakhs"],
                // univeristes: [
                //     {
                //         name: "Asian Medical Institute",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854620/Kyrgyzstan_mbbs_university_1_n5hxtq.jpg",
                //         slug: "asian-medical-institute",
                //         country : "kyrgyzstan ",
                //         overview : ["The Asian Medical Institute (ASMI), located in Kant, Kyrgyzstan, has emerged as a leading medical institution, attracting students from around the globe who aspire to pursue careers in healthcare. It offers a range of medical programs. ASMI has gained recognition for its commitment to providing high-quality education at affordable tuition fees, making it an attractive option for students seeking a cost-effective medical education abroad. ASMI's faculty comprises experienced professionals and scholars who are passionate about teaching and mentoring the next generation of medical practitioners. The university also provides students with access to modern facilities, well-equipped laboratories, and a comprehensive library, ensuring they have the resources they need to excel in their studies."],
                //         academic : ["The Asian Medical Institute (ASMI), located in Kant, Kyrgyzstan, has emerged as a leading medical institution, attracting students from around the globe who aspire to pursue careers in healthcare. It offers a range of medical programs. ASMI has gained recognition for its commitment to providing high-quality education at affordable tuition fees, making it an attractive option for students seeking a cost-effective medical education abroad. The university's dedication to academic excellence is reflected in its curriculum, which is designed to meet international standards and equip students with the knowledge and skills necessary to succeed in the medical profession."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854613/Kyrgyzstan_mbbs_university_1_academic_pic_iorlud.jpg",
                //         faculties : [
                //             "Department of Dentistry",
                //             "Department of General Medicine",
                //             "Department of Nursing",
                //             "Department of Obstetrics",
                //             "Department of Paediatrics",
                //             "Department of Psychiatry",
                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                //         affilationRecognition : ["World Health Organization (WHO)","Medical Council of India (MCI)","Foundation for the Advancement of Education and International Medical Research (FAIMER)","National Medical Commission of India (NMC)"],
                //     },
                
                //       {
                //         name: "OSH State Medical University",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854652/Kyrgyzstan_mbbs_university_2_tce3f1.jpg",
                //         slug: "osh-state-medical-university",
                //         country : "kyrgyzstan",
                //         overview : ["Osh State Medical University, a prominent institution in Kyrgyzstan, has a long-standing tradition of welcoming and training international students, dating back to 1993. Over the years, the International Medical Faculty at Osh State University has fostered a diverse and vibrant academic community, attracting students from over twenty countries across the globe. This rich tapestry of cultures creates a unique and enriching learning environment for all students. Currently, Osh State Medical University boasts a student body of over 3,500, with more than a thousand international students representing countries such as India, Pakistan, Nepal, Palestine, Syria, Turkey"],
                //         academic : ["Osh State Medical University, a prominent institution in Kyrgyzstan, offers a comprehensive range of medical education programs, catering to aspiring healthcare professionals at various stages of their academic journeys. The university provides undergraduate programs, including the MBBS (Bachelor of Medicine, Bachelor of Surgery) degree, which forms the foundation for a career in medicine. In addition to the MBBS program, Osh State Medical University also offers MD (Doctor of Medicine) and BDS (Bachelor of Dental Surgery) programs, providing students with diverse pathways to specialize in their chosen fields within the healthcare sector. These undergraduate programs are designed to provide students with a strong foundation in basic medical sciences, clinical skills, and ethical principles, preparing them for the challenges and rewards of a medical career."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741855648/Kyrgyzstan_mbbs_university_2_academic_pic_d3fw2c.jpg",
                //         faculties : [
                //             "Department of Anatomy",
                //             "Department of Biochemistry",
                //             "Department of Community Medicine",
                //             "Department of Forensic Medicine",
                //             "Department of Microbiology",
                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                //         affilationRecognition : ["World Directory of Medical Schools (WDOMS)","National Medical Commission of India (NMC)","World Health Organization (WHO)","Affiliated with the International Medical Education Directory (IMED)"],
                //     },
                
                //      {
                //         name: "International School of Medicine (ISM)",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854694/Kyrgyzstan_mbbs_university_3_xhfwx8.png",
                //         slug: "international-school-of-medicine",
                //         country : "kyrgyzstan",
                //         overview : ["The International School of Medicine (ISM) in Bishkek, Kyrgyzstan, stands as a prominent private medical university, offering a wide array of programs, including undergraduate, postgraduate, and doctoral degrees in various medical specialties. This diverse offering allows aspiring medical professionals to pursue their educational goals at different stages of their careers, from initial medical training to advanced specialization and research. ISM has earned a strong reputation for its commitment to academic excellence, attracting students from around the world who seek a high-quality medical education."],
                //         academic : ["The academic structure at the International School of Medicine (ISM) in Bishkek, Kyrgyzstan, is designed to provide students with a comprehensive and well-rounded medical education, combining a strong foundation in theoretical knowledge with essential practical skills. The program spans a total of six years, beginning with five years of intensive theoretical study. During this phase, students delve into the core principles of medical science, covering a wide range of subjects, from anatomy and physiology to pharmacology and pathology. The curriculum is designed to provide students with a deep understanding of the human body, disease processes, and treatment modalities, laying the groundwork for their future clinical practice."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741857500/Kyrgyzstan_mbbs_university_4_academic_plhcd3.webp",
                //         faculties : [
                //             "Department of Humanitarian Disciplines",
                //             "Department of Nursing",
                //             "Department of Internal Medicine",
                //             "Department of Surgery",
                //             "Department of Public Health",
                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                //         affilationRecognition : ["MCI (Medical Council of India)","World Health Organization (WHO)","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                //     },
                
                //       {
                //         name: "Kyrgyz State Medical University",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854706/Kyrgyzstan_mbbs_university_4_bclzvu.webp",
                //         slug: "kyrgyz-state-medical-university",
                //         country : "kyrgyzstan",
                //         overview : ["Kyrgyz State Medical Academy (KSMA), a leading government university located in Bishkek, Kyrgyzstan, has established itself as a leading center for medical education in the region. With a rich history and a commitment to academic excellence, KSMA attracts students from around the world, particularly those seeking a high-quality medical education at an affordable cost. To become a leading center of medical education and science in the Asian region, a medical institution must cultivate a multifaceted approach encompassing academic excellence, research innovation, and community engagement. This vision necessitates a commitment to attracting and retaining top-tier faculty, fostering a stimulating learning environment, and providing students with access to cutting-edge resources and technology."],
                //         academic : ["Kyrgyz State Medical Academy (KSMA) in Bishkek, Kyrgyzstan, stands as a leading institution in medical education, offering a comprehensive range of programs for aspiring healthcare professionals. These programs span all levels of study, from undergraduate to postgraduate and doctoral degrees, providing students with a clear pathway to advance their medical careers. KSMA's commitment to academic excellence has earned it global recognition. The university is considered a top medical institution in Kyrgyzstan and is recognized by prestigious international organizations such as the World Health Organization, ensuring that its degrees are respected and valued worldwide. This international recognition opens doors for graduates to pursue professional opportunities in various countries, expanding their career horizons."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854698/Kyrgyzstan_mbbs_university_3_academic_jc78kg.jpg",
                //         faculties : [
                //             "Department of Clinical Pharmacology",
                //             "Department of Biochemistry",
                //             "Department of Clinical Epidemiology",
                //             "Department of Medicine and Nursing",
                //             "Department of General Medicine",
                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                //         affilationRecognition : ["Medical Council of India (MCI)","FAIMER","National Medical Commission of India (NMC)","World Health Organization (WHO)"],
                //     },
                // ],


                eligibilityPoints: [
                    {
                        title: "Academic qualifications",
                        description: "You must have passed 12th grade with Physics, Chemistry, and Biology as core subjects."
                    },
                    {
                        title: "Minimum marks",
                        description: "You must have scored at least 70% in the PCB group."
                    },
                    {
                        title: "Minimum marks",
                        description: "You may need to take NEET or other entrance exams."
                    },
                    {
                        title: "Medical fitness",
                        description: "You must be medically fit and obtain a medical certificate."
                    },
                ],
                mbbsBenefits: [
                    {
                        title: "Advanced Infrastructure and Facilities",
                        description: "Dubai boasts modern medical facilities and technology, providing students with access to cutting-edge equipment and practices."
                    },
                    {
                        title: "Experienced Faculty",
                        description: "Medical colleges in Dubai have experienced and qualified faculty with extensive clinical expertise."
                    },
		    {
                        title: "Diverse Clinical Exposure",
                        description:  "A multicultural patient population allows for exposure to a wide range of medical conditions and practices."
                    },
		    {
                        title: "High-Quality Healthcare System",
                        description: "Studying in Dubai provides access to a well-developed healthcare system with opportunities for internships and clinical rotations in reputable hospitals."
                    },
                ],
                advantages: ["High Quality Education", "Advanced Medical Facilities" ,"Cultural Diversity" ,"Globally Recognized Degree"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375121/mbbs_dubai_byahai.jpg",
            },

            //Ukraine

            {
                country: 'Ukraine',
                flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375712/Ukrain_logo_tpapan.png',
                mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375722/mbbs_in_ukraine_hero_niiwwe.jpg",
                overviewText: "MBBS in Ukraine has become an attractive option for Indian students seeking quality medical education abroad. Ukrainian medical universities are recognized by global organizations such as the World Health Organization (WHO) and the National Medical Commission (NMC) of India, ensuring that graduates are qualified to practice medicine internationally. Ukraine is home to several top-ranking medical universities that attract international students.Choosing to pursue MBBS in Ukraine offers Indian students a combination of quality education, global recognition, affordability, and a supportive learning environment. These factors make Ukraine a compelling destination for medical aspirants aiming to build a successful career in medicine.",
                overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375727/mbbs_in_ukraine_overview_l4lphr.jpg",
                quickFacts: ["Kyiv", "30%", "Hryvnia", "Approx. 3.7 crores"],
                // univeristes: [
                    

                //     {
                //         name: "Samarkand State Medical University",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741069514/img_container_tqemkk.png",
                //         slug: "samarkand-state-medical-university",
                //         country : "uzbekistan",
                //         overview : ["Samarkand State Medical University, established in 1930 as the State Uzbek Medical Institute, has evolved significantly over its 90-year history. Following Uzbekistan`'`s independence in 1991, the university experienced notable growth with the implementation of various educational and healthcare reform programs. These initiatives led to the establishment of new faculties and courses, including traditional medicine." , "In December 2021, Uzbekistan introduced reforms granting greater autonomy to public higher education institutions, empowering Samarkand State Medical University to make independent decisions regarding curriculum development and international partnerships."],
                //         academic : ["The Academic Lyceum at Samarkand State Medical University (Academic Lyceum No.1 at SamSMU) started in 2004-2005 to teach natural sciences. Initially, it was under different leadership but eventually integrated into Samarkand State Medical Institute. Now, with Director Associate Professor H.I. Mahmudova, it focuses on providing quality education in biology, chemistry, and other subjects. The lyceum has modern facilities and organizes events to discover students' talents. Graduates become Chemist Laboratory Technicians and have succeeded in national and international competitions. The lyceum aims to keep preparing skilled graduates for Uzbekistan's future."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741764850/Uzbekistan_university_1_academic_tnqmtt.png",
                //         faculties : [
                //             "Faculty of Medicine",
                //             "Faculty of Pharmacy",
                //             "Faculty of Higher Nursing",
                //             "Faculty of pediatrics",
                //             "Faculty of Dentistry",
                //             "Faculty of Medical Pedagogy"


                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
                //         affilationRecognition : ["Recognized by MCI","Recognized by FAIMER","NMC and WHO approved","United Nations Educational, Scientific and Cultural Organization (UNESCO)"],
                //     },

                //     {
                //         name: "Tashkent Medical Academy University",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767035/pic_5_hbwmul.jpg",
                //         slug: "tashkent-medical-academy-university",
                //         country: "uzbekistan",
                //         overview: ["Between 1919 and 1931, the Faculty of Medicine at Tashkent State University was established, with Professor P. Sitnovsky becoming its Dean in 1919. Significant progress was made under the leadership of Professors KG Khrushchev and MI Slonim between 1921-1924 and 1924-1926. By 1923, the faculty had grown to 973 students, including 425 females. Various deans served during this period, such as PF Borovskii, NI Ragoza, and GP Fedorov."],
                //         academic: ["Tashkent Medical Academy (TMA) provides a comprehensive selection of academic programs, catering to a diverse range of interests within the medical field. At the undergraduate level, TMA offers Bachelor's degrees in various disciplines, including general medicine, medical pedagogy, preventive medicine, nursing, medical biology, and management. These programs equip students with a strong foundation in their chosen areas of specialization, preparing them for careers in healthcare and related fields."],
                //         academicImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767783/pic_1_jbp3ed.jpg",
                //         faculties: [
                //             "Faculty of Medicine",
                //             "Faculty of pediatrics",
                //             "Faculty of Medical Pedagogy",
                //             "Faculty of Neuroscience",
                //             "Faculty of Dentistry",
                //             "Faculty of Pharmacy"
                //         ],
                //         facultyImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767120/pic_4_l3uszb.jpg",
                //         affilationRecognition: ["Recognized by MCI (Medical Council of India)", "Recognized by FAIMER", "NMC and WHO approved", "United Nations Educational, Scientific and Cultural Organization (UNESCO)"]
                //     },
                    
                //     {
                //         name: "Tashkent State Dental Institute",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767949/Top_Uzbekistan_university_4_sejpg7.jpg",
                //         slug: "tashkent-state-dental-institute",
                //         country : "uzbekistan",
                //         overview : ["Founded in 2014, Tashkent State Dental Institute stands as a beacon of excellence in the heart of Tashkent, a city renowned for its architectural splendor and commitment to medical education. With its rapid growth, the institute has become a magnet for thousands of aspiring students annually, drawn by its reputation for providing top-tier education"],
                //         academic : ["Tashkent State Dental Institute (TSDI), established in 2014, provides a comprehensive dental education. It offers a 5-year undergraduate program in dentistry, alongside postgraduate programs including residencies and master's degrees. TSDI focuses on preparing students for successful clinical practice and research careers in various specialized areas of dentistry."],
                //         academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741769987/Tashkent_state_dental_2_vwahxw.jpg",
                //         faculties : [
                //             "Faculty of Medicine",
                //             "Faculty of Pharmacy",
                //             "Faculty of Higher Nursing",
                //             "Faculty of pediatrics",
                //             "Faculty of Dentistry",
                //             "Faculty of Medical Pedagogy"


                //         ],
                //         facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741769966/Tashkent_state_dental_1_pfmhbj.jpg",
                //         affilationRecognition : ["Recognized by the Medical Council of India (MCI).","NMC and WHO approved","Recognized by the Ministry of Health of the Republic of Uzbekistan"],
                //     },

                //     {
                //         name: "Andijan State Medical Institute",
                //         image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741771360/Andijan_State_Medical_Institute_pic_tv5sdz.png",
                //         slug: "andijan-state-medical-institute",
                //         country: "uzbekistan",
                //         overview: ["Andijan State Medical Institute, situated in the ancient city of Fergana Valley, Andijan City. Established in 1955, Andijan State Medical Institute stands as a leading national institution in the Republic of Uzbekistan. Offering education across more than 56 diverse departments, it provides a comprehensive academic experience for aspiring medical professionals."],
                //         academic: ["Andijan State Medical Institute provides a broad spectrum of educational opportunities within the healthcare field. At the undergraduate level, the institute offers Bachelor's degrees in a substantial number of subjects, specifically 29, encompassing a wide array of medical, pediatric, and dental courses. This extensive offering allows students to specialize in their areas of interest, gaining a solid foundation for their future careers in healthcare. In addition to these Bachelor's programs, Andijan State Medical Institute also provides vocational courses, further expanding its educational reach."],
                //         academicImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741771856/pic_1_kjrd1l.jpg",
                //         faculties: [
                //             "Faculty of Medicine",
                //             "Faculty of pediatrics",
                //             "Department of Surgery",
                //             "Faculty of Gynecology",
                //             "Faculty of Dentistry",
                //             "Faculty of Pharmacy"
                //         ],
                //         facultyImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741771871/pic_7_hue4cz.jpg",
                //         affilationRecognition: ["Recognized by the National Medical Commission (NMC)", "World Health Organization (WHO)", "Recognized by the Ministry of Health of the Republic of Uzbekistan"]
                //     },
                    
                // ],
               
               
                eligibilityPoints: [
                    {
                        title: "Age",
                        description: "You must be at least 17 years old and younger than 25 years old as of December 31st of the year you are applying."
                    },
                    {
                        title: "Education",
                        description: "You must have passed class 12th from a recognized board with at least 50% marks in Physics, Chemistry, and Biology. If you are from an SC/ST/OBC category, you must have at least 40% marks. "
                    },
                    {
                        title: "NEET",
                        description: "You must have qualified for the NEET entrance exam."
                    },
                    {
                        title: "School",
                        description: "You must not be from an open school."
                    },

                    
                    
                ],
                mbbsBenefits: [
                    {
                        title: "Affordable Cost",
                        description: "Compared to many other countries, the tuition fees and overall cost of living in Ukraine are significantly lower, making it a budget-friendly choice for international students."
                    },
                    {
                        title: "Recognition of degree",
                        description: "An MBBS degree from a recognized Ukrainian university is accepted in many countries, including India, making it possible to practice medicine internationally."
                    },
		    {
                        title: "Modern Infrastructure",
                        description: "Ukrainian medical colleges are well-equipped with advanced technology and facilities, providing students with access to quality medical equipment and learning environments."
                    },
{
                        title: "Quality Education",
                        description: "Ukrainian medical universities are recognized by the WHO and offer a rigorous curriculum with a strong emphasis on practical training, ensuring a high standard of medical education"
                    },

                ],
                advantages: ["Low cost of education", "English medium instruction" ,"Globally Recognized Degrees" ,"Quality clinical training"],
                advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375734/mbbs_in_Ukrain_aqlem2.jpg",
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