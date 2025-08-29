import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { country } = params;

    // This is your countries data - you can move this to a separate data file
    const countries = [
      //uzbkistan
      {
        country: "Uzbekistan",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742376445/Uzbekistan_logo_bxyjnu.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793558/img_container_wsmqin.png",
        overviewText:
          "Uzbekistan has become an attractive destination for aspiring medical students, including those from India and beyond. Known for its esteemed medical universities.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793987/ov_img_sny10k.png",
        quickFacts: [
          "Tashkent",
          "40%",
          "Uzbekistani Som",
          "Approx. 3.5 crores",
        ],
        univeristes: [
          {
            name: "Samarkand State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741069514/img_container_tqemkk.png",
            slug: "samarkand-state-medical-university",
            country: "uzbekistan",
            overview: [
              "Samarkand State Medical University, established in 1930 as the State Uzbek Medical Institute, has evolved significantly over its 90-year history. Following Uzbekistan`'`s independence in 1991, the university experienced notable growth with the implementation of various educational and healthcare reform programs. These initiatives led to the establishment of new faculties and courses, including traditional medicine.",
              "In December 2021, Uzbekistan introduced reforms granting greater autonomy to public higher education institutions, empowering Samarkand State Medical University to make independent decisions regarding curriculum development and international partnerships.",
            ],
            academic: [
              "The Academic Lyceum at Samarkand State Medical University (Academic Lyceum No.1 at SamSMU) started in 2004-2005 to teach natural sciences. Initially, it was under different leadership but eventually integrated into Samarkand State Medical Institute. Now, with Director Associate Professor H.I. Mahmudova, it focuses on providing quality education in biology, chemistry, and other subjects. The lyceum has modern facilities and organizes events to discover students' talents. Graduates become Chemist Laboratory Technicians and have succeeded in national and international competitions. The lyceum aims to keep preparing skilled graduates for Uzbekistan's future.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741764850/Uzbekistan_university_1_academic_tnqmtt.png",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Pharmacy",
              "Faculty of Higher Nursing",
              "Faculty of pediatrics",
              "Faculty of Dentistry",
              "Faculty of Medical Pedagogy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Recognized by MCI",
              "Recognized by FAIMER",
              "NMC and WHO approved",
              "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
            ],
          },

          

          {
            name: "Tashkent Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767035/pic_5_hbwmul.jpg",
            slug: "tashkent-medical-academy-university",
            country: "uzbekistan",
            overview: [
              "Between 1919 and 1931, the Faculty of Medicine at Tashkent State University was established, with Professor P. Sitnovsky becoming its Dean in 1919. Significant progress was made under the leadership of Professors KG Khrushchev and MI Slonim between 1921-1924 and 1924-1926. By 1923, the faculty had grown to 973 students, including 425 females. Various deans served during this period, such as PF Borovskii, NI Ragoza, and GP Fedorov.",
            ],
            academic: [
              "Tashkent Medical Academy (TMA) provides a comprehensive selection of academic programs, catering to a diverse range of interests within the medical field. At the undergraduate level, TMA offers Bachelor's degrees in various disciplines, including general medicine, medical pedagogy, preventive medicine, nursing, medical biology, and management. These programs equip students with a strong foundation in their chosen areas of specialization, preparing them for careers in healthcare and related fields.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767783/pic_1_jbp3ed.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of pediatrics",
              "Faculty of Medical Pedagogy",
              "Faculty of Neuroscience",
              "Faculty of Dentistry",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767120/pic_4_l3uszb.jpg",
            affilationRecognition: [
              "Recognized by MCI (Medical Council of India)",
              "Recognized by FAIMER",
              "NMC and WHO approved",
              "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
            ],
          },

          // Commit Tashkent university
          // {
          //   name: "Tashkent State Dental Institute",
          //   image:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741767949/Top_Uzbekistan_university_4_sejpg7.jpg",
          //   slug: "tashkent-state-dental-institute",
          //   country: "uzbekistan",
          //   overview: [
          //     "Founded in 2014, Tashkent State Dental Institute stands as a beacon of excellence in the heart of Tashkent, a city renowned for its architectural splendor and commitment to medical education. With its rapid growth, the institute has become a magnet for thousands of aspiring students annually, drawn by its reputation for providing top-tier education",
          //   ],
          //   academic: [
          //     "Tashkent State Dental Institute (TSDI), established in 2014, provides a comprehensive dental education. It offers a 5-year undergraduate program in dentistry, alongside postgraduate programs including residencies and master's degrees. TSDI focuses on preparing students for successful clinical practice and research careers in various specialized areas of dentistry.",
          //   ],
          //   academicImg:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741769987/Tashkent_state_dental_2_vwahxw.jpg",
          //   faculties: [
          //     "Faculty of Medicine",
          //     "Faculty of Pharmacy",
          //     "Faculty of Higher Nursing",
          //     "Faculty of pediatrics",
          //     "Faculty of Dentistry",
          //     "Faculty of Medical Pedagogy",
          //   ],
          //   facultyImg:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741769966/Tashkent_state_dental_1_pfmhbj.jpg",
          //   affilationRecognition: [
          //     "Recognized by the Medical Council of India (MCI).",
          //     "NMC and WHO approved",
          //     "Recognized by the Ministry of Health of the Republic of Uzbekistan",
          //   ],
          // },

          // This card is repeated two times.
          // {
          //   name: "Andijan State Medical Institute",
          //   image:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741771360/Andijan_State_Medical_Institute_pic_tv5sdz.png",
          //   slug: "andijan-state-medical-institute",
          //   country: "uzbekistan",
          //   overview: [
          //     "Andijan State Medical Institute, situated in the ancient city of Fergana Valley, Andijan City. Established in 1955, Andijan State Medical Institute stands as a leading national institution in the Republic of Uzbekistan. Offering education across more than 56 diverse departments, it provides a comprehensive academic experience for aspiring medical professionals.",
          //   ],
          //   academic: [
          //     "Andijan State Medical Institute provides a broad spectrum of educational opportunities within the healthcare field. At the undergraduate level, the institute offers Bachelor's degrees in a substantial number of subjects, specifically 29, encompassing a wide array of medical, pediatric, and dental courses. This extensive offering allows students to specialize in their areas of interest, gaining a solid foundation for their future careers in healthcare. In addition to these Bachelor's programs, Andijan State Medical Institute also provides vocational courses, further expanding its educational reach.",
          //   ],
          //   academicImg:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741771856/pic_1_kjrd1l.jpg",
          //   faculties: [
          //     "Faculty of Medicine",
          //     "Faculty of pediatrics",
          //     "Department of Surgery",
          //     "Faculty of Gynecology",
          //     "Faculty of Dentistry",
          //     "Faculty of Pharmacy",
          //   ],
          //   facultyImg:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741771871/pic_7_hue4cz.jpg",
          //   affilationRecognition: [
          //     "Recognized by the National Medical Commission (NMC)",
          //     "World Health Organization (WHO)",
          //     "Recognized by the Ministry of Health of the Republic of Uzbekistan",
          //   ],
          // },

          {
            name: "Fergana State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742971800/pic_2_emnpdk.jpg",
            slug: "fergana-state-medical-university",
            country: "uzbekistan",
            overview: [
              "Established in 1991 in the city of Fergana, Uzbekistan, and holding affiliation with Fergana State University, the Fergana Medical Institute of Public Health serves as a prominent center for higher medical education in the region. The institute offers a range of programs across vital fields including General Medicine, Medical and Pedagogical studies, and Medical and Preventive Care, ensuring a comprehensive approach to public health education. Notably, the institute holds accreditation from both the World Health Organization (WHO) and the Medical Council of India/National Medical Commission (MCI/NMC), signifying that its degrees and educational standards are recognized on a global scale, facilitating international career opportunities for its graduates. Supported by a dedicated faculty of 147 professors and organized into 19 distinct departments, the institute is committed to delivering high-quality theoretical knowledge alongside essential practical skills.",
            ],
            academic: [
              "Fergana State University distinguishes itself by providing a relatively affordable pathway to international medical education for aspiring students. Specifically, the annual tuition fee for individuals seeking to pursue an MBBS degree at the university is notably accessible, amounting to only USD 3,500. Furthermore, recognizing the importance of global accessibility and catering to a diverse international student body, Fergana State University offers its medical courses in the English language, thereby eliminating potential language barriers and facilitating a more seamless and effective learning experience for students from various linguistic backgrounds.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742971815/pic_4_p8vsjx.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Preventive Medicine ",
              "Faculty of Higher Nursing",
              "Faculty of Traditional Medicine",
              "Faculty of Pediatrics",
              "Faculty of Biomedical Engineering",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Bukhara State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742974294/Uzbekistan_university_6_bukhara_esv5kr.jpg",
            slug: "bukhara-state-medical-university",
            country: "uzbekistan",
            overview: [
              "Established in 1990 and situated in the historic city of Bukhara, Uzbekistan, the Bukhara State Medical Institute is a highly regarded and leading university within the nation. Recognized as a top institution for medical science education, it presents an attractive avenue for international students seeking to pursue their MBBS degrees in Uzbekistan. Several factors contribute to its global appeal, including its relatively low tuition fees coupled with a commitment to maintaining high educational standards. The institute also boasts advanced laboratory facilities and provides essential basic amenities to support student learning and well-being. Furthermore, Bukhara State Medical Institute effectively eliminates language barriers for its international students by offering its medical programs with English as the primary medium of instruction, making the curriculum more accessible and easier to comprehend for individuals from diverse linguistic backgrounds around the world.",
            ],
            academic: [
              "Bukhara State Medical Institute (BSMI) in Uzbekistan provides a comprehensive selection of medical programs, including a six-year MBBS program, a six-year General Medicine course, a six-year Pediatrics program, and a five-year Dentistry program, with the added flexibility of instruction available in both English and Russian for select programs.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742974306/Uzbekistan_university_6_bukhara_academic_zn85cv.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Preventive Medicine ",
              "Faculty of Traditional Medicine",
              "Faculty of Pediatrics",
              "Faculty of Biomedical Engineering",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: ["FAIMER", "MCI", "NMC", "WHO"],
          },

          // Commit Tashkent university
          // {
          //   name: "Tashkent State Pediatric University",
          //   image:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742974976/Uzbekistan_university_7_Tashkent_agdzas.jpg",
          //   slug: "tashkent-state-pediatric-university",
          //   country: "uzbekistan",
          //   overview: [
          //     "Established in 1972, the institution now known as the Tashkent Pediatric Medical Institute has been a significant provider of educational services in the Republic of Uzbekistan, initially operating as the Central Asian Medical Pediatric Institute before its transfer to the Ministry of Uzbekistan in 1988 and subsequent reorganization. Located in Tashkent, the capital city of Uzbekistan, the institute was founded with the primary objective of addressing a shortage of pediatricians and the high infant mortality rates prevalent in the region by training highly qualified doctors and specialists in pediatrics. Since its inception, the institute has successfully graduated over 29,500 highly qualified medical doctors who have contributed significantly to healthcare.",
          //   ],
          //   academic: [
          //     "Tashkent Pediatric Medical Institute (TPMI), which has since been renamed Tashkent State Pediatric University, provides a comprehensive six-year MBBS program alongside various postgraduate opportunities including Master's degrees, clinical residency programs, and further postgraduate education, all of which hold global recognition, including acknowledgment by the Medical Council of India (now NMC).",
          //   ],
          //   academicImg:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742974988/Uzbekistan_university_7_Tashkent_academic_d9cyhe.jpg",
          //   faculties: [
          //     "Faculty of General Medicine",
          //     "Faculty of Preventive Medicine ",
          //     "Faculty of Traditional Medicine",
          //     "Faculty of Pediatrics",
          //     "Faculty of Biomedical Engineering",
          //   ],
          //   facultyImg:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
          //   affilationRecognition: [
          //     "MCI",
          //     "Ministry of Health of the Republic of Uzbekistan",
          //     "NMC",
          //     "WHO",
          //   ],
          // },
          {
            name: "Akfa University Medical School",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742987976/Uzbekistan_university_8_akfa_yevyup.jpg",
            slug: "akfa-university-medical-school",
            country: "uzbekistan",
            overview: [
              "Established in 2019, Akfa University Medical School represents a recent yet significant addition to the esteemed educational landscape of Uzbekistan, situated in the vibrant city of Tashkent. Despite its relatively young foundation, the university is driven by an ambitious aim to rapidly ascend to the forefront of higher education institutions within Uzbekistan, with a broader aspiration to actively contribute to the overall development of both the nation and the global community. Central to Akfa University Medical School's purpose is a clear and focused mission to cultivate and produce a cadre of world-class doctors, equipped with the knowledge, skills, and ethical grounding necessary to excel in the field of medicine and make meaningful contributions to healthcare on a national and international level.",
            ],
            academic: [
              "Tashkent Pediatric Medical Institute (TPMI), which has since been renamed Tashkent State Pediatric University, provides a comprehensive six-year MBBS program alongside various postgraduate opportunities including Master's degrees, clinical residency programs, and further postgraduate education, all of which hold global recognition, including acknowledgment by the Medical Council of India (now NMC).",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742988849/Uzbekistan_university_8_akfa_academic_br5iwf.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Preventive Medicine ",
              "Faculty of Traditional Medicine",
              "Faculty of Pediatrics",
              "Faculty of Biomedical Engineering",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Ministry of Education, Uzbekistan",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Andijan State Medical Institute",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742987956/Uzbekistan_university_9_andijan_zxizlb.jpg",
            slug: "andijan-state-medical-institute",
            country: "uzbekistan",
            overview: [
              "For international recognition, aspiring medical professionals must obtain their MBBS degree from a reputable institution, and while numerous universities and institutes worldwide offer medical courses, it is crucial for students to identify the best fit for their individual needs and aspirations. Recognizing the impracticality of visiting every medical university globally, readily available information about these institutions is essential for prospective MBBS students. In this context, we introduce Andijan State Medical Institute, a prominent national institute in the Republic of Uzbekistan, situated in Andijan City, one of the ancient urban centers within the Fergana Valley, and founded in 1955. Andijan State Medical Institute provides comprehensive medical education across a substantial range of over 56 diverse departments, contributing significantly to the training of healthcare professionals in the region and beyond.",
            ],
            academic: [
              "This university provides a six-year MBBS program, inclusive of a year-long internship, at a reasonable and affordable tuition cost, making it a popular choice for a significant number of Indian and other international students due to the entire curriculum being delivered in English.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742987965/Uzbekistan_university_9_andijan_academic_ykurkh.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Preventive Medicine ",
              "Faculty of Dentan",
              "Faculty of Pediatrics",
              "Faculty of Biomedical Engineering",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Ministry of Higher and Secondary Specialized Education of Uzbekistan",
              "NMC",
              "WHO",
            ],
          },
          {
            name: "Urgench branch of Tashkent Medical Academy",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743743556/Uzbekistan_university_10_Urgench_tkmu_yydzy5.jpg",
            slug: "urgench-branch-of-tashkent-medical-academy",
            country : "uzbekistan",
            overview : ["The Urgench campus of the Tashkent Medical Academy holds a distinguished position within Uzbekistan's medical education landscape, functioning as a vital component of the Tashkent Medical Academy and playing a crucial role in cultivating highly skilled medical professionals; recognized for its exceptional medical programs, comprehensive curriculum, and dedicated faculty, the Urgench branch prioritizes both rigorous academic instruction and practical training, effectively preparing students for successful careers in the medical field; graduates from this branch have made substantial contributions to healthcare advancements both within Uzbekistan and internationally, and the branch's commitment to excellence, modern facilities, and research opportunities renders it a preferred choice for aspiring medical students."],
            academic : ["The MBBS program offered at the Urgench Branch of Tashkent Medical Academy in Uzbekistan is structured as a five-year course, encompassing an internship, and students are required to complete the entire program within this five-year timeframe to be awarded their MBBS degree. This comprehensive curriculum is designed to provide students with a robust foundation in medical science, covering a wide array of subjects from basic sciences to clinical disciplines."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743743559/Uzbekistan_university_10_Urgench_tkmu_academic_fwx0td.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Preventive Medicine ",
                "Faculty of Dentistry",
                "Faculty of Pediatrics",
                "Faculty of Joint Education Program",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["MCI","Ministry of Health of the Republic of Uzbekistan","NMC","WHO"],
        },


			// Add new data
          {
            name: "KIMYO INTERNATIONAL UNIVERSITY",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755760078/page-header.jpg__2000.0x732.0_q85_subsampling-2_cnxfik.jpg",
            slug: "KIMYO INTERNATIONAL UNIVERSITY",
            country: "uzbekistan",
            overview: [
              "Kimyo International University in Tashkent (KIUT) is the first private higher education institution in Tashkent, Uzbekistan, established in 2018. Initially known as Yeoju Technical Institute in Tashkent, it was founded through an agreement between the South Korean and Uzbek governments. The university is located in Tashkent, the capital city of Uzbekistan, and has expanded its reach by opening branches in Namangan (2021) and Samarkand (2022). KIUT is equipped with advanced technology and modern facilities, including a hospital for practical learning, and focuses on providing value-based education.",
            ],
            academic: [
              "KIUT offers a diverse range of programs in Uzbek, Russian, and English languages, across full-time, extramural, and evening study formats. As of February 2024, it provides 28 bachelor's degree programs and 20 master's degree programs. The curriculum is designed to foster critical thinking and practical expertise, with periodic updates to integrate the latest advancements. The university also offers a 6-year MBBS course which includes a one-year internship and is taught entirely in English.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755760362/img_9282_1_dx36az.jpg",
            faculties: [
              "School of General Medicine",
              "School of Dentistry",
              "School of Pediatrics",
              "School of Nursing",
              "School of Business & Finance ",
              "School of Engineering",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755760497/8y8a1718.jpg__650x450_q85_crop_subsampling-2_cgpxoy.jpg",
            affilationRecognition: [
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
              "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
              "IQAA agencies (and included in the European EQAR database)",
            ],
          },

          {
            name: "KARSHI STATE MEDICAL UNIVERSITY",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755760558/1_l93y0m.jpg",
            slug: "KARSHI STATE MEDICAL UNIVERSITY",
            country: "uzbekistan",
            overview: [
              "Karshi State Medical University (KSMU), located in Karshi, Uzbekistan, is a rapidly developing center for medical education, clinical training, and research. Established in 2021 as the Faculty of Medicine under Karshi State University through a Presidential Decree, KSMU is committed to producing skilled and globally competent healthcare professionals. The university emphasizes practical learning and interdisciplinary research, with a strong focus on early clinical exposure through partnerships with over 12 affiliated hospitals and medical centers in the Karshi region.",
            ],
            academic: [
              "KSMU offers a range of undergraduate and postgraduate medical programs. The flagship program is the 6-year MBBS (General Medicine) course, which includes an internship and is offered in both English and Russian languages to meet international standards. A parallel 6-year program in Pediatrics is also available. The curriculum integrates modern teaching methodologies and cutting-edge research practices, utilizing advanced simulation labs and digital libraries.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755760647/statistics-bg_ityfpb.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatrics",
              "Faculty of Dentistry",
              "Faculty of Pharmacy",
              "Faculty of Nursing",
              "Postgraduate Medical Studies",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755760681/2_jmgfwi.jpg",
            affilationRecognition: [
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
              "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
              "FAIMER (Foundation for Advancement of International Medical Education and Research)",
            ],
          },

          {
            name: "IMPULSE MEDICAL INSTITUTE",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755760788/hero_hxhpla.png",
            slug: "IMPULSE MEDICAL INSTITUTE",
            country: "uzbekistan",
            overview: [
              "Impulse Medical Institute (IMI), established in 2019 in Namangan City, Uzbekistan, is emerging as a significant hub for medical education. It operates as a semi-government medical institution in collaboration with AMI. IMI aims to provide high-quality, affordable medical education with a strong emphasis on practical training and research. The institute's curriculum is designed to align with international standards, including the USMLE system and the guidelines set by the National Medical Commission (NMC) of India.",
            ],
            academic: [
              "IMI offers a 6-year Bachelor of Medicine (General Medicine) program, which includes 5 years of academic study and 1 year of clinical rotation. The instruction is delivered in both English and Uzbek. The institute focuses on providing hands-on experience through clinical training opportunities at its affiliated hospitals and clinics. It also integrates FMGE/NExT coaching for Indian students, including preparatory classes and mock tests from the second year onwards.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755760820/statsimage_i6alnb.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatrics",
              "Faculty of Dentistry (mentioned in snippets, indicating a program)",
              "School of Nursing",
              "Faculty of Pharmacy (mentioned in snippets, indicating a program)",
              "Faculty of Nursing (mentioned in snippets, indicating a program)",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755760864/photo_2025-01-13_16-15-46_ewcb1l.jpg",
            affilationRecognition: [
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
              "Educational Commission for Foreign Medical Graduates (ECFMG)",
              "State Inspectorate for Control of the Quality of Education of the Republic of Uzbekistan (holds license number 047559)",
            ],
          },
        ],
        eligibilityPoints: [
          {
            title: "Academic Qualification",
            description:
              "50% marks in PCB in 12th standard (40% for reserved categories).",
          },
          {
            title: "Age Requirement",
            description:
              "Be at least 17 years old by December 31 of the year of admission.",
          },
          {
            title: "Entrance Exam",
            description:
              "Must qualify the NEET exam to be eligible for MBBS admission",
          },
          {
            title: "NMC Recognition",
            description:
              "MBBS degrees from Uzbekistan are recognized by the (NMC) in India.",
          },
        ],
        mbbsBenefits: [
          {
            title: "Affordable Cost",
            description:
              "Compared to many other countries, the tuition fees and overall cost of living in Uzbekistan are significantly lower, making it a budget-friendly choice for international students.",
          },
          {
            title: "Study Duration",
            description:
              "MBBS in Uzbekistan offers a 6-year program (5 years of education + 1 year internship), similar to many other countries but shorter and more affordable than the USA.",
          },
          {
            title: "Practical Exposure",
            description:
              "The MBBS curriculum in Uzbekistan includes a substantial practical component with internships in affiliated hospitals, ensuring hands-on clinical experience.",
          },
          {
            title: "Quality Education",
            description:
              "Uzbekistan boasts well equipped medical universities with experienced faculty and modern teaching methods, providing a high standard of medical education.",
          },
        ],
        advantages: [
          "Low cost of education",
          "English medium instruction",
          "Globally Recognized Degrees",
          "Quality clinical training",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739825183/img_nbxth7.png",
      },

      //Russia

      {
        country: "Russia",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741757438/Russia_logo_gwfmaw.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741756592/mbbs_in_russia_2_qtrur5.jpg",
        overviewText:
          "Studying MBBS in Russia is a popular choice for Indian students because of its quality education, modern facilities, and affordable costs. Russian medical universities are recognized worldwide by organizations like the World Health Organization (WHO) and the National Medical Commission (NMC) of India. This means that students who graduate from these universities are qualified to practice medicine globally. ",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741757948/mbbs_in_russia_deprzx.jpg",
        quickFacts: ["Moscow", "30%", "Russian Ruble", "Approx. 14.45 crores"],
        univeristes: [
          {
            name: "North-Western State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756381763/north-western-state-medical-university-img.jpg_y9d9vr.webp",
            slug: "north-western-state-medical-university",
            country: "russia",
            overview: [
              "North-Western State Medical University named after I.I. Mechnikov (NWSMU) was founded on October 12, 2011 as a result of the merger of the two oldest educational medical institutions in Russia - St. Petersburg Medical Academy of Postgraduate Education and St. Petersburg State Medical Academy named after Mechnikov.The founder of the University is the Ministry of Health of the Russian Federation.The activity of the University is based on close cooperation and coordination of educational, clinical and research activities - this allows training competent specialists who have modern knowledge and are able to apply it in practice.",
            ],
            academic: [
              "North-Western State Medical University (NWSMU) in St. Petersburg, Russia offers undergraduate, graduate, and postgraduate degrees in medicine, dentistry, pharmacy, nursing, and other medical and healthcare-related areas. The university is known for its high-quality education and innovative research. Teaching staff Practical physicians, Academicians of the Russian Academy of Sciences, Honored doctors of Russia, Candidates of medical sciences, and Doctors of medical sciences",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741759187/Russia_university_1_academic_pic_if9to0.jpg",
            faculties: [
              "Medical Faculty",
              "Faculty of Medical Pedagogy",
              "Faculty of Higher Nursing",
              "Faculty of Dentistry",
              "Faculty of Pediatric",
              "Faculty of Preventive Medicine",
				
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "World Health Organization (WHO)",
              "Medical Council of India (MCI)",
              "Russian Ministry of Health",
              "National Medical Commission of India (NMC)",
            ],
          },

          {
            name: "Saint Petersburg State Pediatric Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774047/Russia_university_2_je0ada.png",
            slug: "saint-petersburg-state-pediatric-medical-university",
            country: "russia",
            overview: [
              "Saint-Petersburg State Pediatric Medical University was founded in 1925 as Academic and Research Institute of Maternal health and childhood protection on the hospital basement on 7th of January in 1925. For many decades, the University is an international center of higher medical education. Over the past half-century it graduated several thousand of foreign students from 70 countries from 4 continents. Currently, University is opened for students from over 50 countries. In University may be taken person of either sex, nation and race, regardless of political or religious beliefs of any state that has diplomatic relations with the Russian Federation. Our students and lecturers are laureates and prizewinners of rather international and Russian contests. Every year our students take part in competitions of scientific works for St. Petersburg Government grants and have a success. Students have a practice in our hospital (one of the biggest in Russia) from first days in university. They learn from practitioners who work in our clinic.",
            ],
            academic: [
              "Saint Petersburg State Pediatric Medical University (SPbSPMU) is a medical university located in St. Petersburg, Russia. It is the oldest pediatric higher education institution in the world. SPbSPMU has a state license and accreditation to provide training in English language, medicine according to the state standards",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741773931/russia_university_2_academic_pic_gudu5w.jpg",
            faculties: [
              "Faculty of Pediatrics",
              "Faculty of General Medicine",
              "Faculty of Clinical Psychology",
              "Faculty of Dentistry",
              "Faculty of Post Graduate & Additional Professional Education",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756467143/660_464_saint-petersburg-state-pediatric-medical-university-smapse-6_adbzap.jpg",
            affilationRecognition: [
              "Post Graduate & Additional Professional Education",
              "General Medical Council (GMC)",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          // add new univeristes here.
         
                    // add more universities here
       {
            name: "Northern State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755841565/banner_i5mgip.jpg",
            slug: "NORTHERN-STATE-MEDICAL-UNIVERSITY",
            country: "russia",
            overview: [
              "Northern State Medical University (NSMU) in Arkhangelsk, Russia, was founded in 1932. It is recognized as the largest and most well-known medical university in the Russian North. The university currently has about 5,000 full-time students enrolled across its faculties. NSMU is equipped with up-to-date facilities, including modern simulation centers in its university buildings and clinics. It boasts 55 departments, with 27 of them being clinically based in the city's best clinics.",
            ],
            academic: [
              "NSMU offers a range of English-medium programs, including General Medicine (MD/MBBS), Nursing, Dentistry, and a Master program in Public Health (MPH). The MPH program was established in 2007. NSMU has been educating foreign citizens since 1991, with the first international students hailing from India, Syria, and Pakistan. Currently, approximately 1,400 medical students from 15 countries study at NSMU.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756103500/ghsfh_f8zojv.webp",
            faculties: [
              "General Medicine (MD/MBBS)",
              "Faculty of Dentistry ",
              "Faculty of Nursing & Dentistry",
              "Postgraduate Studies (Ph.D.) ",
              "Public Health (Master program)",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756200531/unnamed_yqv8fl.webp",
            affilationRecognition: [
              "World Health Organization (WHO) ",
              "ECFMG (USA)",
              "Medical Council of India (MCI Rules)",
              "Medical Board of Thailand",
            ],
          },
			
              {
            name: "Kazan Federal Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756104978/kazan-university_paexhc.jpg",
            slug: "Kazan Federal University",
            country: "russia",
            overview: [
              "Kazan Federal University (KFU), founded in 1804, is the second oldest university in Russia. It is located in Kazan and is recognized as a leading educational and research institution. KFU is known as the birthplace of organic chemistry and electron spin resonance. The university has a large and diverse student body, with over 50,000 students, including more than 10,500 international students from over 100 countries.",
            ],
            academic: [
              "NSMU offers a wide array of English-medium academic programs. These include a 6-year General Medicine (MD/MBBS) program with a structured curriculum that progresses from foundational theoretical subjects to clinical and internship training. The university also provides a Dentistry program that is compatible with European standards, and a Nursing program. Additionally, it offers a Master program in Public Health (MPH), which is the sole program of its kind in Russia to be recognized by the Association of Public Health Schools in Europe. For outstanding graduates, Postgraduate Studies, including doctoral (Ph.D.) programs, are also available, with studies conducted on the basis of individual plans and under the guidance of supervisors.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755848336/unnamed_qju4yu.webp",
            faculties: [
              "Institute of Fundamental Medicine and Biology",
              "Institute of Physics",
              "Alexander Butlerov Institute of Chemistry",
              "Institute of Management, Economics and Finance",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755848360/unnamed_yucnbh.webp",
            affilationRecognition: [
              "World Health Organization (WHO)",
              "Educational Commission for Foreign Medical Graduates (ECFMG, USA)",
              "National Medical Commission (NMC, India",
              "General Medical Council of Britain",
            ],
          },

          {
            name: "Far Eastern Federal Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756191561/1579003945php9NzXGf_zo9i1d.jpg",
            slug: "Far eastern federal university",
            country: "russia",
            overview: [
              "Far Eastern Federal University (FEFU) was founded in 1899 in Vladivostok, Russia. It is a public university recognized as a major scientific and educational hub in the Asia-Pacific region. It is one of Russia's largest universities with a modern campus located on Russky Island.",
            ],
            academic: [
              "FEFU offers a 6-year General Medicine (MBBS) program that is popular with international students. The curriculum includes both theoretical and practical training, with clinical practice taking place at the FEFU Medical Center and other affiliated hospitals. The program is offered in English. For postgraduate studies and specialized medical fields, students can continue their education in a clinical residency or on postgraduate courses. The university has departments that specialize in various fields, including neurology, neurosurgery, orthopedics, cardiology, and general surgery.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756105854/Far-Eastern-Federal-University-Classroom_bvbj7x.webp",
            faculties: [
              "General Medicine (MBBS)",
              "Master program in Public Health (MPH)",
              "Postgraduate Studies, including doctoral (Ph.D.)",
              "Faculty of Pharmacy program",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755856166/article4_fjynoy.jpg",
            affilationRecognition: [
              "World Health Organization (WHO)",
              "Educational Commission for Foreign Medical Graduates (ECFMG)",
              "National Medical Commission (NMC)",
              "Foundation for Advancement of International Medical Education and Research (FAIMER)",
            ],
          },

		   {
            name: "North Ossetian Federal University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756109187/unnamed_xfukxl.webp",
            slug: "North Ossetian federal university",
            country: "russia",
            overview: [
              "North Ossetian Federal University (NOSU), established in 1920 in Vladikavkaz, Russia, is a prominent public university offering a wide range of programs, including MBBS for international students. The university is recognized by the World Health Organization (WHO) and listed in the World Directory of Medical Schools (WDOMS), making its degrees globally accepted. NOSU provides students with modern infrastructure, advanced laboratories, simulation centers, and a well-stocked library to ensure quality education. The medical faculty focuses on both theoretical knowledge and practical training in affiliated hospitals, giving students real-life clinical exposure. The medium of instruction for MBBS is English, making it suitable for Indian and other international students. The university is also known for its affordable tuition fees and comparatively low cost of living in Vladikavkaz. With a multicultural environment, safe campus, and hostel facilities, NOSU ensures a supportive atmosphere for international students.",
            ],
            academic: [
              "NOSMA offers a 6-year General Medicine (MBBS) program, with instruction available in both English and Russian. The curriculum is structured to provide a comprehensive medical education, progressing from fundamental theoretical sciences to advanced clinical practice. It also offers programs in Dentistry and Pharmacy, along with postgraduate training in over 40 medical specialties.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756382449/A7BDB5B9-1569-45E9-BDA5-0C3A0585A49C-580x560_dyurv9.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Dentistry",
              "Faculty of Pharmacy",
              "Faculty of Pediatrics",
              "Faculty of Postgraduate Studies",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756109311/mbbs-fees-in-crimea_p7tyat.jpg",
            affilationRecognition: [
              "Educational Commission for Foreign Medical Graduates (ECFMG ,USA)",
              "National Medical Commission (NMC, India)",
              "World Federation for Medical Education (WFME)",
              "World Health Organization (WHO)",
            ],
          },




  {
            name: "North Caucasian State Academy",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756109411/North-Caucasian-State-Academy-1_olszaf.webp",
            slug: "North Caucasian State Academy",
            country: "russia",
            overview: [
              "North Caucasian State Academy (NCSA), located in Cherkessk, Russia, is a multidisciplinary public university founded in 1936. It is one of the leading educational institutions in the North Caucasus region, offering a wide range of programs in fields such as economics, law, medicine, humanities, and natural sciences. The academy is known for its focus on academic excellence, research, and innovation while also promoting cultural diversity and international collaboration. With modern facilities and experienced faculty, NCSA attracts both domestic and international students seeking quality higher education.",
            ],
            academic: [
              "NCSA offers a wide range of academic programs at the undergraduate, postgraduate, and doctoral levels. While it is particularly known for its medical programs, such as General Medicine (MBBS), Dentistry, and Pharmacy, it also offers courses in a variety of other fields. Instruction is available in both English and Russian, catering to a diverse student body.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756109445/North_Caucasian_State_Medical_Academy_b572tf.jpg",
            faculties: [
              "Medical Institute",
              "Institute of Digital Technologies",
              "Institute of Design and Linguistics",
              "Agricultural Institute",
              "Engineering Institute",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756109471/North_Caucasian_State_Medical_Academy_lprdnq.jpg",
            affilationRecognition: [
              "World Federation for Medical Education (WFME)",
              "National Medical Commission (NMC, India)",
              "Ministry of Science and Higher Education of the Russian Federation",
              "World Health Organization (WHO)",
            ],
          },


      {
            name: "Novgorod State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756109566/unnamed_gyzfdk.webp",
            slug: "Novgorod State University",
            country: "russia",
            overview: [
              "Novgorod State Medical University (NNSMU), also known as Privolzhsky Research Medical University, is one of the leading medical institutions in Russia, founded in 1920 in Nizhny Novgorod. With a strong history of excellence, the university has become a major hub for training highly qualified doctors and healthcare professionals in the Volga region. It offers modern facilities, advanced research opportunities, and a wide range of medical programs designed to meet global standards. The university hosts more than 5,000 students, including over 800 international students from more than 38 countries, making it a truly diverse learning environment. Known for its focus on practical training, innovative teaching methods, and international collaboration, NNSMU provides students with a solid foundation to build successful medical careers both in Russia and abroad.",
            ],
            academic: [
              "The university offers various programs, with a focus on medicine, dentistry, and pharmacy. The General Medicine (MBBS) course is a popular choice for international students and is taught in English. The program lasts for six years, which includes a one-year internship. Students begin clinical studies in the third year and are rotated through different hospital departments.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756109618/college-students-3990783_640_ggisxt.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatrics",
              "Faculty of Pharmacy",
              "Faculty of Preventive Medicine",
              "Faculty of Higher Nursing Education",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756109656/nizhny-novgorod-state-medical-university-4_sgndvm.webp",
            affilationRecognition: [
              "World Federation for Medical Education (WFME)",
              "National Medical Commission (NMC, India)",
              "Ministry of Science and Higher Education of the Russian Federation",
              "World Health Organization (WHO)",
            ],
          },


			// morrersdfsadfhsdfdfasdfgasdfg
           
            {
            name: "Tambov State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756290909/unnamed_rfvqix.webp",
            slug: "Tambov State University",
            country: "russia",
            overview: [
              "Tambov State Medical University, established in 1930 in Tambov, Russia, is one of the leading institutions for higher medical education. The university provides a wide range of programs in general medicine, dentistry, pediatrics, pharmacy, and nursing. With a strong academic foundation, it combines theoretical knowledge with hands-on clinical training in affiliated hospitals and modern laboratories. The university is also known for its active research environment and international collaborations, attracting students from various countries. Its multicultural campus, qualified faculty, and focus on practical healthcare skills make it an excellent choice for students aspiring to pursue a medical career in Russia and abroad.",
            ],
            academic: [
              "The university offers more than 100 programs in various fields, including medicine, economics, nanotechnology, and information technology. The medical programs, particularly the General Medicine (MBBS) course, are taught in both English and Russian. The duration of the MBBS program is 6 years, which includes a mandatory 1-year internship.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756119615/hgojtlnoqerc901k6wt14ug9yj8grfym_pwyswm.webp",
            faculties: [
              "Medical Institute",
              "Pedagogical Institute",
              "Institute of Natural Sciences",
              "Institute of Economics, Management, and Service",
              "Institute of Law and National Security",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756119546/qf9vyynenbu3zozcstxk9y1fr29pcapy_vfs8vu.webp",
            affilationRecognition: [
              "International Medical Education Directory",
              "National Medical Commission (NMC, India)",
              "Ministry of Science and Higher Education of the Russian Federation",
              "World Health Organization (WHO)",
            ],
          },


          {
        name: "Kirov State Medical University",
        image:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756274007/unnamed_uwxz7h.webp",
        slug: "kirov State Medical University",
        country: "russia",
        overview: [
          "Kirov State Medical University, established in 1987, is one of the prominent medical universities in Russia dedicated to training highly qualified healthcare professionals. Over the years, the university has built a strong reputation for its commitment to academic excellence, advanced research, and practical medical training. It offers a wide range of programs in general medicine, dentistry, pediatrics, and other healthcare-related fields, attracting students from across Russia as well as international applicants. The university places a strong emphasis on combining theoretical knowledge with hands-on clinical practice, ensuring that graduates are well-prepared to meet the demands of the modern healthcare system. With its experienced faculty, modern facilities, and collaborative partnerships with hospitals and research institutes, Kirov State Medical University continues to play a vital role in shaping the future of medical education and healthcare services in the region.",
        ],
        academic: [
          "Kirov State Medical University offers a variety of medical programs to its students. The main faculties include General Medicine, Pediatrics, Stomatology (Dentistry), Psychology, Pharmacy, Higher Nursing Education, Medico-Prophylaxis, and a Preparatory Department. The university's academic offerings span a number of disciplines, with programs in General Medicine, Dentistry, Pediatrics, Medical Biochemistry, Pharmacy, and Nursing.",
        ],
        academicImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756274434/ex2_pn660w.webp",
        faculties: [
          "Faculty of General Medicine",
          "Faculty of Pediatrics",
          "Faculty of Stomatology (Dentistry)",
          "Faculty of Pharmacy",
          "Faculty of Higher Nursing Education",
        ],
        facultyImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756275533/ex9_oid0xa.webp",
        affilationRecognition: [
          "Ministry of Health of the Russian Federation",
          "National Medical Commission (NMC, India)",
          "World Directory of Medical Schools (WDOMS)",
          "World Health Organization (WHO)",
        ],
      },

          {
            name: "Kemerovo State University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756192554/unnamed_zuiibi.webp",
            slug: "Kemerovo state university",
            country: "russia",
            overview: [
              "Kemerovo State University, founded in 1955, is one of the leading centers of medical education and research in Siberia, Russia. The university is known for its strong academic foundation and modern approach to healthcare training, offering programs in general medicine, pediatrics, dentistry, pharmacy, preventive medicine, and nursing. Over the decades, it has trained thousands of highly skilled doctors, pharmacists, and healthcare specialists who contribute to both Russian and international healthcare systems. The university emphasizes practical clinical experience alongside theoretical studies, with training provided in affiliated hospitals and medical institutions. Equipped with advanced laboratories, simulation centers, and experienced faculty members, Kemerovo State Medical University continues to attract both local and international students seeking quality medical education. Its commitment to innovation, research, and community healthcare development makes it an important hub for medical science in the Kemerovo region and beyond.",
            ],
            academic: [
              "The university offers a variety of academic programs across different disciplines. The medical programs, including General Medicine (MBBS), are taught in English and are a popular choice for international students. The duration of the MBBS program is 6 years, which includes a one-year internship. Other academic offerings include programs in law, economics, philology, foreign languages, and sociology.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756191000/unnamed_x9kbyo.webp",
            faculties: [
              "Faculty of Medicine",
              "Institute of Economics and Management",
              "Institute of Philology, Foreign Languages and Media Communications",
              "Institute of Fundamental Sciences",
              "Technological Institute of Food Industry",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756191054/unnamed_tc2dzd.webp",
            affilationRecognition: [
              "World Federation for Medical Education (WFME)",
              "National Medical Commission (NMC, India)",
              "Ministry of Science and Higher Education of the Russian Federation",
              "World Health Organization (WHO)",
            ],
          },

			 {
            name: "Kemerovo State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742808909/Russia_university_15_pic_imq9oj.jpg",
            slug: "kemerovo-state-medical-university",
            country: "russia",
            overview: [
              "Kemerovo State Medical University was established in 1955 and has more than 65 years of expertise in teaching medical students. One of the top educational, scientific, and medical institutions in Russia and the entire Siberian area is Kemerovo State Medical University. The National Medical Commission (NMC) has given Kemerovo State Medical University its seal of approval, and the Ministry of Science and Higher Education of the Russian Federation has granted it accreditation. Given that it offers its MBBS degree program to its international students in English, Kemerovo State Medical University is among the finest MBBS institutes in Russia. The university conducts educational activities in accordance with society and the state which includes a focused way of education and training programs in the field of medicine. It establishes systematic and methodological educational work to improve the quality of training of specialists.",
            ],
            academic: [
              "There are 17 academic laboratories and administrative buildings on the site. At Kemerovo State Medical University, the students are shown the highest respect. The facilities for student housing area close to the city’s core in Kemerovo Oblast. In each of the hostel rooms, there is central air conditioning and heating. One of the top MBBS schools in Russia is the Kemerovo State Medical University. Due to the Kemerovo State Medical University’s low tuition fees and accreditation by both the Russian Federation’s Ministry of Science and Higher Education and the National Medical Commission (NMC), young, aspirant medical candidates from all over the world—including India—aspire to earn their MBBS there.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742809053/Russia_university_15_academic_urzfkt.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatric",
              "Faculty of Preventive medicine",
              "Faculty of Ophthalmology",
              "Faculty of Urology",
              "Faculty of Therapy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756289167/18527130_277668026026690_8278296082334592592_o-924x462_wxfwbn.jpg",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "ECFMG",
              "World Health Organization (WHO)",
            ],
          },


			

			

          // edfasdfhaidsrtfhakdfhgdafg


			 // gg

      {
        name: "Pacific State Medical University",
        image:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756383737/Campus_nrKF4__RQM_fao49j.webp",
        slug: "Pacific State Medical University",
        country: "russia",
        overview: [
          "Pacific State Medical University, located in Vladivostok, Russia, is one of the leading medical universities in the Far Eastern region, known for its advanced medical training, research, and healthcare services. The university offers a wide range of programs in general medicine, pediatrics, dentistry, pharmacy, and preventive medicine, ensuring students gain both theoretical knowledge and extensive clinical experience. With modern laboratories, simulation centers, and strong ties to regional hospitals, students receive hands-on training that prepares them to work in diverse healthcare environments. The university also emphasizes scientific research, innovation, and international collaboration, providing opportunities for students to participate in global medical projects and exchange programs. Pacific State Medical University is committed to shaping competent healthcare professionals who not only meet the highest standards of Russian medical education but also contribute to improving global healthcare systems.",
        ],
        academic: [
          "Pacific State Medical University offers a wide range of academic programs in the field of medicine and healthcare. The university provides undergraduate, graduate, and postgraduate courses including General Medicine (MBBS), Dentistry, Pediatrics, Pharmacy, Nursing, and Public Health. In addition, it offers advanced specialization and residency programs for medical graduates, along with opportunities for scientific research and clinical training. The curriculum is designed to meet international standards, ensuring students gain both theoretical knowledge and practical skills through modern laboratories, simulation centers, and affiliated hospitals.",
        ],
        academicImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756202708/ps-university-2_vy9dji.webp",
        faculties: [
          "Medical Faculty",
          "Pediatrics Faculty",
          "Pharmacy (Pharmaceutical) Faculty",
          "Medical Prophylactic and Medical Biochemistry",
          "Clinical Psychology",
        ],
        facultyImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756202641/perm-state-medical-university-11-1_vcfjey.webp",
        affilationRecognition: [
          "Recognized by the Ministry of Health of the Russian Federation.",
          "Listed in the World Directory of Medical Schools (WDOMS).",
          "Approved by the National Medical Commission (NMC) of India.",
          "World Health Organization (WHO)",
        ],
      },


          // End more universities here

          {
            name: "Ivanovo State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774108/russia_university_6_r8rekd.jpg",
            slug: "ivanovo-state-medical-university",
            country: "russia",
            overview: [
              "Ivanovo State Medical University was established in 1930. From that time to nowadays the University trained more than 25000 doctors. Now almost 3000 students are trained at the University. The teaching staff of the University includes more than 400 instructors, among them 70 Doctors of Science and more than 270 Candidates of Science. The university emerges to be the best top universities in Russia for furnishing high-quality education to the students in the arena of Medicine. The medical education strategy proposed by the University is authorized by the Ministry of Education and Science of Russia.",
            ],
            academic: [
              "IvSU offers 23 Bachelor's degree programs, 17 Master's degree programs, ten PhD programs, and a specialist's degree in fundamental and applied chemistry. A wide range of opportunities for developing their creative abilities and enriching their cultural knowledge.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741773931/russia_university_2_academic_pic_gudu5w.jpg",
            faculties: [
              "Faculty of Nursing Management",
              "Faculty of General Medicine",
              "Faculty of Clinical Psychology",
              "Faculty of Postgraduates in specialties",
              "Faculty of Pathological Anatomy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756291803/24-1_zuxmol.jpg",
            affilationRecognition: [
              "Ministry of Education, Science, Culture and Sport of the Republic of Russia",
              "Quality Assurance (ANQA)",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Tver State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774367/Russia_university_3_academic_pic_tllnxr.webp",
            slug: "tver-state-medical-university",
            country: "russia",
            overview: [
              "Tver State Medical University established in 1902 holds a prominent position in Russia offering Best study equipment and rich diversified culture that are crucial for success. From a pioneering dental institute established in 1902 to a leading medical institution in Russia, Tver State Medical College boasts a rich legacy of shaping the future of healthcare. Tver State Medical University stands as a testament to the rich legacy of medical education in Russia, proudly upholding its position as one of the oldest and most esteemed medical universities in Russia.",
            ],
            academic: [
              "Tver State Medical University is considered as one of the best education institutes for MBBS in Russia. Tver State Medical University is usually among the top ten medical educational establishments according to the annual official rating of the 48 Russian Medical Educational Institutions.Academic programs",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741774134/russia_university_6_academic_pic_ds6xuj.webp",
            faculties: [
              "Faculty of Dental Medicine.",
              "Faculty of General Medicine",
              "Faculty of Pharmacy",
              "Faculty of Pediatrics",
              "Faculty of Postgraduate Studies",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756292008/unnamed_wkwfpf.webp",
            affilationRecognition: [
              "Education Commission for Foreign Medical Graduates (ECFMG)",
              "FAIMER",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Kabardino-Balkarian State University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742544076/russia_university_4_eu0ebv.jpg",
            slug: "kabardino-balkarian-state-university",
            country: "russia",
            overview: [
              "Kabardino-Balkarian State University, founded in 1957 in Nalchik, Russia, has evolved into a prominent hub for scientific, educational, informational, social, and cultural development within the region. Its contributions to the academic landscape have been widely recognized, evidenced by the Certificate of Merit and Medal awarded by the State Duma on its 50th anniversary, acknowledging its outstanding services and achievements. Further cementing its reputation, the university was ranked among the top 100 universities in Russia in 2008, and in 2010, it received an honorary diploma from the All-Russian contest 100 Best Universities of Russia in the field of science and education. Kabardino-Balkarian State University operates as a comprehensive educational institution, integrating various levels of academic programs, including higher education, secondary education, postgraduate studies, and additional professional education. This multifaceted approach enables the university to cater to a diverse range of educational needs and contribute to the development of a skilled workforce. Today, it holds a distinguished 11th position among classical universities in Russia, reflecting its commitment to academic excellence and innovation. With over 65 departments and a teaching staff of more than 800 highly qualified educators, the university provides a rich and stimulating learning environment for thousands of students. Its dedication to fostering intellectual growth and contributing to the advancement of knowledge has solidified its position as a leading educational institution in Russia.",
            ],
            academic: [
              "Kabardino-Balkarian State University offers a wide range of academic programs, including undergraduate, graduate, and doctoral degrees across various fields. The university is a large-scale, multidisciplinary institution with a focus on medicine, engineering, humanities, social sciences, and natural sciences. The General Medicine (MBBS) program is a popular choice for international students, with a six-year duration that includes a one-year internship. This program is offered with a fully English-taught track, making it accessible to a diverse student body. The curriculum is structured into pre-clinical and clinical phases, focusing on both theoretical knowledge and extensive practical training in various hospital departments. The university also offers other programs in dentistry, nursing, pharmacy, and a variety of non-medical fields such as informatics, architecture, economics, and law. The institution boasts modern infrastructure, including well-equipped laboratories, a robust library system, and a simulation center, all of which contribute to a comprehensive academic experience.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742544082/Russia_university_4_academic_pic_ms0hnc.jpg",
            faculties: [
              "Faculty of Anatomy & Physiology",
              "Faculty of General Practice",
              "Faculty of Stomatology (Dentistry)",
              "Faculty of Nursing",
              "Faculty of Microbiology",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756292312/%D0%97%D0%90%D0%A1%D0%95%D0%94%D0%90%D0%9D%D0%98%D0%95_%D0%9F%D0%9E%D0%9F%D0%95%D0%A7%D0%98%D0%A2%D0%95%D0%9B%D0%AC%D0%A1%D0%9A%D0%9E%D0%93%D0%9E_%D0%A1%D0%9E%D0%92%D0%95%D0%A2%D0%90_2_vvvh1v.webp",
            affilationRecognition: [
              "(UNESCO) The United Nations Educational, Scientific and Cultural Organization recognizes KBSU",
              "The Medical Council of India recognizes KBSU",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Ryazan State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742546574/Russia_university_5_yf8sgn.jpg",
            slug: "ryazan-state-medical-university",
            country: "russia",
            overview: [
              "Ryazan State Medical University, established in 1950 and named after the Nobel Prize-winning physiologist Ivan Pavlov, is a renowned medical institution in Russia. Its legacy of excellence is built upon a foundation of rigorous academic standards and a commitment to producing highly skilled healthcare professionals. The university has cultivated strong international collaborations, partnering with esteemed institutions such as the American Pharmaceutical Convention and the University of Arizona. This global engagement has fostered a rich exchange of knowledge and expertise, enhancing the university's educational offerings and broadening the horizons of its students and faculty.",
            ],
            academic: [
              "Ryazan State Medical University (RSMU), located in Ryazan Oblast, Russia, is a comprehensive medical institution offering a diverse array of academic programs spanning UNESCO ISCED-2011 Levels 5-8.  RSMU employs innovative teaching methods, such as evidence-based medicine, e-textbooks, and multimedia resources, to enhance the learning experience.  Its extensive clinical base, encompassing local and regional medical institutions, drugstores, and national health resorts, provides students with practical exposure, while modern diagnostic and therapy tools within its clinical sub-departments ensure a state-of-the-art training environment.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742546616/Russia_university_6_academic_pic_yxsrpz.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Preventive Health",
              "Faculty of Pharmacy",
              "Faculty of Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Clinical Psychology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756292433/unnamed_emgn2v.webp",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Bashkir State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756283720/unnamed_bjijff.webp",
            slug: "bashkir-state-medical-university",
            country: "russia",
            overview: [
              "Bashkir State Medical University, established in 1932 and located in Ufa City, Bashkortostan, Russia, holds a distinguished position as one of the top ten medical universities in the Russian Federation. It serves as the central hub for medical and pharmaceutical science within the Bashkortostan Republic, playing a crucial role in advancing healthcare education and research in the region. Notably, Bashkir State Medical University has been granted a license by the Ministry of Education of the Russian Federation, enabling it to provide comprehensive medical training to international students. This accreditation underscores the university's commitment to meeting international standards and fostering a diverse student body.",
            ],
            academic: [
              "Bashkir State Medical University (BSMU) provides a comprehensive and diverse array of medical programs, catering to a wide spectrum of aspiring healthcare professionals.  The university offers foundational undergraduate programs such as MBBS (General Medicine), Dentistry, Pediatrics, Pharmacy, and Preventive Medicine, ensuring a robust foundation in various medical disciplines.  Recognizing the importance of accessibility and internationalization, BSMU provides these programs in both English and Russian languages, attracting a diverse student body from across the globe.  Beyond its undergraduate offerings, BSMU extends its academic reach to postgraduate studies, enabling medical professionals to specialize in their chosen fields and advance their careers.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756447975/Bashkir-State-Medical-University-students-5_zuzbwc.webp",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatric",
              "Faculty of Pharmaceutical",
              "Faculty of Dentistry",
              "Faculty of Preventive Medicine",
              "Faculty of Management and Graduate Nurses",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756283784/unnamed_szfbzc.webp",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "National Medical Commission of India (NMC)",
              "ECFMG",
            ],
          },

          
           {
            name: "OMSK State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742550952/russia_university_9_pic_zovmg2.webp",
            slug: "omsk-state-medical-university",
            country: "russia",
            overview: [
              "Omsk State Medical University, established in 1920, is a prominent medical institution in Omsk, Russia.  It has a rich history, evolving from a medical faculty to its current university status. The university maintains strong international ties with institutions in Western Europe, the US, and Japan, and features 59 departments staffed by highly qualified professors.  With a vast library of over 600,000 resources and modern computer facilities, students have access to extensive learning materials.  Clinical training takes place in major municipal hospitals equipped with advanced diagnostic tools, led by experienced faculty.  The university continuously enhances its teaching methods using modern technology, including the integration of simulation-based learning, virtual reality, and artificial intelligence. This ensures students receive a cutting-edge education that prepares them for the evolving demands of the medical field. The university also takes pride in its active Students Scientific Society, which fosters a culture of research and innovation among students. The society provides a platform for students to engage in research projects, present their findings at conferences, and publish their work in scientific journals. This not only enhances their academic skills but also cultivates a spirit of inquiry and discovery.",
            ],
            academic: [
              "Omsk State Medical University provides a focused medical education, offering a single undergraduate program: the MBBS degree. This six-year program is designed to provide comprehensive medical training. Emphasizing personalized attention, the university maintains small class sizes, creating a conducive learning environment that allows for individual student engagement and fosters a strong student-faculty interaction.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756118159/PQ6L7PdMnQOwXPyE2dxq_p1s4uw.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Pediatric",
              "Faculty of Preventive medicine",
              "Faculty of Stomatology",
              "Faculty of Pharmaceutics",
              "Faculty of Graduate Nurses",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756118127/smolensk-state-medical-university-2-1_yuiztf.webp",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "National Medical Commission of India (NMC)",
              "ECFMG",
            ],
          },

          {
            name: "Ulyanovsk State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742553741/Russia_university_10_pic_xwubpj.webp",
            slug: "Ulyanovsk State Medical University",
            country: "russia",
            overview: [
              "Ulyanovsk State Medical University (USU) was founded in 1988 as a branch of Moscow State University named after M.V. Lomonosov, the best university in the country and one of the most authoritative universities in the world. In 1996, USU received the status of an independent university. The MBBS program at USU is meticulously designed to meet global standards, ensuring that graduates are well-prepared to practice medicine in diverse healthcare settings.  A key factor contributing to the program's appeal is its accreditation and recognition by various esteemed global bodies, which not only validates the quality of education provided but also enhances the career prospects of its graduates.",
            ],
            academic: [
              "Ulyanovsk State Medical University (USU), a distinguished institution within the Russian academic scene, presents a comprehensive array of academic programs designed to cater to a multitude of scholarly interests. Among its offerings, the university's six-year MBBS program stands out as a particularly renowned course of study, attracting aspiring medical professionals from across the globe.  USU prides itself on its diverse and highly qualified faculty, comprised of experienced educators and researchers who are dedicated to providing students with a rich and stimulating learning environment.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756192906/unnamed_tdnhp9.webp",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Pediatric",
              "Faculty of Preventive medicine",
              "Faculty of Stomatology",
              "Faculty of Pharmaceutics",
              "Faculty of Graduate Nurses",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756192515/unnamed_mk4hmj.webp",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "OREL State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742807984/Russia_university_13_pic_javgbo.jpg",
            slug: "orel-state-medical-university",
            country: "russia",
            overview: [
              "Orel State University was founded in 1931 as an industrial-Pedagogical Institute. In 1932 Orel Pedagogical University became Orel State University. Orel State University is unique in many aspects, which is on September 11, 1996, renamed into the Orel State University. Orel State University is located in the Oryol city. Orel State University is the only institution that gives professionals in the area of most humane professions like doctors and teachers. Currently, Orel State University implements 110 basic educational programs of higher education in large groups of 14 training areas and specialties. About 18,000 students including nearly 2,000 foreign students (600 Indian students are studying general medicine-MBBS) representing 62 countries are studying at Orel State University named after I.S.",
            ],
            academic: [
              "The University has successfully developed international activities. Continues active integration of Oryol State University in the world educational, research and innovation space. Due to the significant positive changes in all areas of the university has increased markedly the importance of Oryol State University at the international education market and its attractiveness to foreign students. As a confirmation of increased international university status significantly increased the number of foreign citizens from different regions of the world who wish to study in Orel State University.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756449073/orel-state-university-students-4_glumiw.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Pediatric",
              "Faculty of Pharmacy",
              "Faculty of Pharmaceutics",
              "Faculty of Dentistry",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756449215/orel-state-university-students-1_lg9a69.jpg",
            affilationRecognition: ["FAIMER", "MCI", "NMC", "WDOMS"],
          },

          {
            name: "Kursk State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742807524/Russia_university_12_pic_usfnzk.jpg",
            slug: "kursk-state-medical-university",
            country: "russia",
            overview: [
              "Kursk State Medical University is a Russian medical university located in Kursk, western Russia, established in 1935. In 1994 it was granted university status. In 1985 Kursk State Medical University was awarded an order of the Red Banner of Labour for merits in the training of physicians and pharmaceutists and contribution to the development of public health service and medical science. Kursk State Medical University is successfully connected with asks about work especially in the field of biological medication. It is further more prominent for its perceiving twofold affirmation consistently for example there are 2 confirmations of outside understudies for September and January sessions. The college has all around arranged lodgings for settlement of outside understudies from all around the world. Arond 83 years Kursk State Medical University has been prepared Around of 45000 Specialists, pharmaceutics and other wellbeing experts.",
            ],
            academic: [
              "Kursk State Medical University (KSMU) stands as a prominent institution in Russia, dedicated to providing a comprehensive and diverse range of healthcare-related programs.  Recognizing the multifaceted nature of the healthcare sector, KSMU offers a broad spectrum of academic pathways, encompassing medical, dentistry, pharmacy, and allied health sciences.  This extensive selection of programs caters to students with varying interests and career aspirations, ensuring that they can find a field of study that aligns with their individual goals. The university's commitment to academic excellence is further demonstrated by its offering of degrees at all levels, from bachelor's to doctoral studies.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742807529/Russia_university_12_academic_godt9l.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatric",
              "Faculty of Preventive medicine",
              "Faculty of Stomatology/Dentistry",
              "Faculty of Nursing Education",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756292593/unnamed_tvxwpp.webp",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "ECFMG",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Orenburg State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742806868/Russia_university_11_pic_fv6qnz.jpg",
            slug: "orenburg-state-medical-university",
            country: "russia",
            overview: [
              "Established in 1944, Orenburg State Medical University (OrSMU) is one of the oldest, most regarded, and globally recognized medical universities in Russia. Situated in the Orenburg City of Russia, OrSMU is consistently placed in the list of top medical universities. OrSMU offers MBBS Program to medical aspirants from Russia as well as from other countries worldwide, and its medical qualification is recognized globally, including countries like the United States, Canada, and India. With a glorious history of seven decades, and a delicate balance of experience, expertise, and modernity, OrSMU is one of the best universities to study MBBS in Russia. Specialists in the sphere of medicine graduated from the University for many years. Graduates of the Orenburg Medical University work in state and private medical and preventive institutions, take leading positions in state administrative structures, solve primary issues on the development of modern medicine.",
            ],
            academic: [
              "Orenburg State Medical University (OrSMU) provides a comprehensive medical education, offering a diverse range of programs encompassing General Medicine (MBBS), Pediatrics, Preventive Care, Clinical Psychology, Dentistry, Pharmacy, and Nursing, all designed to deliver high-quality medical training and prepare students for successful careers in various healthcare fields.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756452651/1-OrSMU_Organized_an_FMGE_Coaching_Classes_on_Pharmacology_wytmts.webp",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatric",
              "Faculty of Preventive medicine",
              "Faculty of Stomatology/Dentistry",
              "Faculty of Nursing Education",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756453439/orsmu-hosted-the-federal-olympiad-in-radiology-diagnostics_6_fkepvx.webp",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "ECFMG",
              "World Health Organization (WHO)",
            ],
          },

           {
            name: "Mari State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756284351/unnamed_pqcoyp.webp",
            slug: "mari-state-medical-university",
            country: "russia",
            overview: [
              "History of Mari State University had begun in the year 1972 as a non-profit public higher education institution in Russia. It was founded by the Ministry of Science and Higher Education of the Russian Federation. The University is situated in the city of Yoshkar Ola (the capital of Mari El Republic). University has always been an active member of the Russian Association of Classical Universities as well as a member of the Volga Region’s Association of Classical Universities. Not only this, Mari State University founded the Association of Finno-Ugric Universities. It is also, the Centre Education and Scientific research and is recognized by the major councils of different nations such as Medical Council of India (MCI), European Medical Council (EMC), UNESCO, etc. and also enlisted with the World Directory of Medical Schools (WDOMS).",
            ],
            academic: [
              "University consists of 6 faculties and 5 institutes that train well-educated specialists for most sectors of the Russian national economy. Mari State Medical University teaching staff includes about 100 doctors of sciences and professors and 400 candidates of sciences and associate professors.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742808858/Russia_university_14_academic_zcshvg.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatric",
              "Faculty of Preventive medicine",
              "Faculty of Clinical Psychology",
              "Faculty of Preventive Care",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756284446/unnamed_wcj2is.webp",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "NMC",
              "World Health Organization (WHO)",
            ],
          },

         

              {
            name: "Pskov State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742810318/Russia_university_16_pic_niq70h.jpg",
            slug: "pskov-state-medical-university",
            country: "russia",
            overview: [
              "Initially formed in 1919 by merging teacher training colleges, the institution aimed to educate primary and secondary school teachers, as well as political educators. It became a pedagogical college in 1923, focusing on primary school teachers and preschool workers. In 1932, the Pskov Pedagogical Institute opened, sharing facilities with the college. Before World War II, nearly a thousand students graduated. The university offers the best education to all its students who are pursuing MBBS in Russia and also ensures the holistic development of each student. At the university campus, there are different sports sections such as basketball, volleyball, football, and table tennis. The university further offers various extracurricular activities for the students to actively participate in various events.",
            ],
            academic: [
              "The Academic structure of the university consists of 16 faculties including medical education faculty and more. PskovSU today includes more than 10,000 students and over 500 teachers, among them there are Honored Teachers of Russia, Honorary Workers of secondary vocational education, and Candidates of Science. The university widely implements innovative approaches to teaching and research activities.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756290142/510551-1519393083_f7cpor.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatric",
              "Faculty of Medical Biochemistry",
              "Faculty of Medical Cybernetics",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756280613/pskov-state-university-guest-lecture_tcrl5a.jpg",
            affilationRecognition: ["FAIMER", "NMC", "WDOMS", "WHO"],
          },

          {
            name: "Perm State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756455002/Perm-State-Medical-University-Russia_pfyqqk.webp",
            slug: "perm-state-medical-university",
            country: "russia",
            overview: [
              "Perm State Medical University, established in 1916 and situated in the vibrant city of Perm, Russia, holds a distinguished position as one of the oldest and largest universities in the nation. Its long-standing tradition of academic excellence and its commitment to advancing medical knowledge have earned it a prominent reputation among aspiring medical professionals, particularly those from India, who seek to pursue their MBBS studies in Russia. The university's strategic location in Perm, a city renowned for its cultural and scientific contributions, provides students with a stimulating and enriching learning environment. A key factor contributing to Perm State Medical University's academic prowess is its strong integration with academic institutions of the Ural Branch of the Russian Academy of Sciences and various higher schools within Russia and Perm. ",
            ],
            academic: [
              "Perm State Medical University (PSMU) provides a comprehensive spectrum of medical education, most notably featuring a six-year MBBS program alongside diverse postgraduate and undergraduate offerings across various medical specializations, with the added flexibility of instruction in both English and Russian languages.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742879800/Russia_university_17_academic_pic_mecwys.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Dentistry",
              "Faculty of Medico-prophylactic",
              "Faculty of Nursing",
              "Faculty of Additional Professional Education",
              "Faculty of Psychology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756292940/Perm_ct1t7i.jpg",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WHO"],
          },

          {
            name: "Tula State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742881100/Russia_university_tula_18_pic_wvrfa1.jpg",
            slug: "tula-state-university",
            country: "russia",
            overview: [
              "Tula State University in Russia, a well-respected institution for higher education since its establishment in 1930, founded its Medical faculty in 1994, which later became the Medical Institute in 2008. As a public institution, the Tula State University Medical Institute offers an advanced MBBS program in Russia, operating under the guidelines of Russian law and dedicated to higher, postgraduate, and additional education, along with conducting important scientific research in medicine and biology. The university prides itself on its experienced and qualified academic staff, which includes over 978 members, with a significant number holding advanced degrees (605 Doctors of Science and 172 Candidates of Science) and more than 95 researchers, all committed to educating the over 20,000 students currently enrolled, including more than 1,300 international students from 71 countries.",
            ],
            academic: [
              "Tula State University (TSU) is a comprehensive institution providing a broad spectrum of academic programs across diverse fields such as engineering, medicine, economics, and humanities, encompassing bachelor's, master's, and doctoral levels, all with a central aim of developing highly skilled specialists for a variety of industries and professional sectors.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756459094/studentymedikitulgu_ylt3da.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Obstetrics and Gynecology",
              "Faculty of Internal Medicine",
              "Faculty of Oncology",
              "Faculty of Human Anatomy and Physiology",
              "Faculty of Polyclinic Medicine",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756293179/u5GEq0jjj0SSz3gi7PXA_okguzy.jpg",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WDOMS"],
          },

          {
            name: "Kalmyk State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742882735/Russia_university_Kalmyk_19_pic_wamtfb.jpg",
            slug: "kalmyk-state-university",
            country: "russia",
            overview: [
              "Kalmyk State University, the oldest and a leading higher education institution in the Republic of Kalmykia, has developed into a significant center for academic pursuit and scholarly investigation since its founding. Established on January 1, 1970, marking its transformation from the Kalmyk Pedagogical Institute into the republic's inaugural state university, it initially comprised three foundational faculties – Biological, Philological, and Physico-Mathematical – organized into nine distinct departments. Over the ensuing decades, Kalmyk State University has experienced substantial growth and expansion, now encompassing ten diverse faculties alongside the dedicated Institute of Kalmyk Philology and Oriental Studies. This evolution reflects the university's commitment to offering a comprehensive range of academic programs across numerous disciplines, catering to the evolving educational needs and aspirations of students from Kalmykia and beyond, solidifying its role as a cornerstone of intellectual and cultural development in the region.",
            ],
            academic: [
              "Established in 1970, Kalmyk State University (KSU) is a multi-faceted institution providing a diverse array of academic programs through its various faculties, encompassing fields such as medicine, engineering, pedagogy, and others, all while maintaining a strong commitment to delivering a quality education that meets internationally recognized standards.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742882791/Russia_university_Kalmyk_19_academic_m8hany.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Dentistry",
              "Faculty of Medico-prophylactic",
              "Faculty of Nursing",
              "Faculty of Additional Professional Education",
              "Faculty of Psychology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756293243/unnamed_n6jp2r.webp",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WHO"],
          },

          {
            name: "Dagestan State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756284748/Dagestan-State-Medical-University_ftjvbl.webp",
            slug: "dagestan-state-medical-university",
            country: "russia",
            overview: [
              "Established in 1932 and situated in Makhachkala, the well-developed and picturesque capital city of the Dagestan Republic, Dagestan State Medical University has a long and distinguished history of medical education. Since its inception, the university has successfully trained over 25,000 specialists, including 100 Doctors of Science and 350 Candidates of Science, whose graduates have gone on to become accomplished scientists and effective organizers within the healthcare system, contributing their expertise in various countries around the world. Currently, Dagestan State Medical University is home to a diverse student body of 5,200 individuals, including 170 international students hailing from 12 different nations, fostering a multicultural learning environment. The university offers a comprehensive range of educational opportunities, encompassing six specialized courses at both the undergraduate and postgraduate levels, ensuring that students receive thorough training and have pathways for advanced study in their chosen medical fields.",
            ],
            academic: [
              "Dagestan State Medical University (DSMU) provides a comprehensive spectrum of medical education, encompassing undergraduate MBBS programs, postgraduate residency training across various specialties, and advanced Ph.D. research opportunities, all facilitated by its diverse faculties in General Medicine, Pediatrics, Dentistry, Pharmacy, and other essential healthcare disciplines.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756459364/dagestan-state-medical-university-students-1_owtok7.webp",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Nursing",
              "Faculty of Preventive Medicine",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756284791/dagestan-state-medical-university-students-2_kejjis.webp",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WHO"],
          },

          {
            name: "Ural State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742887213/Russia_university_Ural_21_hjcmdh.jpg",
            slug: "ural-state-medical-university",
            country: "russia",
            overview: [
              "Established in 1930 in the bustling city of Yekaterinburg, within Russia's dynamic Ural region, the Ural State Medical University (USMU) has evolved into a preeminent center for medical education, boasting a distinguished legacy of nearly a century. Beginning modestly in 1930 with a single faculty and an initial cohort of 100 students, USMU has experienced significant growth and now serves as an academic home to over 6,000 students from across the globe. Recognizing its increasing academic stature, the institution was granted academy status in 1995 before achieving the comprehensive designation of a full-fledged university in 2013. As a public university receiving vital funding and strategic direction from the Ministry of Health, USMU holds a prominent position as one of the leading institutions for medical education within the Russian Federation, dedicated to fostering the next generation of healthcare professionals and advancing the frontiers of medical knowledge.",
            ],
            academic: [
              "Located in Yekaterinburg, Russia, Ural State Medical University (USMU) provides a comprehensive spectrum of medical education, encompassing both undergraduate and postgraduate programs in diverse fields such as General Medicine, Dentistry, Pharmacy, Nursing, and various other medical specializations, with the added flexibility of instruction offered in both English and Russian languages to cater to a diverse student body.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756193167/Ural_State_Medical_University_gallery_17432434627133_xldvdq.webp",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Treatment and Prevention",
              "Faculty of Pediatrics",
              "Faculty of Nursing",
              "Faculty of Psychosocial Work and Higher Nursing Education",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756193224/img07_jxlzyl.jpg",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WHO"],
          },

          {
            name: "Privolzhsky Research Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742891447/Russia_university_Privolzhsky_21_pic_fomjpn.jpg",
            slug: "privolzhsky-research-medical-university",
            country: "russia",
            overview: [
              "Established in 1920, Privolzhsky Research Medical University, located in Nizhny Novgorod within the Volga region of the Russian Federation, holds the distinction of being the oldest and a leading public research medical university in Russia. Recognized globally as one of the top two research-focused medical institutions in the country, the university consistently ranks high, securing the fifth position among the most sought-after higher medical universities in Russia according to the Ministry of Health, and holding the seventh position out of 46 Russian higher medical institutions approved by the World Health Organization. Committed to delivering the highest quality medical education in Russia, Privolzhsky Research Medical University effectively integrates advanced clinical practices with rigorous scientific research.",
            ],
            academic: [
              "Privolzhsky Research Medical University (PRMU) delivers a comprehensive medical education, featuring a six-year MBBS program taught in English, alongside a range of postgraduate courses in specialized fields such as Cardiovascular Surgery, Gynaecology, and Neurology, and further extends its academic offerings with online preparatory-year courses in fundamental sciences like Chemistry, Biology, and the Russian language.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756459554/Privolzhsky_Research_Medical_University_gallery_17432308211268_xuc923.webp",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Medico-prophylaxis (Preventive medicine)",
              "Faculty of Pediatrics",
              "Faculty of Stomatology (Dentistry)",
              "Faculty of Higher Nursing Education",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756278855/1579177696phpPH5GRx_e7uy6t.jpg",
            affilationRecognition: ["FAIMER", "MCI", "NMC", "WHO"],
          },

           {
            name: "Irkutsk State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742893226/Russia_university_Irkutsk_23_pic_okb1ea.jpg",
            slug: "irkutsk-state-medical-university",
            country: "russia",
            overview: [
              "Established in 1919, Irkutsk State Medical University has a long-standing tradition of providing medical education of the highest quality, fostering a learning environment that emphasizes core values such as innovation, respect, social commitment, responsibility, thoroughness, patient partnership, and the overarching goal of improving health and well-being among its students. As an internationally recognized institution, the university is dedicated to a threefold mission encompassing comprehensive education, impactful research across clinical, basic, and health sciences, and the tangible improvement of health outcomes within its community and beyond. The university's infrastructure includes nine dedicated academic buildings designed to facilitate effective learning and research. Furthermore, Irkutsk State Medical University's global reputation attracts a diverse student body, with several hundred students currently enrolled from over 20 countries around the world, creating a rich and multicultural educational experience.",
            ],
            academic: [
              "Irkutsk State Medical University (ISMU) provides a comprehensive spectrum of medical and healthcare education, encompassing undergraduate MBBS programs, diverse postgraduate specializations, and advanced doctoral degrees across numerous medical fields, all while maintaining a strong reputation for delivering high-quality medical education and providing extensive clinical training opportunities.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756279475/study-1_inhjg4.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Stomatology/ Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Nursing",
              "Faculty of Dentistry",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756279519/1593429991phpeO6S2c_alhhyj.jpg",
            affilationRecognition: ["FAIMER", "MCI", "NMC", "WHO"],
          },

			

          {
            name: "Samara State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742894173/Russia_university_samara_24_pic_wlwmxy.jpg",
            slug: "samara-state-medical-university",
            country: "russia",
            overview: [
              "Samara State Medical University is a major and well-respected university in Russia, considered a top choice for international students aiming to study MBBS there. The university focuses on training highly skilled professionals in medicine, incorporating cultural understanding and the best educational and scientific practices from both Russia and around the world. Its strong emphasis on scientific research and innovation creates an excellent learning environment for students, going beyond traditional teaching methods. The university actively encourages students to participate in research projects, collaborate with faculty members, and present their findings at national and international conferences. This research-oriented approach not only enhances students' academic skills but also cultivates a spirit of inquiry and discovery, empowering them to become leaders in their respective fields. The university also prioritizes the development of practical skills, providing students with ample opportunities to engage in clinical rotations and hands-on training in state-of-the-art medical facilities. This ensures that graduates are well-prepared to meet the challenges of the modern healthcare landscape and provide high-quality patient care.",
            ],
            academic: [
              "Samara State Medical University (SamSMU) provides a variety of medical programs taught in English, such as General Medicine, Dentistry, Pharmacy, and Medical and Preventative Care, and requires prospective students to pass admission exams in Chemistry and Biology.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756460056/01_h09ufs.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Preventive Medicine",
              "Faculty of Pediatrics",
              "Faculty of Nursing",
              "Faculty of vocational education",
              "Faculty of Innovative Development",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756459979/samara-state-medical-university-ahmedabad-universities-snjgmcltqo_us3xjm.avif",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WHO"],
          },

          {
            name: "Chelyabinsk State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742894915/Russia_university_Chelyabinsk_25_eer1ww.jpg",
            slug: "chelyabinsk-state-university",
            country: "russia",
            overview: [
              "Established in 1976 as the pioneering institution of higher education in the South Ural region and the first classical university in Chelyabinsk, Chelyabinsk State University (CSU) has grown into a leading academic center within the Ural Federal District. As a proud member of both the Association of Classical Universities of Russia and the Eurasian Association of Universities, CSU has consistently demonstrated its commitment to academic excellence and international collaboration. The university's burgeoning global reputation is reflected in its increasing attraction of foreign students, including a significant number from India, with the current international student body comprising approximately 4,500 individuals. CSU offers an extensive range of educational opportunities, encompassing over 200 programs across its 19 faculties, including vocational training, Bachelor's, specialist, Master's, postgraduate (Ph.D.), and higher doctorate (post-Ph.D.) degrees, catering to diverse academic and career aspirations.",
            ],
            academic: [
              "Chelyabinsk State Medical University (CSU) provides a comprehensive spectrum of academic programs, encompassing vocational training alongside bachelor's, specialist, master's, postgraduate (Ph.D.), and higher doctorate (Post PhD) degrees, spanning a multitude of disciplines including mathematics, natural sciences, engineering, social sciences, and humanities, with over 200 distinct programs delivered across its 18 faculties.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756460485/Zdog7xXNXtQJOop1zS6u_bn2d2y.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Treatment and Prevention",
              "Faculty of Pediatrics",
              "Faculty of Nursing",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756295029/chelyabinsk-state-university-students-1_iafneu.webp",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WHO"],
          },

          {
            name: "Immanuel Kant Baltic Federal University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742896166/Russia_university_Immanuel_26_mk6h8i.jpg",
            slug: "immanuel-kant-baltic-federal-university",
            country: "russia",
            overview: [
              "Established in 1967 through the expansion of the Kaliningrad State Pedagogical University, which itself was founded in 1947 with the initial establishment of the State Pedagogical Institute in Kaliningrad, Immanuel Kant Baltic Federal University (IKBFU) has risen to become a leading institution in the Kaliningrad region and one of the ten federal universities of the Russian Federation. Benefiting from its strategic location in the heart of Europe, IKBFU attracts a diverse community of students and researchers from across the globe, currently hosting citizens from 40 countries spanning Europe, Latin America, Asia, and Africa who are engaged in various levels of study and research within the university. Committed to academic excellence, Immanuel Kant Baltic Federal University reverently upholds the esteemed academic traditions of its predecessor, the historic 'Albertina' University of Königsberg, while simultaneously embracing and integrating the most advanced technologies of Russian classical education to provide a comprehensive and forward-thinking learning experience.",
            ],
            academic: [
              "Immanuel Kant Baltic Federal University, a highly regarded institution within the Russian Federation, presents exceptional opportunities for international students seeking to pursue their MBBS degree abroad. Characterized by its robust academic framework and the integration of contemporary teaching methodologies, the university has established itself as a leading destination for MBBS studies in Russia, drawing a diverse and vibrant student body comprising individuals from more than 40 countries worldwide.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742896173/Russia_university_Immanuel_26_academic_pejghd.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Therapy",
              "Faculty of Pediatrics",
              "Faculty of Nursing",
              "Faculty of Obstetrics & Gynecology",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756295177/immanuel-kant-baltic-federal-university-1_drea6j.webp",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WDOMS"],
          },

             {
            name: "Siberian State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756460634/Dej710QBF_jv2sva.jpg",
            slug: "siberian-state-medical-university",
            country: "russia",
            overview: [
              "Established in 1878, Siberian State Medical University (SibMed) holds a distinguished position as one of the oldest and most esteemed medical institutions in Russia, making it a particularly favored choice for Indian students seeking to pursue their MBBS degrees abroad. In recognition of its academic excellence and leadership in medical education, SibMed was granted the unique status of the only flagship medical university in the Russian Federation in 2017. A distinctive feature of SibMed is its integrated multidisciplinary university hospital, a significant advantage that profoundly benefits both the teaching staff and the student body by providing unparalleled opportunities for practical clinical experience. The university boasts a highly qualified teaching staff, with an impressive 80% holding academic degrees and titles, and remarkably, 50% of the faculty are practicing doctors, ensuring that students receive instruction grounded in both theoretical knowledge and real-world clinical expertise.",
            ],
            academic: [
              "Siberian State Medical University (SibMed) provides a comprehensive spectrum of medical education, encompassing both undergraduate and postgraduate degrees across various essential healthcare fields such as general medicine, dentistry, pharmacy, and nursing, with a strong emphasis on integrating robust theoretical knowledge with extensive practical experience to ensure well-rounded and competent graduates.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756194257/Siberian-State-Medical-University_gfbasg.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Nursing",
              "Faculty of Pharmacology ",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756194355/66-7_nbnpt5.jpg",
            affilationRecognition: ["FAIMER", "MCC", "NMC", "WDOMS"],
          },

            {
            name: "I.M Sechenov First Moscow State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742901980/Russia_university_im_28_pic_uyy1mp.jpg",
            slug: "im-sechenov-first-moscow-state-medical-university",
            country: "russia",
            overview: [
              "I.M. Sechenov First Moscow State Medical University (Sechenov University) holds a distinguished position as one of the premier medical institutions in Russia, tracing its origins back to 1758 as the medical faculty of the Imperial Moscow University. Throughout its extensive history, Sechenov University has played a pioneering role in shaping the Russian Healthcare System, serving as an alma mater and workplace for numerous renowned scientists and physicians who have made substantial contributions to the advancement of medical science and practice. Today, the university has evolved into a comprehensive academic, research, and Resource Centre of Excellence within the Russian Healthcare System, actively driving the development of the Medicine of the Future by building upon a robust academic foundation in clinical medicine and continuously expanding the horizons of advanced multidisciplinary research to address the evolving challenges and opportunities in healthcare.",
            ],
            academic: [
              "I. M. Sechenov First Moscow State Medical University (Sechenov University) provides a comprehensive spectrum of medical education, encompassing undergraduate MBBS programs, diverse postgraduate opportunities including Master's degrees, PhD programs, and Clinical Residencies, alongside foundational preparatory courses, with the added flexibility of select programs offered in English, all while maintaining a strong emphasis on fostering research and driving innovation within the healthcare domain.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756277762/i-m-sechenov-first-moscow-state-medical-university-students-6_hswccx.webp",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Preventive Medicine",
              "Faculty of Pediatrics",
              "Faculty of Nursing",
              "Faculty of Preparatory Studies",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756277641/i-m-sechenov-first-moscow-state-medical-university-students-1_cqiuoa.webp",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WDOMS"],
          },


          {
            name: "Pirogov Russian National Research Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742965815/Russia_university_pirogov_29_pic_xchnhg.jpg",
            slug: "pirogov-russian-national-research-medical-university",
            country: "russia",
            overview: [
              "Pirogov Russian National Research Medical University, a venerable and highly regarded institution in Russia, boasts a rich history of medical education and research. Its extensive faculty of over 2,000 professors actively contribute to the academic environment through more than 100 departments, delivering a comprehensive educational experience encompassing seminars, lectures, and practical laboratory sessions across over 250 courses in the sciences. A significant advantage for students at Pirogov University is its strong collaborative network with the largest Moscow State clinical hospitals, which serve a vast patient population with diverse medical conditions.",
            ],
            academic: [
              "Pirogov Russian National Research Medical University (RNRMU) delivers a full of medical and healthcare education, encompassing diverse undergraduate and postgraduate programs across various disciplines such as general medicine, pediatrics, dentistry, pharmacy, and numerous others, all while emphasizing a balanced approach to learning that integrates strong theoretical foundations with extensive practical clinical experience.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756460854/h7smcs4wfs7fycnbd3wd_sdj027.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Biomedicine",
              "Faculty of Pediatrics",
              "Faculty of Dentistry",
              "Faculty of Psychological-Social Faculty",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756295266/1658498101_fin8ei.jpg",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WDOMS"],
          },

          // {
          //   name: "Far Eastern Federal University",
          //   image:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742967719/Russia_university_Far_30_pic_qouodo.jpg",
          //   slug: "far-eastern-federal-university",
          //   country: "russia",
          //   overview: [
          //     "Established in 1899 in Vladivostok, a city often referred to as Russia's San Francisco and the administrative center of Primorsky Krai in Eastern Russia, Far Eastern Federal University (FEFU) holds a significant position as one of the leading universities recognized by the Russian Ministry of Education and Science. This recognition underscores FEFU's crucial role in enhancing the international competitiveness of Russian universities within the global landscape of prominent research and education centers. The university's Medical Centre boasts a highly skilled and specialized team of over 200 professionals, providing advanced medical facilities to patients, with the expertise of these doctors being sought after both within Russia and internationally. Furthermore, Far Eastern Federal University has consistently championed a high-tech approach to education, equipping its medical facilities with cutting-edge equipment produced by leading manufacturers in the medical industry, ensuring students and patients benefit from the latest advancements in medical technology and care.",
          //   ],
          //   academic: [
          //     "Far Eastern Federal University (FEFU) provides a comprehensive array of academic programs spanning bachelor's, master's, and doctoral levels across diverse disciplines such as engineering, sciences, economics, humanities, and medicine, with a strong emphasis on fostering international cooperation and developing practical, real-world skills in its graduates.",
          //   ],
          //   academicImg:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742967750/Russia_university_far_30_academic_pic_vfk1ep.jpg",
          //   faculties: [
          //     "Faculty of Medicine",
          //     "Faculty of Biomedicine",
          //     "Faculty of Pediatrics",
          //     "Faculty of Nursing",
          //     "Faculty of Obstetrics & Gynecology",
          //     "Faculty of Pharmacy",
          //   ],
          //   facultyImg:
          //     "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
          //   affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WDOMS"],
          // },

			// suffle card data

				 {
        name: "Amur State Medical Academy",
        image:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756284040/%D0%90%D0%BC%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F%D0%93%D0%9C%D0%90_f4cm5m.jpg",
        slug: "Amur State Medical Academy",
        country: "russia",
        overview: [
          "Amur State Medical Academy (ASMA), officially known as the Federal State Budgetary Educational Institution of Higher Education “Amur State Medical Academy” under the Ministry of Health of the Russian Federation, is located in Blagoveshchensk, Amur Oblast in the Russian Far East. It was established on June 26, 1952, originally as Blagoveshchensk State Medical Institute, with a starting class of approximately 200 students. In 1995, it was reorganized and renamed to its current form. In 1996, ASMA joined the Association of Medical Schools of Europe, aligning its training with European standards",
        ],
        academic: [
          "ASMA offers a range of medical programs: Undergraduate: General Medicine (6-year MBBS, intramural only, no extramural) and Pediatrics , Postgraduate & Specialist Training: Extensive offerings including anesthesiology, cardiology, neurology, obstetrics & gynecology, surgery, psychiatry, epidemiology, pediatric specialties, dermatovenereology, orthopedics, ophthalmology, urology, pathology, oncology, and more",
        ],
        academicImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756204338/North-Caucasian-State-Medical-Academy-Class-Room_sf7zjq.webp",
        faculties: [
          "Faculty of General Medicine",
          "Faculty of Pediatrics",
          "Faculty of Postgraduate Education (postgraduate specialist training)",
          "Cardiac Surgery Clinic",
          "Simulation and Accreditation Center (ASC)",
        ],
        facultyImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756204414/North_Caucasian_State_medical_Academy_gd9s0p.jpg",
        affilationRecognition: [
          "Eurasian Universities Association",
          "National Medical Commission (NMC, India)",
          "Ministry of Science and Higher Education of Russia",
          "World Health Organization (WHO)",
        ],
      },

	{
        name: "Chita State Medical Academy",
        image:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756447242/0YWY8RD_lpS_b0v8cb.jpg",
        slug: "Chita State Medical Academy",
        country: "russia",
        overview: [
          "Chita State Medical Academy was established on 23 July 1953 as the Chita State Institute of Medicine and later renamed as an academy in 1995. It stands today as the foremost medical research, educational, and clinical institution in Eastern Siberia, serving the Trans-Baikal and Far East regions with modern, technology-augmented learning Currently, over 2,500–3,400 students are enrolled across various specialties, guided by around 260–292 lecturers, including 35 Professors (Doctors of Sciences), 157 Associate Professors, and esteemed members of national and international academies. The academy has trained approximately 20,000 physicians to date.",
        ],
        academic: [
          "Chita State Medical Academy offers undergraduate medical programs such as: General Medicine (MBBS) – 6 years including a clinical internship (taught in English and/or Russian) Dentistry – 5 years (Russian medium) Pediatrics – 6 years (Russian medium) Pharmacy, plus postgraduate residency and specialist training across disciplines The MBBS curriculum includes pre-clinical, para-clinical, and clinical subjects such as Anatomy, Biochemistry, Physiology, Pathology, Pharmacology, Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, ENT, Emergency Medicine, and more.",
        ],
        academicImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756204722/-Z4bLrLJYoLCuDepUReR_m6snbc.jpg",
        faculties: [
          "General Mediciney",
          "Dentistry (Stomatology)",
          "Pediatrics",
          "Higher Nursing Education",
          "Training and Internship (Postgraduate)",
        ],
        facultyImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756204754/cUL8EnzE1TDIpXO53f9K_hur5pz.jpg",
        affilationRecognition: [
          "Ministry of Science and Higher Education of the Russian Federation",
          "National Medical Commission (NMC, India)",
          "Medical Councils of Various Countries",
          "World Health Organization (WHO)",
        ],
      },

		{
            name: "Chuvash State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755857105/chuvash-state-medical_bkyum3.webp",
            slug: "Chuvash State Medical University",
            country: "russia",
            overview: [
              "Chuvash State Medical University, officially named after I.N. Ulyanov, is a public institution established in 1967 in Cheboksary, Russia. It is recognized as a leading medical and scientific center in the Chuvash Republic. The university is known for its affordable and globally recognized medical degrees, with a large number of international students.",
            ],
            academic: [
              "The university offers a variety of educational programs, with the MBBS (General Medicine) program being the most popular, especially for international students, due to it being taught in English. The program duration is six years, including one year of a compulsory internship.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756104104/Chuvash-State-Medical-University-2_jvbaiy.webp",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pharmacy",
              "Faculty of Paediatrics",
              "Faculty of Dentistry",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756104852/unnamed_c954fm.jpg",
            affilationRecognition: [
              "World Health Organization (WHO)",
              "National Medical Commission (NMC) of India",
              "Educational Commission for Foreign Medical Graduates (ECFMG)",
              "World Directory of Medical Schools (WDOMS)",
            ],
          },

	{
        name: "Ingush State Medical University",
        image:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756201891/unnamed_ckpidu.webp",
        slug: "Ingush State University",
        country: "russia",
        overview: [
          "Ingush State Medical University, located in the Republic of Ingushetia, Russia, is a developing institution dedicated to training future healthcare professionals with modern medical knowledge and practical skills. The university focuses on creating a strong academic environment where students are prepared to meet global healthcare challenges while also addressing the medical needs of the local population. Offering programs in general medicine, dentistry, and pharmacy, the university emphasizes both theoretical learning and hands-on training through clinical practice in affiliated hospitals and healthcare centers. With a growing reputation, Ingush State Medical University aims to provide high-quality education that combines traditional Russian medical training standards with innovative teaching methods. Its commitment to research, patient care, and community service makes it an attractive option for both domestic and international students seeking a career in medicine.",
        ],
        academic: [
          "IngGU offers undergraduate and postgraduate education across multiple disciplines. It is particularly noted for its MBBS (General Medicine) program, which is taught in English, aligning with international standards. The MBBS program lasts approximately 6 years, including a mandatory 1-year internship",
        ],
        academicImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756202065/ingush-state-university-gallery-10_pvazzn.jpg",
        faculties: [
          "Philology Faculty",
          "Medicine Faculty",
          "Chemistry & Biology",
          "Physics & Mathematics",
          "Pedagogy",
        ],
        facultyImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756202092/Northern-State-Medical-University6_qz3wtr.jpg",
        affilationRecognition: [
          "Russia’s Ministry of Science and Higher Education (Rosobrnadzor)",
          "National Medical Commission (NMC, India)",
          "Ministry of Science and Higher Education of Russia",
          "World Health Organization (WHO)",
        ],
      },


          {
            name: "Altai State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742969386/Russia_university_altai_31_pic_ditj3q.jpg",
            slug: "altai-state-medical-university",
            country: "russia",
            overview: [
              "Established in 1954 in Barnaul, within the Altai region of Russia, Altai State Medical University, formerly known as Altai State Medical Institute, has garnered recognition from the Ministry of Education and Science of the Russian Federation. The university is renowned for its commitment to conducting high-quality training programs, having produced approximately 25,000 leading teams of doctors and pharmaceutics who have significantly contributed to the regional healthcare system. Standing as a central hub for research, education, and cultural exchange, Altai State Medical University has a long-standing tradition of academic excellence, having graduated around 30,000 individuals over the years, with approximately 4,000 students annually enrolling in its diverse medical programs.",
            ],
            academic: [
              "Altai State Medical University (ASMU) provides a comprehensive six-year MBBS program, which includes a mandatory year of internship, delivered in English across its diverse faculties encompassing General Medicine, Dentistry, Pharmacy, Pediatrics, and Preventive Medicine, and is widely recognized for its commitment to quality medical education coupled with affordable tuition fees.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756461084/Altai_State_Medical_University_gallery_17437529974587_puqe2x.webp",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Nursing",
              "Faculty of Medicine And Preventive Studies",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1756295365/altai-state-medical-university-stu-life-1_kz2x2g.webp",
            affilationRecognition: ["FAIMER", "ECFMG", "NMC", "WDOMS"],
          },
        ],
        eligibilityPoints: [
          {
            title: "Academic Qualification",
            description:
              "Have completed 10+2 or equivalent with Physics, Chemistry, Biology, and English as core subjects.",
          },
          {
            title: "Age Requirement",
            description:
              "Be at least 17 years old by December 31 of the year of admission.",
          },
          {
            title: "Minimum Marks",
            description:
              "Have at least 50% in Physics, Chemistry, and Biology.",
          },
          {
            title: "Admission Documents",
            description:
              "Submit scanned copies of mark sheets and pass certificates of class 10 and 12, passport colored photographs, and a scanned copy of the NEET results.",
          },
        ],
        mbbsBenefits: [
          {
            title: "Affordable Tuition Fees",
            description:
              "Russian medical universities offer considerably lower tuition fees compared to many other countries, making it accessible for students from diverse economic backgrounds.",
          },
          {
            title: "Globally Recognized Degree",
            description:
              "MBBS degrees from reputable Russian universities are recognized by the World Health Organization (WHO) and other international bodies, allowing graduates to practice medicine globally. ",
          },
          {
            title: "No Entrance Exams",
            description:
              ": Unlike some countries, admission to MBBS programs in Russia often does not require a separate entrance exam. ",
          },
          {
            title: "Extensive Practical Exposure",
            description:
              "Russian medical universities provide ample opportunities for hands-on clinical practice in well-equipped hospitals, preparing students for real-world medical scenarios. ",
          },
        ],
        advantages: [
          "Low cost of education",
          "Best Place",
          "Globally Recognized Degrees",
          "Scholarship Opportunities",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739825183/img_nbxth7.png",
      },

      //kyrgyztan
      {
        country: "Kyrgyzstan",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854591/Kyrgyzstan_logo_dhosw2.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854634/Mbbs_in_Kyrgyzstan_pic_awazh3.jpg",
        overviewText:
          "Kyrgyzstan offers a compelling combination of factors for those seeking a unique and affordable lifestyle. The country boasts a remarkably low cost of living, making it an attractive option for budget-conscious individuals and families. Kyrgyzstan has become an increasingly popular choice for international students, particularly those from India, seeking to pursue an MBBS degree. Several factors contribute to this growing interest, making Kyrgyzstan an attractive option for medical education abroad. One of the primary reasons is the affordability of tuition fees in Kyrgyz medical universities. Compared to many other countries offering MBBS programs, Kyrgyzstan provides a cost-effective alternative, allowing students to pursue their medical aspirations without incurring excessive financial burdens.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854602/Mbbs_in_Kyrgyzstan_overview_pic_o06k77.jpg",
        quickFacts: ["Bishkek", "30%", "Kyrgyzstani som", "Approx. 71 lakhs"],
        univeristes: [
          {
            name: "Asian Medical Institute",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854620/Kyrgyzstan_mbbs_university_1_n5hxtq.jpg",
            slug: "asian-medical-institute",
            country: "kyrgyzstan ",
            overview: [
              "The Asian Medical Institute (ASMI), located in Kant, Kyrgyzstan, has emerged as a leading medical institution, attracting students from around the globe who aspire to pursue careers in healthcare. It offers a range of medical programs. ASMI has gained recognition for its commitment to providing high-quality education at affordable tuition fees, making it an attractive option for students seeking a cost-effective medical education abroad. ASMI's faculty comprises experienced professionals and scholars who are passionate about teaching and mentoring the next generation of medical practitioners. The university also provides students with access to modern facilities, well-equipped laboratories, and a comprehensive library, ensuring they have the resources they need to excel in their studies.",
            ],
            academic: [
              "The Asian Medical Institute (ASMI), located in Kant, Kyrgyzstan, has emerged as a leading medical institution, attracting students from around the globe who aspire to pursue careers in healthcare. It offers a range of medical programs. ASMI has gained recognition for its commitment to providing high-quality education at affordable tuition fees, making it an attractive option for students seeking a cost-effective medical education abroad. The university's dedication to academic excellence is reflected in its curriculum, which is designed to meet international standards and equip students with the knowledge and skills necessary to succeed in the medical profession.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854613/Kyrgyzstan_mbbs_university_1_academic_pic_iorlud.jpg",
            faculties: [
              "Department of Dentistry",
              "Department of General Medicine",
              "Department of Nursing",
              "Department of Obstetrics",
              "Department of Paediatrics",
              "Department of Psychiatry",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "World Health Organization (WHO)",
              "Medical Council of India (MCI)",
              "Foundation for the Advancement of Education and International Medical Research (FAIMER)",
              "National Medical Commission of India (NMC)",
            ],
          },

          {
            name: "OSH State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854652/Kyrgyzstan_mbbs_university_2_tce3f1.jpg",
            slug: "osh-state-medical-university",
            country: "kyrgyzstan",
            overview: [
              "Osh State Medical University, a prominent institution in Kyrgyzstan, has a long-standing tradition of welcoming and training international students, dating back to 1993. Over the years, the International Medical Faculty at Osh State University has fostered a diverse and vibrant academic community, attracting students from over twenty countries across the globe. This rich tapestry of cultures creates a unique and enriching learning environment for all students. Currently, Osh State Medical University boasts a student body of over 3,500, with more than a thousand international students representing countries such as India, Pakistan, Nepal, Palestine, Syria, Turkey",
            ],
            academic: [
              "Osh State Medical University, a prominent institution in Kyrgyzstan, offers a comprehensive range of medical education programs, catering to aspiring healthcare professionals at various stages of their academic journeys. The university provides undergraduate programs, including the MBBS (Bachelor of Medicine, Bachelor of Surgery) degree, which forms the foundation for a career in medicine. In addition to the MBBS program, Osh State Medical University also offers MD (Doctor of Medicine) and BDS (Bachelor of Dental Surgery) programs, providing students with diverse pathways to specialize in their chosen fields within the healthcare sector. These undergraduate programs are designed to provide students with a strong foundation in basic medical sciences, clinical skills, and ethical principles, preparing them for the challenges and rewards of a medical career.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741855648/Kyrgyzstan_mbbs_university_2_academic_pic_d3fw2c.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Community Medicine",
              "Department of Forensic Medicine",
              "Department of Microbiology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "World Directory of Medical Schools (WDOMS)",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
              "Affiliated with the International Medical Education Directory (IMED)",
            ],
          },

			 // Add new card data
          {
            name: "INTERNATIONAL MEDICAL UNIVERSITY",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755772418/international-medical-university-kyrgyzstan-Cover_fgvfaj.jpg",
            slug: "INTERNATIONAL MEDICAL UNIVERSITY",
            country: "kyrgyzstan",
            overview: [
              "International Medical University (IMU), located in Bishkek, Kyrgyzstan, is a prominent private medical institution established in 2016. The university aims to provide high-quality, affordable medical education. It is recognized for its modern infrastructure, practical-based learning, and a curriculum that aligns with international standards.",
            ],
            academic: [
              "IMU offers a 6-year Bachelor of Medicine (MBBS) program, which includes 5 years of academic study and a 1-year internship. The program is taught entirely in English. The university also offers postgraduate and doctoral programs. IMU's curriculum is structured into pre-clinical, para-clinical, and clinical phases, with a strong focus on hands-on training and clinical rotations at affiliated hospitals.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755772444/international-medical-university-kyrgyzstan-Students-1_ob5qju.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Pharmacy",
              "Faculty of Medical Biochemistry",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1755772474/international-medical-university-kyrgyzstan-Team_hag99l.jpg",
            affilationRecognition: [
              "National Medical Commission (NMC), India",
              "Educational Commission for Foreign Medical Graduates (ECFMG)",
              "World Health Organization (WHO)",
              "Ministry of Education and Science of the Kyrgyz Republic",
            ],
          },

          {
            name: "International School of Medicine (ISM)",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854694/Kyrgyzstan_mbbs_university_3_xhfwx8.png",
            slug: "international-school-of-medicine-ism",
            country: "kyrgyzstan",
            overview: [
              "The International School of Medicine (ISM) in Bishkek, Kyrgyzstan, stands as a prominent private medical university, offering a wide array of programs, including undergraduate, postgraduate, and doctoral degrees in various medical specialties. This diverse offering allows aspiring medical professionals to pursue their educational goals at different stages of their careers, from initial medical training to advanced specialization and research. ISM has earned a strong reputation for its commitment to academic excellence, attracting students from around the world who seek a high-quality medical education.",
            ],
            academic: [
              "The academic structure at the International School of Medicine (ISM) in Bishkek, Kyrgyzstan, is designed to provide students with a comprehensive and well-rounded medical education, combining a strong foundation in theoretical knowledge with essential practical skills. The program spans a total of six years, beginning with five years of intensive theoretical study. During this phase, students delve into the core principles of medical science, covering a wide range of subjects, from anatomy and physiology to pharmacology and pathology. The curriculum is designed to provide students with a deep understanding of the human body, disease processes, and treatment modalities, laying the groundwork for their future clinical practice.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741857500/Kyrgyzstan_mbbs_university_4_academic_plhcd3.webp",
            faculties: [
              "Department of Humanitarian Disciplines",
              "Department of Nursing",
              "Department of Internal Medicine",
              "Department of Surgery",
              "Department of Public Health",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "MCI (Medical Council of India)",
              "World Health Organization (WHO)",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Kyrgyz State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854706/Kyrgyzstan_mbbs_university_4_bclzvu.webp",
            slug: "kyrgyz-state-medical-university",
            country: "kyrgyzstan",
            overview: [
              "Kyrgyz State Medical Academy (KSMA), a leading government university located in Bishkek, Kyrgyzstan, has established itself as a leading center for medical education in the region. With a rich history and a commitment to academic excellence, KSMA attracts students from around the world, particularly those seeking a high-quality medical education at an affordable cost. To become a leading center of medical education and science in the Asian region, a medical institution must cultivate a multifaceted approach encompassing academic excellence, research innovation, and community engagement. This vision necessitates a commitment to attracting and retaining top-tier faculty, fostering a stimulating learning environment, and providing students with access to cutting-edge resources and technology.",
            ],
            academic: [
              "Kyrgyz State Medical Academy (KSMA) in Bishkek, Kyrgyzstan, stands as a leading institution in medical education, offering a comprehensive range of programs for aspiring healthcare professionals. These programs span all levels of study, from undergraduate to postgraduate and doctoral degrees, providing students with a clear pathway to advance their medical careers. KSMA's commitment to academic excellence has earned it global recognition. The university is considered a top medical institution in Kyrgyzstan and is recognized by prestigious international organizations such as the World Health Organization, ensuring that its degrees are respected and valued worldwide. This international recognition opens doors for graduates to pursue professional opportunities in various countries, expanding their career horizons.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854698/Kyrgyzstan_mbbs_university_3_academic_jc78kg.jpg",
            faculties: [
              "Department of Clinical Pharmacology",
              "Department of Biochemistry",
              "Department of Clinical Epidemiology",
              "Department of Medicine and Nursing",
              "Department of General Medicine",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Medical Council of India (MCI)",
              "FAIMER",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
          name: "Jalal Abad State Medical University",
          image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759124/Kyrgyzstan_mbbs_university_5_Jalal_Abad_rynbkm.jpg",
          slug: "jalal-abad-state-medical-university",
          country : "kyrgyzstan",
          overview : ["Jalal-Abad State Medical University (JASU), named after B.Osmonov, is a government institution in Kyrgyzstan dedicated to providing accessible and high-quality medical education, established on April 2, 1993, with the dual purpose of serving both Kyrgyzstani and international medical aspirants, including those from India, while maintaining affordable tuition fees; affiliated with the Ministry of Health and Science Education of Kyrgyzstan, JASU holds approvals and recognitions from prominent medical bodies such as the National Medical Commission (NMC) and the World Directory of Medical Schools (WDOMS), alongside other globally recognized medical institutions; the university is equipped with contemporary infrastructure and advanced technologies, fostering an environment conducive to producing skilled and compassionate medical professionals; currently, JASU accommodates over 3,300 students, including a significant number of Indian students, who are pursuing their MBBS degreesin Kyrgyzstan."],
          academic : ["Jalalabad State University (JASU), a government institution operating under the direct administration of the Ministry of Health and the Ministry of Education & Science of Kyrgyzstan, initially established in 1993 to offer solely medical courses, has since broadened its academic portfolio to encompass a diverse range of disciplines, including not only engineering and law but also fields such as economics, pedagogy, and the humanities, thereby transforming into a comprehensive university that caters to a wider spectrum of student interests and career aspirations."],
          academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759127/Kyrgyzstan_mbbs_university_5_Jalal_Abad_academic_ykwsje.jpg",
          faculties : [
              "Faculty of General Medicine",
              "Faculty of Nursing",
              "Faculty of Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Joint Education Program",
          ],
          facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
          affilationRecognition : ["MCI","Ministry of Health and the Ministry of Education","NMC","WHO"],
      },

      
        {
          name: "Avicenna International Medical University",
          image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759140/Kyrgyzstan_mbbs_university_6_Avicenna_c7ay4g.jpg",
          slug: "avicenna-international-medical-university",
          country : "kyrgyzstan",
          overview : ["Avicenna International Medical University (AIMU), a private medical institution situated in Bishkek, Kyrgyzstan, is renowned for its commitment to delivering superior medical education to international students, notably those from India and other Asian nations, holding registration with the Ministry of Justice, the Ministry of Education, and the Ministry of Health of the Kyrgyz Republic, and operates under a license for higher professional education, with its mission focused on cultivating proficient medical professionals for Kyrgyzstan and a diverse array of countries including Pakistan, Bangladesh, India, Nepal, Nigeria, America, Turkey, and Egypt, currently hosting over 1000 students from these regions, where experienced doctors and medical science candidates contribute to the educational process, utilizing modern training programs, advanced technical resources, and innovative teaching methodologies to enhance educational quality, while the institute's departments actively engage in fundamental and applied research within key medical domains."],
          academic : ["Avicenna International Medical University, located in Bishkek, Kyrgyzstan, delivers a comprehensive 6-year MBBS program, consisting of 5 years of academic coursework followed by a 1-year internship, all conducted in English, with a primary emphasis on providing high-quality medical education tailored to the needs of international students, ensuring that the curriculum is accessible and relevant to diverse cultural backgrounds, and that students receive adequate support in navigating the academic and cultural adjustments inherent in studying abroad."],
          academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759149/Kyrgyzstan_mbbs_university_6_Avicenna_academic_gmooih.jpg",
          faculties : [
              "Faculty of General Medicine",
              "Faculty of Nursing",
              "Faculty of Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Joint Education Program",
          ],
          facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
          affilationRecognition : ["FAIMER","USMLE","NMC","WHO"],
      },

      
        {
          name: "Kyrgyz National University",
          image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759166/Kyrgyzstan_mbbs_university_7_Kyrgyz_national_twicd1.jpg",
          slug: "kyrgyz-national-university",
          country : "kyrgyzstan",
          overview : ["Established in 1925, the Kyrgyz National University named after J. Balasagyn (KNU) stands as a non-profit public higher education institution situated in the urban center of Bishkek, officially recognized by the Ministry of Education and Science of Kyrgyzstan, and characterized as a large, coeducational Kyrgyzstani university; KNU offers a diverse range of courses and programs leading to officially recognized higher education degrees, including bachelor's degrees across various academic disciplines, catering to both domestic and international applicants; furthermore, the university provides a comprehensive array of academic and non-academic facilities and services to its student body, encompassing a library, housing options, sports amenities, and administrative support, fostering a holistic and supportive learning environment."],
          academic : ["The Kyrgyz National University, named after Jusup Balasagyn, stands as a significant public higher education institution within Kyrgyzstan, distinguished by its extensive array of academic programs and its pivotal role in cultivating the country's future leadership by nurturing the intellectual and professional development of its students, equipping them with the knowledge, skills, and ethical values necessary to excel in their chosen fields and contribute meaningfully to society, thereby shaping the nation's trajectory through the empowerment of its future generations."],
          academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759171/Kyrgyzstan_mbbs_university_7_Kyrgyz_national_academic_kbaqxn.jpg",
          faculties : [
              "Faculty of General Medicine",
              "Faculty of Surgery",
              "Faculty of Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Biology",
          ],
          facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
          affilationRecognition : ["MCI","Ministry of Health and the Ministry of Education","NMC","WHO"],
      },

       {

          name: "Kyrgyz Russian Slavic University",
          image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759176/Kyrgyzstan_mbbs_university_8_Kyrgyz_Russian_tgktt0.webp",
          slug: "kyrgyz-russian-slavic-university",
          country : "kyrgyzstan",
          overview : ["Established in 1993 through a collaborative agreement between Kyrgyzstan and Russia, the Kyrgyz-Russian Slavic University (KRSU), situated in Bishkek, Kyrgyzstan, has risen to prominence as a leading educational institution in the region, providing esteemed medical education and globally recognized degrees that attract a diverse international student body; encompassing 7 institutes and 13 faculties offering a wide spectrum of academic programs, KRSU is authorized by the Egyptian government, affiliated with WHO, MCI, and NMC, and recognized by the Higher Supreme Council of Universities, solidifying its position among the top-tier private and public scientific education institutions; the university's well-designed and secure campus fosters a conducive environment for student growth, prioritizing learning and teaching enhanced by cutting-edge technology and comprehensive knowledge delivery to meet societal needs through the development of diverse skill sets; bolstered by numerous partnerships with foreign institutions, KRSU currently educates approximately 11,000 students, including 900 international students, reflecting its commitment to global academic exchange and excellence."],
          academic : ["The Kyrgyz-Russian Slavic University (KRSU) provides a diverse academic portfolio, encompassing Bachelor's, Master's, and postgraduate degrees, with a core mission to cultivate highly skilled professionals across a multitude of disciplines, distinguished by its unique offering of dual diplomas issued by both the Russian Federation and the Kyrgyz Republic, thereby enhancing the international recognition and employability of its graduates."],
          academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759181/Kyrgyzstan_mbbs_university_8_Kyrgyz_Russian_academic_ioeb36.jpg",
          faculties : [
              "Faculty of Anatomy & Physiology",
              "Faculty of General Surgery",
              "Faculty of Pediatrics",
              "Faculty of Pharmaceutical",
              "Faculty of Biology",
          ],
          facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
          affilationRecognition : ["MCI","ECFMG","NMC","WHO"],
      },

          {

          name: "Salymbekov Medical University",
          image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759188/Kyrgyzstan_mbbs_university_9_Salymbekov_xbur5z.webp",
          slug: "salymbekov-medical-university",
          country : "kyrgyzstan",
          overview : ["Established in 2019, Salymbekov Medical University, a prominent institution for higher medical education, offers a comprehensive range of academic programs, including diplomas, degrees, master's, and doctoral studies, providing students with extensive practical exposure through hospital visits and hands-on training in the latter stages of their courses, facilitated by its numerous departments located throughout Bishkek's educational district; particularly popular among the growing Indian immigrant student community, the university has garnered recognition from international organizations such as the NMC and WHO, and attracts a substantial number of Asian students, solidifying its reputation as a leading medical school in Kyrgyzstan."],
          academic : ["Salymbekov Medical University, also referred to as Salymbekov International Medical College, located in Kyrgyzstan, provides a comprehensive medical education program leading to an MBBS/MD degree, delivered entirely in English, with enrollment opportunities in both the fall and spring semesters, and is distinguished by its state-of-the-art facilities and a faculty comprised of seasoned professionals dedicated to providing a high standard of medical training."],
          academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743759193/Kyrgyzstan_mbbs_university_9_Salymbekov_academic_wmpfft.jpg",
          faculties : [
              "Faculty of Medicine",
              "Faculty of General Surgery",
              "Faculty of Pediatrics",
              "Faculty of Pharmaceutical",
              "Faculty of Biology",
          ],
          facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
          affilationRecognition : ["WFME","ECFMG","NMC","WHO"],
      },

      {

        name: "International European University",
        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745562513/Kyrgyzstan_mbbs_10_International_European_kjafcp.jpg",
        slug: "international-european-university",
        country : "kyrgyzstan",  
        overview : ["International European University stands as the premier destination for medical education in Kyrgyzstan, recognized as the top-ranking medical college in the region and dedicated to excellence in education, research, and healthcare practice. The university takes pride in its commitment to providing a world-class medical education aimed at preparing students for successful careers in healthcare, a goal supported by a faculty comprising leading experts and practitioners who ensure students receive the highest quality instruction and mentorship. Aspiring medical professionals exploring the university will find a comprehensive range of academic programs designed to meet diverse needs and interests across various healthcare-related disciplines, including medicine, nursing, and pharmacy. In addition to its academic offerings, International European University is equipped with state-of-the-art facilities and resources, such as modern classrooms, laboratories, and cutting-edge simulation centers, providing students with the necessary tools to excel in their studies and develop essential skills for the healthcare field."],
        academic : ["The International European University (IEU) in Kyrgyzstan offers several Doctor of Medicine (MD) programs, providing options such as a 5-year program taught entirely in English, a 6-year program with instruction delivered in both Russian and English, and a specialized 5.5-year program tailored for Indian students that includes clinical rotations. In addition to its medical degrees, the university also offers a dentistry program."],
        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745562528/Kyrgyzstan_mbbs_10_International_European_academic_fr908e.jpg",
        faculties : [
            "Faculty of Medicine",
            "Faculty of Dentistry",
            "Faculty of Pediatrics",
            "Faculty of Pharmaceutical",
            "Faculty of Biology",
        ],
        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
        affilationRecognition : ["WFME","FAIMER","NMC","WHO"],
    },

       {

        name: "International Medical University",
        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745562536/Kyrgyzstan_mbbs_11_International_Medical_l2xcda.jpg",
        slug: "international-medical-university",
        country : "kyrgyzstan",
        overview : ["Founded in 1993 in Kyrgyzstan, the International Medical University (IMU) is a well-regarded medical institution recognized by both the World Directory of Medical Schools (WDOMS) and the Ministry of Education and Science of Kyrgyzstan. Offering a range of medical courses primarily taught in English, IMU caters to a diverse student body, including a significant number of Indian students, making it highly accessible to international learners. The university boasts modern facilities essential for medical training, such as advanced laboratories and a dedicated clinic for practical experience, and is affiliated with recognized medical institutions to ensure robust clinical training. Furthermore, IMU enhances the educational experience through the use of a Learning Management System (LMS), and its graduates are awarded a state-recognized diploma that holds global recognition."],
        academic : ["The International Medical University in Kyrgyzstan offers a range of medical programs, including the MBBS (MD Physician), Master of Medicine, and a residency program. These programs are taught in English and are recognized by international organizations such as the WHO and NMC. The university also encompasses a College of Medicine and Pharmacy. Among its detailed academic offerings, the MBBS (MD Physician) is a 5.5-year program that includes clinical rotations and serves as the primary program for Indian students, with its curriculum approved by the NMC. The Master of Medicine program is a 2-year course, also delivered with instruction in English."],
        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745562542/Kyrgyzstan_mbbs_11_International_Medical_academic_qnmlm6.jpg",
        faculties : [
            "Faculty of Medicine",
            "Faculty of Dentistry",
            "Faculty of Pediatrics",
            "Faculty of Pharmacy",
            "Faculty of Biology",
        ],
        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
        affilationRecognition : ["WFME","WDOMS","NMC","WHO"],
    },
        ],

        eligibilityPoints: [
          {
            title: "Education",
            description:
              "You must have completed 10+2 from a recognized board of education ",
          },
          {
            title: "Age Requirement",
            description: "Minimum 17 years old at the time of admission",
          },
          {
            title: "Subjects",
            description:
              "You must have studied Physics, Chemistry, and Biology in 10+2",
          },
          {
            title: "Score",
            description:
              "50% aggregate for general category, 40% for reserved category.",
          },
        ],
        mbbsBenefits: [
          {
            title: "English Medium Instruction",
            description:
              "All medical programs are taught in English, eliminating language barriers for Indian students.",
          },
          {
            title: "Globally Recognized Degree",
            description:
              "Medical degrees from Kyrgyzstan are recognized by the World Health Organization (WHO), National Medical Commission (NMC) in India, and other.",
          },
          {
            title: "No Entrance Exams",
            description:
              "Admission to medical universities in Kyrgyzstan is usually based on merit without requiring any additional entrance exams.",
          },
          {
            title: "Quality Medical Education",
            description:
              "Kyrgyz medical universities focus on providing a comprehensive curriculum with strong emphasis on practical training and clinical exposure.",
          },
        ],
        advantages: [
          "Quality Education",
          "No Donation Required",
          "Globally Recognized Degrees",
          "International Exposure",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854678/Mbbs_in_kyrgyzstan_university_pic_vrbz7l.jpg",
      },

      ///Kazakhstan

      {
        country: "Kazakhstan",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360305/Kazakhstan_logo_dirinj.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742972684/Mbbs_in_Kazakhstan_p7x8sf.jpg",
        overviewText:
          "Kazakhstan holds a prominent position on the world stage, largely due to its strong economy. This economic strength is driven by the country's rich natural resources, particularly its vast reserves of oil and natural gas. Kazakhstan has emerged as an increasingly attractive destination for international students seeking quality higher education at an affordable cost. Several factors contribute to its growing popularity, making it a compelling option for those looking to study abroad. One of the most significant advantages is the affordability of tuition fees in Kazakhstan compared to many Western countries.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741863220/Mbbs_in_Kazakhstan_overview_pic_zs9vya.jpg",
        quickFacts: ["Astana", "35%", "Tenge (KZT)", "Approx. 1.99 crores"],
        univeristes: [
          {
            name: "Kazakh Russian Medical University (KRMU)",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741863239/Kazakhstan_mbbs_university_1_jqwqxp.webp",
            slug: "kazakh-russian-medical-university-krmu",
            country: "kazakhstan",
            overview: [
              "Kazakh Russian Medical University, a distinguished private medical institution located in Almaty, Kazakhstan, has earned a stellar reputation as a leading destination for students seeking a high-quality MBBS education abroad. Established in 1992, and formerly known as Kazakhstan Medical University, this institution has consistently ranked among the top medical universities in the country, attracting aspiring medical professionals from around the globe. Founded by Dr. Mukhtar Aliyevich Aliyev, a respected member of the Kazakh Academy of Sciences, the university benefits from the vision and leadership of a prominent figure in the medical community. At the heart of the university's success lies its vibrant and dedicated faculty, a collective of over 200 lecturers comprised of renowned doctors, esteemed international scientists, and distinguished Kazakh medical professionals. This impressive assembly of experts provides students with unparalleled access to knowledge, mentorship, and diverse perspectives, solidifying the university's position as a top choice for MBBS studies in Kazakhstan.",
            ],
            academic: [
              "Kazakh Russian Medical University (KRMU) provides a comprehensive six-year MBBS program, consisting of five years of rigorous academic training followed by a one-year clinical internship. This structure ensures that graduates are well-prepared for the practical demands of the medical profession, having gained both theoretical knowledge and hands-on experience. The program's instruction is delivered in English, making it an ideal choice for international students seeking a globally recognized medical education. KRMU's degrees are widely recognized, thanks to accreditations from numerous international institutions, opening doors for graduates to pursue diverse career paths around the world.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741863311/Kazakhstan_mbbs_university_1_academic_pic_hdwmy6.webp",
            faculties: [
              "Department of Dentistry",
              "Department of General Medicine",
              "Department of Nursing",
              "Department of Obstetrics",
              "Department of Paediatrics",
              "Department of Psychiatry",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "World Health Organization (WHO)",
              "Medical Council of India (MCI)",
              "Foundation for the Advancement of Education and International Medical Research (FAIMER)",
              "Recognized by the Ministry of Education and Science of the Republic of Kazakhstan",
            ],
          },

          {
            name: "Kazakh National Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741865640/Kazakhstan_mbbs_university_2_hcc1iv.jpg",
            slug: "kazakh-national-medical-university",
            country: "kazakhstan",
            overview: [
              "Kazakh National Medical University, a venerable institution established in 1931, holds a distinguished position as the #1 university in Kazakhstan, a testament to its unwavering commitment to academic excellence and groundbreaking medical research. Recognized as a 'National University' in 2001, this prestigious institution, located in the vibrant city of Almaty, has a rich history of nurturing some of the world's most renowned physicians and medical experts. Kazakh National Medical University has been a pivotal force in shaping healthcare. Kazakh National Medical University (KazNMU) offers a compelling combination of academic excellence and student-friendly features. The university boasts a highly qualified faculty comprised of experienced teachers, professors, and practicing doctors, ensuring students receive expert guidance and mentorship.",
            ],
            academic: [
              "Kazakh National Medical University (KazNMU), located in Almaty, Kazakhstan, stands as a leading institution for medical education, offering a comprehensive range of programs, including undergraduate, postgraduate, and doctoral degrees. Aspiring medical professionals can pursue their educational goals in a variety of specializations, ensuring a well-rounded and in-depth understanding of the medical field. It is particularly renowned for its MBBS programs, attracting students from around the globe who seek a high-quality medical education. The university is widely recognized as a leader in medical education and medicine, contributing significantly to advancements in healthcare and medical research, both in Kazakhstan and internationally.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360828/Kazakhstan_mbbs_university_2_academic_pic_rsiwtu.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Community Medicine",
              "Department of Forensic Medicine",
              "Department of Microbiology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Affiliated with the Health Ministry of Kazakhstan.",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
              "Foundation for Advancement of International Medical Education and Research (FAIMER)",
            ],
          },

          {
            name: "Al-Farabi National Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360833/kazakhstan_mbbs_university_3_cwe7th.jpg",
            slug: "al-farabi-national-medical-university",
            country: "kazakhstan",
            overview: [
              "Al-Farabi Kazakh National University (KazNU), a distinguished public university located in Almaty, Kazakhstan, is renowned for its exceptional medical education programs and its significant contributions to the field of healthcare. As one of the oldest and most prestigious universities in Kazakhstan, KazNU has a rich history of academic excellence and is consistently ranked among the top educational institutions in Central Asia. The university's medical faculty is particularly well-regarded, attracting aspiring medical professionals from across the globe who seek a high-quality education in a dynamic and stimulating environment. KazNU's medical programs cover a wide range of disciplines, from general medicine and surgery to specialized fields like cardiology, oncology, and neurology, providing students with a comprehensive and well-rounded medical education.",
            ],
            academic: [
              "Al-Farabi Kazakh National University (KazNU), situated in Almaty, Kazakhstan, offers a diverse range of academic programs, encompassing medical sciences, engineering, humanities, and many other fields. This comprehensive offering allows students to pursue their educational goals across a broad spectrum of disciplines, fostering intellectual curiosity and preparing them for a variety of career paths. KazNU is renowned for its commitment to providing high-quality education, earning it a place among the top medical universities globally. This recognition reflects the university's dedication to academic excellence, innovative research, and the development of highly skilled professionals in the medical field and beyond.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360860/Kazakhstan_mbbs_university_3_academic_pic_xhbsml.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Nursing",
              "Department of Internal Medicine",
              "Department of Surgery",
              "Department of Fundamental Medical",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "MCI (Medical Council of India)",
              "World Health Organization (WHO)",
              "National Medical Commission of India (NMC)",
              "KazNU is a member of the International Association of Universities)",
            ],
          },

          {
            name: "South Kazakh Medical Academy",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360874/kazakhstan_mbbs_university_4_k9rzgp.jpg",
            slug: "south-kazakh-medical-academy",
            country: "kazakhstan",
            overview: [
              "Shymkent South Kazakhstan Medical Academy (SKMA), established in 1979, has a long-standing tradition of excellence in medical education and has consistently ranked among the top medical universities in Kazakhstan. Over the years, SKMA has earned a stellar reputation for its commitment to providing high-quality medical training and fostering a vibrant academic community. The academy's dedication to innovation and research has attracted students and faculty from around the globe, creating a diverse and intellectually stimulating environment. SKMA's modern campus provides students with access to state-of-the-art facilities, well-equipped laboratories, and a comprehensive library, ensuring they have the resources necessary to excel in their studies",
            ],
            academic: [
              "South Kazakhstan Medical Academy (SKMA), located in Shymkent, Kazakhstan, offers a full range of medical education programs, encompassing undergraduate, postgraduate, and doctoral degrees. Aspiring medical professionals can pursue their academic goals in a variety of fields, from general medicine and pediatrics to specialized areas like surgery, obstetrics and gynecology, and cardiology. The academy's undergraduate programs provide a strong foundation in basic medical sciences and clinical skills, preparing students for the rigors of medical practice. Postgraduate programs allow physicians to further specialize in their chosen field, enhancing their expertise and expanding their career opportunities.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742360901/Kazakhstan_mbbs_university_4_academic_jwjzjc.jpg",
            faculties: [
              "Department of Chemistry",
              "Department of Biochemistry",
              "Department of Molecular Biology",
              "Department of Medicine and Nursing",
              "Department of Microbiology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Medical Council of India (MCI)",
              "The Ministry of Education and Science of the Republic of Kazakhstan",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "North Kazakhstan State University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745495719/kazakhstan_university_North_Kazakhstan_xl3kbh.jpg",
            slug: "north-kazakhstan-state-university",
            country : "kazakhstan",
            overview : ["North Kazakhstan State University stands as a leading educational organization and world-class university in north Kazakhstan, initially established as the Petropavlovskiy teachers training institute in 1937 in Petropavl city, Republic of Kazakhstan. The institution was awarded the status of a university by the republic council of Kazakhstan in 2001 and was subsequently renamed after academician Manash Kotzebue in 2003. Working with a dedicated team of great professionals, doctors, and researchers, North Kazakhstan State University consistently demonstrates high performance in the field of education. The beauty of Petropavl city attracts foreign students and visitors alike for both living and tourism. Situated on the Ishim River in north Kazakhstan, close to the Russian border, Petropavl has a population of around 2.5 lakh; the presence of many ponds, lakes, and small forests within the city further enhances its appeal as a beautiful place to live. Students from the university who opt to reside outside the campus can easily get settled into this inviting environment."],
            academic : ["North Kazakhstan State University (NKSU), named after Manash Kozybayev, offers a wide range of academic programs, including over 50 Bachelor's degrees, 25 Master's degrees, and 4 Doctoral degrees. Among the popular choices for international students are the programs in General Medicine and Pharmacy, both of which are offered with instruction in English."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745495725/Kazakhstan_university_North_Kazakhstan_academic_pekf2r.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Nursing",
                "Faculty of Dentistry",
                "Faculty of Pediatrics",
                "Faculty of Joint Education Program",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["MCI","ICDE","NMC","WHO"],
        },

        {
            name: "Karaganda State Medical University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745495772/Kazakhstan_university_Karaganda_State_vvxdj6.jpg",
            slug: "karaganda-state-medical-university",
            country : "kazakhstan",
            overview : ["Founded in 1950, Karaganda State Medical University (KSMU) is recognized as one of the outstanding medical universities in the Republic of Kazakhstan and holds the distinction of being the country's first medical university. Ranked at the 8th position among the top 60 universities nationally by the National Accreditation Centre, KSMU has also demonstrated its commitment to quality by passing the certification in conformance with the requirements of the International Standard ISO 9001-2000 in 2005, certified by NQA – the Russian Representation of the British authority in certification management systems, as well as NQA – UK Global Assurance."],
            academic : ["Karaganda State Medical University offers a variety of medical-related academic programs, including MBBS (Bachelor of Medicine, Bachelor of Surgery), General Medicine, Stomatology, and various other specialist faculties. Beyond undergraduate options, the university also provides masters and doctoral programs across diverse medical fields. Among its offerings, the MBBS program stands out as a particularly popular choice, with the university being well-regarded for its quality medical education and international recognition."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745558930/Kazakhstan_university_Karaganda_State_academic_np94qd.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Gynaecology",
                "Faculty of Stomatology",
                "Faculty of Anatomy",
                "Faculty of Internal Diseases",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["MCI","ASME","NMC","WHO"],
        },

        {
            name: "Astana Medical University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745495733/Kazakhstan_university_Astana_Medical_jgkocg.jpg",
            slug: "astana-medical-university",
            country : "kazakhstan",
            overview : ["Established in 1962 in the city of Kokshetau, Kazakhstan, Kokshetau State University is recognized as a modern educational institution offering multi-level programs across various specialties. The university provides a wide range of options, including 65 specialties at the bachelor's degree level, 30 at the master's degree level, and 6 at the doctorate level, particularly in the fields of natural sciences and general medicine. The institution was named in honor of Sh. Ualikhanov, celebrated as a great Kazakh scientist, historian, ethnographer, geographer, translator, and traveler. For international students seeking medical education, especially those interested in MBBS in Kazakhstan, Kokshetau State University presents significant opportunities, providing practical knowledge at an affordable price, which sets a great benchmark."],
            academic : ["Astana Medical University provides a comprehensive MBBS program that is taught entirely in English and spans 6 years, including a mandatory year of internship. The university is distinguished by its strong academic foundation, featuring a curriculum that is carefully aligned with global standards and places a significant emphasis on hands-on learning, allowing students to gain essential practical experience through internships and placements conducted in affiliated hospitals and medical facilities."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745495737/Kazakhstan_university_Astana_Medical_academic_dojncn.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Pharmacy",
                "Faculty of Dentistry",
                "Faculty of Pediatrics",
              
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["USMLE","FAIMER","NMC","WHO"],
        },

        {
            name: "Kokshetau State University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745559865/Kazakhstan_university_Kokshetau_dznfgc.jpg",
            slug: "kokshetau-state-university",
            country : "kazakhstan",
            overview : ["Sh. Ualikhanov Kokshetau State University is a Government State University founded in 1962 and located in the city of Kokshetau, Kazakhstan. The university was fittingly renamed after Sh. Ualikhanov, celebrated as one of the greatest Kazakh scientists, historians, ethnographers, geographers, translators, and travelers. For medical students, pursuing MBBS in Kazakhstan, particularly at Kokshetau State University, presents significant opportunities. The university is committed to providing quality education to its medical students and has received NAAR accreditation ratings for 60 of its educational programs."],
            academic : ["Kokshetau State University (KSU) in Kazakhstan offers a wide range of academic programs, including a 5-year MBBS course, bachelor's degrees in 65 specialties, master's degrees in 30 specialties, and doctoral degrees in 6 specialties. The university maintains a strong focus on natural sciences and general medicine, providing programs such as Pediatrics, Pathology, Gynecology, and others, all of which are approved by the Ministry of Education and Science, Kazakhstan."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745495787/Kazakhstan_university_Kokshetau_academic_ezoxct.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Pharmacy",
                "Faculty of Dentistry",
                "Faculty of Pediatrics",
                "Faculty of Public health",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["USMLE","FAIMER","NMC","WHO"],
        },

        {
            name: "Semey Medical University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745560465/Kazakhstan_university_Semey_Medical_kqwhuy.jpg",
            slug: "semey-medical-university",
            country : "kazakhstan",
            overview : ["Semey Medical University stands as one of the largest medical universities in the Republic of Kazakhstan, distinguished by having its own university hospital and branches located in the cities of Pavlodar and Ust-Kamenogorsk. Its establishment traces back to 1952 when the Cabinet of Ministers of the Soviet Union issued a decree for its opening; the university was subsequently founded on September 1, 1953, with the inauguration of the Faculty of Medicine, which welcomed its first cohort of 320 students. Over the years since its inception, the university has produced graduates who are now successfully working across Kazakhstan, as well as in countries both near and far abroad."],
            academic : ["The main task of Semey State Medical University is centered on the preparation of highly qualified doctor specialists. Educational work is conducted in accordance with normative documents governing higher education, overseen by the Rector, the Vice-Rector for educational works, and the deans of departments, and coordinated by the Education Counsel and the Central Methodical Counsel (CMC)."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745560473/Kazakhstan_university_Semey_Medical_academic_i7zwjy.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Pharmacy",
                "Faculty of Pathological Anatomy",
                "Faculty of Stomatologic Disciplines",
                "Faculty of Public Health Care",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["MCI","WDOMS","NMC","WHO"],
          },
        ],

        eligibilityPoints: [
          {
            title: "Education",
            description:
              "You must have completed 10+2 from a recognized board of education ",
          },
          {
            title: "Age Requirement",
            description:
              "You must be at least 17 years old and not more than 25 years old when you apply",
          },
          {
            title: "Subjects",
            description:
              "You must have studied Physics, Chemistry, and Biology in 10+2",
          },
          {
            title: "Score",
            description:
              "You must have scored at least 50% in Physics, Chemistry, and Biology in 10+2",
          },
        ],
        mbbsBenefits: [
          {
            title: "English Medium Instruction",
            description:
              "All medical programs are taught in English, eliminating language barriers for Indian students.",
          },
          {
            title: "Globally Recognized Degree",
            description:
              "Medical degrees from Kazakhstan are recognized by the World Health Organization (WHO) and the Medical Council of India (MCI), allowing graduates to practice medicine worldwide.",
          },
          {
            title: "No Entrance Exams",
            description:
              "Many universities in Kazakhstan do not require entrance exams for international students, simplifying the admission process.",
          },
          {
            title: "Quality Medical Education",
            description:
              "Kazakhstan boasts well-established medical universities with modern infrastructure, experienced faculty, and a comprehensive curriculum adhering to international standards.",
          },
        ],
        advantages: [
          "Quality Education",
          "No Donation Required",
          "Affordable Cost",
          "Clinical Exposure",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1741854678/Mbbs_in_kyrgyzstan_university_pic_vrbz7l.jpg",
      },

      ///Georgia

      {
        country: "Georgia",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361434/Georgia_logo_jtyuel.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361645/Georgia_mbbs_abroad_2_cjhiay.webp",
        overviewText:
          "Georgia has become a popular choice for Indian students seeking quality medical education abroad. Georgia boasts several top-ranking universities with a strong reputation for producing skilled doctors. These universities offer modern facilities, experienced faculty, and a curriculum designed to meet international standards. Compared to other countries, Georgia offers a more affordable and accessible pathway to a medical degree, making it an attractive option for many students. This allows them to focus on their academic preparation and pursue their medical aspirations without the added stress of a highly competitive entrance exam. The welcoming environment and the opportunity to experience a different culture while pursuing their studies further enhance the appeal of studying MBBS in Georgia.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361619/Georgia_mbbs_overview_pic_kjbxgp.webp",
        quickFacts: [
          "Tbilisi",
          "20%",
          "Georgian Lari (GEL)",
          "Approx. 37.6 lakhs",
        ],
        univeristes: [
          {
            name: "International School of Medical",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361665/Georgia_mbbs_university_1_pic_xgpd3e.jpg",
            slug: "international-school-of-medical",
            country: "georgia",
            overview: [
              "The International School of Medicine at Alte University, located in Tbilisi, Georgia, provides aspiring medical and dental professionals with the opportunity to pursue their education in English. This allows students from diverse backgrounds to access high-quality medical training in a globalized setting. The school's programs are not only internationally recognized, ensuring graduates can pursue careers worldwide, but are also taught by a distinguished faculty of experienced medical professionals and international professors. This combination of recognition and expertise creates a rich learning environment for students. The school is a member of the Association for Medical Education in Europe (AMEE) and the European Association for Quality Assurance in Higher Education (ENQA).",
            ],
            academic: [
              "The International School of Medicine at Alte University, situated in the vibrant city of Tbilisi, Georgia, provides a unique opportunity for international students to pursue their dreams of becoming medical or dental professionals. This school offers holistic and state-of-the-art programs in both medicine and dentistry, designed specifically to cater to the needs of students from around the globe. A key feature of the International Medical School is its adherence to the rigorous standards set by the World Federation for Medical Education (WFME).",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361670/Georgia_mbbs_university_1_academic_pic_godlo8.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Clinical Anatomy and operational Surgery",
              "Department of Histology, Cytology and Embryology",
              "Department of Bioethics",
              "Department of Psychology",
              "Department of Forensic Medicine",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "World Health Organization (WHO)",
              "United Nations Organization (UNO)",
              "Educational Commission for graduates in foreign medicine (ECFMG)",
              "Foundation for the Advancement of Education and International Medical Research (FAIMER)",
            ],
          },

          {
            name: "East European University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361703/Georgia_mbbs_university_2_pic_x9cyw0.png",
            slug: "east-european-university",
            country: "georgia",
            overview: [
              "East European University (EEU), a private institution of higher learning established in 2012, is located in the heart of Tbilisi, the vibrant capital city of Georgia. Since its inception, EEU has dedicated itself to providing a high-quality educational experience to a diverse student body, welcoming individuals from across the globe to its dynamic academic community. The university prides itself on fostering an environment that encourages intellectual curiosity, personal growth, and global citizenship. EEU offers a wide array of academic disciplines, encompassing both undergraduate and postgraduate levels, catering to a broad range of educational and career aspirations. The university's commitment to academic excellence is reflected in its carefully curated curriculum, which is designed to equip students with the knowledge, skills, and competencies necessary to thrive in an increasingly interconnected and competitive world.",
            ],
            academic: [
              "East European University (EEU), located in Tbilisi, Georgia, offers a diverse range of academic programs, including undergraduate, master's, and doctoral degrees, catering to a wide array of academic interests and career aspirations. Students can choose from a variety of fields, allowing them to pursue their passions and develop expertise in their chosen disciplines. The university's commitment to quality education is underscored by its accreditation from the Georgian Ministry of Science and Education.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361779/Georgia_mbbs_university_2_academic_pic_wqryxy.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Community Medicine",
              "Department of Forensic Medicine",
              "Department of Microbiology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "World Federation for Medical Education (WFME)",
              "Educational Commission for Foreign Medical Graduates (ECFMG)",
              "World Health Organization (WHO)",
              "Foundation for Advancement of International Medical Education and Research (FAIMER)",
            ],
          },

          {
            name: "Georgian National University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361768/Georgia_mbbs_university_3_pic_fudh9w.jpg",
            slug: "georgian-national-university",
            country: "georgia",
            overview: [
              "Established in 2001, the Georgian National University SEU has quickly risen to become one of the leading private universities in Tbilisi, Georgia, earning a reputation for its commitment to academic excellence and cutting-edge research programs. Situated in a prime location within the capital city, the university's modern campus provides a stimulating and supportive environment for students from diverse backgrounds. Georgian National University SEU prides itself on offering a state-of-the-art educational experience, combining innovative teaching methodologies with a focus on practical skills and real-world applications. The university's faculty comprises experienced professionals and scholars who are dedicated to nurturing the intellectual curiosity and personal growth of their students. With a wide range of undergraduate, graduate, and doctoral programs across various disciplines, Georgian National University SEU caters to a broad spectrum of academic interests and career aspirations.",
            ],
            academic: [
              "Georgian National University SEU, located in Tbilisi, Georgia, offers a wide range of medical courses to meet the diverse needs and aspirations of aspiring healthcare professionals, nurturing their talents and preparing them for successful careers in the medical field. These programs include the Bachelor of Medicine, Bachelor of Surgery (MBBS), dentistry, surgery, and pharmacy, providing students with a comprehensive foundation in their chosen field. In addition to its undergraduate offerings, the university also provides postgraduate courses, allowing medical professionals to further specialize and enhance their expertise.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361800/Georgia_mbbs_university_3_academic_pic_dxsjh5.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Internal Medicine",
              "Department of Forensic Medicine",
              "Department of Fundamental Medical",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "MCI (Medical Council of India)",
              "World Health Organization (WHO)",
              "National Medical Commission of India (NMC)",
              "FAIMER (Foundation for Advancement of International Medical Education and Research).",
            ],
          },

          {
            name: "Batumi Shota Rustaveli State University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361820/Georgia_mbbs_university_4_pic_zuf6ut.jpg",
            slug: "batumi-shota-rustaveli-state-university",
            country: "georgia",
            overview: [
              "Batumi Shota Rustaveli State University, a prominent public university in Georgia, offers a complete range of medical education programs at both the undergraduate and postgraduate levels. Situated in the beautiful coastal city of Batumi, the capital of the Adjara region, the university provides a unique and enriching learning environment for aspiring medical professionals. Named after the revered 12th-century Georgian poet Shota Rustaveli, the university embodies the spirit of intellectual curiosity and pursuit of knowledge. With a rich history and a commitment to academic excellence, Batumi Shota Rustaveli State University has become a leading center for medical education in the region. The university's medical programs are designed to equip students with the necessary knowledge, skills, and ethical values to excel in their medical careers. The curriculum is rigorous and comprehensive, covering a wide range of medical disciplines and incorporating the latest advancements in medical science and technology.",
            ],
            academic: [
              "Batumi Shota Rustaveli State University, a distinguished institution of higher learning in Georgia, provides a wide range of academic programs, including vocational training, bachelor's degrees, master's degrees, doctoral studies, and single-level programs. This diverse range of offerings caters to a broad array of educational goals and professional aspirations, ensuring that students can find a program that aligns with their interests and career ambitions. As a multifunctional medical school, Batumi Shota Rustaveli State University delivers both professional and research-based education to undergraduate and postgraduate students in the field of medicine.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361831/Georgia_mbbs_university_4_academic_pic_x7sj1c.webp",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Molecular Biology",
              "Department of Medicine and Nursing",
              "Department of Microbiology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Medical Council of India (MCI)",
              "UNESCO: The university is recognized by UNESCO",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },
          {
            name: "David Tvildiani Medical University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743407670/georgia_mbbs_university_david_5_hfjyzb.jpg",
            slug: "david-tvildiani-medical-university",
            country : "georgia",
            overview : ["Established in 1992-93 in Tbilisi, Georgia, the David Tvildiani Medical University (DTMU) is a private institution dedicated to providing high-quality higher education in the field of medicine, holding recognition from the Medical Council of India (now NMC) and being listed with the World Directory of Medical Schools (WDOMS), with a strong emphasis on the ongoing enhancement of its teaching methodologies, learning resources, research activities, and overall management practices. It is establishing itself as a premier choice for prospective doctors globally, committed to cultivating highly competent and informed medical professionals prepared to tackle the complexities of contemporary healthcare, with its comprehensive offerings encompassing academic programs and student life, providing a thorough overview for future students."],
            academic : ["While David Tvildiani Medical University (DTMU) provides a range of academic programs, its cornerstone offering is the MBBS (Bachelor of Medicine and Bachelor of Surgery) program, which has garnered significant recognition and high regard within the international medical community for its comprehensive curriculum and quality of medical education."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743407998/Georgia_mbbs_university_david_5_academic_wum4am.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Public Health",
                "Faculty of Environment",
                "Faculty of Anatomy and Physiology",
                "Faculty of Hospital Therapy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["MCI","WDOMS","NMC","WHO"],
           },

        
          {
              name: "Tbilisi State Medical University",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743408336/Georgia_mbbs_university_Tbilisi_6_pic_xspxl0.jpg",
              slug: "tbilisi-state-medical-university",
              country : "georgia",
              overview : ["Established in 1918, Tbilisi State Medical University in Georgia stands as a prominent institution in Tbilisi, boasting a substantial student body of over seven thousand undergraduates and three thousand postgraduates, with a significant 25 percent of its enrollment comprising international students pursuing their MBBS degrees in Georgia. Recognized as one of the pioneering universities to receive approval from the Institutional Evaluation Programme conducted by the Association of European Universities in 1997, Tbilisi State Medical University has consistently produced graduates who go on to pursue successful careers in leading clinics across Georgia, Europe, and the world."],
              academic : ["While David Tvildiani Medical University (DTMU) provides a range of academic programs, its cornerstone offering is the MBBS (Bachelor of Medicine and Bachelor of Surgery) program, which has garnered significant recognition and high regard within the international medical community for its comprehensive curriculum and quality of medical education."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743408337/Georgia_mbbs_university_Tbilisi_6_academic_w9ldrh.jpg",
              faculties : [
                  "Faculty of General Medicine",
                  "Faculty of Dentistry",
                  "Faculty of Nursing",
                  "Faculty of Anatomy",
                  "Faculty of Physical Medicine and Rehabilitation",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["FAIMER","ECFMG","NMC","WHO"],
          },


        
          {
            name: "New Vision Medical University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743407692/Georgia_mbbs_university_New_Vision_7_pic_mv4tqr.jpg",
            slug: "new-vision-medical-university",
            country : "georgia",
            overview : ["Established in 2013, New Vision University stands as a private, non-profit institution of higher education located in Tbilisi, Georgia, rapidly gaining recognition as one of the fastest-developing international universities within the region. The university prides itself on its distinguished faculty, who are deeply committed to excellence in clinical care, comprehensive education, and impactful research endeavors. Reflecting this dedication to scholarly advancement, numerous scientific research projects of both international and national significance have been successfully undertaken under the auspices of the university. Furthermore, New Vision University has cultivated close and collaborative partnership relations with leading higher medical institutions both domestically and internationally, including notable affiliations such as its partnership with Leeds University in England, fostering a global network for academic and research exchange."],
            academic : ["New Vision University (NVU) provides a comprehensive spectrum of medical education, encompassing a 6-year Medical Doctor (MD) program, Bachelor's degrees in Medical Rehabilitation and Nursing Care, Master's level programs in Medical Rehabilitation and Healthcare Management, and a terminal Doctorate in Medicine."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743407697/Georgia_mbbs_university_New_Vision_7_academic_ke1b80.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Pharmacy",
                "Faculty of Environment",
                "Faculty of Physical Medicine",
                "Faculty of Hospital Therapy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["MCC","FAIMER","NMC","WHO"],
          },
          {
            name: "European University in Tbilisi Georgia",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744102894/Georgia_mbbs_university_7_European_qmlucd.jpg",
            slug: "european-university-in-tbilisi-georgia",
            country : "georgia",
            overview : ["Established in 2011, the European University has rapidly become a leading choice for dentistry studies in Georgia and Europe, with its medical school situated in the remarkably safe capital city of Tbilisi; the Faculty of Medicine was then founded in 2014 following substantial university investments in campus modernization, advanced teaching equipment, and the recruitment of renowned experts dedicated to educating future healthcare professionals, making it Georgia's pioneering private university complete with a conveniently located modern dormitory near the campus; a particularly noteworthy aspect of the European University is its broad network of clinical partnerships, encompassing around 70 clinics across Georgia, which guarantees students abundant practical experience through clinical training within authentic healthcare environments."],
            academic : ["A distinguishing feature of the European University is its continuous commitment to growth, development, and modernization of its campus and research center; for both medicine and dentistry programs, students commence their education by establishing a robust theoretical base, subsequently progressing through advanced high-tech simulations of real-world scenarios to cultivate experience and confidence, notably making it the first university in Europe to possess the newest iteration of Anatomage, an innovative 3D dissection table that visualizes and simulates lifelike medical situations."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744102897/Georgia_mbbs_university_7_European_academic_piggeo.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Pharmacy",
                "Faculty of Veterinary Medicine",
                "Faculty of  Dentistry",
                "Faculty of Anatomy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["AMEE","FAIMER","AMSE","WHO"],
        },

           {
            name: "Petre Shotadze Tbilisi Medical Academy (TMA)",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744103391/georgia_mbbs_university_10_Petre_sty2wh.webp",
            slug: "petre-shotadze-tbilisi-medical-academy-tma",
            country : "georgia",
            overview : ["Established in 1992 by the esteemed Georgian physician and pediatric surgeon Petre Shotadze, Tbilisi Medical Academy (ТМА) has since produced over 1700 successful graduates who are now practicing in prominent Georgian and international hospitals, as well as contributing to universities and scientific centers globally, evolving into a leading medical school in Georgia that attracts a diverse international student body from over 30 countries; as a student-centered institution, Petre Shotadze Tbilisi Medical Academy is dedicated to educating and cultivating both national and international healthcare specialists, with a primary focus on enhancing students' independent and critical thinking, scientific reasoning capabilities, and sound judgment to foster their development into highly capable physicians; international students aspiring to study medicine in Europe in English often select this medical university due to its proven, evidence-based teaching methodologies that directly equip them to manage a wide range of clinical scenarios, providing students at TMA with the chance to establish a strong theoretical understanding while simultaneously developing the essential practical skills for successful medical careers."],
            academic : ["The institution offers a 6-year program taught in Georgian alongside a distinct 6-year program specifically designed for international students and delivered in English, both of which have received accreditation from the National Center of Educational Quality Enhancement for a duration of 7 years, and further provides a Master's program in Applied Public Health tailored for public health specialists."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744103392/Georgia_mbbs_university_10_Petre_academic_yzpbqg.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Anatomy",
                "Faculty of Biochemistry",
                "Faculty of Physical Medicine",
                "Faculty of Clinical Medicine",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["NCEQE","FAIMER","WFME","WHO"],
        },

           {
            name: "Caucasus International University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744103368/Georgia_mbbs_university_9_Caucasus_xmxtyu.jpg",
            slug: "caucasus-international-university",
            country : "georgia",
            overview : ["Established in 1995 as a medical institute before transitioning into a multi-profile higher education institution in 2006, Caucasus International University (CIU) is situated in Georgia's capital city, Tbilisi, and currently encompasses five faculties; Tbilisi, a city rich in history with an alluring cobblestone old town that draws numerous tourists annually, is also a significant hub for Georgian medical universities, many of which offer medical education in English, attracting international students seeking quality medical education in a vibrant European setting, and notably includes institutions like the highly regarded European University, known for its modern facilities and esteemed faculty; the city further enhances its appeal by providing relatively low-cost living options and universities that offer both affordable tuition fees and maintain high academic standards, making it an attractive destination for aspiring medical professionals from around the globe."],
            academic : ["The university's undergraduate offerings consist of two distinct four-year programs, including a comprehensive Bachelor of Business Administration designed to equip students with foundational knowledge in various aspects of business management and a rigorous Bachelor of Medicine and Bachelor of Surgery program aimed at preparing aspiring medical professionals for clinical practice; furthermore, the institution provides a graduate-level program, a two-year Master of Science degree, catering to students seeking advanced specialization in a specific scientific field."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744103378/Georgia_mbbs_university_9_Caucasus_academic_xymh8l.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Pharmacy",
                "Faculty of Dentistry",
                "Faculty of Biochemistry",
                "Faculty of Anatomy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["WFME","FAIMER","NMC","WHO"],
        },
        
            {
            name: "Georgian American University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744103408/Georgia_mbbs_university_11_Georgian_fg9uyo.jpg",
            slug: "georgian-american-university",
            country : "georgia",
            overview : ["Established in Tbilisi in 2001, the Georgian American University (GAU) rapidly developed a well-equipped campus featuring all the necessary modern medical technology, demonstrating a continuous investment in research and facility modernization that has positioned it as one of the leading universities in Georgia; recognizing that exceptional education extends beyond just facilities, GAU places a strong emphasis on assembling a distinguished faculty comprised of seasoned academics and practitioners who bring a wealth of knowledge and practical insights, thereby cultivating a dynamic and comprehensive learning environment enriched by diverse perspectives and real-world expertise, ensuring that students benefit from both theoretical rigor and practical application across their fields of study, and fostering an atmosphere conducive to intellectual growth and professional development through close interaction with accomplished mentors and researchers."],
            academic : ["The M.D. program offered here provides a well-integrated curriculum that effectively balances comprehensive theoretical instruction with essential practical training, ensuring that in the initial years, students gain an in-depth understanding of fundamental medical sciences such as microbiology, anatomy, and pathology, among others; furthermore, the program incorporates training in advanced simulators and well-equipped laboratories to progressively prepare students for subsequent bedside teaching and clinical clerkships, thereby facilitating a seamless transition from foundational knowledge to real-world patient care"],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744103415/Georgia_mbbs_university_11_Georgian_academic_kysakn.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Pharmacology",
                "Faculty of Dentistry",
                "Faculty of Biochemistry",
                "Faculty of Anatomy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["WFME","FAIMER","NMC","WHO"],
        },

            {
            name: "University of Georgia (UoG)",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744103340/Georgia_mbbs_university_8_Uog_dnw62z.jpg",
            slug: "university-of-georgia-(uog)",
            country : "georgia",
            overview : ["Established in 2004 and now recognized as the largest private university in Tbilisi, Georgia, the University of Georgia is renowned for delivering high-quality education to both local and international students across a diverse range of programs encompassing business, medicine, technology, humanities, and social sciences at both bachelor’s and master’s levels; the university's appeal to numerous international students pursuing medical studies stems from its varied teaching and evaluation methodologies, which provide aspiring doctors with the opportunity to thoroughly develop both their theoretical understanding and essential practical skills; with globally recognized degrees, making it an attractive choice for studying medicine in English abroad, the University of Georgia offers a significant journey through the medical field."],
            academic : ["At present, the university offers comprehensive Medicine and Dentistry programs entirely instructed in English, and consistent with the standard in most European universities, successful completion of the medical course results in the awarding of a Medical Doctor (MD) degree, furthermore, the rigorous curriculum of the dentistry program culminates in the conferral of a Doctor of Dental Medicine (DMD) degree upon successful graduation, signifying the attainment of comprehensive knowledge and practical skills necessary for a career in dental medicine."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744103356/Georgia_mbbs_university_8_Uog_academic_sx78ne.jpg",
            faculties : [
                "Faculty of General Medicine",
                "Faculty of Pharmacy",
                "Faculty of Dentistry",
                "Faculty of Biochemistry",
                "Faculty of Anatomy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["MCI","ECFMG","NMC","WHO"],
        },

        ],

        eligibilityPoints: [
          {
            title: "Education",
            description:
              "Have a minimum of 50% marks in Physics, Chemistry, and Biology (PCB) in their 12th standard",
          },
          {
            title: "Age Requirement",
            description:
              "You must be at least 17 years old and not more than 25 years old when you apply",
          },
          {
            title: "NEET",
            description:
              "Have a valid score in the National Eligibility cum Entrance Test (NEET)",
          },
          {
            title: "Reserved Category",
            description:
              "Have a minimum of 40% marks in PCB for students from SC/ST/OBC category",
          },
        ],
        mbbsBenefits: [
          {
            title: "Easy Admission Process",
            description:
              "Unlike some other countries, the admission process for MBBS in Georgia is usually straightforward with no need for extremely competitive entrance exams.",
          },
          {
            title: "Quality Clinical Exposure",
            description:
              "Georgian medical colleges provide ample opportunities for practical training in well-equipped hospitals, ensuring a strong clinical foundation.",
          },
          {
            title: "Safe and Welcoming Environment",
            description:
              "Georgia is considered a safe country with a friendly culture, making it a comfortable place for international students to live and study.",
          },
          {
            title: "International Exposure",
            description:
              "Studying in Georgia provides exposure to different healthcare systems and the opportunity to interact with students from various backgrounds.",
          },
        ],
        advantages: [
          "Quality Education",
          "Experienced Faculty",
          "Affordable Cost",
          "Cultural Diversity",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742361507/Georgia_mbbs_university_1_zktls4.jpg",
      },

      ///Armenia

      {
        country: "Armenia",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742362801/Armenia_nw2yy1.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742362855/Armenia_mbbs_abroad_4_vwaotv.jpg",
        overviewText:
          "Armenia is a fantastic choice for international students dreaming of becoming doctors. It offers a winning combination of affordability, top-notch medical education taught in English, and a safe and budget-friendly lifestyle. This makes it a real game-changer, especially for students from countries where medical school can break the bank. After graduating, you'll need to pass additional exams like the FMGE to practice medicine in your home country. This is a common requirement for medical graduates from many countries, so it's important to factor this into your plans. Armenia boasts over 50 universities, both public and private, with renowned institutions like the American University of Armenia and Yerevan State University leading the pack. With thousands of international students already thriving in Armenia, it's a vibrant and welcoming place to pursue your medical aspirations.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742362875/Armenia_overview_pic_qfmgkf.jpg",
        quickFacts: [
          "Yerevan",
          "20%",
          "Armenian Dram (AMD)",
          "Approx. 27.8 lakhs",
        ],
           univeristes: [
            {
              name: "Yerevan Haybusak University",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743487769/Armenia_university_1_Yerevan_Haybusak_t0x6do.jpg",
              slug: "yerevan-haybusak-university",
              country : "armenia",
              overview : ["Established in 1991 by academician Levon Harutyunyan, Yerevan Haybusak University is a private institution situated in Yerevan, Armenia, boasting a substantial student body of over 7000, including a significant number of international students, and a dedicated faculty of more than 300 educators and professors, many of whom are specialists in their respective fields, solidifying its position as a leading medical institute in Armenia, having received state accreditation in 2001 and fostering an educational collaboration with the UAE. Armenia is increasingly gaining popularity as a preferred destination for students aspiring to study MBBS abroad, largely attributed to the country's provision of modern infrastructure, experienced faculty, and a strong educational framework."],
              academic : ["Yerevan Haybusak University received state accreditation in 2001 and offers Bachelor's degree programs with a four-year duration and Master's degree programs spanning two years, with instruction provided in English, Armenian, and Russian languages; notably, Indian students seeking admission to the university are required to qualify the NEET examination."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743488013/Armenia_university_1_Yerevan_Haybusak_academic_jnzqif.jpg",
              faculties : [
                  "Faculty of General Medicine",
                  "Faculty of Pharmacy",
                  "Faculty of Environment",
                  "Faculty of Physical Medicine",
                  "Faculty of International Relations",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["ECFMG","WFME","NMC","WHO"],
          },

           {
              name: "Mkhitar Gosh Armenian-Russian International University",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743489335/Armenia_university_2_Mkhitar_omm1kf.jpg",
              slug: "mkhitar-gosh-armenian-russian-international-university",
              country : "armenia",
              overview : ["Established in 1996 in Yerevan, the capital city of Armenia, Mkhitar Gosh Armenian-Russian International University holds accreditation from ANQA (Armenia’s National Center for Professional Education Quality Assurance) and official approval from the Medical Council of India (now NMC), ensuring compliance with the standards set forth by the MCI. Recognized as a leading institution in Armenia for delivering high-quality medical education, the university's medical education program has also received approval from the Ministry of Education and Science of Armenia. Consequently, Indian students who graduate from Mkhitar Gosh Armenian-Russian International University are eligible to undertake the MCI screening test (now NEXT) and practice medicine as qualified doctors in India."],
              academic : ["The university offers MBBS in Armenia at an affordable tuition fee. The MBBS curriculum at Armenian-Russian International University is a 6-year program. With quality medical education, the university helps the students excel in medicine, medical practice, research, and other clinical work."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743489323/Armenia_university_2_Mkhitar_academic_pic_pxa7e7.webp",
              faculties : [
                  "Faculty of General Medicine",
                  "Faculty of Pharmacy",
                  "Faculty of Medical Case",
                  "Faculty of Medical Art",
                  "Faculty of Dentistry",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["ECFMG","WFME","NMC","WHO"],
          },
	
           {
              name: "University of Traditional Medicine",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743488019/Armenia_university_3_University_of_Traditional_pic_hhiqxg.jpg",
              slug: "university-of-traditional-medicine",
              country : "armenia",
              overview : ["For those aspiring to become successful doctors, Armenia has emerged as a thriving hub for MBBS studies, with the University of Traditional Medicine (UTM) in Yerevan standing out as a premier institution despite challenges such as climatic conditions and governmental issues that can sometimes affect pursuing MBBS in Armenia. UTM has overcome these hurdles to provide world-class education through flexible courses, striving for excellence in MBBS training. Founded in 1992, the University of Traditional Medicine has experienced rapid growth, surpassing many other universities to become a leading institution in the country. Following years of dedicated effort and positive results, UTM achieved accreditation from the Ministry of Education and Science in the early 2000s, subsequently gaining recognition from the World Health Organization (WHO) as a legitimate and respected entity in the field of medicine, attracting a significant influx of international students annually who come to pursue their medical aspirations at the university."],
              academic : ["The University of Traditional Medicine in Armenia provides an MBBS program with an affordable tuition fee, delivering a comprehensive six-year curriculum in medical education that aims to equip students with the necessary knowledge and skills to excel in medicine, medical practice, research, and various clinical applications through its commitment to quality instruction."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743488025/Armenia_university_3_University_of_Traditional_academic_vusyvu.jpg",
              faculties : [
                  "Faculty of General and specific surgery",
                  "Faculty of Pharmacy",
                  "Faculty of Environment",
                  "Faculty of Natural sciences",
                  "Faculty of Medical",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["FAIMER","UNESCO","NMC","WHO"],
          },


            {
              name: "Yerevan State Medical University",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743488055/Armenia_university_4_Yerevan_State_pic_i1lqmx.jpg",
              slug: "yerevan-state-medical-university",
              country : "armenia",
              overview : ["Yerevan State Medical University, situated in the central hub of Yerevan, Armenia, holds the esteemed reputation of being among the nation's leading medical institutions, having successfully educated over 31,000 graduates to date. Named after Heratsi, the State Medical University currently accommodates approximately 8,000 students across its six faculties, including a significant international student body of around 1,184 individuals from diverse countries. Widely recognized as Armenia's premier university for MD studies, which is considered equivalent to the MBBS degree in India, the university's teaching and research endeavors are supported by more than 100 departments, prominent clinical facilities, and numerous research centers located throughout Yerevan. Its academic strength is further underscored by a faculty of over 1,100 lecturers, including 171 highly qualified Doctors of Sciences, 504 Candidates of Sciences, and 7 Academicians of the RANAS, who actively contribute to both scientific advancement and pedagogical excellence, thereby playing a crucial role in the progress of medical science within Armenia."],
              academic : ["Yerevan State Medical University (YSMU) provides a wide spectrum of medical education, encompassing undergraduate programs in General Medicine and Stomatology, as well as extensive postgraduate programs across numerous medical specialties and advanced PhD programs for research-oriented students."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743488067/Armenia_university_4_Yerevan_State_academic_jowpgx.jpg",
              faculties : [
                  "Faculty of General Medicine",
                  "Faculty of Pharmacy",
                  "Faculty of Military Medicine",
                  "Faculty of Public Health",
                  "Faculty of Dentistry",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["FAIMER","WFME","NMC","WHO"],
          },

            {
              name: "Armenian Medical Institute",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743488089/Armenia_university_5_Armenian_Medical_pic_jthhhv.jpg",
              slug: "armenian-medical-institute",
              country : "armenia",
              overview : ["Established in 1990 in Yerevan, Armenia, the Armenian Medical Institute holds the distinction of being the nation's first privately run medical school and is recognized as one of Armenia's leading medical institutions, making it a prime choice for numerous students from around the globe who seek MBBS education annually. Offering programs in General Medicine and Dentistry, the Armenian Medical Institute provides a significant pathway for medical education, with thousands of students graduating each year and obtaining medical degrees that enable them to pursue careers in Armenia and internationally."],
              academic : ["Ranked among Armenia's premier medical colleges, the Armenian Medical Institute provides two primary educational pathways: General Medicine and Dentistry, with the General Medicine program being a comprehensive six-year integrated course designed to deliver both robust theoretical knowledge and essential professional skills."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743488095/Armenia_university_5_Armenian_Medical_academic_gzynml.jpg",
              faculties : [
                  "Faculty of General Medicine",
                  "Faculty of Pharmacy",
                  "Faculty of Clinical Training",
                  "Faculty of Public Health",
                  "Faculty of Dentistry",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["ECFMG","WDMS","NMC","WHO"],
          },

      
            {
              name: "St.Tereza Medical University",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743488112/Armenia_university_6_St._Tereza_liwmuu.jpg",
              slug: "sttereza-medical-university",
              country : "armenia",
              overview : ["Founded in 1992 by Larisa Hambartsumyan, St. Tereza Medical University is a distinguished institution of higher medical education renowned for its exceptional faculty and accomplished scholars, providing students with practical learning methodologies and a conducive academic atmosphere, complete with modern equipment and resources. Situated in Yerevan, a city uniquely surrounded by mountains and characterized by its predominantly pink tuff stone architecture of volcanic origin, St. Tereza benefits from its location within a top-ranked city celebrated for its enduring charm and rich history, offering opportunities for cultural enrichment through its notable museums and refreshing parks."],
              academic : ["Medical University After Saint Tereza, also known as STMU Armenia, is a government-owned medical college providing a five-year classroom-based MBBS program that does not include practical training, and prospective students must fulfill the university's specific admission eligibility criteria to enroll."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743488116/Armenia_university_6_St._Tereza_academic_c23cms.jpg",
              faculties : [
                  "Faculty of General Medicine",
                  "Faculty of Pharmacy",
                  "Faculty of Public Health",
                  "Faculty of Dentistry",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["UNESCO","MCI","NMC","WHO"],
          },
            ],

        eligibilityPoints: [
          {
            title: "Education",
            description: "10+2 with Physics, Chemistry, and Biology",
          },
          {
            title: "Age Requirement",
            description:
              "You must be at least 17 years old and not more than 25 years old when you apply",
          },
          {
            title: "Entrance Exam",
            description: "NEET mandatory",
          },
          {
            title: "Percentage Requirement",
            description:
              "50% aggregate for general category, 40% for reserved categories",
          },
        ],
        mbbsBenefits: [
          {
            title: "Low Cost of Education",
            description:
              "Compared to other European countries, medical education in Armenia is considerably cheaper, making it accessible to students from diverse backgrounds.",
          },
          {
            title: "MCI Approved Universities",
            description:
              "Most medical universities in Armenia are recognized by the Medical Council of India (MCI), allowing graduates to easily practice medicine in India after clearing the necessary exams.",
          },
          {
            title: "High Quality Education",
            description:
              "Armenian medical universities like Yerevan State Medical University have a strong reputation for providing quality medical education with experienced faculty.",
          },
          {
            title: "No Entrance Exams",
            description:
              "Many universities in Armenia do not require additional entrance exams beyond the qualifying marks in 12th grade for admission to MBBS.",
          },
        ],
        advantages: [
          "Quality Education",
          "MCI/NMC recognized degree",
          "Affordable Cost",
          "Good exposure to clinical practice",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742362887/Armenia_university_advantage_pic_mpt50z.jpg",
      },

      //Belarus

      {
        country: "Belarus",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363200/Belarus_logo_xhpod2.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363215/Belarus_mbbs_abroad_hero_p8jpgp.jpg",
        overviewText:
          "Belarus offers a fantastic opportunity! You can pursue a high-quality MBBS degree taught in English, with some courses offered in Russian at a very affordable cost. The 6-year program includes hands-on experience in top-modern hospitals, ensuring you're well-prepared for your future career. Plus, Belarus provides a safe and welcoming environment for international students. The best part? Top medical universities in Belarus are recognized by the National Medical Commission (NMC) and other key international bodies. This opens doors for you to practice medicine anywhere in the world!",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363223/Belarus_mbbs_abroad_overview_pic_n6mb9m.jpg",
        quickFacts: [
          "Minsk",
          "40%",
          "Belarusian Ruble (BYN) ",
          "Approx. 27.8 lakhs",
        ],
        univeristes: [
          {
            name: "Belarusian State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363262/Belarus_mbbs_university_1_b37hx6.jpg",
            slug: "belarusian-state-medical-university",
            country: "belarus",
            overview: [
              "Belarusian State Medical University stands as the premier higher medical educational institution in the Republic of Belarus, holding a position of well-earned authority and recognition that extends far beyond its national borders. This esteemed university, set to celebrate its centenary in November 2021, boasts a rich and storied history that traces its origins back to 1921. That year marked the establishment of the Belarusian State University, which initially housed the Faculty of Medicine. This foundational faculty, instrumental in shaping the future of medical education in Belarus, subsequently evolved into an independent educational institution in 1930, solidifying its commitment to specialized medical training. The university's dedication to producing qualified medical professionals is evident from its earliest days, with the first graduation of doctors occurring in 1925. Belarusian State Medical University has remained at the forefront of medical education, consistently adapting to the evolving needs of the healthcare sector and contributing significantly to the advancement of medical science and practice.",
            ],
            academic: [
              "Belarusian State Medical University offers a strong MBBS program with many departments for both classroom learning and hands-on practice. They have over 70 departments, with a mix of classes focused on theory and clinical skills. The university places a high value on practical training, which includes simulated patient scenarios, hands-on laboratory work, and clinical rotations in hospitals. This type of training allows students to apply their knowledge in a real-world setting and develop the skills they need to be successful doctors. The university also offers a variety of extracurricular activities and research opportunities to help students further develop their skills and knowledge.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363277/Belarus_mbbs_university_1_academic_tosbrh.webp",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatrics",
              "Faculty of Preventive Medicine",
              "Faculty of Dental",
              "Faculty of Preventive Medicine",
              "Faculty of Pharmaceutical",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "World Health Organization (WHO)",
              "Medical Council of India (MCI)",
              "The National Medical Commission (NMC) recognizes BSMU",
              "The Independent Agency for Accreditation and Rating (IAAR) exchanges information with BSMU",
            ],
          },

          {
            name: "Gomel State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363295/Belarus_mbbs_university_2_mqvfae.webp",
            slug: "gomel-state-medical-university",
            country: "belarus",
            overview: [
              "Gomel State Medical University, a distinguished public teaching university located in Gomel, Belarus, stands as a beacon of medical education and innovation within the region. Established with a commitment to providing high-quality medical training, the university has consistently aimed to train its students with the knowledge and skills necessary to excel in the evolving field of healthcare. In Gomel city, the university provides a conducive environment for learning and personal growth. One of the hallmarks of Gomel State Medical University is its dedication to incorporating advanced medical technologies into its curriculum and clinical practice. This emphasis on cutting-edge technology not only enhances the learning experience for students but also ensures that graduates are well-versed in the latest advancements in medical science.",
            ],
            academic: [
              "Gomel State Medical University (GSMU) in Belarus provides a comprehensive range of academic programs, catering to aspiring healthcare professionals at both undergraduate and postgraduate levels. The university offers diverse fields of study, including medicine, dentistry, pharmacy, nursing, and public health, ensuring a broad spectrum of educational opportunities for students with varying interests and career aspirations. GSMU's commitment to providing a high-quality education is shown in its curriculum, which is well-designed to follow European standards.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363315/Belarus_mbbs_university_2_academic_hixo1e.jpg",
            faculties: [
              "Department of Anatomy",
              "Faculty of General Medicine",
              "Faculty of Medical Diagnostics",
              "Department of Pathology",
              "Department of Microbiology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Recognized by the Medical Council of India (MCI)",
              "Educational Commission for Foreign Medical Graduates (ECFMG)",
              "World Health Organization (WHO)",
              "Recognized by the European Medical Council",
            ],
          },

          {
            name: "Grodno State Medical University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363336/Belarus_mbbs_university_3_h1o46s.jpg",
            slug: "grodno-state-medical-university",
            country: "belarus",
            overview: [
              "Established in 1958, Grodno State Medical University in Belarus has solidified its position as a specialized institution dedicated to medicine and medical psychology, contributing significantly to the healthcare landscape of the nation. Situated in the historic city of Grodno, the university has evolved into a major educational center for healthcare in the Republic of Belarus, playing a crucial role in shaping the future of medical professionals. Throughout its history, Grodno State Medical University has focused on training highly skilled specialists across various medical disciplines, earning worldwide recognition for the exceptional quality of its educational programs. The university's commitment to excellence is reflected in its rigorous curriculum, experienced faculty, and state-of-the-art facilities, which collectively contribute to a stimulating and enriching learning environment for students.",
            ],
            academic: [
              "Belarus stands as a compelling destination for aspiring medical professionals seeking a high-quality MBBS education, featuring a collection of top universities that consistently rank among the top institutions in the region. Among these, Belarusian State Medical University holds a prominent position, renowned for its long-standing tradition of academic excellence and its strong medical programs. Gomel State Medical University focuses on advanced medical technologies and practical experience. Grodno State Medical University specializes in medicine and medical psychology. Vitebsk State Medical University excels in medical education and produces highly skilled graduates.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363351/Belarus_mbbs_university_3_academic_nk8cxz.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Pediatrics",
              "Faculty of Medical Diagnostics",
              "Faculty of Mental Health Medicine",
              "Department of Microbiology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "GSMU is recognized by the GMC",
              "FAIMER (Foundation for Advancement of International Medical Education and Research)",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Batumi Shota Rustaveli State University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363917/Belarus_mbbs_university_4_tq5udd.jpg",
            slug: "batumi-shota-rustaveli-state-university",
            country: "belarus",
            overview: [
              "Batumi Shota Rustaveli State University, nestled in the vibrant city of Batumi, Georgia, has a rich history dating back to its establishment in 1923. Batumi, the capital of Adjara, is a historically significant and culturally rich destination, making it an attractive location for students seeking an immersive educational experience. The university has become a popular choice for international students, particularly those from India, who are drawn to Georgia's burgeoning reputation as a hub for medical education. The country's appeal lies in its commitment to providing a robust infrastructure, delivering a high-quality education, and offering an ideal learning environment for aspiring medical professionals.",
            ],
            academic: [
              "Batumi Shota Rustaveli State University distinguishes itself by offering both professional and research-based education for undergraduate and postgraduate students. The institution's dedication to academic excellence is further validated by its accreditation from esteemed international organizations, including the MCI (Medical Council of India), WHO (World Health Organization), and UNESCO. This recognition underscores the university's adherence to global standards of medical education and its commitment to producing competent and ethical healthcare professionals. Moreover, the university fosters close associations with leading educational institutions worldwide, facilitating the exchange of knowledge, resources, and best practices. By cultivating these international partnerships, Batumi Shota Rustaveli State University provides its students with unparalleled opportunities to broaden their horizons, expand their professional networks, and ultimately realize their aspirations in the field of medicine.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363900/Belarus_mbbs_university_4_academic_x5ptac.jpg",
            faculties: [
              "Department of Pathologyy",
              "Department of Histology",
              "Department of Internal Medicine",
              "Department of General Surgery",
              "Department of Emergency Medicine",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Medical Council of India (MCI)",
              "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },
        ],

        eligibilityPoints: [
          {
            title: "Entrance Exam",
            description: "NEET qualification is mandatory for Indian students.",
          },
          {
            title: "Age Requirement",
            description: "Minimum 17 years old at the time of admission",
          },
          {
            title: "Academic Qualification",
            description: "10+2 with Physics, Chemistry, and Biology",
          },
          {
            title: "Percentage Requirement",
            description:
              "Minimum 60% aggregate in 12th grade for general category students.",
          },
          {
            title: "Language Proficiency",
            description:
              "English proficiency required for studying in Belarus.",
          },
        ],
        mbbsBenefits: [
          {
            title: "Clinical Exposure",
            description:
              "Students get ample clinical practice opportunities in well-equipped hospitals, ensuring hands-on learning experience.",
          },
          {
            title: "Easy Admission Process",
            description:
              "The admission process for international students is generally considered straightforward, with less stringent requirements compared to other countries.",
          },
          {
            title: "Safe and Stable Environment",
            description:
              "Belarus is known for its safe and stable environment, providing a conducive learning atmosphere for international students.",
          },
          {
            title: "Quality Medical Education",
            description:
              "Belarus boasts well-equipped medical universities with modern facilities and experienced faculty, providing a high standard of medical education.",
          },
          {
            title: "Cultural Exposure",
            description:
              "Studying in Belarus allows students to experience a different culture while building a global network of peers.",
          },
        ],
        advantages: [
          "Quality Education",
          "No entrance exams",
          "Multicultural environment",
          "Student support",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742363295/Belarus_mbbs_university_2_mqvfae.webp",
      },

      //Bangladesh

      {
        country: "Bangladesh",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370629/Bangladesh_logo_spccuq.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370642/Bangladesh_abroad_1_ytizxn.jpg",
        overviewText:
          "MBBS in Bangladesh is gaining popularity among international students, especially those from India. It offers a compelling blend of affordability, quality education, and a familiar environment. The curriculum often aligns with the Indian system, making it easier for graduates to appear for the Foreign Medical Graduate Examination (FMGE) in India. Bangladesh boasts numerous well-equipped medical colleges and readily accessible healthcare facilities, providing ample opportunities for hands-on learning and clinical experience. The relatively lower cost of living and a cultural familiarity further enhance the appeal, making it a more accessible and comfortable option compared to other study abroad destinations.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370649/Bangladesh_abroad_overview_xetpnj.jpg",
        quickFacts: ["Dhaka", "20%", "Taka", "Approx. 17.3 crores"],
        univeristes: [
          {
            name: "Dhaka National Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370689/bangladesh_mbbs_university_1_pic_jcnfko.webp",
            slug: "dhaka-national-medical-college",
            country: "bangladesh ",
            overview: [
              "Dhaka National Medical College's history is rooted in the Dhaka National Medical Institute Hospital, founded in 1925. This institution emerged from the Non-cooperation Movement, a campaign against British colonial rule in the Indian subcontinent. The movement, spearheaded by Mahatma Gandhi, Mawlana Muhammad Ali, and Mawlana Shawkat Ali, and organized jointly by the Indian National Congress and the Indian Muslim League, aimed to pressure the British government through peaceful resistance and self-reliance. The Dhaka National Medical Institute Hospital was built in Dhaka, near Bahadur Shah Park, on land donated by Raghunath Das, a local landowner. Many nationalists also donated money to help build and establish the hospital.",
            ],
            academic: [
              "Dhaka National Medical College, a prestigious institution in Bangladesh, offers a comprehensive and rigorous 5-year MBBS course approved by the University of Dhaka. The college is recognized by MCI & BMDC, ensuring that its graduates are eligible to practice medicine in India and Bangladesh. It is also listed in the WHO directory of medical institutes., a testament to its commitment to quality education and healthcare standards",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370714/Bangladesh_mbbs_university_1_academic_pic_khi7zl.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Community Medicine",
              "Department of Forensic Medicine",
              "Department of Microbiology",
              "Department of Pathology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Recognized by the Bangladesh Medical and Dental Council (BMDC) ",
              "Accredited by the Bangladesh Medical and Dental Council (BMDC)",
              "World Health Organization (WHO)",
              "National Medical Commission of India (NMC)",
            ],
          },

          {
            name: "Bangladesh Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370731/Bangladesh_mbbs_university_2_pic_kh4afx.webp",
            slug: "bangladesh-medical-college",
            country: "bangladesh",
            overview: [
              "Bangladesh Medical College opened on April 24, 1986, and Dhaka University officially recognized it on May 10, 1988. The Bangladesh Medical and Dental Council also recognizes the college. The first students completed their initial two years of study and took their first professional MBBS exam at Dhaka University in March 1990. The World Health Organization listed the college in its World Directory of Medical Schools starting in 1986, meaning graduates are recognized worldwide. Graduates can get limited registration with the UK's General Medical Council and can take the US Medical License Examination (USMLE). The college has a new six-story building with plenty of parking, and most departments have spacious rooms, creating a comfortable and conducive learning environment for students. The college also has a well-stocked library, a modern computer lab, and a variety of extracurricular activities to help students develop their skills and interests.",
            ],
            academic: [
              "Bangladesh Medical College is known for its excellent academic programs for international students. It offers one undergraduate course in Medicine and Health Sciences: the MBBS degree. This program takes five years to complete. This is renowned for its commitment to providing world-class medical education to students from all over the globe. The college offers a single undergraduate program in the field of Medicine and Health Sciences, the Bachelor of Medicine, Bachelor of Surgery (MBBS) degree. This comprehensive program is designed to equip aspiring medical professionals with the knowledge, skills, and ethical values necessary to excel in their careers.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370825/Bangladesh_mbbs_university_2_academic_pic_ibfjx1.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Physiology",
              "Department of Gynecology",
              "Department of Microbiology",
              "Department of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "The University of Dhaka granted affiliation to BMC",
              "Accredited by the Bangladesh Medical and Dental Council (BMDC) ",
              "World Health Organization (WHO)",
              "National Medical Commission (NMC)",
            ],
          },

          {
            name: "Tairunnessa Memorial Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370837/Bangladesh_mbbs_university_3_pic_hmdecx.jpg",
            slug: "tairunnessa-memorial-medical-college",
            country: "bangladesh",
            overview: [
              "Tairunnessa Memorial Medical College (TMMC) in Gazipur, Bangladesh was established in 1995 by Mohammad Shamsul Hoque. This respected institution has earned widespread recognition for its strong commitment to incorporating state-of-the-art technology into its teaching and clinical practices, thereby playing a pivotal role in the advancement of medical education and the enhancement of healthcare services across Bangladesh. The college's dedication to providing its students with a comprehensive and well-rounded medical education is further exemplified by its affiliation with the prestigious Dhaka University. This affiliation not only ensures the academic quality of the college's curriculum but also provides students with access to a wider network of resources and expertise.",
            ],
            academic: [
              "Tairunnessa Memorial Medical College (TMMC) in Bangladesh provides a comprehensive medical education, offering a five-year Bachelor of Medicine, Bachelor of Surgery (MBBS) degree program that prepares aspiring physicians with the necessary knowledge and skills for a successful career in healthcare. Beyond its medical degree program, TMMC also houses a dedicated nursing college, further contributing to the healthcare infrastructure by offering a diploma in nursing and midwifery.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370854/Bangladesh_mbbs_university_3_academic_pic_fxt20i.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Paediatrics",
              "Department of Forensic Medicine",
              "Department of Microbiology",
              "Department of Medicine",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "The University of Dhaka",
              "Accredited by the Bangladesh Medical and Dental Council (BMDC) ",
              "World Health Organization (WHO)",
              "National Medical Commission (NMC)",
            ],
          },

          {
            name: "Jahurul Islam Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370896/Bangladesh_mbbs_university_4_pic_kyz4zl.jpg",
            slug: "jahurul-islam-medical-college",
            country: "bangladesh",
            overview: [
              "Jahurul Islam Medical College (JIMC), established in 1992 by the visionary philanthropist Jahurul Islam, stands as a testament to his commitment to improving healthcare in Bangladesh. Jahurul Islam Medical College boasts its own dedicated campus, a sprawling expanse of buildings that house all departments, laboratories, a library, museums, a dissection hall, lecture theaters, a cafeteria, and hostels. The college's verdant campus, a lush oasis in the heart of Bajitpur, provides a pollution-free environment ideal for teaching and learning.",
            ],
            academic: [
              "This university provides a comprehensive medical education culminating in an MBBS degree. The five-year program is enhanced by a mandatory one-year internship, ensuring graduates are well-prepared for practice. The degree is fully recognized by the Bangladesh Medical and Dental Council.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370924/Bangladesh_mbbs_university_4_academic_pic_m427kf.webp",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Community Medicine",
              "Department of Forensic Medicine",
              "Department of Microbiology",
              "Department of Pathology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "The University of Dhaka",
              "Accredited by the Bangladesh Medical and Dental Council (BMDC) ",
              "World Health Organization (WHO)",
              "National Medical Commission (NMC)",
            ],
          },
          {
            name: "Holy Family Red Crescent Medical",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742792893/Bangladesh_mbbs_university_5_pic_jl2ew5.webp",
            slug: "holy-family-red-crescent-medical",
            country: "bangladesh",
            overview: [
              "The Holy Family Red Crescent Medical College has a rich history and a strong commitment to providing quality medical education and services. Here's a summary of its key points:",
              "Founding and Leadership: Established in the academic year 1999-2000, the college was inspired by the daughter of the Father of the Nation, Prime Minister Janonetri Sheikh Hasina. It was founded under the leadership of Sheikh Fazlul Karim Salim, MP, the Health Minister at that time. Sheikh Kabir Hossain served as the Chairman of the Bangladesh Red Crescent Society, and Professor Dr. Md. Maniruzzaman Bhuiyan was appointed as the Principal.",
            ],
            academic: [
              "Holy Family Red Crescent Medical College offers a five-year program with a one-year rotating internship. The students will learn both academic and practical parts in English language understanding. Under the supervision of a medical specialist, complete a one-year internship in a hospital and learn how to deal with patients.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742792907/Bangladesh_mbbs_university_5_academic_pic_taxpkd.jpg",
            faculties: [
              "Faculty of Anatomy & Physiology",
              "Faculty of General Practice",
              "Faculty of Stomatology (Dentistry)",
              "Faculty of Nursing",
              "Faculty of Microbiology",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "The Ministry of Health and Family Welfare (MOHFW)",
              "Recognized by the World Health Organization",
              "National Medical Commission of India (NMC)",
              "Recognized by the Bangladesh Medical and Dental Council",
            ],
          },

          {
            name: "Medical College For Women & Hospital",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742794293/Bangladesh_mbbs_university_6_pic_tgnlz8.jpg",
            slug: "medical-college-for-women--hospital",
            country: "bangladesh",
            overview: [
              "Medical College for Women & Hospital, a project of the Medical and Health Welfare Trust, was established in 1992 with a vision to create a medical college exclusively for women. Founded by Prof. A.Q.M. Badruddoza Choudhury, Former President of the People’s Republic of Bangladesh, Prof. M.R. Khan, National Chairman, Prof. A. M. Mujibul Haq, Founder Principal of MCWH, and Prof. Suraiya Jabeen, Founder Treasurer, the institute aims to educate selected female candidates for five academic years according to the syllabus of the Bangladesh Medical and Dental Council (BMDC) for an MBBS degree conferred by Dhaka University. Following graduation, students undergo closely supervised internship training for one year, contributing to the creation of high-quality career doctors for the nation.",
            ],
            academic: [
              "The college provides two hostels with standard facilities for students, along with an in-house gymnasium. It boasts two libraries, one of which operates 24/7. The institute maintains a dedicated, highly qualified, and efficient full-time faculty and medical staff committed to delivering quality medical education to students selected through government procedures.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742794349/Bangladesh_mbbs_university_6_academic_pic_p2gdxp.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Preventive Health",
              "Faculty of Pharmacy",
              "Faculty of Dentistry",
              "Faculty of Pediatrics",
              "Faculty of Clinical Psychology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "Member of British Medical Education",
              "The Medical Council of India",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Sylhet Women Medical College Sylhet",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742795361/Bangladesh_mbbs_university_7_pic_nt25yu.jpg",
            slug: "sylhet-women-medical-college-sylhet",
            country: "bangladesh",
            overview: [
              "In 2005, Holy Land Private Limited and Sylhet Health and Education Services Limited joined forces to establish Holy Sylhet Holding Limited, focusing on medical education and healthcare. This initiative led to the creation of Sylhet Women's Medical College and Hospital (SWMCH), with the approval of the Government of Bangladesh in 2007. Alongside, plans were made to develop a Dental College and a four-year Nursing College on a 3-acre property in Sylhet City.",
            ],
            academic: [
              "Sylhet Women's Medical College (SWMC) in Bangladesh provides a 5-year MBBS program. This program culminates in a Bachelor of Medicine, Bachelor of Surgery degree. A mandatory one-year internship follows graduation. This comprehensive structure ensures practical experience for all SWMC medical graduates.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742795396/Bangladesh_mbbs_university_7_academic_a0cnvg.jpg",
            faculties: [
              "Department of Medicine",
              "Department of Paediatrics",
              "Department of Psychiatry",
              "Department of Dermatology",
              "Department of Cardiology",
              "Department of Nephrology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "SWMC is associated with UNESCO",
              "The Medical Council of India",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "TMSS Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742796176/Bangladesh_mbbs_university_8_pic_fdoyb8.jpg",
            slug: "tmss-medical-college",
            country: "bangladesh",
            overview: [
              "TMSS was established with the noble purpose of serving the underprivileged, discriminated, neglected, exploited, and oppressed individuals, recognizing medical care as a fundamental human need. However, access to quality medical treatment for these marginalized groups has become scarce. To address this, TMSS expanded its efforts by establishing TMSS Medical College (TMC) in 2008, as part of its commitment to bolster healthcare services.",
            ],
            academic: [
              "TMSS Medical College in Bangladesh requires a full six years to complete graduation, a duration that is structured into two distinct phases: the initial five years are dedicated to comprehensive classroom study, encompassing both theoretical knowledge and research-based learning, while the concluding year is committed to a mandatory internship, providing essential practical and experience-based training.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742796225/Bangladesh_mbbs_university_8_academic_pic_vxchqa.jpg",
            faculties: [
              "Department of Community Medicine",
              "Department of Medicine",
              "Department of Pathology",
              "Department of Microbiology",
              "Department of Pharmacology",
              "Department of Forensic Medicine",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "FAIMER",
              "The Medical Council of India",
              "National Medical Commission of India (NMC)",
              "Bangladesh Medical & Dental Council (BMDC) Ministry of Health and Family Welfare.",
            ],
          },

          {
            name: "Community Based Medical College Mymensingh",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742797125/Bangladesh_mbbs_university_9_pic_u9kynw.jpg",
            slug: "community-based-medical-college-mymensingh",
            country: "bangladesh",
            overview: [
              "The Community Health Foundation Bangladesh was established in 1994 in Mymensingh by thirty distinguished philanthropists from various fields, under the leadership of the late Professor Dr. AIM Mafakhkharul Islam. Dr. Islam often emphasized",
              "A journey of thousands of miles begins with a single step.The Community Based Medical College Bangladesh (CBMCB), an initiative of the Community Health Foundation, aims to contribute modestly to the national endeavor of achieving a sustainable quality of life and environment through healthcare and scientific advancement.",
            ],
            academic: [
              "Community Based Medical College Bangladesh (CBMCB) primarily offers the Bachelor of Medicine, Bachelor of Surgery (MBBS) program, and its website showcases a range of departments such as Microbiology, ENT, Nephrology, Obstetrics & Gynecology, Ophthalmology, Orthopedic Surgery, and Pathology, indicating a broad spectrum of medical education and training.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742797140/Bangladesh_mbbs_university_9_academic_pic_qkqeg6.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Pediatric",
              "Faculty of Preventive medicine",
              "Faculty of Stomatology",
              "Faculty of Pharmaceutics",
              "Faculty of Graduate Nurses",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "FAIMER",
              "WFME [World Federation for Medical Education",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "International Medical College Tongi",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742797758/Bangladesh_mbbs_university_10_pic_qnlvjz.webp",
            slug: "international-medical-college-tongi",
            country: "bangladesh",
            overview: [
              "Established in 2000, International Medical College embarked on a mission to deliver high-caliber medical education, aspiring to cultivate proficient medical professionals capable of meeting global healthcare demands. Since its inception, the institution has experienced substantial growth, earning widespread acclaim for its unwavering commitment to academic excellence and its dedicated provision of comprehensive medical services.",
            ],
            academic: [
              "International Medical College (IMC) in Tongi, Bangladesh, provides a diverse range of healthcare education, including a 5-year MBBS program, B.Sc. in Nursing, Post Basic B.Sc. in Nursing, B.Sc. in Health Technology (Laboratory), and ESL courses, catering to a wide array of medical and allied health professional aspirations.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742797803/Bangladesh_mbbs_university_10_academic_pic_cllwcq.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Anatomy",
              "Faculty of Pathology",
              "Faculty of Stomatology",
              "Faculty of Pharmaceutics",
              "Faculty of Obstetrics & Gynaecology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "FAIMER",
              "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },
        ],

        eligibilityPoints: [
          {
            title: "Education",
            description:
              "You must have passed your 10th and 12th grade from a recognized board ",
          },
          {
            title: "Age Requirement",
            description:
              "You must be at least 17 years old by December 31 of the year you are admitted ",
          },
          {
            title: "NEET",
            description:
              "You must have passed the NEET UG exam in the year you are admitted",
          },
          {
            title: "GPA",
            description:
              "You must have a minimum GPA of 7.0 on a scale of 5, and a minimum GPA of 4.0 in Biology in 10+2.",
          },
        ],
        mbbsBenefits: [
          {
            title: "Easy admission process",
            description:
              "Compared to some other countries, the admission process for MBBS in Bangladesh is often considered simpler",
          },
          {
            title: "No language barrier",
            description:
              "English is widely spoken in Bangladeshi medical institutions, making it easier for international students to adapt.",
          },
          {
            title: "WHO and NMC recognition",
            description:
              "Most top medical colleges in Bangladesh are recognized by the World Health Organization (WHO) and the National Medical Commission (NMC), ensuring the degree's international validity.",
          },
          {
            title: "Quality Medical Education",
            description:
              "Bangladeshi medical universities maintain a high standard of education with well-trained faculty and modern infrastructure.",
          },
        ],
        advantages: [
          "Cost-effective",
          "Postgraduate opportunities",
          "Globally Recognized Degrees",
          "Strong clinical exposure",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742370938/Bangladesh_advantage_pic_au7djp.jpg",
      },

      //Nepal

      {
        country: "Nepal",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371911/Nepal_logo_jmuugf.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371921/Mbbs_in_nepal_pic_vwvju5.jpg",
        overviewText:
          "Nepal is a land of breathtaking beauty, famed for its majestic Himalayan peaks, including Mount Everest, the world's highest mountain. The country's diverse topography ranges from lush subtropical lowlands to towering snow-capped summits, creating a stunning tapestry of landscapes.Nepal has become a popular destination for Indian students aspiring to pursue a career in medicine, offering a compelling combination of affordability, quality education, and geographical proximity. One of the primary reasons for Nepal's appeal is the relatively low tuition fees compared to many other countries offering MBBS programs. This makes medical education more accessible and affordable for Indian students, allowing them to pursue their dreams without the burden of exorbitant costs.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371928/Mbbs_in_nepal_overview_pic_ccu1yq.jpg",
        quickFacts: [
          "Kathmandu",
          "20%",
          "Nepalese rupee (NRs)",
          "Approx. 2.97 crores",
        ],
        univeristes: [
          {
            name: "Kathmandu University School of Medical Sciences",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371953/Nepal_mbbs_university_1_xyo84u.jpg",
            slug: "kathmandu-university-school-of-medical-sciences",
            country: "nepal ",
            overview: [
              "Kathmandu University School of Medical Sciences (KUSMS), founded in 1994, is a constituent school of Kathmandu University, operating in partnership with Dhulikhel Hospital. Kathmandu University School of Medical Sciences (KUSMS) provides a diverse range of academic programs, catering to aspiring healthcare professionals in various disciplines. At the undergraduate level, KUSMS offers comprehensive programs such as the Bachelor of Medicine, Bachelor of Surgery (MBBS), dental surgery, physiotherapy, and nursing, providing students with a strong foundation in their chosen fields. These programs are designed to provide students with the knowledge and skills necessary for a successful career in healthcare. Beyond its undergraduate offerings, KUSMS also extends its academic reach to postgraduate studies, providing specialized training in both basic and clinical sciences.",
            ],
            academic: [
              "Kathmandu University School of Medical Sciences (KUSMS), nestled in the scenic town of Dhulikhel, Nepal, provides a full range of academic programs for aspiring healthcare professionals. KUSMS offers a diverse selection of both undergraduate and postgraduate courses, catering to a wide spectrum of interests and career goals within the medical field. At the undergraduate level, students can pursue foundational degrees in medicine, nursing, and allied health sciences, gaining a strong base of knowledge and practical skills necessary for entry-level practice. These undergraduate programs are designed to equip students with the core competencies required for providing quality patient care and contributing to the healthcare system. Beyond these foundational programs, KUSMS also offers a variety of postgraduate courses, allowing medical professionals to specialize in their chosen areas of expertise.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371960/Nepal_mbbs_university_1_academic_ttwiza.jpg",
            faculties: [
              "Department of Surgery",
              "Department of General Medicine",
              "Department of Nursing",
              "Department of Ophthalmology",
              "Department of Paediatrics",
              "Department of Psychiatry",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "World Health Organization (WHO)",
              "The Ministry of Education, Nepal officially recognizes KUSMS",
              "Kathmandu University recognizes KUSMS.",
              "National Medical Commission of India (NMC)",
            ],
          },

          {
            name: "Manipal College of Medical Sciences",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742371980/NEPAL_MBBS_UNIVERSITY_2_fvtg4g.webp",
            slug: "manipal-college-of-medical-sciences",
            country: "nepal",
            overview: [
              "Manipal College of Medical Sciences (MCOMS), situated in the picturesque city of Pokhara, Nepal, is a renowned private medical college dedicated to providing high-quality medical education. As a prominent institution under the Manipal Education and Medical Group, MCOMS offers a comprehensive range of academic programs, encompassing both undergraduate and postgraduate medical studies. Aspiring medical professionals can pursue their educational goals in a variety of disciplines, from the foundational MBBS degree to specialized postgraduate courses, allowing them to tailor their education to their specific interests and career aspirations. Manipal College of Medical Sciences (MCOMS provides a comprehensive and enriching learning environment, spread across two scenic campuses nestled in the Himalayan foothills: Deep Campus and Phulbari Campus.",
            ],
            academic: [
              "Manipal College of Medical Sciences (MCOMS), located in Pokhara, Nepal, provides a comprehensive medical education, offering both undergraduate and postgraduate programs to aspiring healthcare professionals. These programs are designed to equip students with the necessary knowledge and skills for successful careers in medicine, covering a wide range of specialties and areas of focus. ",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372000/Nepal_mbbs_university_2_academic_iyg9ik.jpg",
            faculties: [
              "Department of Anatomy",
              "Department of Biochemistry",
              "Department of Community Medicine",
              "Department of Forensic Medicine",
              "Department of Microbiology",
              "Department of Pathology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Affiliated to Kathmandu University, Dhulikhel, Nepal ",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
              "Part of the Manipal Education and Medical Group (MEMG) ",
            ],
          },

          {
            name: "Maharajgunj Medical Campus, IOM",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372017/Nepal_mbbs_university_3_jooxdb.jpg",
            slug: "maharajgunj-medical-campus-iom",
            country: "nepal",
            overview: [
              "Maharajgunj Medical Campus (MMC), a prominent institution dedicated to medical education and healthcare, is a constituent campus of the Institute of Medicine (IOM) at Tribhuvan University, located in the heart of Kathmandu, Nepal. Established in 1972, MMC has a rich history of contributing to the development of medical professionals and advancing healthcare in the country. Maharajgunj Medical Campus (MMC) in Kathmandu, Nepal, provides students with a well-rounded experience, offering a variety of academic programs complemented by robust facilities, including well-equipped labs, convenient canteens, and diverse sports options.",
            ],
            academic: [
              "Maharajgunj Medical Campus (MMC), a constituent campus of the Institute of Medicine (IOM) in Kathmandu, Nepal, provides a wide array of academic opportunities for aspiring healthcare professionals. The campus offers programs at all levels, from foundational undergraduate degrees to advanced postgraduate and doctorate programs, ensuring a comprehensive educational pathway for those seeking careers in medicine and related fields. This diverse range of programs at MMC allows students to specialize in various areas of healthcare, contributing to the development of a well-rounded and highly skilled medical workforce in Nepal.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372032/Nepal_mbbs_university_3_academic_mhtger.jpg",
            faculties: [
              "Department of Humanitarian Disciplines",
              "Department of Nursing",
              "Department of Internal Medicine",
              "Department of Surgery",
              "Department of Public Health",
              "Department of Therapy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "MCI (Medical Council of India)",
              "World Health Organization (WHO)",
              "National Medical Commission of India (NMC)",
              "Affiliated with TU",
            ],
          },

          {
            name: "Nepal army institute of health science",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372048/Nepal_mbbs_university_4_cmdbm9.webp",
            slug: "nepal-army-institute-of-health-science",
            country: "nepal",
            overview: [
              "The Nepalese Army Institute of Health Sciences (NAIHS), a distinguished non-profit medical college situated in Kathmandu, Nepal, plays a vital role in healthcare education and service within the nation. NAIHS offers a range of comprehensive medical programs, including the Bachelor of Medicine, Bachelor of Surgery (MBBS) degree, as well as postgraduate degrees such as MD (Doctor of Medicine) and MS (Master of Surgery) in various scientific disciplines. Nepal presents a compelling proposition for students, offering a range of advantages that contribute to a positive and enriching educational experience. One key benefit is the availability of scholarships, which can significantly ease the financial burden of pursuing higher education, making it more accessible to a wider range of students.",
            ],
            academic: [
              "The Nepalese Army Institute of Health Sciences (NAIHS), located in Kathmandu, Nepal, provides a diverse range of academic programs designed to cater to aspiring healthcare professionals at various stages of their educational journeys. NAIHS offers a comprehensive MBBS (Bachelor of Medicine, Bachelor of Surgery) program, a foundational degree for those seeking to become physicians. This program provides students with a robust understanding of medical sciences, clinical skills, and patient care, equipping them with the knowledge and expertise necessary for a successful medical career. In addition to the MBBS program, NAIHS also offers a B.Sc.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372055/Nepal_mbbs_university_4_academic_wmv7ab.jpg",
            faculties: [
              "Department of Clinical Pharmacology",
              "Department of Biochemistry",
              "Department of Clinical Epidemiology",
              "Department of Medicine and Nursing",
              "Department of General Medicine",
              "Department of Pathology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739793855/img_bg_sybjt5.png",
            affilationRecognition: [
              "Medical Council of India (MCI)",
              "The NAIHS is affiliated with Tribhuvan University",
              "National Medical Commission of India (NMC)",
              "World Health Organization (WHO)",
            ],
          },

          {
            name: "Nepal Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743057643/nepal_mbbs_university_6_pic_claljt.jpg",
            slug: "nepal-medical-college",
            country: "nepal",
            overview: [
              "Nepal Medical College (NMC) is nestled in a peaceful and serene environment at Attarkhel of Jorpati, Gokarneshwar Municipality, approximately 11 kilometers northeast of Kathmandu city, situated at the base of a small hillock. The college and its teaching hospital, Nepal Medical College Teaching Hospital (NMCTH), are surrounded by natural beauty, including the Gokarna hillock with pine trees to the north, the Gokarna Safari Park across the Bagmati river to the east, and tree-lined terraces to the west, with convenient access to the main road via its southwestern entrance.",
            ],
            academic: [
              "Nepal Medical College (NMC) provides a comprehensive array of medical and healthcare programs, encompassing undergraduate degrees such as MBBS, BDS, BSc Nursing, BPharm, and BMLT, alongside a diverse selection of postgraduate programs including MD, MS, MDS, and DM.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743057659/nepal_mbbs_university_6_academic_jvwbkp.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Dentistry",
              "Faculty of Nursing",
              "Faculty of Medical Laboratory Technology",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Kathmandu University (KU)",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Kathmandu Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743054066/nepal_mbbs_university_5_pic_igiasb.webp",
            slug: "kathmandu-medical-college",
            country: "nepal",
            overview: [
              "Established in 1997 in Sinamangal, Kathmandu, Nepal, Kathmandu Medical College is a private institution affiliated with Kathmandu University and holds full recognition from the Medical Council of Nepal, the Sri Lanka Medical Council (SLMC), and the Medical Council of India (now NMC), offering a high-quality education system designed to empower students to excel in their medical careers. In pursuit of our mission to cultivate highly qualified and compassionate healthcare professionals who are also ethical individuals and dedicated social service providers, we commend the Medical Education Department at KMC for their ongoing efforts in training our committed teaching faculty on the fundamental principles and contemporary practices of learning, effective teaching-learning skills, diverse assessment tools, and comprehensive curriculum development.",
            ],
            academic: [
              "Kathmandu Medical College (KMC) provides a comprehensive 4.5-year MBBS program, complemented by a mandatory 1-year internship, emphasizing a strong foundation in basic medical sciences alongside the development of essential clinical skills, and holds affiliation with Kathmandu University and recognition from the Nepal Medical Council.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743054075/nepal_mbbs_university_5_academic_pic_rpapou.jpg",
            faculties: [
              "Faculty of Pharmacology",
              "Faculty of Biochemistry",
              "Faculty of Physiology",
              "Faculty of Pathology",
              "Faculty of Microbiology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: ["MCI", "SLMC", "NMC", "WHO"],
          },

          {
            name: "Lumbini Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743059677/nepal_mbbs_university_7_pic_dtusml.jpg",
            slug: "lumbini-medical-college",
            country: "nepal",
            overview: [
              "The establishment and commencement of Lumbini Medical College in Tansen, a town aspiring for development based on education, health, and tourism, has significantly boosted the motivation and enthusiasm of its community. Recognizing the pressing need for a medical school in the western hilly region, the concept of Lumbini Medical College & Teaching Hospital Pvt. Ltd. emerged, leading to the swift establishment of a 100-bed hospital in the year 2063 B.S. with the approval of the Ministry of Health and Population. While acknowledging healthcare as a primary responsibility of the government, the numerous challenges faced by the nation make it unrealistic to expect the government to resolve every issue single-handedly; therefore, this substantial undertaking was initiated through a phased approach, bringing together local and regional Nepalese entrepreneurial visionaries to realize the dream of accessible medical education and healthcare in the region.",
            ],
            academic: [
              "Lumbini Medical College provides a wide array of medical courses, including MBBS, BDS, B.Sc., MD, MS, and numerous other programs, all conveniently offered under one institution with experienced faculty and affordable academic fees, making its MBBS program particularly popular among a large number of international students.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743059698/nepal_mbbs_university_7_academic_vrf81b.jpg",
            faculties: [
              "Faculty of Anatomy",
              "Faculty of Physiology",
              "Faculty of Pathology",
              "Faculty of Biochemistry",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Kathmandu University",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Birat Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743060725/nepal_mbbs_university_Birat_8_d1xvd6.jpg",
            slug: "birat-medical-college",
            country: "nepal",
            overview: [
              "Established as the newest MBBS college in Nepal and affiliated with Kathmandu University, Birat Medical College is recognized among the country's top medical institutions, maintaining high educational standards through its experienced and qualified faculty. Over the past two decades, the college has cultivated a tradition of delivering exceptional healthcare alongside academic excellence, earning national recognition and setting benchmarks in specific medical fields. Furthermore, Birat Medical College's recognition by international bodies such as the Medical Council of India (now NMC) and the World Health Organization attracts a diverse international student population seeking to pursue their MBBS studies in Biratnagar.",
            ],
            academic: [
              "Birat Medical College in Nepal offers a comprehensive range of medical education, encompassing postgraduate programs leading to MD/MS degrees and undergraduate courses that confer the degrees of Bachelor of Medicine and Bachelor of Surgery (MBBS).",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743060729/nepal_mbbs_university_Birat_academic_mks1jn.jpg",
            faculties: [
              "Faculty of General Medicine",
              "Faculty of Clinical Psychology",
              "Faculty of Pediatrics",
              "Faculty of Preventive Medicine",
              "Faculty of Dentistry",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Kathmandu University",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Devdaha Medical college",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743062164/nepal_mbbs_university_Devdaha_9_pic_ereshj.jpg",
            slug: "devdaha-medical-college",
            country: "nepal",
            overview: [
              "Devdaha Medical College and Research Institute, a highly esteemed private institution situated in Butwal, in the western part of Nepal, holds affiliation with Kathmandu University and recognition from the Medical Council of India (now NMC), establishing itself as a leader in medical technology and solutions. Committed to delivering high-quality education and providing essential healthcare services to local communities and those in need, the college serves as a primary medical institution and a significant research center dedicated to the development of innovative strategies and approaches in medicine. By offering rigorous training and accessible healthcare facilities, Devdaha Medical College makes a substantial contribution to society, and with its capacity of over 2500 beds, it ensures patients receive adequate care, including proper nutrition and medical attention, making it a top-tier choice for students aspiring to pursue their MBBS in Nepal, all while being founded on the vision of cultivating skilled and compassionate healthcare professionals.",
            ],
            academic: [
              "Devdaha Medical College provides a recognized and diverse array of medical and healthcare programs, notably including the Bachelor of Medicine and Bachelor of Surgery (MBBS) degree, which equips graduates with the qualifications to pursue global medical careers across various international settings.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743062153/nepal_mbbs_university_Devdaha_9_academic_jod2rn.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Dentistry",
              "Faculty of Nursing",
              "Faculty of Pharmacy",
              "Faculty of Allied Health Sciences",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Kathmandu University",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Nepalgunj Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743062203/nepal_mbbs_university_Nepalgunj_10_pic_fgc7pd.jpg",
            slug: "nepalgunj-medical-college",
            country: "nepal",
            overview: [
              "Established with the overarching goal of national development through excellence in the medical sector, Lord Buddha Educational Academy Ltd (LBEA) facilitated the formation of Nepalgunj Medical College in 1996 through the collaborative efforts of prominent entrepreneurs, medical professionals, educationalists, and respected members of society committed to fulfilling a social responsibility. The college initiated its MBBS program in 1997, followed by the introduction of its Nursing program in 2000 and Postgraduate MD/MS courses in 2007. Nepalgunj Medical College (NGMC) has earned the endorsement of the Nepal Medical Council, the Medical Council of India (now NMC), the Sri Lanka Medical Council, and medical councils across SAARC and other nations, and is also listed in the World Directory of Medical Schools by the WHO, enabling its graduates to be eligible for examinations such as USMLE in the USA and PLAB in the UK.",
            ],
            academic: [
              "Nepalgunj Medical College (NGMC) provides a diverse array of medical education opportunities for aspiring healthcare professionals. Among its offerings is a comprehensive MBBS program spanning five and a half years, designed to equip students with the foundational knowledge and clinical skills necessary for medical practice.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743062208/nepal_mbbs_university_Nepalgunj_10_academic_bz0qwv.jpg",
            faculties: [
              "Faculty of Anatomy",
              "Faculty of Physiology",
              "Faculty of Pathology",
              "Faculty of Biochemistry",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Kathmandu University",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Chitwan Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743139074/nepal_mbbs_university_chitwan_11_ll4tvl.jpg",
            slug: "chitwan-medical-college",
            country: "nepal",
            overview: [
              "Located in Bharatpur, Nepal, Chitwan Medical College holds the distinction of being the first ISO-certified Medical College and is affiliated with Tribhuvan University. This private institution operates a substantial 750-bed teaching hospital equipped with comprehensive facilities for patient treatment. Chitwan Medical College offers a range of bachelor's degree programs in vital healthcare fields, including medicine, dentistry, and public health. Notably, the college was initiated and is managed by esteemed medical professionals and practitioners of the country, setting it apart as a uniquely practitioner-led institution. Chitwan Medical College is committed to delivering world-class medical education to aspiring academics, medical practitioners, and healthcare professionals while maintaining affordable tuition fees, thereby contributing significantly to the development of skilled healthcare manpower in Nepal.",
            ],
            academic: [
              "Chitwan Medical College (CMC) provides a comprehensive spectrum of academic programs encompassing both undergraduate and postgraduate degrees in diverse medical fields, including MBBS, BDS, B.Sc. Nursing, and a variety of allied health sciences, alongside advanced postgraduate programs such as MD/MS and DM/MCh.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743139095/nepal_mbbs_university_chitwan_11_academic_e0ix1s.jpg",
            faculties: [
              "Faculty of Surgery",
              "Faculty of Physiology",
              "Faculty of Pathology",
              "Faculty of Microbiology",
              "Faculty of Biochemistry",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Tribhuvan University",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Universal College of Medical Sciences",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743141725/nepal_mbbs_university_Universal_College_13_pqxuti.jpg",
            slug: "universal-college-of-medical-sciences",
            country: "nepal",
            overview: [
              "Established in 1971 and affiliated with the esteemed University of Delhi (DU), the University College of Medical Sciences (UCMS) stands as a prominent medical institution closely associated with Guru Teg Bahadur Hospital, which serves as its teaching hospital, facilitating a wide array of medical and paramedical courses. UCMS offers a comprehensive educational portfolio encompassing over 20 programs across five distinct streams, including Paramedical, Dental, Medical, Science, and Pharmacy, leading to five different degree qualifications, namely BSc, MBBS, MD, MS (Surgery), and MSc. Recognizing academic excellence, the college provides various scholarship schemes to support meritorious students. Notably, according to the National Institutional Ranking Framework (NIRF) report for 2023 placements, 114 postgraduate (3-year) students secured placements, with the median salary package offered to these PG graduates during the UCMS placements of 2023 reaching an impressive INR 17 Lakhs Per Annum (LPA).",
            ],
            academic: [
              "The University College of Medical Sciences (UCMS) provides undergraduate education with its MBBS program and a B.Sc in Radiography, while its postgraduate offerings include a range of advanced degrees such as MD, MS, and MDS, as well as an M.Sc in Radiography, catering to diverse academic and professional aspirations within the medical and allied health fields.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743141738/nepal_mbbs_university_Universal_College_13_academic_awqv55.jpg",
            faculties: [
              "Faculty of Anatomy",
              "Faculty of Physiology",
              "Faculty of Pathology",
              "Faculty of Biochemistry",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Tribhuvan University",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "National Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743143266/nepal_mbbs_university_nmc_14_gtc0sw.jpg",
            slug: "national-medical-college",
            country: "nepal",
            overview: [
              "Nepal, a South Asian nation ranking as the 49th most populous and 93rd largest country by area, encompasses over a lakh square kilometers and supports a population of twenty-eight million, sharing its northern border with Tibet and its southern border with Bangladesh. Characterized by its varied geography, abundant flora and fauna, fertile plains, and rich cultural heritage, Nepal stands as an exceptionally beautiful country. Governed by a secular-federal parliamentary republic as enshrined in its constitution, Nepal is administratively divided into seven provinces. The nation embraces a multitude of mother languages and a diverse range of ethnic groups, including Chhetri, Magar, Bahun, Newar, Tamang, Tharu, Gurung, and Thakuri, among others. Demonstrating progress in its academic standards, economic development, educational opportunities, and thriving tourism sector, Nepal presents itself as an attractive destination not only for travel but also for pursuing higher education at a relatively affordable cost structure.",
            ],
            academic: [
              "The infrastructure of National Medical College is meticulously designed to meet international curriculum standards, offering top-tier facilities across a wide spectrum of medical specialties including internal medicine, cardiology, nephrology, general surgery, neurosurgery, orthopedics, trauma, obstetrics, gastroenterology, dermatology, psychiatry, radiology, and dentistry. Complementing its diverse multi-professional courses, the college hosts international events and conferences to provide invaluable real-world experience in various fields.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743143270/nepal_mbbs_university_nmc_14_academic_yzi45q.jpg",
            faculties: [
              "Faculty of Anatomy",
              "Faculty of Physiology",
              "Faculty of Pathology",
              "Faculty of Forensic Medicine",
              "Faculty of Clinical Sciences",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Tribhuvan University",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Janaki Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743144471/nepal_mbbs_university_janaki_15_pic_hlbupr.jpg",
            slug: "janaki-medical-college",
            country: "nepal",
            overview: [
              "Janaki Medical College, a private institution and a leading medical school in Nepal, was established in December 1999 by a collective of social and educational entrepreneurs with significant local support, quickly establishing itself as a prominent medical college. Remarkably, within its first year of operation, the college achieved the capacity to enroll 100 students annually. JMC operates two hospitals, one located in Ramdaiya with a 160-bed capacity and another situated in the town center offering 365 beds. The college campus in Ramdaiya, encompassing hostel buildings, the hospital, and administrative blocks, spans approximately 6.41 acres of land, providing a comprehensive environment for medical education and patient care.",
            ],
            academic: [
              "Janaki Medical College (JMC), located in Janakpur, Nepal, delivers a comprehensive 5.5-year MBBS program featuring an integrated curriculum across medical sciences, which includes a compulsory one-year internship, and further extends educational opportunities through postgraduate programs such as MD and MS.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743144486/nepal_mbbs_university_janaki_15_academic_v9xgyx.jpg",
            faculties: [
              "Faculty of Anatomy",
              "Faculty of Physiology",
              "Faculty of Pathology",
              "Faculty of Biochemistry",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Tribhuvan University",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Kist Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743147587/nepal_mbbs_university_kist_16_a7brvm.webp",
            slug: "kist-medical-college",
            country: "nepal",
            overview: [
              "Established in 2006 AD (BS 2062) and affiliated with the Institute of Medicine, Tribhuvan University, KIST Medical College Pvt. Ltd. is situated in Mahalaxmi Municipality-1, Imadol, Lalitpur, and is governed by its Board of Directors and Executive Committee, boasting its own fully operational 300-bed teaching hospital along with a distinct dental hospital to provide comprehensive medical and dental education and healthcare services. ",
            ],
            academic: [
              "KIST Medical College delivers a comprehensive range of medical education, encompassing undergraduate programs such as MBBS, BDS, Bachelor of Pharmacy, and B.Sc. MLT, alongside postgraduate programs including MD, MS, and MPH, all with a strong emphasis on ensuring high-quality education and fostering research endeavors within the medical field.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743147600/nepal_mbbs_university_kist_16_academic_ywpecj.jpg",
            faculties: [
              "Faculty of Anatomy",
              "Faculty of Periodontics",
              "Faculty of Pathology",
              "Faculty of Public Health Dentistry",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Tribhuvan University",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Gandaki Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743146900/nepal_mbbs_university_gandaki_17_iyeruj.jpg",
            slug: "gandaki-medical-college",
            country: "nepal",
            overview: [
              "Gandaki Medical College Teaching Hospital and Research Centre (P) Ltd. (GMC), a health education institution situated in the Kaski district of Nepal, addresses a national priority sector as a medical college and teaching hospital, established entirely on its own land under purely Nepalese ownership. GMC possesses approximately 204 ropanis of land, fulfilling the necessary requirements set forth by its affiliating university and the relevant professional council. The development of its infrastructure adheres strictly to the Guidelines and Infrastructure Directions for Establishment and Operation of Private and Non-Government Health Institutions, 2070 as issued by the Ministry of Health and Population of the Government of Nepal, ensuring compliance with national standards for health education facilities.",
            ],
            academic: [
              "Gandaki Medical College (GMC) provides a diverse selection of academic programs, encompassing MBBS, BDS, BSc Nursing, BNS, BSc MIT, BPH, and BPharma at the undergraduate level, as well as various postgraduate courses offered through the Tribhuvan University-Institute of Medicine (TU-IOM).",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743146905/nepal_mbbs_university_gandaki_17_academic_pdp9rr.jpg",
            faculties: [
              "Faculty of Anatomy",
              "Faculty of Physiology",
              "Faculty of Pathology",
              "Faculty of Biochemistry",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with Tribhuvan University",
              "NMC",
              "WHO",
            ],
          },
        ],

        eligibilityPoints: [
          {
            title: "Education",
            description: "Passed 12th grade with PCB and English",
          },
          {
            title: "Age Requirement",
            description:
              "You must be at least 17 years old and not more than 25 years old when you apply",
          },
          {
            title: "Subjects",
            description:
              "Physics, Chemistry, and Biology (PCB) as core subjects in 10+2 or equivalent.",
          },
          {
            title: "NEET",
            description:
              "NEET (for Indian students) and the medical university's entrance exam in Nepal .You must have scored at least 50% in Physics, Chemistry, and Biology in 10+2 ",
          },
        ],
        mbbsBenefits: [
          {
            title: "English Medium Instruction",
            description:
              "Most medical colleges in the country offer instruction entirely in English.",
          },
          {
            title: "Globally Recognized Degree",
            description:
              "Medical colleges in Nepal are recognized by the World Health Organization (WHO) and the National Medical Commission (NMC), ensuring the validity of the degree worldwide.",
          },
          {
            title: "No Entrance Exams",
            description:
              "Unlike in India where a separate entrance exam like NEET is mandatory, many Nepalese medical colleges accept students based on their NEET score, eliminating the need for another entrance test.",
          },
          {
            title: "Quality Medical Education",
            description:
              "Nepali medical colleges offer a standard curriculum recognized by the NMC, ensuring the degree is globally accepted.",
          },

          {
            title: "Clinical Exposure",
            description:
              "Many programs in Nepal incorporate early clinical exposure in the curriculum, allowing students to apply theoretical knowledge in a practical setting from the beginning. ",
          },
        ],
        advantages: [
          "Quality Education",
          "No Visa Required (for Indian Students)",
          "Clinical Exposure",
          "Cultural Similarity",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742372074/Mbbs_in_nepal_university_pic_bufmuf.jpg",
      },

      //poland

      {
        country: "Poland",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374876/poland_logo_rajiqp.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374886/Poland_mbbs_in_abroad_hero_nwsgyx.jpg",
        overviewText:
          "Poland offers a fantastic opportunity for international students who dream of becoming doctors. You can get a world-class medical education at a reasonable cost while studying in a beautiful European country. The best part? Polish medical degrees are highly respected throughout the European Union, opening doors for you to work and practice medicine across the continent after graduation.Most Polish universities offer English-taught programs, making it easy for students from all over the world to understand and succeed. The program typically lasts six years, combining five years of in-depth learning with a critical year of hands-on training in hospitals. This well-rounded approach ensures you graduate with the knowledge and practical skills needed to excel in the medical field.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374897/Poland_mbbs_in_abroad_overview_wa1nhg.jpg",
        quickFacts: [
          "Warsaw",
          "50%",
          "Polish Zloty (PLN)",
          "Approx. 3.67 crores",
        ],
        univeristes: [
          {
            name: "University of Warmia and Mazury",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743403182/poland_university_1_University_of_Warmia_wugemh.jpg",
            slug: "university-of-warmia-and-mazury",
            country: "poland",
            overview: [
              "Established in September 1999, the University of Warmia and Mazury stands as a comprehensive medical and multi-specialty institution that has demonstrated a promising success rate over its two decades of teaching, with its alumni developing into accomplished individuals, reflecting the university's effectiveness. Consequently, the University of Warmia and Mazury is recognized for its high enrollment figures, currently educating approximately 25,000 students. Formed through the amalgamation of three prominent Polish institutes – the higher school of pedagogy and the Warmian theological institutes – the university offers both bachelor's and master's degrees across a wide spectrum of disciplines, including human and animal medical sciences. Specifically, the University of Warmia and Mazury provides bachelor's and doctoral degrees in 15 distinct specializations and postgraduate degrees in 6 branches of medicine, with its primary areas of expertise lying in the fields of medicine, cartography, and veterinary sciences.",
            ],
            academic: [
              "The University of Warmia and Mazury in Olsztyn (UWM) provides a comprehensive selection of undergraduate and postgraduate programs encompassing medicine, veterinary medicine, engineering, information technology, and social sciences, with a particular emphasis on disciplines of regional significance, such as food technology and environmental protection.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743159347/poland_university_1_University_of_Warmia_academic_pic_jifxr4.jpg",
            faculties: [
              "Faculty of Animal Anatomy",
              "Faculty of Human Physiology",
              "Faculty of Biochemistry",
              "Faculty of Veterinary Medicine",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "Affiliated with AIESEC",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Nicolaus Copernicus University",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743161652/poland_university_2_Nicolaus_pic_skv5vz.jpg",
            slug: "nicolaus-copernicus-university",
            country: "poland",
            overview: [
              "Established in 1945, Nicolaus Copernicus University holds the distinction of being the inaugural higher education institution in the city of Torun and one of the pioneering universities in Northern Poland, offering a comprehensive spectrum of educational programs spanning shorter university-level qualifications, First Main University Level Final Qualifications, Advanced Postgraduate Study, Doctorate degrees, and Higher Post Doctorate qualifications. Currently, Nicolaus Copernicus University provides graduate and postgraduate programs in more than 100 diverse fields of study organized within its 15 faculties, and its established internationalization policy has attracted a significant number of foreign students, who constitute 1% of the total student population of 30,000, all of whom are guided by a dedicated team of 2100 highly skilled academic staff members across the various faculties.",
            ],
            academic: [
              "Nicolaus Copernicus University (NCU) in Toruń provides a comprehensive array of academic programs spanning Bachelor's, Master's, and Doctoral degrees across more than 100 diverse fields of study, with the added accessibility of select programs being offered in the English language.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743161660/poland_university_2_Nicolaus_academic_pic_r1vuze.jpg",
            faculties: [
              "Faculty of Biology",
              "Faculty of Human Physiology",
              "Faculty of Biochemistry",
              "Faculty of Veterinary Medicine",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: ["MCI", "NCU", "NMC", "WHO"],
          },

          {
            name: "Poznan University of Medical Science",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743163325/poland_university_3_Poznan_pic_qxmvve.jpg",
            slug: "poznan-university-of-medical-science",
            country: "poland",
            overview: [
              "Poland stands out as a distinguished nation, celebrated for its scenic landscapes and its significant contributions to the global economy, and in recent times, it has become an increasingly popular destination for students seeking to pursue their MBBS degrees abroad. Boasting a strong and well-established education system coupled with state-of-the-art infrastructure, Poland is rapidly emerging as a compelling choice for international medical students. The leading medical universities in Poland hold recognition from major international healthcare organizations, with a majority of institutions adhering to stringent international healthcare standards. As an integral part of Europe, Poland's educational framework aligns with European standards, ensuring that students studying MBBS in the country also benefit from a high European standard of living. For those considering this academic journey, exploring the specific offerings of institutions such as Poznan University of Medical Sciences can provide valuable insights into the opportunities available for medical education in Poland.",
            ],
            academic: [
              "Poznan University of Medical Sciences actively engages in research, international programs, research projects, and scientific conferences through its student exchange initiatives, ensuring its teaching methodologies are updated annually to reflect the latest advancements in medical technology. Notably, it was the pioneering university in Poland to offer an MBBS program taught entirely in English. Furthermore, the university maintains strong working relationships with over six clinical hospitals to provide invaluable practical experience to its students and collaborates extensively with numerous international universities spanning France, China, Germany, Japan, the USA, and other countries, fostering a global perspective in medical education and research.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743163319/poland_university_3_Poznan_academic_pic_pnlxiv.jpg",
            faculties: [
              "Faculty of Medicine",
              "Faculty of Pharmacy",
              "Faculty of Biochemistry",
              "Faculty of Health Sciences",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "MCI",
              "US Department of Education",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Jagiellonian University Medical College",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743399833/poland_university_4_pic_embowt.jpg",
            slug: "jagiellonian-university-medical-college",
            country: "poland",
            overview: [
              "Jagiellonian University Medical College holds a distinguished position as an integral part of Jagiellonian University, which stands as the oldest institution of higher education in Poland and ranks among the most ancient universities in Europe, having been established on May 12, 1364, by the Polish King Casimir the Great. From its very foundation, the university has embraced an international character, fostering a tradition of welcoming scholars and students from across the globe. With an acceptance rate of 53%, Jagiellonian University is considered a moderately selective institution that receives a significant number of applications each year.",
            ],
            academic: [
              "Jagiellonian University Medical College, situated in Kraków, provides a comprehensive educational experience with its six-year, full-time Medical Doctor (MD) program taught entirely in English and designed to meet rigorous European teaching standards, alongside a five-year Doctor of Dental Surgery (DDS) program, as well as a variety of other programs within the broader spectrum of health-related disciplines.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743399842/poland_university_4_academic_pic_h1lpvg.jpg",
            faculties: [
              "Faculty of Pharmacy",
              "Faculty of Health Sciences",
              "Faculty of Biochemistry",
              "Faculty of Medicine",
              "Faculty of Pharmacology",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "Ministry of Science and Higher Education, Poland",
              "European Economic Union",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Medical University of Silesia",
            image:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743399355/poland_university_5_pic_qxs4mq.jpg",
            slug: "medical-university-of-silesia",
            country: "poland",
            overview: [
              "Founded in 1948, the Medical University of Silesia traces its origins back to 1948, when it was founded as the Medical Academy in Rokitnica Bytomska. Initially comprising a single school encompassing medicine and dentistry, the university rapidly developed its capacity to deliver a comprehensive educational experience through the establishment of numerous clinical and theoretical units within its first five years. A pivotal decision in the latter half of the 1950s led to the planned creation of the University's Campus in Katowice, a vision that was successfully realized in 1971 with the relocation of the Medical University of Silesia's headquarters to Katowice, marking its emergence as the largest medical school in Poland. This period of growth saw the opening of three new schools: the School of Pharmacy with the Unit of Medical Analytics, a second School of Medicine, and the School of Nursery (which was later integrated into the second School of Medicine).",
            ],
            academic: [
              "Annually, the Medical University of Silesia further enriches its academic offerings with a wide array of 70 distinct programs and 240 specialized tracks, meticulously designed to prepare students with the necessary skills and knowledge to effectively address the evolving challenges within society and the contemporary labor market, all while fostering a stimulating learning environment conducive to the realization of their academic aspirations each year.",
            ],
            academicImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743399361/poland_university_5_academic_pic_ucryox.jpg",
            faculties: [
              "Faculty of Medical Sciences",
              "Faculty of Public Health",
              "Faculty of Biochemistry",
              "Faculty of Pharmaceutical",
              "Faculty of Pharmacy",
            ],
            facultyImg:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition: [
              "ECFMG",
              "European Economic Union",
              "NMC",
              "WHO",
            ],
          },

          {
            name: "Medical University of Bialystok",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193077/Poland_university_12_Bialystok_xpoyet.jpg",
            slug: "medical-university-of-bialystok",
            country : "poland",
            overview : ["Established in 1950 and situated in Bialystok, Poland's tenth-largest city renowned for being one of Europe's greenest and safest, the University of Medicine in Bialystok (UMB) stands as a modern and rapidly expanding public institution dedicated to delivering medical education of the highest standards and conducting advanced scientific research on a global scale; actively addressing healthcare needs both in Poland and internationally, UMB implements innovative solutions through collaborations with healthcare providers worldwide, with its Faculty of Medicine encompassing a wide range of activities including teaching, research, diagnostics, and patient treatment across its extensive network of 70 organisational units, which includes 26 departments, 40 clinics, 2 specialised teaching hospitals, 2 comprehensive study centres, a library, and 2 high-tech independent laboratories."],
            academic : ["Annually, the Medical University of Silesia further enriches its academic offerings with a wide array of 70 distinct programs and 240 specialized tracks, meticulously designed to prepare students with the necessary skills and knowledge to effectively address the evolving challenges within society and the contemporary labor market, all while fostering a stimulating learning environment conducive to the realization of their academic aspirations each year."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193088/Poland_university_12_Bialystok_academic_cdivli.jpg",
            faculties : [
                "Faculty of Anatomy",
                "Faculty of Biochemistry",
                "Faculty of Pathomorphology",
                "Faculty of Molecular Biology",
                "Faculty of Internal Medicine",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["ECFMG","PKA","NMC","WHO"],
        },

          {
            name: "Medical University of Lodz",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193106/Poland_university_11_Lodz_lb1ovv.jpg",
            slug: "medical-university-of-lodz",
            country : "poland",
            overview : ["Established in early October 2002 through the significant amalgamation of the esteemed Medical Academy and the distinguished Military Medical Academy of Lodz, institutions with their own rich histories dating back to 1950 and 1958 respectively, the Medical University of Lodz (MUL) has since solidified its position as one of Poland's premier medical universities and currently holds the distinction of being the largest public medical school in the nation, a testament to its comprehensive educational offerings and extensive infrastructure; the university takes pride in its long-standing tradition of providing high-quality medicine and dentistry programs delivered in English, initiatives that were thoughtfully introduced more than two decades ago and have since attracted a vibrant and diverse community of over 800 international students hailing from over 70 countries across the world, creating a truly global learning environment that fosters intercultural exchange and broadens perspectives; this dedication to international education has resulted in a substantial alumni network of over 1,200 successful doctors and dentists who have not only excelled in a wide spectrum of medical fields but have also made significant contributions to healthcare systems in numerous countries worldwide, underscoring the university's enduring."],
            academic : ["The Medical University of Lodz provides a comprehensive range of English-language programs, including a preparatory pre-medicine course, a rigorous 6-year Doctor of Medicine (MD) program, and a comprehensive 5-year Doctor of Dental Medicine (DMD) course, all meticulously designed to meet the highest global standards of medical education, ensuring that upon graduation, students receive an internationally recognized diploma that qualifies them to practice medicine in numerous countries worldwide; to facilitate this high-quality education, the university boasts modern lecture halls, cutting-edge laboratories, and specialized simulation centers, complemented by its ownership of three distinct teaching hospitals and one of the most extensive dental medical education centers in all of Europe, providing students with unparalleled resources and practical training opportunities across various medical and dental disciplines."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193110/Poland_university_11_Lodz_academic_afepzb.jpg",
            faculties : [
                "Faculty of Medical",
                "Faculty of Anatomy",
                "Faculty of Biochemistry",
                "Faculty of Dentistry",
                "Faculty of Pharmacy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["ECFMG","IMED","NMC","WHO"],
        },

          {
            name: "Medical University of Warsaw",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193353/Poland_university_10_Warsaw_bkaodr.jpg",
            slug: "medical-university-of-warsaw",
            country : "poland",
            overview : ["The Medical University of Warsaw, also known as Warsaw Medical University, holds a distinguished position as one of Poland's oldest and most prestigious medical institutions, tracing its establishment back to 1816 and boasting two centuries of profound experience and excellence in medical education; the university offers a comprehensive spectrum of both graduate and postgraduate programs across diverse medical fields, encompassing a total of 18 specialized programs, each meticulously overseen by expert faculty holding doctoral degrees in their respective disciplines; committed to fostering a dynamic learning environment, the Warsaw Medical University actively promotes the integration of modern teaching methodologies and practical skill development to empower its students; furthermore, the university's infrastructure includes six affiliated hospitals that function as integral educational units, providing students with invaluable hands-on experience alongside theoretical instruction."],
            academic : ["The Medical University of Warsaw offers a standard six-year Doctor of Medicine (MD) program designed for high school graduates, which notably provides students with the opportunity to undertake the USMLE Part 1 examination in their third year and USMLE Part 2 in their final year; recognizing the demand for English-language medical education in Europe, the university established the English Division of the Second Faculty of Medicine in 1993, although it does not offer graduate entry pathways but does facilitate university transfers; to further support its international student body, the Medical University of Warsaw provides a dedicated preparation course conducted in English; in addition to its medical programs, the university also offers a comprehensive full-time five-year Pharmacy Programme."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193357/Poland_university_10_Warsaw_academic_mmwlrr.jpg",
            faculties : [
                "Faculty of Medical",
                "Faculty of Dentistry",
                "Faculty of Biochemistry",
                "Faculty of Pediatrics",
                "Faculty of Pharmacy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["ECFMG","AMEE","NMC","WHO"],
        },

          {
            name: "Pomeranian Medical University in Szczecin",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193405/Poland_university_9_Pomeranian_jkhfxk.jpg",
            slug: "pomeranian-medical-university-in-szczecin",
            country : "poland",
            overview : ["Established in 1948 in Szczecin, Poland, the Pomeranian Medical University (PMU) comprises four faculties dedicated to medicine and health sciences, with its Medical Faculty originating in 1996 and the Faculty of Dentistry commencing operations a decade later; situated in Northwestern Poland, Szczecin, the country's seventh-largest city, lies near the Baltic Sea and the shores of Dabie Lake, boasting a rich history dating back to the 8th century and offering opportunities to explore numerous castles and museums; annually, PMU welcomes 150 new international students to its English-language medical programs, which the university has been delivering for over two decades, making it one of the earliest institutions in Poland to recognize the growing international."],
            academic : ["Since 1996 at the Faculty of Medicine and 2006 at the Faculty of Dentistry, Pomeranian Medical University (PMU) has been providing comprehensive studies in the English language, and currently, the university in Szczecin proudly hosts over 600 students enrolled in its English Program across both faculties, with a significant number, exceeding 250 individuals, having already achieved successful graduation from their respective fields of study, embarking on their professional careers with a strong academic foundation and the skills necessary to excel in the global healthcare landscape, a testament to the university's long-standing commitment to international medical education and the success of its graduates."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193437/Poland_university_9_Pomeranian_academic_x89bv1.webp",
            faculties : [
                "Faculty of Medical",
                "Faculty of Dentistry",
                "Faculty of Biochemistry",
                "Faculty of Anatomy",
                "Faculty of Pharmacy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["ECFMG","PKA","NMC","WHO"],
        },

          {
            name: "Andrzej Frycz Modrzewski Krakow University",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193476/Poland_university_8_Andrzej_pic_wsibkv.jpg",
            slug: "andrzej-frycz-modrzewski-krakow-university",
            country : "poland",
            overview : ["Established in 2000 in Krakow, Poland, Andrzej Frycz Modrzewski Krakow University (AFMKU) has rapidly grown into one of Poland's premier private universities, boasting seven faculties and a student body exceeding 8,000, earning it a consistent ranking among the top five universities in Poland; the city of Krakow, with its rich 14-century history, presents an exceptional environment for medical studies and a captivating destination for tourists, enchanting visitors with its historic old town and profound heritage, while its appeal extends beyond its stunning streets and architecture, encompassing a thriving academic community, a vibrant cultural scene with numerous festivals and events, a welcoming atmosphere for international students, and a strategic location within Europe that facilitates travel and exploration, all contributing to a well-rounded and enriching experience for those who choose to study there."],
            academic : ["AFMKU currently offers a medicine program in English for international students, with the first year focusing on human body systems to build medical knowledge and prepare for patient interactions; the program includes significant practical training, with bedside and lab work; four-week summer clerkships occur until the fifth year, followed by a 30-week final year of practical clinical rotations at AFMKU-selected training centers, where acquired skills are assessed."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193568/Poland_university_8_Andrzej_academic_mnzlzg.jpg",
            faculties : [
                "Faculty of Medical",
                "Faculty of Public Health",
                "Faculty of Biochemistry",
                "Faculty of Dentistry",
                "Faculty of Pharmacy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["ECFMG","AFMKU","NMC","WHO"],
        },

        {
            name: "Medical University of Lublin",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193623/Poland_university_7_lublin_kbugcs.jpg",
            slug: "medical-university-of-lublin",
            country : "poland",
            overview : ["Established in 1944 and located in the vibrant city of Lublin, the Medical University of Lublin stands as a prominent public higher education institution, drawing numerous aspiring medical students each year seeking to pursue their studies in Europe; Lublin, recognized as the cultural and industrial heart of Southeastern Poland and home to over 350,000 residents, boasts a significant student population exceeding 100,000 across its four Polish universities, earning it a well-deserved reputation as a dynamic student city where approximately 30% of the inhabitants are engaged in higher education; enhancing the practical learning experience, the university collaborates with four clinical teaching hospitals, providing students with invaluable opportunities for hands-on practice and learning directly from real-world medical scenarios, further supported by a comprehensive university library that houses an extensive collection of medical literature, ensuring students have access to all the resources necessary for their academic journey."],
            academic : ["At present, the Medical University of Lublin provides dentistry and medicine courses conducted entirely in English, incorporating a comprehensive learning experience through lectures combined with practical training in hospital settings, advanced laboratories, and simulation centers; additionally, recognizing the diverse academic backgrounds of prospective students, the university offers a foundational pre-medical year designed to strengthen knowledge in basic science subjects like biology and chemistry, thereby better preparing individuals for the rigors of the medical curriculum; while the Medical University of Lublin does not currently offer graduate entry pathways into its medical or dental programs, it does welcome transfer students."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193632/Poland_university_7_lublin_academic_ohp7yf.jpg",
            faculties : [
                "Faculty of Medical",
                "Faculty of Anatomy",
                "Faculty of Biochemistry",
                "Faculty of Dentistry",
                "Faculty of Pharmacy",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["MCI","FAIMER","NMC","WHO"],
        },

          
             {
            name: "Medical University of Gdańsk",
            image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193657/Poland_university_6_Gda%C5%84sk_pic_cfocwk.jpg",
            slug: "medical-university-of-gdask",
            country : "poland",
            overview : ["Established in 1945 and situated in the historic northern Polish city of Gdansk, which with a population exceeding 470,000 was once considered Poland's healthiest and largest city and boasts a rich and complex history influenced by Polish, Prussian, and German rule, the Medical University of Gdansk (MUG) stands as Poland's first medical school and consistently ranks among the top ten universities in the nation, currently educating over 6,000 students, a significant 15% of whom are international students drawn to pursue their medical studies abroad in this vibrant city that offers a wealth of cultural attractions including universities, museums, theatres, and the centuries-old St. Dominic's Fair, ensuring a stimulating and engaging environment for its residents; furthermore, MUG prides itself on its state-of-the-art Invasive Medicine Centre and Non-Invasive Medicine Centre within its university hospital, recognized as some of the most modern and extensive facilities in Europe, reflecting the university's ongoing commitment to expansion and continuous improvement in its infrastructure and resources."],
            academic : ["The Medical University of Gdansk provides a comprehensive suite of English-language academic programs encompassing a six-year Doctor of Medicine (M.D.) Programme, a five-and-a-half-year Master in Pharmacy Programme, a three-year Bachelor of Nursing Programme, a two-year International Master in Sustainable Drug Discovery (S-DISCO), a four-year Doctoral School spanning Medicine, Pharmacy, and Health Sciences, and a one-year Premedical Programme designed to prepare students for entry into its medical and health-related degree courses."],
            academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744193671/Poland_university_6_Gda%C5%84sk_academic_rvor43.jpg",
            faculties : [
                "Faculty of Medical",
                "Faculty of Anatomy",
                "Faculty of Pathophysiology",
                "Faculty of Dentistry",
                "Faculty of Public Health",
            ],
            facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
            affilationRecognition : ["MCI","WFME","NMC","WHO"],
        },
        ],

        eligibilityPoints: [
          {
            title: "Education",
            description:
              "You must have completed 10+2 from a recognized board of education.",
          },
          {
            title: "Age Requirement",
            description:
              "You must be at least 17 years old and not more than 25 years old when you apply ",
          },
          {
            title: "Subjects",
            description:
              "You must have studied Physics, Chemistry, and Biology in 10+2",
          },
          {
            title: "NEET & Score",
            description:
              "Indian students must qualify for the NEET exam.You must have scored at least 60% in Physics, Chemistry, and Biology in 10+2.",
          },
        ],
        mbbsBenefits: [
          {
            title: "English Medium Instruction",
            description:
              "Most medical universities in Poland offer MBBS programs entirely in English, eliminating language barriers for international students. ",
          },
          {
            title: "Globally Recognized Degree",
            description:
              "Medical degrees from Polish universities are recognized by the World Health Organization (WHO) and are accepted in many countries worldwide, including India.",
          },
          {
            title: "No Entrance Exams",
            description:
              "Many Polish medical universities do not require additional entrance exams beyond the 12th grade results, simplifying the admission process.",
          },
          {
            title: "Quality Medical Education",
            description:
              "Polish medical universities are known for their high academic standards, experienced faculty, and modern facilities, ensuring a robust medical curriculum.",
          },

          {
            title: "European Exposure",
            description:
              "Studying in Poland provides students with the opportunity to live and experience European culture, with easy access to travel across the continent.",
          },
        ],
        advantages: [
          "Quality Education",
          "No Entrance Exams",
          "Post-Graduation Opportunities",
          "International Recognition",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374907/Poland_mbbs_in_abroad_advantage_pic_o6ywsg.jpg",
      },

      //Dubai

      {
        country: "Dubai",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375108/dubai_logo_eey2a7.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375136/Dubai_mbbs_in_abroad_hero_uarhjb.jpg",
        overviewText:
          "Dubai has become a highly popular destination for international students pursuing MBBS degrees. Several factors contribute to its attractiveness. Dubai boasts world-class medical universities with modern facilities and experienced faculty. These institutions offer a rigorous and comprehensive medical education, preparing students with the knowledge and skills necessary to excel in the field.Dubai's multicultural environment provides a unique and enriching learning experience. Students from diverse backgrounds interact, fostering a global perspective and enhancing their understanding of different cultures and healthcare systems. This exposure to diverse viewpoints is invaluable in preparing future doctors to serve a globalized world.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375143/Dubai_mbbs_in_abroad_overview_elcbwa.webp",
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
            description:
              "You must have passed 12th grade with Physics, Chemistry, and Biology as core subjects.",
          },
          {
            title: "Minimum marks",
            description: "You must have scored at least 70% in the PCB group.",
          },
          {
            title: "Minimum marks",
            description: "You may need to take NEET or other entrance exams.",
          },
          {
            title: "Medical fitness",
            description:
              "You must be medically fit and obtain a medical certificate.",
          },
        ],
        mbbsBenefits: [
          {
            title: "Advanced Infrastructure and Facilities",
            description:
              "Dubai boasts modern medical facilities and technology, providing students with access to cutting-edge equipment and practices.",
          },
          {
            title: "Experienced Faculty",
            description:
              "Medical colleges in Dubai have experienced and qualified faculty with extensive clinical expertise.",
          },
          {
            title: "Diverse Clinical Exposure",
            description:
              "A multicultural patient population allows for exposure to a wide range of medical conditions and practices.",
          },
          {
            title: "High-Quality Healthcare System",
            description:
              "Studying in Dubai provides access to a well-developed healthcare system with opportunities for internships and clinical rotations in reputable hospitals.",
          },
        ],
        advantages: [
          "High Quality Education",
          "Advanced Medical Facilities",
          "Cultural Diversity",
          "Globally Recognized Degree",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375121/mbbs_dubai_byahai.jpg",
      },

      //Ukraine

      {
        country: "Ukraine",
        flag_link:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375712/Ukrain_logo_tpapan.png",
        mainImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375722/mbbs_in_ukraine_hero_niiwwe.jpg",
        overviewText:
          "MBBS in Ukraine has become an attractive option for Indian students seeking quality medical education abroad. Ukrainian medical universities are recognized by global organizations such as the World Health Organization (WHO) and the National Medical Commission (NMC) of India, ensuring that graduates are qualified to practice medicine internationally. Ukraine is home to several top-ranking medical universities that attract international students.Choosing to pursue MBBS in Ukraine offers Indian students a combination of quality education, global recognition, affordability, and a supportive learning environment. These factors make Ukraine a compelling destination for medical aspirants aiming to build a successful career in medicine.",
        overviewImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375727/mbbs_in_ukraine_overview_l4lphr.jpg",
        quickFacts: ["Kyiv", "30%", "Hryvnia", "Approx. 3.7 crores"],
        univeristes: [
                    {
                        name: "Danylo Halytsky Lviv National Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743590144/Ukraine_university_1_Danyalo_qe6cr2.webp",
                        slug: "danylo-halytsky-lviv-national-medical-university",
                        country : "ukraine",
                        overview : ["Established in 1784 and also known as Danylo Halytsky Lviv National Medical University, LNMU stands as one of Ukraine's oldest universities, attracting students globally, including those from India and neighboring nations, and holding approvals from the National Medical Commission, WHO, and the central government of Ukraine; formerly recognized as the Lviv State Medical Institute, and prior to that as the Faculty of Medicine of the John Casimir University and the Faculty of Medicine of the Francis I University, Danylo Halytsky Lviv National Medical University traces its origins back to the Medical Faculty of Lviv University, inaugurated on November 16, 1784, under the privilege granted by Austrian Emperor Josef II, and the medical school bears the name of King Daniel of Galicia, the historical founder of the city in 1256 AD, with the university commemorating its 225th anniversary in 2009."],
                        academic : ["Danylo Halytsky Lviv National Medical University provides a comprehensive 6-year MBBS program, equivalent to an MD degree, which includes a mandatory one-year internship and encompasses a wide spectrum of medical disciplines, alongside offering opportunities for postgraduate specialization in areas such as Emergency Medicine and Clinical Oncology."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743590153/Ukraine_university_1_Danyalo_academic_pic_sxx5qa.webp",
                        faculties : [
                            "Faculty of Preventive Health",
                            "Faculty of General Medicine",
                            "Faculty of Nursing",
                            "Faculty of Pharmacy",
                            "Faculty of Dentistry",
                            "Faculty of Postgraduate Education",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","FAIMER"],
                    },
                
                     {
                        name: "Ternopil National Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743591441/Ukraine_university_2_Ternopil_s8tdte.webp",
                        slug: "ternopil-national-medical-university",
                        country : "ukraine",
                        overview : ["The commencement of training at Ternopil State Medical Institute was officially marked on September 1, 1957, following the Ukrainian government's decree of April 12, 1957, establishing it as the first institution of higher education in a city heavily devastated by World War II and in the initial stages of reconstruction; just three days after the governmental decision, the appointed Director (Rector) of the Medical Institute, Candidate of Medical Sciences and surgeon P.O. Ogiy (who later became an M.D. and Professor), along with Vice-Rector Professor Martynyuk A.H., arrived in Ternopil, and through a decision by the Regional Council, the Institute was allocated two academic buildings and two dormitories, with the City Hospital, then serving as the Regional Hospital, providing the initial clinical facilities, while a morphological building, the Regional Hospital itself, and a new dormitory were under construction, allowing 19 departments to begin operations with a faculty of 66 teachers, including 1 Doctor of Medical Sciences and 17 Candidates of Medical Sciences."],
                        academic : ["Ternopil National Medical University (TNMU) provides a comprehensive spectrum of medical and health-related programs at both undergraduate and postgraduate levels, encompassing Medicine (MD/MBBS), Dentistry, Pharmacy, and Nursing, alongside offering a diverse array of postgraduate courses across various medical specialties and international study programs."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743591448/Ukraine_university_2_Ternopil_academic_cddw4z.webp",
                        faculties : [
                            "Faculty of Preventive Health",
                            "Faculty of General Medicine",
                            "Faculty of Nursing",
                            "Faculty of Pharmacy",
                            "Faculty of Dentistry",
                            "Faculty of Postgraduate Education",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","WFME"],
                    },
                 
                          {
                        name: "O.O Bogomolets National Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743593695/Ukraine_university_3_O.O_pic_kgvv94.jpg",
                        slug: "oo-bogomolets-national-medical-university",
                        country : "ukraine",
                        overview : ["Established in 1841, Bogomolets National Medical University has evolved into a leading medical institution in Ukraine, offering specialized training in healthcare at both undergraduate and postgraduate levels, with its historical roots tracing back to the oldest faculty of Vilnius Academy in 1579 and later the Imperial University of Vilnius in 1803, before its official founding in 1841 with the opening of the medical faculty at Imperial St. Volodymyr University in Kyiv, subsequently gaining the status of Kyiv Medical Institute in 1921; in 1946, the Institute was named after the President of the Academy of Sciences of the UkrSSR, O.O. Bogomolets, and in 1995, it achieved the status of Bogomolets National Medical University, which offers comparatively reasonable tuition fees relative to other Asian countries and has experienced economic growth in recent years, facilitating enhancements to its academic and research processes in line with European standards, as reflected in its national ranking of 8th and a world ranking of 6331, making it a significant choice for prospective students."],
                        academic : ["O.O. Bogomolets National Medical University, also referred to as Kyiv National Medical University, provides a comprehensive 6-year MBBS (MD) program taught in English, which holds recognition from prominent international organizations including the MCI, WHO, and ECFMG, with a strong emphasis on delivering practical healthcare training to its students."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743593700/Ukraine_university_3_O.O_academic_mvckwl.jpg",
                        faculties : [
                            "Faculty of Pharmaceutical",
                            "Faculty of General Medicine",
                            "Faculty of Stomatological",
                            "Faculty of Pharmacy",
                            "Faculty of Dentistry",
                            "Faculty of Postgraduate Education",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","FAIMER"],
                    },            
                    
                        {
                        name: "Vinnytsia National Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743594660/Ukraine_university_4_Vinnytsia_gn4lzo.webp",
                        slug: "vinnytsia-national-medical-university",
                        country : "ukraine",
                        overview : ["Established in 1921, the educational institution that would become National Pirogov Memorial Medical University, Vinnytsya was named after M.I. Pirogov in 1960 and further honored with the Order of Honor in 1984; subsequently, in 1994, the Vinnytsia Medical Institute underwent certification and accreditation at the IV level, granting it university status, and in 2002, it achieved national university status, receiving diplomas from both the Cabinet of Ministers of Ukraine and the Verkhovna Rada of Ukraine in the same year. Currently, the university provides specialized training across 53 departments, staffed by a highly qualified scientific and pedagogical team that includes an academician of the National Academy of Medical Sciences, 5 academicians and 5 corresponding members of Academies of Science, 120 doctors of science and professors, and 554 candidates of science and associate professors."],
                        academic : ["Vinnitsa National Medical University holds a prominent position among the National Medical Commission-approved universities in Ukraine and is also listed as a recognized medical institute by both the World Health Organization and the National Medical Commission, evidenced by its global ranking of 3683 and its national ranking of 12th within Ukraine."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743594664/Ukraine_university_4_Vinnytsia_academic_yccw03.webp",
                        faculties : [
                            "Faculty of Pharmaceutical",
                            "Faculty of General Medicine",
                            "Faculty of Stomatological",
                            "Faculty of Pharmacy",
                            "Faculty of Dentistry",
                            "Faculty of Postgraduate Education",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","FAIMER"],
                    },   

                         {
                        name: "Sumy State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743662521/Ukraine_university_5_sumy_state_b6lcpd.jpg",
                        slug: "sumy-state-medical-university",
                        country : "ukraine",
                        overview : ["Located in the city of Sumy in northeastern Ukraine, Sumy State Medical University traces its origins back to 1948 and has achieved global recognition by its inclusion in the Global Research University Profiles (GRUP) by ShanghaiRanking and the directory of the world's best universities by the Times Higher Education World University Rankings; furthermore, Sumy State University is ranked within the top 3% of leading universities worldwide and is classified as a university with high research intensity according to the QS World University Rankings, which also places it among the leading Ukrainian universities and ranks it within the 101-150 bracket of the fastest-rising young stars in higher education."],
                        academic : ["Northeastern Ukraine, Sumy State Medical University has garnered international acclaim through its inclusion in the Global Research University Profiles (GRUP) by ShanghaiRanking and the Times Higher Education World University Rankings directory of top global universities; additionally, the university holds a position within the top 3% of leading universities worldwide and is recognized for its high research intensity according to the QS World University Rankings, which also ranks it among the foremost Ukrainian universities and within the 101-150 range of the fastest-improving young institutions in higher education."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743662549/Ukraine_university_5_sumy_state_academic_nospjb.jpg",
                        faculties : [
                            "Faculty of Therapy",
                            "Faculty of Surgery",
                            "Faculty of General Practice",
                            "Faculty of Family Medicine",
                            "Faculty of Infectious Disease",
                            "Faculty of Pediatrics",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["WHO","NMC","ECFMG","WFME"],
                    }, 

                          {
                        name: "Kharkiv National Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743662589/Ukraine_university_6_KHARKIV_hawacz.jpg",
                        slug: "kharkiv-national-medical-university",
                        country : "ukraine",
                        overview : ["Kharkiv National Medical University, previously known as Kharkiv Medical Institute and Kharkiv State Medical University, is a medical university located in Kharkiv, Ukraine, and was initially recognized as Kharkiv state medical university. The start of higher medical education in Kharkiv, spanning over 200 years, is intrinsically linked to the history of V. N. Karazin Kharkiv National University, originating from its Medical Faculty, with the university's foundation dating back to 1805 through a decree signed by Russian Tsar Alexander I, which also saw the approval of the university's initial statutes."],
                        academic : ["The start of higher medical education in Kharkiv, spanning over 200 years, is intrinsically linked to the history of V. N. Karazin Kharkiv National University, originating from its Medical Faculty, with the university's foundation dating back to 1805 through a decree signed by Russian Tsar Alexander I, which also saw the approval of the university's initial statutes."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743662559/Ukraine_university_6_KHARKIV_academic_khdtga.jpg",
                        faculties : [
                            "Faculty of Nursing",
                            "Faculty of Medicine",
                            "Faculty of Pediatrics",
                            "Faculty of Pharmacy",
                            "Faculty of Dentistry",
                            "Faculty of Postgraduate Education",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["WHO","NMC","UNESCO","GMC"],
                    }, 

                      {
                        name: "V.N. Karazin Kharkiv National University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743662631/Ukraine_university_7_VN_bavbpg.jpg",
                        slug: "vn-karazin-kharkiv-national-university",
                        country : "ukraine",
                        overview : ["Karazin University, officially known as V. N. Karazin Kharkiv National University, stands as a prominent institution of higher education in Ukraine and historically within the Russian Empire and Soviet Union, having been established in 1804 through the initiative of Vasily Karazin, making it the second oldest university in present-day Ukraine, following the University of Lviv. Kharkiv National University ranks second in Ukraine in terms of the volume of publications and citations within the Scopus scientific database, as well as its Hirsch index, demonstrating its strong academic standing, particularly within its School of Medicine and School of Biology, which boast the best academic results within the university."],
                        academic : ["Karazin Kharkiv National University is a 6-year course, comprising 5 years of comprehensive academic instruction that blends practical and theoretical knowledge, followed by a 1-year internship at well-regarded hospitals associated with the university. Upon successful completion of this program, which is equivalent to an MBBS as per NMC guidelines in India, students are awarded the MD Physician degree at V.N. Karazin Kharkiv National University, which currently hosts over 65,000 international medical students from 147 countries, drawn in part by the relatively low tuition fees for both domestic and international students; notably, admission to V.N."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743662730/Ukraine_university_7_VN_academic_axbauu.jpg",
                        faculties : [
                            "Faculty of Pediatrics",
                            "Faculty of General Medicine",
                            "Faculty of Surgery",
                            "Faculty of Pharmacy",
                            "Faculty of Dentistry",
                            "Faculty of Postgraduate Education",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","MCUO"],
                    },          
       
                           {
                        name: "Black Sea National University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743662764/Ukraine_university_8_Black_Sea_pic_qvtn4w.jpg",
                        slug: "black-sea-national-university",
                        country : "ukraine",
                        overview : ["Established in 1996 as a division of the National University and named after Petro Mohyla, officially known as Petro Mohyla Black Sea National University, Ukraine, this institution holds a notable international recognition ranking of 24 out of 200 and an overall UNESCO ranking of 40 among Ukrainian Universities; with a faculty of approximately 310 teaching staff and an enrollment of around 4000 students, the university has significantly benefited from international participation in shaping and upholding its educational standards, fostering strong connections with various international organizations and foreign universities to ensure these standards are maintained. With a teaching staff of roughly 310 and an enrollment of about 4000 students, the University has significantly benefited from international engagement in establishing and upholding its educational standards, actively fostering strong relationships with diverse international organizations and foreign universities to ensure the maintenance of these standards."],
                        academic : ["Medical aspirants considering MBBS in Ukraine will find the Black Sea National University to be among the top-ranked institutions according to UNESCO, offering a comprehensive six-year MBBS program that incorporates a crucial one-year internship designed to equip students with essential practical skills in the medical domain."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743662776/Ukraine_university_8_Black_Sea_academic_drbcax.jpg",
                        faculties : [
                            "Faculty of Human Health",
                            "Faculty of General Medicine",
                            "Faculty of Physical Rehabilitation",
                            "Faculty of Pharmacy",
                            "Faculty of Dentistry",
                            "Faculty of Postgraduate Education",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","UNESCO"],
                    }, 

                          {
                        name: "Bukovinian State Medical University",
                        image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743662795/Ukraine_university_9_BUKOVINIAN_wbk9wl.jpg",
                        slug: "bukovinian-state-medical-university",
                        country : "ukraine",
                        overview : ["Bukovinian State Medical University (BSMU), a prominent and expansive higher education institution in Chernivtsi, recently commemorated its 65th anniversary since its establishment, standing as a contemporary, multisectoral educational entity holding the IV accreditation level and recognized within the general register of the WHO, the Magna Charta Universitatum (Bologna, Italy), and the Association of the Carpathian Region Universities, ensuring the provision of qualified training in accordance with the grade system of education. Bukovinian State Medical University (BSMU) held the 64th position among Ukraine's higher educational institutions, and based on data from the scientific-metric database SCOPUS, BSMU occupies the 37th position among all higher educational establishments in Ukraine and the 7th position specifically among the country's medical educational institutions."],
                        academic : ["Comprising 47 departments across 7 faculties, namely four medical faculties, stomatological, pharmaceutical, and the faculty of post-graduate training, Bukovinian State Medical University also incorporates medical educational establishments of the I-II accreditation level, which include the Chernivtsi, Vashkivtsi, and Novoselytsia medical colleges.the highest medical attestation category, 56 with the first, and 42 with the second, with 32 staff members from Clinical Departments also serving as regional out-of-staff specialists and consultants for the Main Public Health Board in the Chernivtsi Regional State Administration."],
                        academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743663158/Ukraine_university_9_BUKOVINIAN_academic_a25rgq.jpg",
                        faculties : [
                            "Faculty of Pediatrics",
                            "Faculty of General Medicine",
                            "Faculty of Surgery",
                            "Faculty of Pharmacy",
                            "Faculty of Dentistry",
                            "Faculty of Postgraduate Education",
                        ],
                        facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                        affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","MCUO"],
                    },
                    
                    {
                      name: "Poltava Medical University",
                      image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743679844/Ukraine_university_10_Poltava_f1rw3k.jpg",
                      slug: "poltava-medical-university",
                      country : "ukraine",
                      overview : ["Established in 1921 from the dental faculty of Kharkiv Medical Academy, the institution relocated to Poltava in 1967 and was subsequently renamed the Poltava Ukrainian Medical Stomatological Academy (PUMSA); in 1992, a dedicated Faculty for international students was established with the aim of enhancing the standard of medical education provided to foreign nationals, and this initiative has attracted a diverse body of 938 international students from 42 countries, including India, Iraq, Iran, Syria, Morocco, Algeria, Jordan, Pakistan, Libya, Russia, Turkmenistan, and others.  Originating in 1921 as the dental faculty of Kharkiv Medical Academy, the institution moved to Poltava in 1967 and was renamed the Poltava Ukrainian Medical Stomatological Academy (PUMSA); to elevate the medical training offered to foreign citizens, a Faculty for international students was created in 1992, which has since drawn a diverse international student population of 938 individuals from 42 nations, encompassing India, Iraq, Iran, Syria, Morocco, Algeria, Jordan, Pakistan, Libya, Russia, Turkmenistan, and various others."],
                      academic : ["The Ukrainian Medical Stomatological Academy (UMSA) offers numerous benefits that significantly attract an increasing number of Indian students annually, with a noticeable presence of both senior and new students from various regions of India pursuing medical studies; a particularly advantageous aspect is the university's internship program, which provides invaluable hands-on practice, enhancing students' practical experience and medical abilities, making UMSA a highly favorable option for Indian students seeking world-class education supported by modern infrastructure and comprehensive facilities."],
                      academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743679872/Ukraine_university_10_Poltava_academic_hmtjrm.jpg",
                      faculties : [
                          "Faculty of Orthodontics",
                          "Faculty of General Medicine",
                          "Faculty of Surgery",
                          "Faculty of Pharmacy",
                          "Faculty of Dentistry",
                          "Faculty of Postgraduate Education",
                      ],
                      facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                      affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","MCUO"],
                  }, 

                    {
                      name: "Dnipro State Medical University",
                      image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743679941/Ukraine_university_11_hmebvd.jpg",
                      slug: "dnipro-state-medical-university",
                      country : "ukraine",
                      overview : ["Ukraine, a European nation renowned for its high-quality education standards, is home to Dnipro State Medical University, recognized as one of the country's premier medical schools, and its central European location offers excellent opportunities for both living and traveling; prospective students can anticipate a promising future with European medical education obtained from the Dnepropetrovsk Medical Academy (DMA), an institution holding one of the highest levels of accreditation in Ukraine and serving as a vital center for education, science, and culture within the significant industrial region of the Dnieper. The city of Dnipro, a major industrial and business hub in Ukraine, boasts a highly developed infrastructure across all facets of life, and Dnipro State Medical University (DMA) stands as one of Ukraine's oldest higher education institutions, holding the 4th (highest) level of accreditation within the nation."],
                      academic : ["Dnipropetrovsk State Medical University (DSMU) provides a comprehensive spectrum of medical education, encompassing undergraduate programs in General Medicine, Pediatrics, Dentistry, Pharmacy, Nursing, and Public Health Management, alongside offering extensive postgraduate study options and preparatory courses specifically designed for international students."],
                      academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743679946/Ukraine_university_11_academic_qpmnlf.jpg",
                      faculties : [
                          "Faculty of Pediatrics",
                          "Faculty of General Medicine",
                          "Faculty of Public Health",
                          "Faculty of Pharmacy",
                          "Faculty of Dentistry",
                          "Faculty of Postgraduate Education",
                      ],
                      facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                      affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","MCI"],
                  }, 

                        {
                      name: "Uzhhorod National Medical University",
                      image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743679951/Ukraine_university_12_Uzhhorod_vwkr10.jpg",
                      slug: "uzhhorod-national-medical-university",
                      country : "ukraine",
                      overview : ["Ukraine, located in Eastern Europe at the northwestern edge of the Black Sea and sharing borders with Russia to the east, Belarus to the north, Poland to the northwest, Slovakia and Hungary to the west, Romania to the southwest and south, and Moldova in its central regions, stands as the second-largest country in Europe; currently, Ukraine holds the fourth position in Europe for the highest number of postgraduate medical graduates and boasts numerous top government medical universities that provide MBBS, MD, and other medical degrees to both domestic and international students, with all its medical institutions holding accreditation from major global organizations such as WHO and UNESCO. In recent times, Ukraine has been gaining significant popularity among international students seeking to pursue their MBBS abroad, owing to its numerous high-quality government medical universities that offer MBBS, MD, and various other medical degrees at remarkably affordable costs, ensuring that students who complete their MBBS or other medical training from a Ukrainian medical university are eligible to seek employment anywhere in the world."],
                      academic : ["Uzhhorod National University, a state-run institution in Ukraine, provides a diverse array of academic programs spanning undergraduate and postgraduate levels across disciplines such as medicine, engineering, and the humanities, with a particular emphasis on medical education and advanced postgraduate training."],
                      academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743679957/Ukraine_university_12_Uzhhorod_academic_zqutgt.jpg",
                      faculties : [
                          "Faculty of Pediatrics",
                          "Faculty of General Medicine",
                          "Faculty of Public Health",
                          "Faculty of Pharmacy",
                          "Faculty of Dentistry",
                          "Faculty of Postgraduate Education",
                      ],
                      facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                      affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","MCI"],
                  },

                      {
                      name: "Taras Shevchenko National University",
                      image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743679981/Ukraine_university_13_Taras_i3anyw.jpg",
                      slug: "taras-shevchenko-national-university",
                      country : "ukraine",
                      overview : ["Established in 1834, the University expanded in 1847 with the introduction of the Faculty of Law and the Faculty of Medicine, followed by the division of the original Faculty of Philosophy into the Faculty of History and Philology and the Faculty of Natural Sciences, with no further departmental additions until the 1920s; in 1939, Saint Vladimir University was renamed in honor of Taras Shevchenko, and since 1960, marking the admission of its first international students, over 20,000 highly skilled specialists from 120 countries have received their education at Taras Shevchenko University, with the initial cohort of foreign students hailing from Cuba, Guinea, Indonesia, Ghana, Togo, Nigeria, Cameroon, Benin, Zanzibar, Yemen, Algeria, and Afghanistan."],
                      academic : ["Between 2014 and 2017, the university achieved a ranking within the top 500 globally according to the QS World University Rankings, and in 2009, it was positioned at 1,346 out of 8,000 universities worldwide in the Webometrics Ranking of World Universities (2010), also securing the 63rd spot among the top 100 universities in Central and Eastern Europe, thus establishing itself as a leading academic institution within Ukraine."],
                      academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743679990/Ukraine_university_13_Taras_academic_tctxc4.jpg",
                      faculties : [
                          "Faculty of Pediatrics",
                          "Faculty of General Medicine",
                          "Faculty of Public Health",
                          "Faculty of Pharmacy",
                          "Faculty of Dentistry",
                          "Faculty of Postgraduate Education",
                      ],
                      facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                      affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","EUA"],
                  },

                  {
                    name: "Odesa National Medical University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744881096/Ukraine_university_14_Odesa_pic_jcnoex.jpg",
                    slug: "odesa-national-medical-university",
                    country : "ukraine",
                    overview : ["Odessa State Medical University, established in 1900 as the Medical Faculty of the Novorossiysk State University in Odessa, is a prominent higher medical university and a leader in the reformation of medical education in Ukraine, holding membership in the European and International Association of Universities; the medical faculty quickly gained recognition as one of the most prestigious in the Russian Empire, attracting numerous renowned medical scientists, including Nobel laureate Professor Mechnikov; today, known as Odessa National Medical University, it continues to be a leading medical university in Ukraine, is a member of the International Association of Medical Universities, and its high training standards are widely recognized across Europe and America; the University comprises 58 faculties and has a student body of over 6,000 students, including a diverse international population, and provides instruction in Russian, Ukrainian, and English."],
                    academic : ["The university encompasses 43 clinical departments situated within 63 medical and prophylactic institutions in Odessa and the surrounding region, with each department maintaining its own website containing essential methodological materials for all disciplines in Ukrainian, Russian, and English; the university library has established an electronic catalog of its extensive collection of over 700,000 books and journals, as well as an electronic repository of course books, providing online access to these resources; furthermore, a Center of Distance Education has been established to facilitate effective and continuous professional development for doctors and pharmacists, and the university provides ample opportunities for active student leisure, including a sports complex with six halls dedicated to sports games, table tennis, aerobics and rhythmic gymnastics, shaping-up, a gym, and track and field."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744881103/Ukraine_university_14_Odesa_academic_tjqb5w.jpg",
                    faculties : [
                        "Faculty of Medical",
                        "Faculty of Stomatological (Dental)",
                        "Faculty of Pediatric",
                        "Faculty of Pharmaceutical",
                        "Faculty of Dentistry",
                        "Faculty of Postgraduate Education",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["WHO","NMC","IMED","ECFMG"],
                },

                          {
                    name: "Odessa International Medical University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744886770/Ukraine_university_15_Odessa_ocnzfs.jpg",
                    slug: "odessa-international-medical-university",
                    country : "ukraine",
                    overview : ["Odessa National Medical University, a public university located in Odessa, Ukraine, established in 1900 as the Novorossiyskiy State University, holds a global rank of 6915 and is an ideal place to study medicine, boasting 43 medical departments, well-equipped computerized libraries, and laboratories; this medical institution offers a six-year medical education program in English, which includes a one-year apprenticeship at affiliated hospitals, and despite providing high-quality education, the tuition fees are reasonably affordable; with a student-teacher ratio of 20:2, students can expect individual attention, and wonderful job opportunities are available to help manage tuition costs; the university is approved by global medical bodies such as NMC and WHO, and the great contribution of its faculties distinguishes it from others; furthermore, students benefit from an amazing student life, international exposures, and a good score in the FMGE passing percentage, attracting more than 7500 students from all over the world."],
                    academic : ["Odessa National Medical University (ONMU) provides a comprehensive selection of undergraduate and postgraduate medical programs, encompassing General Medicine (MD/MBBS), Pediatrics, Dentistry, Pharmacy, and Nursing; furthermore, the university offers preparatory programs designed for international students, as well as postgraduate courses such as Clinical Residency and Doctorate programs, all of which are taught in English, Russian, and Ukrainian languages."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744886715/Ukraine_university_15_Odessa_academic_adnmdu.jpg",
                    faculties : [
                        "Faculty of Medical",
                        "Faculty of Stomatological (Dental)",
                        "Faculty of Pediatric",
                        "Faculty of Pharmaceutical",
                        "Faculty of Dentistry",
                        "Faculty of Postgraduate Education",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["WHO","NMC","IMED","ECFMG"],
                },

                          {
                    name: "Kyiv Medical University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744886327/Ukraine_university_16_Kyiv_apgrej.jpg",
                    slug: "kyiv-medical-university",
                    country : "ukraine",
                    overview : ["Kyiv Medical University, a public institution situated in Kyiv, the capital city of Ukraine, currently educates over 1100 students aspiring to become successful doctors, with Tumanov Viktor Andrievych serving as the distinguished rector; founded in 1992, the university initially operated as a private institution catering to students from Soviet Union countries and has since trained over 10,000 students in its medical program, contributing to societal well-being; Kyiv Medical University is particularly known for its two major areas of Medicine that have been developed through significant scientific research, offers MBBS courses to both local and international students, and maintains joint research centers and association relations with various leading establishments within the former USSR and across the globe."],
                    academic : ["Kyiv Medical University provides a variety of academic programs in medicine and allied health disciplines, including a 6-year MBBS program conducted in English specifically for international students; the university also offers postgraduate educational opportunities, preparatory programs designed for foreign citizens, and comprises faculties specializing in general medicine, pediatrics, public health management, dentistry, pharmacy, and nursing."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744886339/Ukraine_university_16_Kyiv_academic_alg1hl.webp",
                    faculties : [
                        "Faculty of Pediatrics",
                        "Faculty of General Medicine",
                        "Faculty of Pharmacy",
                        "Faculty of Dentistry",
                        "Faculty of Postgraduate Education",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["WHO","NMC","Ministry of Health of Ukraine","EUA"],
                }
],

        eligibilityPoints: [
          {
            title: "Age",
            description:
              "You must be at least 17 years old and younger than 25 years old as of December 31st of the year you are applying.",
          },
          {
            title: "Education",
            description:
              "You must have passed class 12th from a recognized board with at least 50% marks in Physics, Chemistry, and Biology. If you are from an SC/ST/OBC category, you must have at least 40% marks. ",
          },
          {
            title: "NEET",
            description: "You must have qualified for the NEET entrance exam.",
          },
          {
            title: "School",
            description: "You must not be from an open school.",
          },
        ],
        mbbsBenefits: [
          {
            title: "Affordable Cost",
            description:
              "Compared to many other countries, the tuition fees and overall cost of living in Ukraine are significantly lower, making it a budget-friendly choice for international students.",
          },
          {
            title: "Recognition of degree",
            description:
              "An MBBS degree from a recognized Ukrainian university is accepted in many countries, including India, making it possible to practice medicine internationally.",
          },
          {
            title: "Modern Infrastructure",
            description:
              "Ukrainian medical colleges are well-equipped with advanced technology and facilities, providing students with access to quality medical equipment and learning environments.",
          },
          {
            title: "Quality Education",
            description:
              "Ukrainian medical universities are recognized by the WHO and offer a rigorous curriculum with a strong emphasis on practical training, ensuring a high standard of medical education",
          },
        ],
        advantages: [
          "Low cost of education",
          "English medium instruction",
          "Globally Recognized Degrees",
          "Quality clinical training",
        ],
        advantageImg:
          "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375734/mbbs_in_Ukrain_aqlem2.jpg",
      },

      //bosania

      {
        country: 'Bosnia',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1743491879/Bosnia_logo_kghkis.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743582426/Bosnia_main_img_e3e2cy.jpg",
        overviewText: "Bosnia and Herzegovina, Bosnia, is a Balkan nation situated in Southeast Europe, distinguished by its captivating mix of historical narratives, cultural diversity, and scenic natural beauty, which collectively contribute to its growing attractiveness as a destination for international students aspiring to obtain an MBBS degree, holding particular significance for Indian students in search of accessible and high-quality medical education opportunities. The MBBS program in Bosnia and Herzegovina is aligned with the European Credit Transfer System (ECTS) and the Bologna Process, ensuring a high standard of medical education that aligns with European academic frameworks and facilitates international recognition of qualifications.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743491906/Bosnia_overview_img_m5hpyu.jpg",
        quickFacts: ["Sarajevo", "50%", "Bosnia-Herzegovina Convertible Mark (BAM)", "Approx. 31.9 lakhs"],
        univeristes: [
            {
                name: "University of Mostar",
                image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743502558/Bosnia_university_1_university_of_mostar_jyxaed.jpg",
                slug: "university-of-mostar",
                country : "bosnia",
                overview : ["Established in 1977 as a public institution, the University of Mostar, the largest public university in Mostar, Bosnia and Herzegovina, traces its origins back to the establishment of the Franciscan theological school in 1895 and today serves a substantial student population of 12,000, supported by a faculty of 1,000 teachers across its ten faculties and one academy. Committed to reaching recognized European standards in higher education, the University of Mostar is shaping a new era defined by its core mission encompassing Education, Scientific Research work, and Community Development. Its educational philosophy is grounded in excellence, prioritizing students in undergraduate, graduate, and postgraduate studies through a focused teaching and research process that aims to cultivate highly professional, self-motivated, and productive experts ready to excel in their present and future endeavors."],
                academic : ["The University of Mostar (UNMO) in Bosnia and Herzegovina provides a comprehensive spectrum of academic opportunities, encompassing undergraduate, graduate, and postgraduate studies, with particular strengths in areas such as Agro-Mediterranean studies, Law, Information Technologies, Business Informatics, and a variety of other disciplines."],
                academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743502571/Bosnia_university_1_university_of_mostar_academic_pic_o33nia.jpg",
                faculties : [
                    "Department of Dentistry",
                    "Department of General Medicine",
                    "Department of Nursing",
                    "Department of Obstetrics",
                    "Department of Paediatrics",
                    "Department of Psychiatry",
                ],
                facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                affilationRecognition : ["WHO","MCI","FAIMER","WDMC"],
            },
        
            {
              name: "University of East Sarajevo",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743579792/Bosnia_university_East_Sarajevo_pic_ed2spg.webp",
              slug: "university-of-east-sarajevo",
              country : "bosnia",
              overview : ["Established in 1993 in the scenic town of Foca, the Faculty of Medicine at the University of East Sarajevo (UES) has cultivated a strong reputation for delivering high-quality medical and dentistry programs, earning recognition across Europe and globally; encompassing over 6000 square meters and furnished with contemporary facilities, the faculty provides a comprehensive educational environment, positioning UES as a symbol of excellence in both medical education and research within Bosnia and Herzegovina and as a leading institution in the nation, with its mission focused on producing highly competent professionals capable of succeeding in their chosen fields both domestically and internationally. The University of East Sarajevo employs the European Credit Transfer System (ECTS), ensuring a just and transparent method for student evaluation and guaranteeing the international recognition of the education received, while also simplifying the transfer of credits and enabling students to readily participate in exchange programs such as Erasmus+, thereby offering opportunities for valuable international experience and exposure."],
              academic : ["The University of East Sarajevo (UES) provides an extensive array of academic programs spanning bachelor's, master's, and doctoral degrees, encompassing more than 110 distinct programs distributed across its 17 organizational units situated in 10 different towns, which include faculties such as Medicine, Law, and Economics."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743579796/Bosnia_university_East_Sarajevo_academic_h7yhow.webp",
              faculties : [
                  "Department of General Medicine",
                  "Department of Pharmacies",
                  "Department of Community Medicine",
                  "Department of Anotomy",
                  "Department of Microbiology",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["WDOMS","NMC","WHO","EAMF"],
          },

             {
                name: "Sarajevo School of Science and Technology",
                image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743502608/Bosnia_university_3_Sarajevo_pic_weopnq.jpg",
                slug: "sarajevo-school-of-science-and-technology",
                country : "bosnia",
                overview : ["Sarajevo School of Science and Technology (SSST) is a private university situated in Sarajevo, comprising six departments, one academy, and a medical school, and it holds a distinguished ranking among the top 600 universities globally and as one of the best institutions in Southeastern Europe. Notably, the medical school within SSST offers comprehensive courses in medicine, dentistry, and pharmacy, all of which are conducted entirely in the English language, attracting a diverse international student body. Sarajevo, the capital and largest city of Bosnia and Herzegovina with a population exceeding 270,000, boasts a rich history tracing back to the 15th century, maintaining many of its traditions to the present day, and is particularly renowned for prioritizing culture as a central element in its development strategies, providing a vibrant and historically significant backdrop for academic pursuits at SSST."],
                academic : ["The Medicine program at Sarajevo School of Science and Technology (SSST) is a six-year course that integrates foundational theoretical lectures with subsequent practical training, allowing students to apply their acquired knowledge, and benefits from state-of-the-art laboratories equipped with advanced medical equipment and software, positioning SSST as a highly desirable European university for medical studies."],
                academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743502615/Bosnia_university_3_Sarajevo_academic_pic_y4vopl.jpg",
                faculties : [
                    "Department of Anatomy",
                    "Department of Biochemistry",
                    "Department of Community Medicine",
                    "Department of Forensic Medicine",
                    "Department of Microbiology",
                ],
                facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                affilationRecognition : ["WDOMS","NMC","WHO","ECFMG"],
            },

            ],

            
        eligibilityPoints: [
            {
                title: "Education",
                description: "Completed their 10+2 with Physics, Chemistry, and Biology, achieve a minimum GPA of 3.0"
            },
            {
                title: "Age Requirement",
                description: "Students must have completed 17 years of age by the end of the year of admission"
            },
            {
                title: "GPA",
                description: "A minimum GPA of 3.0 is generally required for admission"
            },
            {
                title: "Score",
                description: "50% aggregate for general category, 40% for reserved category."
            },
        ],
        mbbsBenefits: [
            {
                title: "Low Tuition Fees",
                description: "Compared to private medical schools in India or other European countries, Bosnia offers significantly lower tuition fees."
            },
            {
                title: "Globally Recognized Degree",
                description: "The MBBS/MD degree from Bosnian universities is recognized worldwide, including by the National Medical Council (NMC) in India."
            },
{
                title: "English-Medium Programs",
                description:  "Many universities offer programs taught in English, making it accessible to international students."
            },
{
                title: "Quality Medical Education",
                description: "Kyrgyz medical universities focus on providing a comprehensive curriculum with strong emphasis on practical training and clinical exposure."
            },
        ],
        advantages: ["Affordability", "High-Quality Education" ,"Globally Recognized Degrees" ,"Clinical Exposure"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743507556/Bosnia_advantage_img_mgkjjd.jpg",
    },

    //serbia

    {
      country: 'Serbia',
      flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1743578496/Serbia_logo_geldrr.png',
      mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743578493/Serbia_main_img_idwsot.jpg",
      overviewText: "MBBS in Serbia is fully compliant with NMC gazette rules and holds recognition from leading medical organizations such as FAIMER, WHO, and NMC, making it an increasingly popular destination for Indian students and parents seeking medical education abroad; upon completion of their 6-year MBBS program, which includes 5 years of classroom learning and a 1-year internship in a university-affiliated hospital, graduates have the opportunity to work in Europe after obtaining the necessary license or pursue career paths in the US or other countries. The affordability of MBBS in Serbia is a significant draw, with the average tuition fee for the entire 5+1 year course ranging from 24-25 Lacs, often lower than the cost of medical education in India and many other nations, and the fact that the entire curriculum is taught in English further solidifies Serbian universities as a preferred choice for international students, offering valuable insights for those considering pursuing their medical studies in Serbia to facilitate well-informed decisions.",
      overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743578501/Serbia_overview_img_ze2ox9.jpg",
      quickFacts: ["Belgrade", "50%", "Serbian Dinar", "Approx. 66.2 lakhs"],
      univeristes: [
          {
              name: "University of Belgrade",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743581359/Serbia_university_1_Belgrade_pic_gzkzpd.webp",
              slug: "university-of-belgrade",
              country : "serbia",
              overview : ["As a state institution, the University of Belgrade's primary functions in higher education and scientific research are deemed matters of public interest and are conducted in adherence to legal statutes, with the university annually commemorating its establishment on September 13th, marking the commencement of classes at the initial Higher School founded by Dositej Obradovic; throughout its two centuries of existence, the University of Belgrade has been dedicated to serving its community, and its alumni and faculty have made substantial contributions to the cultural, scientific, educational, political, and economic advancement of the nation. The University of Belgrade is committed to sustaining and strengthening its role as the preeminent higher education institution in the region by both adapting to contemporary challenges and safeguarding the valuable aspects of its heritage, which is precisely what has earned it recognition as a genuine national symbol."],
              academic : ["This comprehensive university encompasses 31 faculties and 11 research institutes, providing an extensive selection of programs and degrees with over 370 study programs that span all disciplines of engineering, natural sciences, medical sciences, social sciences, and humanities across all levels of academic pursuit, including professional training."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743581361/Serbia_university_1_Belgrade_academic_rlrdhh.webp",
              faculties : [
                  "Department of Dentistry",
                  "Department of General Medicine",
                  "Department of Nursing",
                  "Department of Obstetrics",
                  "Department of Paediatrics",
                  "Department of Psychiatry",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["WHO","NMC","FAIMER","SEELS"],
          },
      
            {
              name: "University of Novi Sad",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743502578/Bosnia_university_2_Novi_pic_hj5xzg.jpg",
              slug: "university-of-novi-sad",
              country : "Serbia",
              overview : ["Established in 1960 as a public institution, the University of Novi Sad, comprising 14 faculties across four cities, holds international recognition for its comprehensive medical education and numerous significant research endeavors, standing as the second-largest Serbian university with a student body exceeding 40,000, including a substantial number of international students. Notably, the University of Novi Sad Faculty of Medicine is distinguished for its supportive environment and dedicated facilities and resources designed to welcome and assist international students, including an international department committed to addressing inquiries and guiding students throughout their academic journey. Situated in Novi Sad, a diverse and multicultural city with approximately 290,000 residents, making it the second-largest in Serbia, the university benefits from the city's friendly and welcoming atmosphere, which attracts an increasing number of international students from Europe, the UK, and other parts of the world, solidifying the Faculty of Medicine at the University of Novi Sad, Serbia, as a premier destination for studying."],
              academic : ["The University of Novi Sad (UNS) in Serbia provides a comprehensive selection of accredited study programs spanning Bachelor, Master, Specialist, and Doctoral levels, emphasizing contemporary and science-based curricula that are delivered across its diverse faculties and numerous research centers."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743502586/Bosnia_university_2_Novi_academic_j0b8tx.jpg",
              faculties : [
                  "Department of General Medicine",
                  "Department of Pharmacies",
                  "Department of Community Medicine",
                  "Department of Forensic Medicine",
                  "Department of Microbiology",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["WDOMS","NMC","WHO","EUGLOH"],
          },


          ],

          
      eligibilityPoints: [
          {
              title: "High School Diploma",
              description: "Successful completion of high school (10+2 or equivalent) with Physics, Chemistry, and Biology/Biotechnology as core subjects."
          },
          {
              title: "Age Requirement",
              description: "Students must have completed 17 years of age by the end of the year of admission"
          },
          {
              title: "NEET Qualification",
              description: "NEET is mandatory for Indian students applying for MBBS programs abroad, including Serbia."
          },
          {
              title: "Score",
              description: "A minimum of 50% marks in the 10+2 examination, particularly in Physics, Chemistry, and Biology."
          },
      ],
      mbbsBenefits: [
          {
              title: "Affordable Education",
              description: "Serbia offers significantly lower tuition fees and living expenses compared to many Western countries, making it an attractive option for students seeking quality education without breaking the bank."
          },
          {
              title: "Globally Recognized Degree",
              description: "Serbian medical universities are eligible to practice medicine worldwide, opening doors to a global career in medicine."
          },
{
              title: "English-Medium Programs",
              description:"Many universities offer programs taught in English, making it accessible to international students."
          },
{
              title: "Career Prospects",
              description: "Medical graduates from Serbian universities are in high demand in many countries, including the US, UK, and Australia."
          },
      ],
      advantages: ["Affordability", "Multicultural Environment" ,"Internationally Recognized Medical Universities" ,"Clinical Exposure"],
      advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1743582258/Serbia_advantage_img_aaxkm2.webp",
  },

    //maldova

    {
      country: 'Moldova',
      flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744701885/Moldova_logo_wfnvx1.png',
      mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744702565/Moldova_main_img_rdzpoz.jpg",
      overviewText: "Moldova presents a practical and appealing avenue for international students, especially those from India, aspiring to pursue an MBBS degree, primarily due to the combination of affordable tuition fees and the availability of medical programs taught entirely in English; a notable institution in this regard is the Nicolae Testemițanu State University of Medicine and Pharmacy, which is a popular selection among international students and offers a comprehensive 6-year MD program that is equivalent to the MBBS qualification, including a mandatory internship period to provide essential practical experience.",
      overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744702667/Moldova_overview_img_schd0z.jpg",
      quickFacts: [ "Chisinau","57%", "Moldovan Leu (MDL)", "Approx. 24.6 lakhs"],
      univeristes: [
          {
              name: "Nicolae Testemitanu State University of Medicine and Pharmacy",
              image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744704707/Moldova_university_1_jhfyxb.jpg",
              slug: "nicolae-testemitanu-state-university-of-medicine-and-pharmacy",
              country : "serbia",
              overview : ["Established on October 20, 1945, the institution laid the groundwork for the advancement of higher medical education and the improvement of the healthcare system within the Moldovan Republic, experiencing substantial growth over the subsequent seven decades through significant program and facility expansions; the University now encompasses a diverse range of academic units, including a hospital-affiliated medical school catering to local students with a specialization in Public Health, a distinct medical school dedicated to international students, and schools of Dentistry and Pharmacy, alongside a comprehensive Fifth Unit that integrates Pre-University Remedial Training, Post Graduate Specialty Training, the Department of Advanced Doctorate and Master’s Degrees, and Continuing Education in Medicine and Pharmacy; the University employs contemporary international training methodologies and educational philosophies in its teaching."],
              academic : ["The Nicolae Testemitanu State University of Medicine and Pharmacy, located in Chișinău, Moldova, provides a wide spectrum of academic programs encompassing both undergraduate and postgraduate levels across various disciplines such as medicine, dentistry, pharmacy, medical psychology, and medical bioengineering; additionally, the university offers a foundation year specifically designed for international students, alongside pre-university remedial training and a diverse array of postgraduate specialty training opportunities."],
              academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744704710/Moldova_university_1_academic_d9tvqq.jpg",
              faculties : [
                  "Department of Dentistry",
                  "Department of General Medicine",
                  "Department of Nursing",
                  "Department of Pharmacy",
                  "Department of Public Health",
                  "Department of Psychiatry",
              ],
              facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
              affilationRecognition : ["WHO","NMC","FAIMER","WFME"],
          },
          ],
          
      eligibilityPoints: [
          {
              title: "Affordable Tuition",
              description: "MBBS programs in Moldova have significantly lower tuition fees compared to private medical colleges in India, making them a more accessible option for many students."
          },
          {
              title: "Academic Requirements",
              description: "Successfully complete the 10+2 (or equivalent) examination with a minimum of 50% aggregate marks in Physics, Chemistry, and Biology (PCB)."
          },
          {
              title: "Age",
              description: "Must be at least 17 years of age by the time of admission."
          },
          {
              title: "Documents Required",
              description: "Certified copies of marksheets from 10th and 12th examinations, Certified copy of NEET score card, Copy of passport, Medical fitness certificate, and Passport-sized photographs."
          },
      ],
      mbbsBenefits: [
          {
              title: "Affordable Education",
              description: "Moldova offers significantly lower tuition fees compared to many other European countries, making it a financially accessible option for international students."
          },
          {
              title: "High-Quality Education",
              description: "Moldovan medical universities offer curricula comparable to those in the US, focusing on practical application of medical knowledge."
          },
{
              title: "Global Recognition",
              description:  "Medical degrees from Moldovan universities are recognized by numerous countries, including those in Europe, the US, and India, opening doors to diverse career prospects."
          },
{
              title: "International Exposure",
              description: "Moldova's location in Europe provides international exposure, allowing graduates to potentially work in other European countries."
          },
      ],
      advantages: ["Affordability", "Multicultural Environment" ,"International Exposure" ,"Global Recognition"],
      advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744703791/Moldova_advantage_img_lvaj26.jpg",
  },

  

    ];

    const countryData = countries.find(
      (c) => c.country.toLowerCase() === country.toLowerCase()
    );

    if (!countryData) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }

    return NextResponse.json({ data: countryData });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch country data" },
      { status: 500 }
    );
  }
}
