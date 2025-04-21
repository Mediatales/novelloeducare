import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    // This is your countries data - you can move this to a separate data file
    const countries = [
        {
            country: "uzbekistan",
            flag_link:
              "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png",
            univeristes: [

                //canada

                {
                    name: "St.Lawrence College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605725/Canada_university_1_lawrence_is174h.jpg",
                    slug: "stlawrence-college",
                    country : "canada",
                    overview : ["St. Lawrence College, a distinguished public institution within the province of Ontario, Canada, has been a cornerstone of post-secondary education since its establishment in 1967. Operating across three strategically located campuses in the vibrant cities of Kingston, the historic town of Brockville, and the eastern Ontario hub of Cornwall, the college serves a diverse student population with a comprehensive array of academic and vocational programs. Renowned for its unwavering commitment to applied arts and technology, St. Lawrence College distinguishes itself by providing students with practical, hands-on learning experiences designed to directly translate into successful career paths. The institution offers an extensive portfolio of educational opportunities, encompassing diploma programs that provide focused skill development, certificate programs for specialized training, and degree programs that offer a more in-depth academic exploration of various fields. Recognizing the evolving needs of modern learners, St."],
                    academic : ["St. Lawrence College, a publicly funded institution in Canada with strategically located campuses in Kingston, Brockville, and Cornwall, provides a diverse array of educational opportunities specifically catering to international students. The college offers a comprehensive selection of credentials, including certificates, diplomas, apprenticeships, and degree programs, all underpinned by a strong commitment to practical, experiential learning methodologies designed to foster career readiness and equip graduates with the skills and knowledge necessary for successful professional integration."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605733/Canada_university_1_lawrence_academic_r5kcl6.jpg",
                    faculties : [
                         "Departments of Arts and Humanities",
                        "Departments of  Business",
                        "Departments of Apprenticeships",
                        "Departments of Hospitality & Culinary",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CCAA","ACCC","AUCC","CBIE"],
                },
                {
                        name: "Trent University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605752/Canada_university_2_Trent_koy2xq.jpg",
                    slug: "trent-university",
                    country : "canada",
                    overview : ["Trent University, a prominent public institution of higher learning situated in Peterborough, Ontario, Canada, with an expanding presence through its newer campus located in Durham within the Greater Toronto Area, has established a distinctive academic identity rooted in its adoption of the Oxbridge-style college system, fostering an intimate learning environment characterized by smaller class sizes that encourage close interaction and mentorship between students and faculty. Since its founding in 1964, Trent University has garnered significant recognition for its academically rigorous programs, particularly within the domains of liberal arts, humanities, and social sciences, providing a comprehensive and enriching educational foundation for its students. Moreover, the university distinguishes itself through a profound commitment to sustainability, integrating environmentally conscious practices throughout its operations and academic offerings, and by prioritizing holistic student development through a strong emphasis on experiential learning opportunities that bridge the gap between theory and practice, thereby cultivating well-rounded graduates equipped for future success, all while serving a vibrant community of approximately 7,500 students across its two strategically located campuses."],
                    academic : ["Trent University distinguishes itself through its flexible and interdisciplinary academic framework, which prioritizes hands-on learning experiences and the cultivation of strong, supportive relationships between faculty and students. Renowned for its intimate small-group settings and dedication to fostering a culture of research and inquiry, Trent University delivers a comprehensive spectrum of programs spanning the arts, sciences, and various professional fields. The institution is widely acknowledged for its commitment to providing a high-quality education, its embrace of innovative teaching methodologies, and its robust student support services, all of which contribute to the consistently high graduate employment rates achieved by its alumni."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605757/Canada_university_2_Trent_academic_rkcmur.jpg",
                    faculties : [
                        "Departments of Arts and Humanities",
                        "Departments of  Business",
                        "Departments of Computer & Data Science",
                        "Departments of Environment & Sustainability",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","ACCC","AUCC","CBIE"],
                },
                  {
                        name: "University of Guelph",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605771/Canada_university_3_guelph_zyowz0.jpg",
                    slug: "university-of-guelph",
                    country : "canada",
                    overview : ["The University of Guelph, a prominent and comprehensive public institution in Guelph, Ontario, Canada, stands as a research-intensive university with a rich history dating back to its founding in 1964, evolving from the amalgamation of three esteemed original colleges – the Ontario Agricultural College, the Macdonald Institute, and the Ontario Veterinary College – into a thriving university community encompassing over 30,000 students across its three campuses, which include the Guelph-Humber campus and the Ridgetown campus. The University of Guelph has cultivated a strong reputation for its high-quality academic programs spanning a wide array of disciplines, its engagement in diverse and impactful research initiatives, and its unwavering commitment to providing students with valuable experiential learning opportunities and comprehensive support services designed to foster their academic and professional success."],
                    academic : ["The University of Guelph provides a comprehensive and dynamic academic environment that places significant emphasis on both cutting-edge research endeavors and a learner-centered educational philosophy across a broad spectrum of disciplines, encompassing the arts, sciences, business, and agriculture. Widely recognized for its commitment to interdisciplinary studies, the university fosters a stimulating intellectual atmosphere through its engaging faculty, abundant research opportunities, and a nurturing and supportive learning culture. Guided by a core mission to cultivate critical thinking skills, foster creativity, and promote engaged citizenship among its students, the University of Guelph strives to equip individuals with the knowledge, skills, and values necessary to make meaningful contributions and positive impacts on the global community."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605775/Canada_university_3_guelph_academic_hchy22.jpg",
                    faculties : [
                      "Departments of Accounting",
                        "Departments of  Business",
                        "Departments of Computer & Data Science",
                        "Departments of Agriculture",
                         "Departments of Arts and Sciences",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CCAA","ACCC","AUCC","CBIE"],
                },
        
                 {
                        name: "University of Northern British Columbia",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605784/Canada_university_4_Northern_csqkwl.jpg",
                    slug: "university-of-northern-british-columbia",
                    country : "canada",
                    overview : ["The University of Northern British Columbia (UNBC), a distinguished public and research-intensive university situated in Prince George, British Columbia, Canada, with an extended network of regional campuses serving other communities across northern British Columbia, has established a strong reputation for its distinct focus on the unique characteristics and challenges of the North, its unwavering dedication to fostering impactful research initiatives, and its profound commitment to principles of sustainability, an ethos that has earned it the notable designation of Canada's Green University. UNBC provides a comprehensive array of undergraduate and graduate programs, with a particular emphasis on academic and research areas that hold significant relevance to the northern region and address pressing global challenges in areas such as environmental sustainability, human health, and Indigenous issues, thereby positioning itself as a vital center for education and innovation in and for the North."],
                    academic : ["The University of Northern British Columbia (UNBC) stands as a research-intensive institution distinguished by its strong emphasis on both impactful teaching and cutting-edge discovery, all while maintaining a significant focus on the unique context and needs of the northern region of British Columbia. Offering a diverse range of undergraduate and graduate programs, UNBC places particular emphasis on academic and research areas critically relevant to the environment, human health, and the specific challenges and opportunities of northern British Columbia. Furthermore, the university is widely recognized for its dedicated commitment to cultivating a welcoming and inclusive learning environment where all students can thrive and succeed."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605790/Canada_university_4_Northern_academic_ydxbg9.jpg",
                    faculties : [
                        "Departments of Arts",
                        "Departments of  Business",
                        "Departments of Computer & Data Science",
                        "Departments of Nursing",
                        "Departments of Health Science",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","ACCC","AUCC","CBIE"],
                },
                  {
                        name: "University of Waterloo",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605800/Canada_university_5_waterloo_x3mt1d.jpg",
                    slug: "university-of-waterloo",
                    country : "canada",
                    overview : ["The University of Waterloo, a distinguished and prominent Canadian public research university situated in Waterloo, Ontario, has garnered international recognition for its exceptional strength in engineering and science disciplines, particularly its pioneering and highly successful co-operative education (co-op) program, which seamlessly integrates academic study with practical work experience. Since its inception in 1957, originating with a modest cohort of engineering students, the University of Waterloo has expanded significantly, evolving into a comprehensive, research-intensive institution characterized by its expansive campus, a wide array of diverse academic programs spanning numerous fields of study, and a substantial and vibrant student population. Furthermore, the university is widely celebrated for its dynamic entrepreneurial culture and its strong emphasis on fostering innovation, which collectively serve as a significant draw for talented students and accomplished researchers from across Canada and around the globe, solidifying its position as a leading center for education and research. Chartered as a public university in 1959, the University of Waterloo continues to build upon its foundational strengths, making substantial contributions to both academic knowledge and technological advancement."],
                    academic : ["The University of Waterloo provides a highly diverse and internationally renowned academic environment, distinguished by its innovative educational methodologies, a robust commitment to cutting-edge research across numerous fields, and its pioneering and highly successful co-operative education program. As a leading institution in Canada, the University of Waterloo is particularly celebrated for its exceptional engineering and computer science programs, and it proudly fosters a globally connected network of accomplished alumni who contribute to its enduring reputation for excellence."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744605816/Canada_university_5_waterloo_academic_pwcc90.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Arts and Humanities",
                        "Departments of Health Sciences",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                },

                {
                    name: "University of Windsor",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788314/Canada_university_6_Windsor_vtdao4.jpg",
                    slug: "university-of-windsor",
                    country : "canada",
                    overview : ["The University of Windsor, a comprehensive and student-focused public research university situated in Windsor, Ontario, Canada, is renowned for its strong student-faculty relationships and diverse array of programs, having been founded in 1857 and currently offering over 190 undergraduate and 65 graduate programs across nine faculties encompassing Arts, Humanities and Social Sciences, Education, Engineering, Business, Human Kinetics, Law, Nursing, and Science; key features and highlights include its student-centered approach, which emphasizes a supportive learning community with small class sizes and ample student services, its diverse academic programs offering a broad range of undergraduate and graduate studies including professional fields like Law, Business, and Engineering, its status as a research-oriented institution with a focus on areas such as automotive, environmental studies, and international trade, and its strategic location in Windsor, the southernmost city in Canada, providing benefits from its proximity to North America's busiest border crossing and the Detroit River."],
                    academic : ["The University of Windsor, a public research institution situated in Windsor, Ontario, Canada, is recognized for its student-focused environment and diverse academic offerings, serving approximately 17,500 students through a wide array of undergraduate and graduate programs, including several professional schools, and is conveniently located on the Detroit River, near North America's busiest international border crossing."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788321/Canada_university_6_Windsor_academic_dtkxs9.jpg",
                    faculties : [
                        "Departments of Automotive Engineering",
                        "Departments of Biochemistry Pharmacy",
                        "Departments of Developmental Psychology",
                        "Departments of Chemistry",
                        "Departments of Business Administration Professional Accounting Specialization",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 

                        {
                    name: "Wilfrid Laurier International College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788333/Canada_university_7_wilfrid_w60u6z.jpg",
                    slug: "wilfrid-laurier-international-college",
                    country : "canada",
                    overview : ["Wilfrid Laurier International College (WLIC) offers international students a unique opportunity to begin their higher education in Canada through tailored programs like the Foundation Year and International Year One, providing pathways to over 70 programs across five faculties: Business and Economics, Human and Social Sciences, Liberal Arts, Science, and Arts; notably, the International Year One is equivalent to the first year of a bachelor's degree, allowing students to directly progress into the second year of their chosen program at Wilfrid Laurier University (Laurier) upon successful completion; the college fosters a supportive environment characterized by small class sizes, accessible admission requirements, and additional support services specifically designed for international students, including options for those who may not have a Grade 12 math background."],
                    academic : ["Wilfrid Laurier International College (WLIC) offers a variety of academic programs, primarily focusing on pathways to Wilfrid Laurier University (Laurier), while providing a supportive environment with transformative learning experiences that encourage students to integrate their culture and identity into their education, with programs including a BA in Community Health, Economics and Accounting, and User Experience Design, alongside BSc programs in Computer Science, Data Science, and Business Technology Management."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788378/Canada_university_7_wilfrid_academic_fmj6hq.jpg",
                    faculties : [
                       "Departments of Engineering and Technology",
                       "Departments of  Business",
                       "Departments of Arts and Humanities",
                       "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 

                        {
                    name: "Wilfrid Laurier University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788463/Canada_university_8_Wilfrid_Laurier_un_hh6uka.jpg",
                    slug: "wilfrid-laurier-university",
                    country : "canada",
                    overview : ["Wilfrid Laurier University, a public institution founded in 1911 and located in Waterloo, Ontario, Canada, traces its origins back to the establishment of the Evangelical Lutheran Seminary in Waterloo in the same year; according to the Shiksha Grade Rankings, Wilfrid Laurier has received an overall C grade ranking, with international student fees for undergraduate courses being INR 14.9 L and for postgraduate courses being INR 12 L; the university houses over 19,500 students, maintains a student-faculty ratio of 25:1, and has an overall acceptance rate of approximately 89%; as a research-intensive university, it encompasses more than 20 institutes and research centers, offers numerous outstanding student exchange programs, and welcomes a significant number of international students annually."],
                    academic : ["Wilfrid Laurier University offers a wide array of degree courses, with over 100 options available to international students each year, some of the popular choices including Economics, Accounting, Biology, Mathematics, Anthropology, Biochemistry, Communication Studies, Kinesiology, Technology Management, Environmental Sciences, and Mathematical Finance."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788469/Canada_university_8_Wilfrid_Laurier_un_academic_apncko.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Arts and Humanities",
                        "Departments of Health Sciences",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
                       {
                    name: "York Ville University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788550/Canada_university_9_York_Ville_clkykh.jpg",
                    slug: "york-ville-university",
                    country : "canada",
                    overview : ["Established in 2003 in New Brunswick, Canada, Yorkville University operates campuses in Vancouver, British Columbia; Toronto, Ontario; and Fredericton, New Brunswick, offering on-campus courses at its Vancouver and Toronto locations, while the New Brunswick campus caters to students pursuing online programs, making Yorkville University a prominent institution in Canada that welcomes thousands of students annually from across the country and the globe, with international students from over 35 countries having enrolled in its various programs, contributing to Yorkville's reputation as one of the top universities in Canada, particularly popular among international students."],
                    academic : ["Yorkville University provides a diverse selection of on-campus and online programs for international students, operating across three campuses in Canada, specifically Vancouver, Toronto, and Fredericton, with on-campus programs available at its Vancouver and Toronto locations and online programs offered through its Fredericton campus."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788542/Canada_university_9_York_Ville_academic_ap56ae.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Doctor of Counselling and Psychotherapy",
                        "Departments of Supply Chain Management",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
               
                     {
                    name: "Ontario Tech University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788558/Canada_university_10_Ontario_Tech_tzpsxe.jpg",
                    slug: "ontario-tech-university",
                    country : "canada",
                    overview : ["Ontario Tech University (OTU), formerly known as the University of Ontario Institute of Technology (UOIT), is a public research university located in Oshawa, Ontario, Canada, established in 2002 and rebranded in 2018; OTU is recognized for its industry-focused programs, technology-rich environment, and emphasis on experiential learning, with key features including its industry focus, which prioritizes practical, hands-on learning through collaborations with over 300 industry partners in program development, its technology-rich environment providing a modern and technologically enhanced learning experience, and its commitment to experiential learning, where almost all programs incorporate opportunities such as co-ops, internships, and research projects."],
                    academic : ["Ontario Tech University, a public research institution situated in Oshawa, Ontario, Canada, is recognized for its strong emphasis on technology and its societal impact, prioritizing experiential learning, research, and collaboration with industry partners to address real-world challenges, and offers a comprehensive selection of undergraduate, college-to-university transfer, and graduate programs."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744788611/Canada_university_10_Ontario_Tech_academic_v2fwba.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Social Sciences",
                        "Departments of Medicine",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                },

                {
                    name: "Herzing College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800320/Canada_university_11_Herzing_ytkesc.png",
                    slug: "herzing-college",
                    country : "canada",
                    overview : ["Herzing College distinguishes itself through a supportive and personalized approach to education, guaranteeing that all students are equipped with the necessary tools and assistance to achieve maximum educational and career success, where the college's leadership, faculty, and staff prioritize getting to know students on an individual level, fostering a learning community where students feel valued rather than anonymous; specifically, Herzing College – Montreal, established in 1968 and situated in the heart of downtown with beautiful grounds and convenient accessibility, offers programs and courses designed to impart the current and future knowledge and skills sought by employers in college graduates, delivered by expert faculty members who are leaders in their respective fields."],
                    academic : ["Herzing College offers one undergraduate level course, which is a UG Diploma with a typical duration of 14 months, and the university is committed to providing a focused learning environment through small classes, emphasizing each student and delivering an excellent academic experience that combines theoretical knowledge with practical, real-world experience."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800336/Canada_university_11_Herzing_academic_elr5wt.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Social Sciences",
                        "Departments of Medicine",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
               
                          {
                    name: "Kensley College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800346/Canada_university_12_Kensley_r7hgun.jpg",
                    slug: "kensley-college",
                    country : "canada",
                    overview : ["Kensley College, situated in Montreal, Canada, is a diploma and certification institution dedicated to providing skills-based, practical education, and is particularly recognized for its commitment to equipping students with the necessary practical skills for the modern workforce, especially in fields such as cybersecurity and software testing, while also emphasizing support for international students through assistance with immigration procedures and cultural integration; key features of Kensley College include its location in Montreal, a dynamic city with a significant student population, its primary focus on delivering skills-based, practical education designed to prepare students for employment, and its program offerings, which include diploma and certification courses in areas like cybersecurity, software testing, and related disciplines."],
                    academic : ["Kensley College, located in Montreal, Canada, is a diploma and certificate institution dedicated to providing practical, skills-based education aimed at preparing students for the workforce, offering a variety of programs including Cybersecurity, Software Quality Assurance, and other diploma and certificate courses, and emphasizing a hands-on learning approach while also providing student services such as mentoring, wellness support, and employment assistance."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800352/Canada_university_12_Kensley_academic_lmh1rc.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Social Sciences",
                        "Departments of Medicine",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
               
                          {
                    name: "Trebas Institute",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800372/Canada_university_13_Trebas_s2egbe.jpg",
                    slug: "trebas-institute",
                    country : "canada",
                    overview : ["Established in 1979, the Trebas Institute is recognized as one of the best private universities in Toronto, Canada, with its Montreal Campus also located in Toronto, Canada, and is known for its state-of-the-art education and extensive research programs, having been ranked among global universities by popular ranking bodies in 2025; the university provides 18 undergraduate level courses to international students, with popular options including UG Diplomas, typically lasting for 12 months and having an average tuition fee ranging from CAD 9,164 to 32,000; prospective international students are required to submit admission requirements, including academic scores and proof of language proficiency through tests such as TOEFL, IELTS, PTE, and Duolingo."],
                    academic : ["The Trebas Institute is renowned for offering excellent academic programs for its international students, providing 18 undergraduate level courses across six streams, including Arts (Fine / Visual / Performing), Business and Management Studies, and Mass Communication and Media; these courses, specifically UG Diplomas, are offered at the undergraduate level with a typical duration of 12 months, and popular specializations available for international students include Data Analytics, Computer Science Engineering, and Cyber Security."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800378/Canada_university_13_Trebas_academic_mo7gd6.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of Analytics, Big Data and Business Intelligence",
                        "Departments of Social Sciences",
                        "Departments of Medicine",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
               

                          {
                    name: "Bishop's University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800394/Canada_university_14_Bishop_s_rqpdb1.jpg",
                    slug: "bishop's-university",
                    country : "canada",
                    overview : ["Bishop's University, located in Lennoxville, Quebec, boasts a history of over 175 years, beginning as a college in 1843 and developing into a prominent, primarily undergraduate institution; founded by Bishop George Mountain, its initial purpose was to provide a liberal education for English-speaking Quebecers and to train Anglican clergy; however, over time, the university has broadened its academic programs, diversified its student population, and transitioned into a non-denominational institution. Bishop’s University, an English-language institution situated in Quebec, Canada, currently has an enrollment of over 2,900 students; the university offers more than 106 programs across 5 faculties within its 25 departments and is recognized as Canada’s leading undergraduate institution, boasting a 550-acre campus with over 25 buildings."],
                    academic : ["Bishop's University, a small, English-language liberal arts institution situated in Lennoxville, Quebec, Canada, offers a variety of undergraduate and graduate programs with a strong emphasis on experiential learning and a close-knit community, and is recognized for its academic rigor, intimate class sizes, and dedication to cultivating a genuine sense of community; key features of Bishop's University include its location in the Eastern Townships of Quebec, a picturesque region known for its vibrant cultural scene, and its focus as a predominantly residential, undergraduate university with a strong emphasis on liberal arts education."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800403/Canada_university_14_Bishop_s_academic_wxlhmu.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Social Sciences",
                        "Departments of Medicine",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
               
                          {
                    name: "Bow Valley College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800415/Canada_university_15_Bow_Valley_y0vzac.jpg",
                    slug: "bow-valley-college",
                    country : "canada",
                    overview : ["Bow Valley College, established in 1965, is a public, board-governed community college located in Calgary, Alberta, Canada, offering a wide array of educational programs encompassing certificates, diplomas, and degrees, with a strong emphasis on career-focused education and work-integrated learning; the college prioritizes student success through dedicated student services and programs that are developed in collaboration with industry leaders. Key features of Bow Valley College include its diverse program offerings in areas such as health care, community services, business, and creative technologies, among others; furthermore, the college demonstrates a strong commitment to its students by providing a comprehensive range of support services and resources designed to foster their success."],
                    academic : ["Bow Valley College provides a comprehensive range of academic programs, including certificates, diplomas, and university transfer courses, alongside specialized schools and departments, with a strong emphasis on practical, industry-relevant learning and the provision of resources for international students and individuals looking to enhance their English language proficiency."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744800420/Canada_university_15_Bow_Valley_academic_rsbcr4.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Social Sciences",
                        "Departments of Medicine",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
               
               
                 
                          {
                    name: "Lakeland College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744870393/Canada_university_16_lakeland_caghrt.jpg",
                    slug: "lakeland-college",
                    country : "canada",
                    overview : ["Lakeland College is a public, board-governed institution in Canada that operates under the authority of Alberta's Post-secondary Learning Act, and it holds the unique distinction of being Canada's only interprovincial college, delivering over 50 programs across its campuses in Vermilion and Lloydminster, as well as through online learning. The college places a strong emphasis on hands-on, collaborative learning methodologies, with a particular focus on integrating work experience into education and actively engaging in the recruitment of international students."],
                    academic : ["Lakeland College is renowned for providing excellent academic programs for both its international and domestic students, offering a diverse range of programs at both the undergraduate and postgraduate levels, with a total of more than 50 programs available, including popular options such as Bachelor of Commerce (B.Com), Bachelor of Science (B.Sc.), Bachelor of Arts (B.A.), and Bachelor of Agriculture (B.Agri)."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744870398/Canada_university_16_lakeland_academic_olvb4d.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Social Sciences",
                        "Departments of Medicine",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
               
                          {
                    name: "Medicine Hat College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744870463/Canada_university_17_Medicine_Hat_shulvz.jpg",
                    slug: "medicine-hat-college",
                    country : "canada",
                    overview : ["Medicine Hat College (MHC) is a public, board-governed, and comprehensive college serving the regions of southwestern Saskatchewan and southeastern Alberta in Canada, established in 1965; its main campus in Medicine Hat is attended by approximately 2,500 students, while another campus located in Brooks, about 100 km to the west, serves around 200 students, with a significant portion of international students coming from countries such as India (26.3%), Philippines (9.5%), China (5.2%), Japan (5.2%), Somalia (3.1%), Sudan (2.9%), Ethiopia (2.9%), and the United States (2.1%), among others; Medicine Hat College is supported by two libraries, including the Vera Bracken Library built in 2003 in the B wing of the Medicine Hat Campus, and another library at the Brooks Campus, collectively holding about 17,000 e-books, 100,000 non-print and print resources, and over 20,000 online periodicals, and the college is a member of various library associations, including the Southern Alberta Information Network, Library Association of Alberta, Alberta Library, and Canadian Library Association."],
                    academic : ["Students at Medicine Hat College have the opportunity to pursue bachelor's degrees in education, nursing, and business through collaborative partnerships with Mount Royal University and the University of Calgary, while applied degrees are also available in Visual Communications (Applied Arts) and Paramedic (Applied Health Science); furthermore, the college offers distinctive diploma programs such as Addictions Counseling, and graduates from diploma programs like Criminal Justice have the option to complete their degrees through Athabasca University."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744870471/Canada_university_17_Medicine_Hat_academic_tp3p7d.jpg",
                    faculties : [
                      "Departments of Paramedic",
                        "Departments of  Business",
                        "Departments of Nursing",
                        "Departments of Medicine",
                         "Departments of Art and Design",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
               
                          {
                    name: "Acsenda School of Management",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744871967/Canada_university_18_Acsenda_mdywgp.jpg",
                    slug: "acsenda-school-of-management",
                    country : "canada",
                    overview : ["Acsenda School of Management, an independent degree-granting institution situated in the heart of Vancouver's business district in Canada, has been offering undergraduate degrees under the written consent of the British Columbia Ministry for Advanced Education since 2004. Acsenda School of Management (ASM) is an independent post-secondary institution situated in the vibrant business district of Vancouver, offering competitive undergraduate degrees in both business administration and hospitality management; with a diverse student body representing over 50 countries, Acsenda places a strong emphasis on preparing students for the global job market by proudly adhering to a learning philosophy that specifically equips them for the international business climate."],
                    academic : ["The Bachelor of Hospitality Management program at Acsenda School of Management integrates business courses with international internships within the hospitality industry, effectively preparing graduates for successful management careers; uniquely, Acsenda incorporates certification processes directly into its learning curriculum, ensuring that students graduate with the necessary credentials and documentation to pursue their desired careers; furthermore, with a student body representing over 50 different countries, Acsenda places a high priority on the global job market, proudly employing a learning philosophy that specifically prepares students for the complexities of the international business climate."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744870541/Canada_university_18_Acsenda_academic_ghkjdr.png",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Social Sciences",
                        "Departments of Medicine",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                }, 
                             {
                    name: "Vancouver Community College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744871979/Canada_university_19_Vancouver_Community_rurfne.jpg",
                    slug: "vancouver-community-college",
                    country : "canada",
                    overview : ["Vancouver Community College, established in 1965 as a public community college in Vancouver, British Columbia, is a significant institution in the province's post-secondary sector, serving over 15,000 students, including a growing population of Aboriginal and International students, employing 1,200 individuals, and managing an annual budget of CAD 175 million, having been formed through the amalgamation of four local institutions in 1965; with an overall acceptance rate estimated to be around 60-75%, Vancouver Community College is considered somewhat selective for admissions and operates across three campuses: the Downtown campus situated at Hamilton (200 Block Dunsmuir), which is accessible via the Vancouver SkyTrain; the Broadway campus located at 1155 East Broadway; and the third campus, established in 2014, which houses the Heavy Metal Trades programs of Vancouver Community College."],
                    academic : ["Vancouver Community College provides a diverse range of academic offerings, including certificates, diplomas, and degree programs at both the undergraduate and postgraduate levels, specifically encompassing 3 bachelor's degrees, 2 advanced certificates, 2 post diplomas, 2 UT associate degrees, 93 certificates, 16 apprenticeships, 4 short certificates, and 31 diplomas."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744871982/Canada_university_19_Vancouver_Community_academic_deiad5.jpg",
                    faculties : [
                      "Departments of Engineering and Technology",
                        "Departments of  Business",
                        "Departments of Social Sciences",
                        "Departments of Medicine",
                         "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                },
                          {
                    name: "Alexander College",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744871157/Canada_university_20_Alexander_mze3et.jpg",
                    slug: "alexander-college",
                    country : "canada",
                    overview : ["Alexander College, a private post-secondary institution located in Burnaby, British Columbia, Canada, offers a diverse range of undergraduate degree and transfer programs, including University Transfer options as well as Associate of Arts and Associate of Science degrees; the college holds recognition and accreditation from the BC Ministry of Advanced Education, Degree Quality Assurance Board (DQAB), and the BC Education Quality Assurance (EQA) program, and proudly participates in the BC Transfer System, which is organized by the BC Council on Admissions and Transfer (BCCAT); Alexander College provides a wide selection of undergraduate courses across various disciplines such as biology, chemistry, commerce, computer science, economics, English, film studies, geography, mathematics, history, philosophy, psychology, physics, sociology, and French, in addition to its English for Academic Purposes program and various transfer pathways, including the Associate of Science degree, Associate of Arts degree, and general University Transfer."],
                    academic : ["Alexander College is situated in British Columbia, Canada, and provides a diverse array of undergraduate programs spanning various fields, including computer science, physics, chemistry, biology, commerce, film studies, philosophy, history, sociology, French, and many others."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744871159/Canada_university_20_Alexander_academic_h8tcds.jpg",
                    faculties : [
                       "Departments of Engineering and Technology",
                       "Departments of  Business",
                       "Departments of Social Sciences",
                       "Departments of Medicine",
                       "Departments of Accounting and Financial Management",
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                },

                {
                  name: "Fraser International College",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212274/Canada_university_21_Fraser_d3waxe.jpg",
                  slug: "fraser-international-college",
                  country : "canada",
                  overview : ["Fraser International College (FIC) is a private educational institution situated in Burnaby, British Columbia, Canada, located on the campus of Simon Fraser University (SFU). It serves as a dedicated pathway for international students, enabling them to undertake their initial year of university studies directly at FIC. This foundational year is strategically designed with programs that align closely with SFU's curriculum, a key feature stemming from FIC's affiliation and partnership with SFU. Upon successful completion of their studies at FIC and meeting the necessary academic requirements, students are guaranteed a seamless transfer into the second year of their chosen degree program at SFU, effectively providing a direct pathway to continuing their education at one of Canada's leading universities. FIC offers additional key features to support student success, including smaller class sizes for more personalized attention, comprehensive academic and personal support services, and access to university facilities."],
                  academic : ["Fraser International College offers a wide range of STEM-oriented first-year university courses and the foundation for progression to the second year of the Simon Fraser University School of Engineering Science degrees, encompassing eight academic departments within its scope."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212278/Canada_university_21_Fraser_academic_kutgol.jpg",
                  faculties : [
                    "Departments of Engineering and Technology",
                      "Departments of  Business",
                      "Departments of Arts and Humanities",
                      "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
              }, 
                  {
                      name: "Kwantlen Polytechnic University",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212284/Canada_university_22_Kwantlen_ruuxrf.jpg",
                  slug: "kwantlen-polytechnic-university",
                  country : "canada",
                  overview : ["Kwantlen Polytechnic University (KPU) is a public university in Surrey, British Columbia, Canada, founded in 1981, and stands as one of the largest institutions by enrollment in the province with a total of five locations across the Metro Vancouver district. Known for providing a variety of co-op education opportunities across many of its programs, KPU became an autonomous university in 1995 and holds the distinction of being Canada's only polytechnic university. Furthermore, KPU was appointed a member of the Association of Universities and Colleges of Canada (AUCC) on October 24th, 2008, and is also associated with several other prominent international and national organizations, including the International Association of Universities (IAU), the Association of Commonwealth Universities (ACU), Colleges and Institutes Canada (CICan), the Canadian University Press (CUP), and the Canadian Bureau for International Education (CBIE)."],
                  academic : ["KPU offers a diverse range of academic credentials including bachelor's degrees, certificates, associate degrees, diplomas, apprenticeships, and citation programs, covering over 120 areas of study. The university provides numerous vocational programs designed for workers and skilled technicians in fields such as accountancy, engineering, nursing, business administration, architecture, criminology, and medicine, with some of the most popular courses at the university spanning Arts, Business, Sciences, Continuing and Professional Studies, and Nursing."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212289/Canada_university_22_Kwantlen_academic_wwryiv.jpg",
                  faculties : [
                    "Departments of Engineering and Technology",
                      "Departments of  Business",
                      "Departments of Arts and Humanities",
                      "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
                  }, 
                    {
                     name: "North Island College",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212306/Canada_university_23_North_Island_mqjnlb.jpg",
                  slug: "north-island-college",
                  country : "canada",
                  overview : ["North Island College is a community college situated on Vancouver Island, British Columbia, Canada, which is dedicated to student success and proudly serves over 9,000 students annually through its four campuses, a learning centre, and via online and in-community learning. The college's four campuses are located in Campbell River, Comox Valley, Port Alberni, and Port Hardy, complemented by a learning centre in Ucluelet on the West Coast, providing accessibility to a wide range of learners across the region."],
                  academic : ["North Island College provides international students access to over 800 courses leading to certificates, diplomas, and degrees at both the undergraduate and postgraduate levels. Notably, the college offers postgraduate programs exclusively to international students in diverse subject areas including Arts, Science & Technology, Business, Tourism & Hospitality, Fine Arts, Digital Design & Development, Health & Human Services, and Trades & Technical fields."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212315/Canada_university_23_North_Island_academic_aroyai.jpg",
                  faculties : [
                    "Departments of Engineering and Technology",
                      "Departments of  Business",
                      "Departments of Arts and Humanities",
                      "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
              }, 
                   {
                     name: "Northern Lights College",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212328/Canada_university_24_Northern_Lights_ghq7ml.jpg",
                  slug: "northern-lights-college",
                  country : "canada",
                  overview : ["The history of Northern Lights College, a public college, dates back to 1974 when the provincial government established a Regional Advisory Community tasked with creating a community college in Northern BC, leading to NLC's formal opening in 1975 with its main campus in Dawson Creek, soon followed by the addition of locations in Fort Nelson and Cassiar. Growth continued with the construction of a new 14,000-square-foot building in Fort Nelson in 1981, the same year that Aircraft Maintenance Engineering and Early Childhood Education programs were introduced to the college's offerings in Dawson Creek, further expanding its educational scope before student housing opened in Fort St. John in 2006. An interesting fact about the college's identity is that its name, Northern Lights College, is a direct reference to the spectacular Aurora Borealis, which is a frequently observed natural phenomenon throughout the region, lending a unique regional connection to the institution."],
                  academic : ["Northern Lights College (NLC) offers a varied range of courses delivered both in-person and online, through which students can earn Diplomas, Certificates, and Associate degrees. For international students, the study areas available at NLC include Business, Education, Health & Human Services, Trades & Apprenticeships, Arts & Science, and Upgrading & Access; according to Shiksha Study Abroad, the college offers over 10 UG Diploma programs, over 5 UG Certificate programs, around 3 PG Diploma programs, and a few Associate degrees."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212332/Canada_university_24_Northern_Lights_academic_tumgak.jpg",
                  faculties : [
                    "Departments of Engineering and Technology",
                      "Departments of  Business",
                      "Departments of Arts and Humanities",
                      "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
              }, 
                  {
                   name: "Okanagan College",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212339/Canada_universsity_25_Okanagan_College_y3375s.jpg",
                  slug: "okanagan-college",
                  country : "canada",
                  overview : ["Okanagan College is a public, post-secondary institution in British Columbia, Canada, offering a wide range of programs and services. It operates as a large college with four main campuses located in Penticton, Kelowna, Vernon, and Salmon Arm, effectively serving a significant number of students each year across the Southern Interior of BC and providing a strong regional presence. As a publicly funded college, Okanagan College is an integral part of the British Columbia government's post-secondary education system."],
                  academic : ["Okanagan College presents international students with seven distinct programs, offering opportunities at both the undergraduate and graduate levels across a diverse range of study areas, including Business and Management Studies, Engineering, and IT and Software. Among these offerings, some of the most sought-after specializations that allow students to excel in their chosen fields include Information Systems, Civil Engineering, Mechanical Engineering, and Digital Marketing."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212344/Canada_university_25_Okanagan_College_academic_slarbm.jpg",
                  faculties : [
                    "Departments of Engineering and Technology",
                      "Departments of  Business",
                      "Departments of Arts and Humanities",
                      "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
              }, 

                   {
                   name: "International College of Manitoba",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212377/Canada_university_26_International_College_xkq9od.jpg",
                  slug: "international-college-of-manitoba",
                  country : "canada",
                  overview : ["The International College of Manitoba (ICM) serves as a dedicated pathway for international students seeking a degree from the University of Manitoba (which was established in 1877), with ICM itself having been established in 2008 as a partner institution located directly on the University of Manitoba campus in the vibrant city of Winnipeg, Canada. ICM is designed to provide international students with the necessary support and guidance to commence their degree studies within a tailored learning environment before transitioning to the university. Regarding its academic offerings, ICM primarily focuses on providing pathways to undergraduate degrees at the University of Manitoba through its University Transfer Program Stage II, which is equivalent to the first year of a University of Manitoba degree, and also offers a University Transfer Program Stage I, serving as a Foundation or Pre-Studies program. Approximately 7 UTP Stage II programs are available at ICM Canada, covering a range of study areas including Engineering, Arts, Business, Science, and Environment, Earth, and Resources, among others."],
                  academic : ["UTP Stage II at the International College of Manitoba is equivalent to the first year of a bachelor's degree program at the University of Manitoba, and upon successful completion of this stage, students who meet the necessary academic requirements become eligible to progress directly into the second year of their degree studies at the University of Manitoba. Based on available information, graduates of ICM Canada have gone on to study in various fields including Computer Science, Business/Commerce, Physical Sciences, Economics, Psychology, and Business Administration and Management, among others; it is also important to note that ICM does not offer part-time programs."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212386/Canada_university_26_International_College_academic_kpuama.jpg",
                  faculties : [
                    "Departments of Engineering and Technology",
                      "Departments of  Business",
                      "Departments of Arts and Humanities",
                      "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
              },

                   {
                   name: "Red River College",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212449/Canada_university_27_Red_River_ap0swh.jpg",
                  slug: "red-river-college",
                  country : "canada",
                  overview : ["Located in Winnipeg, Red River College Polytechnic (RRC Polytech) is a public polytechnic college established in 1938, which has grown to become Manitoba's largest institute of applied learning and research, serving over 21,000 students annually across its multiple campuses and learning centres. RRC Polytech offers a vast array of over 150 full- and part-time programs, encompassing various credentials including certificates, diplomas, advanced diplomas, and degrees, across diverse fields of study that include Business and Management, Engineering, and Digital Technology, with specific areas of focus such as Electrical Engineering, International Business, and IT and Systems reflecting some of the specializations available. Within its program portfolio, the college offers undergraduate diploma courses, some with a duration of around 30 months, and postgraduate diploma courses, some approximately 14 months in length, providing students with a wide range of applied learning opportunities designed to meet industry demands."],
                  academic : ["Red River College Polytechnic offers a focused selection of 6 courses spanning three popular streams: Business and Management Studies, Engineering, and Animation, with specializations available in areas such as Electrical Engineering, International Business, and IT and Systems among its four specializations. At the undergraduate level, the college provides 3 UG Diploma courses designed to be completed over a period of 30 months, while for those pursuing graduate studies, there are 3 PG Diploma courses available, typically requiring 14 months to complete."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212432/canada_university_27_Red_River_academic_owgden.jpg",
                  faculties : [
                    "Departments of Engineering and Technology",
                      "Departments of  Business",
                      "Departments of Arts and Humanities",
                      "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
              },

                   {
                   name: "Mount Saint Vincent University",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212462/Canada_university_28_Mount_Saint_krbju7.jpg",
                  slug: "mount-saint-vincent-university",
                  country : "canada",
                  overview : ["Mount Saint Vincent University (MSVU), established in 1873, is home to around 4,500 students representing over 60 countries and offers a variety of academic programs, including a number of undergraduate options and more than 30 graduate programs. According to various unofficial sources, Mount Saint Vincent University has an acceptance rate of 93%, suggesting that admission to the university is relatively easier; prospective students can expect tuition fees for undergraduate programs to range between INR 6 lakh and INR 12 lakh, while graduate program tuition fees are estimated to be between INR 5 lakh and INR 12 lakh."],
                  academic : ["Mount Saint Vincent University (MSVU) offers a wide array of both undergraduate and graduate programs, with undergraduate options spanning Arts, Science, and Education, alongside various professional programs such as Business Administration, Public Relations, and Tourism and Hospitality Management. For postgraduate studies, MSVU provides more than 30 graduate degrees in fields including Applied Human Nutrition, Public Relations, Communication, and Education, with some of the particularly popular programs at the university being the MSc in Applied Human Nutrition, the Master of Public Relations, and the BSc in Computer Science."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212468/Canada_university_28_Mount_Saint_academic_bd9kpp.png",
                  faculties : [
                    "Departments of Engineering and Technology",
                      "Departments of  Business",
                      "Departments of Arts and Humanities",
                      "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
              },

                   {
                   name: "Brock University",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212473/Canada_university_29_Brock_University_kpvuc9.jpg",
                  slug: "brock-university",
                  country : "canada",
                  overview : ["Brock University stands as one of Canada’s leading public post-secondary institutions, officially opened in September 1964 following a period of dedicated meetings and fundraising efforts. Situated within the historic Niagara region, the university provides students with the advantages of a young and modern academic environment located in a safe, community-minded city renowned for its beautiful natural surroundings. Brock is particularly focused on enhancing students' career prospects through valuable co-op and service learning opportunities, designed to provide maximum exposure to their chosen fields of study. The university boasts a dedicated faculty of 600 members, including twelve distinguished 3M teaching fellowship award winners and eight Canada Research Chairs, contributing to a rich academic environment. Furthermore, Brock University demonstrates a strong commitment to student support by distributing more than $11 million annually in awards and bursaries through various initiatives, helping to make education more accessible."],
                  academic : ["Brock University offers over 130 programs, with more than 70 undergraduate and 50 graduate options available across its seven faculties; the graduate programs span various disciplines including Accountancy, Biological Sciences, Biotechnology, Chemistry, Computer Sciences, and Geography, among others."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212478/Canada_university_29_Brock_University_academic_rpambl.jpg",
                  faculties : [
                    "Faculty of Applied Health Sciences",
                      "Faculty of Education",
                      "Faculty of Humanities",
                      "Faculty of Mathematics and Science",
                       "Faculty of Social Sciences",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
              },

                   {
                   name: "Selkirk College",
                  image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212497/Canada_university_30_Selkirk_nvc03c.jpg",
                  slug: "selkirk-college",
                  country : "canada",
                  overview : ["Selkirk College, a public post-secondary learning institute established in 1966 and located amidst the picturesque landscape of southern British Columbia, Canada, operates across eight campus locations: the Castlegar Campus, Silver King Campus, Tenth Street Campus, Victoria Street Campus, Grand Forks Campus, Trail Campus, Kaslo Learning Centre, and Nakusp Learning Centre, with its three main campuses situated in Castlegar, Nelson (comprising the Silver King and Tenth Street Campuses), and Trail. The college serves a substantial student body of over 2,800, including approximately 700 international students as of 2023, and with an acceptance rate of around 50% to 55%, its admission process is considered moderately selective. Notably, Selkirk College boasts several prominent alumni, such as novelist Roz Nay, musician Kiesza, and record producer Mitch Merrett."],
                  academic : ["Selkirk College offers a diverse range of academic credentials, including UG Diplomas, PG Diplomas, and various Certificate and Associate programs, with over 80 academic programs available to international students as per their brochure, covering main study areas such as Business, Hospitality & Tourism, Health & Human Services, The Arts, Environment & Geomatics, Industry & Trades Training, and Arts & Sciences. The college provides PG Diploma courses in fields like Accounting, Hospitality, Culinary Management, Business, and Nursing, and it also offers several Co-op Education programs, such as Forestry Technology, Geographic Information Systems, and Postgraduate Accounting, which are designed to provide students with practical career preparation."],
                  academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745212501/Canada_university_30_Selkirk_academic_beoyyz.jpg",
                  faculties : [
                    "Departments of Engineering and Technology",
                      "Departments of  Business",
                      "Departments of Arts and Humanities",
                      "Departments of Health Sciences",
                       "Departments of Accounting and Financial Management",
                  ],
                  facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                  affilationRecognition : ["COU","CARL","AUCC","University of Western Ontario"],
              },


                //uk

                {
                    name: "Coventry University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744612416/Uk_university_1_Coventry_duyvaa.jpg",
                    slug: "coventry-university",
                    country : "uk",
                    overview : ["Coventry University, a rapidly expanding higher education institution situated in Coventry, UK, established in 1992 as a public research university in England, hosts a substantial student body exceeding 38,000 across its UK campuses, including a significant international presence of over 13,000 students annually drawn from 160 nations to its city centre location; this institution's commitment to excellence is further underscored by prestigious accolades such as The Queen’s Award for Enterprise, the UK’s most esteemed business honor, recognizing its extensive global network of partnerships with institutions and companies, and a Gold award in the Teaching Excellence Framework (TEF 2023) for its exceptional student experience and outcomes, alongside its recognition as #1 for Student:Staff Ratio in the Midlands according to the Complete University Guide 2025."],
                    academic : ["Coventry University stands as a contemporary and progressive institution, globally recognized for its superior teaching standards and significant research contributions, providing an extensive selection of undergraduate and postgraduate programs encompassing diverse fields such as engineering, design, business, and the arts."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744612689/Uk_university_1_Coventry_academic_zanip2.jpg",
                    faculties : [
                        "Department of Business, Management, and Marketing",
                        "Department of Engineering and Construction",
                        "Department of Biological, Food and Forensic Sciences",
                        "Department of Art, Design, Film, and Fashion",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
                
                
                       {
                    name: "London South Bank University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744614766/Uk_university_2_London_South_oolhvv.jpg",
                    slug: "london-south-bank-university",
                    country : "uk",
                    overview : ["The central London location of London South Bank University offers the significant advantage of easy access to major landmarks, prominent business centers, and diverse cultural attractions, complemented by the university's strong industry connections cultivated through a long-standing history of collaboration with local businesses and an extensive network of partnerships; furthermore, LSBU maintains a strong focus on employability, ensuring its curriculum is meticulously designed to furnish students with the essential skills and practical experience demanded by the contemporary professional landscape, and it also provides a range of flexible learning options, encompassing full-time, part-time, and online courses to accommodate diverse student needs and schedules."],
                    academic : ["London South Bank University (LSBU) provides a comprehensive array of undergraduate and postgraduate programs characterized by their emphasis on practical, vocationally oriented education and a strong commitment to enhancing student employability; the university's academic structure is organized into three Colleges, each comprising several constituent Schools, a framework designed to foster improved strategic leadership and collaborative initiatives; additionally, LSBU boasts a vibrant and active research community, encompassing over 200 academics engaged in a wide spectrum of research centers and groups."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744614770/Uk_university_2_London_South_academic_utk0o3.jpg",
                    faculties : [
                        "Department of Business, Management, and Marketing",
                        "Department of Engineering and Construction",
                        "Department of Biological, Food and Forensic Sciences",
                        "Department of Art, Design, Film, and Fashion",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
                
                     {
                    name: "University of Sunderland",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744614781/Uk_university_3_Sunderland_dq4mms.jpg",
                    slug: "university-of-sunderland",
                    country : "uk",
                    overview : ["The University of Sunderland, in partnership with OnCampus, provides an Integrated Confirmation of Acceptance for Studies (iCAS) program specifically designed to ease the visa application process for international students, enabling them to complete their initial year of study at OnCampus before progressing to their chosen degree program at the University of Sunderland; this iCAS program offers the significant advantage of eliminating the necessity for students to reapply for their UK student visa following their first year, thereby simplifying the overall visa acquisition process, and additionally grants students enrolled in the program the opportunity to engage in part-time work, up to 20 hours per week, throughout their academic journey."],
                    academic : ["The University of Sunderland delivers a comprehensive selection of academic programs spanning undergraduate and postgraduate levels across diverse fields such as business, media, engineering, and health sciences, and is recognized for its emphasis on developing practical skills, with numerous courses holding accreditation from professional organizations; furthermore, the University of Sunderland fosters a significant international community, welcoming students from more than 100 countries."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744614786/Uk_university_3_Sunderland_academic_drrm62.jpg",
                    faculties : [
                        "Department of Business, Management, and Marketing",
                        "Department of Engineering and Construction",
                        "Department of Biological, Food and Forensic Sciences",
                        "Department of Art, Design, Film, and Fashion",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
                
                     {
                    name: "Aston University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744614798/Uk_university_4_Aston_c2monr.jpg",
                    slug: "aston-university",
                    country : "uk",
                    overview : ["Aston University, a distinguished public research institution situated in Birmingham, England, has established a strong reputation for its career-centric educational philosophy and robust connections with industry; originating in 1895, the institution has progressed from a technical school to a prestigious university with a globally acknowledged emphasis on graduate employability and impactful research; its central city location provides a vibrant environment for a diverse array of undergraduate and postgraduate programs, many of which have achieved high international rankings, further supported by key features such as a strong career focus that prioritizes real-world experience and preparation, leading to graduates with notable earning potential, and a commitment to research and innovation that contributes significantly to global advancements."],
                    academic : ["Aston University encompasses five distinct schools – Aston Business School, the College of Engineering and Physical Sciences, the College of Health and Life Sciences, the College of Business and Social Sciences, and the Aston Medical School – providing a comprehensive spectrum of programs across all academic levels, including a notable offering of 30 Joint Honours degree options."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744614809/Uk_university_4_Aston_academic_ao1lj4.jpg",
                    faculties : [
                        "Department of Business, Management, and Marketing",
                        "Department of Engineering and Construction",
                        "Department of Biological, Food and Forensic Sciences",
                        "Department of Art, Design, Film, and Fashion",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
                
                     {
                    name: "University of Central Lancashire",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744614822/Uk_university_5_Lancashire_cnevr3.jpg",
                    slug: "university-of-central-lancashire",
                    country : "uk",
                    overview : ["The University of Central Lancashire (UCLan) stands as a contemporary and globally-oriented university situated in Preston, Lancashire, England, with its origins tracing back to 1828 when it was established as the Institution for the Diffusion of Knowledge, subsequently evolving through various names before attaining university status in 1992; recognized for its substantial student and staff community, which includes a significant cohort of international students and numerous collaborative international partnerships, UCLan operates its primary campus in Preston, alongside additional locations in Burnley, Westlakes, and Cyprus; as one of the UK's largest universities, it boasts a diverse student body and a prominent international focus, offering a comprehensive array of undergraduate and postgraduate courses and maintaining a recognized research environment."],
                    academic : ["The University of Central Lancashire (UCLan) provides a wide-ranging academic portfolio that strongly emphasizes practical application and international collaboration, featuring over 350 undergraduate and nearly 200 postgraduate courses, many of which integrate valuable work experience and established industry partnerships; furthermore, UCLan fosters a strong research environment where its staff actively collaborate with prominent international organizations and institutions."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744614827/Uk_university_5_Lancashire_academic_gn1ejo.jpg",
                    faculties : [
                        "Department of Business, Management, and Marketing",
                        "Department of Engineering and Construction",
                        "Department of Biological, Food and Forensic Sciences",
                        "Department of Art, Design, Film, and Fashion",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
                
                       {
                    name: "Kingston University London",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744616306/Uk_university_6_Kingston_b8caym.jpg",
                    slug: "kingston-university-london",
                    country : "uk",
                    overview : ["Established in 1899, Kingston University fosters a vibrant and multicultural environment, currently hosting over 20,000 students originating from 140 different countries, and it distinguishes itself as the UK's foremost university for Future Skills, ensuring that its graduates and academic staff are highly valued for their advanced skills, comprehensive knowledge, and capacity for innovation; the university is deeply committed to enhancing the life prospects of its students, supporting the professional aspirations of its staff, and amplifying its influence across industry, policy-making bodies, and various professions, all with the overarching aim of contributing to a sustainable future encompassing social, economic, and environmental dimensions."],
                    academic : ["Kingston University London, a public research institution, provides a comprehensive array of undergraduate and postgraduate programs and has garnered recognition for its strong dedication to high-quality teaching, impactful research, and successful graduate employment outcomes; the university is particularly noted for its commitment to equipping students with future-oriented skills and the essential knowledge required to thrive in the contemporary 21st-century professional landscape."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744616310/Uk_university_6_Kingston_academic_ao8bo9.jpg",
                    faculties : [
                        "Department of Accounting and Finance",
                        "Department of 3D Design Innovation BA",
                        "Department of Aerospace Engineering",
                        "Department of Mental Health Nursing ",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","AACSB","European University Association"],
                },
    
                       {
                    name: "The Courtauld Institute of Art",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744618382/Uk_university_7_Courtauld_wkt5ep.avif",
                    slug: "university-of-central-lancashire",
                    country : "uk",
                    overview : ["The Courtauld Institute of Art stands as a globally esteemed center dedicated to the academic study of art history and conservation, simultaneously functioning as a prominent public gallery; established in 1932, it uniquely integrates teaching, research, and a remarkable art collection, operating as an independent college within the University of London and situated in the historic Somerset House in London; a key aspect of The Courtauld is its academic excellence, serving as a leading institution for both teaching and research in art history, with a particular emphasis on its graduate-level offerings, including MA and PhD programs, alongside specialized programs in art curating and conservation."],
                    academic : ["The Courtauld Institute of Art holds a distinguished position as a premier international institution dedicated to the study of art history, conservation, and curating, providing a comprehensive spectrum of academic programs spanning undergraduate to postgraduate levels and earning acclaim for its research-intensive atmosphere and distinguished faculty; as a specialized university within the University of London, The Courtauld concentrates its academic focus on the historical study and conservation of art and architecture."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744618397/Uk_university_7_Courtauld_academic_zzhcnz.jpg",
                    faculties : [
                        "Department of BA History of Art",
                        "Department of MA History of Art",
                        "Department of MA Art and Business",
                        "Department of PhD Programme",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","AACSB","CABS"],
                },
    
                       {
                    name: "University of Hull",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744619258/Uk_university_8_Hull_lsj6dj.jpg",
                    slug: "university-of-hull",
                    country : "uk",
                    overview : ["Established in 1927, the University of Hull stands as a distinguished public research institution situated in the city of Kingston upon Hull, England, holding the esteemed position of being the 14th oldest university in the country and providing a comprehensive array of both undergraduate and postgraduate academic programs; the university has cultivated a strong reputation for its research prowess across a multitude of disciplines, including notable expertise in maritime history, the cutting-edge field of nanotechnology, and critical studies in social justice; furthermore, Kingston upon Hull is recognized as a welcoming and economically accessible city for students, fostering a dynamic campus environment complemented by a variety of resources specifically tailored to support student life and academic pursuits."],
                    academic : ["The University of Hull stands as a contemporary UK institution recognized for its commitment to academic excellence, the success of its students, and a strong emphasis on research; the university provides a comprehensive spectrum of undergraduate and postgraduate programs encompassing a diverse range of disciplines, including business, engineering, health, humanities, social sciences, and natural sciences; furthermore, the University of Hull demonstrates significant strength in research, actively contributing to addressing global challenges and fostering societal advancements through its scholarly endeavors."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744619262/Uk_university_8_Hull_academic_flhyc1.jpg",
                    faculties : [
                        "Department of Accounting and Financial Management",
                        "Department of Biomedical Engineering",
                        "Department of Computer Science (Artificial Intelligence)",
                        "Department of Biochemistry",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
                
                      {
                    name: "University of Aberdeen",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744620661/Uk_university_10_Aberdeen_jcbuu6.jpg",
                    slug: "university-of-aberdeen",
                    country : "uk",
                    overview : ["Established in 1495, the University of Aberdeen stands as a distinguished public research institution located in Aberdeen, Scotland, holding the esteemed distinction of being the third oldest university in Scotland and the fifth oldest in the United Kingdom; the university provides a comprehensive spectrum of undergraduate and postgraduate programs, characterized by a significant emphasis on cutting-edge research and extensive international collaborations; its long and rich history, dating back to 1495, underscores a profound legacy of scholarly pursuit and academic excellence, further complemented by its substantial global reach, evidenced by a diverse community of students and staff representing over 130 nationalities; moreover, the University of Aberdeen is widely recognized for its impactful research contributions, particularly within key fields such as Health Sciences, Energy studies, and Environmental Studies."],
                    academic : ["The University of Aberdeen stands as a distinguished public research university in Scotland, celebrated for its rich historical legacy, commitment to academic excellence, and pronounced international perspective; the university provides a comprehensive array of undergraduate and postgraduate programs, with a strong emphasis on fostering both research capabilities and graduate employability; furthermore, the University of Aberdeen maintains a significant global presence, attracting a diverse community of students and staff from over 120 countries and actively engaging in numerous international collaborations and partnerships."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744620666/Uk_university_10_Aberdeen_academic_ydv5qp.jpg",
                    faculties : [
                        "Department of Accounting and Financial Management",
                        "Department of Biotechnology",
                        "Department of Computing And It",
                        "Department of Divinity",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
                
                      {
                    name: "University of Huddersfield",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744620639/Uk_university_9_Huddersfield_j4pawo.jpg",
                    slug: "university-of-huddersfield",
                    country : "uk",
                    overview : ["The University of Huddersfield's International Study Centre (ISC), operated by Study Group, offers comprehensive degree preparation courses specifically designed to facilitate international students' transition into the UK higher education system; conveniently located on the university's main Queensgate campus, the ISC provides students with immediate access to the full range of university resources, fostering an immersive university experience from the outset; the ISC offers a variety of pathway programs tailored to different academic levels, including the International Foundation Year for undergraduate entry, the International Year One which is equivalent to the first year of an undergraduate degree, and the Pre-Master's program for postgraduate studies, all strategically designed to help students meet the University of Huddersfield's specific entry requirements, and importantly, students enrolled in the ISC benefit from access to the university's library, IT facilities, dedicated study spaces, and crucial support services such as International Learning Support."],
                    academic : ["The University of Huddersfield's International Study Centre (ISC) offers essential pathway programs tailored for international students who require additional academic preparation to meet the university's entry criteria for both undergraduate and postgraduate degrees, providing preparatory courses such as the International Foundation Year and International Year One, which are specifically designed to cultivate the necessary skills and foundational knowledge required for successful progression into their chosen degree programs at the university."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744620645/Uk_university_9_Huddersfield_academic_ok8tfp.jpg",
                    faculties : [
                        "Department of Accounting and Financial Management",
                        "Department of Biomedical Engineering",
                        "Department of Computer Science (Artificial Intelligence)",
                        "Department of Biochemistry",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
                   
                      {
                    name: "Cardiff University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744623514/Uk_university_11_Cardiff_wl2r6h.jpg",
                    slug: "cardiff-university",
                    country : "uk",
                    overview : ["Cardiff University, established in 1883 and located in Cardiff, Wales, is a distinguished public research university renowned for its academic excellence and significant global reputation, particularly in the realm of research; as the sole Welsh institution within the prestigious Russell Group, a collective of leading research-intensive universities in the UK, Cardiff University is recognized for its high academic standards and intense research activity; the university hosts a substantial student body, including a considerable number of international students, and provides a comprehensive array of programs and degrees; its membership in the Russell Group underscores its commitment to research intensity and academic rigor, while a significant proportion of its research is acknowledged as world-leading or internationally excellent, positioning it among the top UK universities for research quality and impact; furthermore, with a large and diverse international student population and extensive collaborative partnerships with universities across the globe, Cardiff University cultivates a rich and vibrant international environment."],
                    academic : ["Cardiff University stands as a prominent research-intensive institution in the UK and holds the distinction of being the sole Russell Group member in Wales, widely recognized for its global academic standing and unwavering commitment to excellence; the university demonstrates exceptional strengths in education, research, and innovation, underpinned by a robust international presence and a substantial social and economic influence, particularly within Wales; notably, Cardiff University's research endeavors are considered to be at the forefront globally, with an impressive 90% acknowledged as either world-leading or internationally excellent."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744623522/Uk_university_11_Cardiff_academic_meakct.jpg",
                    faculties : [
                        "Department of Accounting and Financial Management",
                        "Department of Architecture, Building & Planning",
                        "Department of Law",
                        "Department of Economics and Social Studies",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
    
                    {
                    name: "Durham University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744624962/Uk_university_13_Durham_qttmpf.png",
                    slug: "durham-university",
                    country : "uk",
                    overview : ["Established in 1832 and formally founded in 1837, Durham University is a distinguished public research university located in Durham, England, operating as a collegiate university with its academic and social structures organized around 17 individual colleges; renowned for its strong academic standing, historic location, and dedication to the student experience, Durham University provides a comprehensive array of undergraduate and postgraduate programs across its four faculties: Arts and Humanities, Business, Social Sciences, and Engineering and Science; a key feature of Durham is its collegiate system, where students live and learn within a college, cultivating a strong sense of community and belonging; furthermore, Durham's historic city center, encompassing the university's castle and cathedral, is a UNESCO World Heritage site, offering a uniquely rich and culturally significant environment; globally recognized for its academic excellence, Durham University consistently ranks among the top 100 universities worldwide."],
                    academic : ["Durham University stands as a distinguished public research institution in Durham, England, celebrated for its robust academic reputation and distinctive collegiate structure; as a globally recognized hub for exceptional teaching and research, it provides a comprehensive spectrum of undergraduate and postgraduate programs; the university's dedication to impactful research and its focus on tackling pressing global issues have resulted in significant contributions and advancements across numerous academic disciplines."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744624966/Uk_university_13_Durham_academic_ut5k18.png",
                    faculties : [
                        "Department of Accounting Analytics and Sustainability",
                        "Department of Behavioural Economics",
                        "Department of Business Analytics",
                        "Department of Energy Engineering Management",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
    
                     {
                    name: "Lancaster University",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744625663/Uk_university_14_Lancaster_w5njvx.jpg",
                    slug: "lancaster-university",
                    country : "uk",
                    overview : ["Lancaster University, established in 1964 and located in Lancaster, Lancashire, England, is a highly regarded public research university recognized for its consistently high rankings and strong reputation in research; the university fosters a vibrant and diverse community comprising students from over 100 countries and is distinguished by its unique collegiate system, wherein students are affiliated with one of nine distinct colleges; in addition to its academic strengths, Lancaster is known for its picturesque campus setting and its convenient proximity to the scenic Lake District and major urban centers such as Manchester and Liverpool; its consistent placement among the top 15 universities in the UK, coupled with its strong performance in global league tables, underscores its academic standing, while its collegiate system provides students with valuable support networks, a strong sense of community, and a wide array of social activities."],
                    academic : ["Lancaster University stands as a highly-ranked institution within the UK, celebrated for its robust academic reputation, impactful global research endeavors, and pioneering teaching methodologies; recognized as a research-intensive university, it has also achieved a Gold rating in the Teaching Excellence Framework (TEF); the university provides a comprehensive spectrum of academic opportunities, encompassing undergraduate, postgraduate, and various professional development courses."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744625668/Uk_university_14_Lancaster_academic_sd4xxl.jpg",
                    faculties : [
                        "Department of Accounting and Financial Management",
                        "Department of Chemical Engineering",
                        "Department of Business Analytics",
                        "Department of Biochemistry",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
    
                     {
                    name: "University of Leeds",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744626381/Uk_university_15_Leeds_nrffrp.jpg",
                    slug: "university-of-leeds",
                    country : "uk",
                    overview : ["The University of Leeds, established in 1904 and situated in Leeds, West Yorkshire, England, is a distinguished public research university renowned for its global standing in both teaching and research; as a member of the esteemed Russell Group, comprising 24 of the UK's leading research-intensive universities, Leeds demonstrates a strong commitment to high-quality research and scholarly pursuits, with a significant emphasis on achieving excellence in both teaching and research endeavors; the university is home to a large and diverse student body, encompassing over 38,000 students from across the globe, fostering a vibrant and multicultural atmosphere on its campus, which is conveniently located within the lively and multicultural city center of Leeds."],
                    academic : ["The University of Leeds, a large and research-intensive institution belonging to the prestigious Russell Group, holds a strong global reputation for its excellence in both teaching and research; established in 1904, it boasts a diverse student population exceeding 39,800 individuals, including a substantial number of international students who contribute to its vibrant academic community; the university places a significant emphasis on research-based learning and provides a comprehensive array of academic opportunities, encompassing undergraduate, postgraduate, and professional courses, with the added flexibility of online study options."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744626385/Uk_university_15_Leeds_academic_zwlq0i.jpg",
                    faculties : [
                        "Department of Accounting and Financial Management",
                        "Department of Biomedical Engineering",
                        "Department of Computer Science (Artificial Intelligence)",
                        "Department of Biochemistry",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },
    
                     {
                    name: "University of Lincoln",
                    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744627059/Uk_university_16_Lincoln_y7rf0p.jpg",
                    slug: "university-of-lincoln",
                    country : "uk",
                    overview : ["The University of Lincoln, a public research institution established in 1996 and located in the historic city of Lincoln, England, is recognized for its strong emphasis on both teaching and research, with particular expertise in the agri-food sector, and has been steadily building its international reputation; its centrally situated campus on the picturesque Brayford Pool waterfront provides a contemporary and student-centric environment with convenient access to various amenities; the university is characterized by its commitment to high-quality teaching and impactful research, as well as its collaborative relationships with employers, notably within the agri-food industry; it fosters a diverse and international student community, offering a vibrant campus life with a strong focus on student wellbeing and comprehensive career support services; furthermore, the University of Lincoln boasts modern facilities, including the extensively invested Brayford Pool Campus."],
                    academic : ["The University of Lincoln, a public research institution situated in Lincoln, England, traces its origins back to 1861, subsequently achieving university status in 1992 and adopting its current name in 2001, with its primary campus centrally located in the heart of the historic city of Lincoln, nestled alongside the scenic Brayford Pool waterfront."],
                    academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744627063/Uk_university_16_Lincoln_academic_mpqhsu.png",
                    faculties : [
                        "Department of Accounting and Financial Management",
                        "Department of Biomedical Engineering",
                        "Department of Computer Science (Artificial Intelligence)",
                        "Department of Biochemistry",
                        
                    ],
                    facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                    affilationRecognition : ["CII","ACCA","NQA","CABS"],
                },   

                {
                  name: "University of Gloucestershire",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213360/Uk_university_16_University_of_Gloucestershire_y75uc7.jpg",
                 slug: "university-of-gloucestershire",
                 country : "uk",
                 overview : ["The University of Gloucestershire is a public university located in Gloucestershire, operating across three campuses, with two main sites situated in Cheltenham and Gloucester. Ranked #97 by the Complete University Guide UK in 2024, the university has an acceptance rate of 27%. Its history traces back to the 19th century with the merger of two educational provisions, eventually gaining university status in 2001. The estimated tuition fee for international undergraduate students is INR 16 lakh, while postgraduate students can expect fees around INR 15 lakh. Currently, the university is home to approximately 12,000 students and 1,500 staff members and is guided by a strategic plan for 2022-27 which outlines its goals and ambitions."],
                 academic : ["The University of Gloucestershire offers a range of undergraduate courses including Accounting and Law, Computing, Journalism, Business Management, Fine Arts, Humanities, Geography, Biology, Social Science, Education, and Sports, while postgraduate courses are available in the areas of Accounting and Law, Business and Management, Computing, IT and Multimedia, Health and Social Care, Education, Humanities, Leisure, Media, Art and Design, Natural and Social Sciences, and Sport and Exercise."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213356/Uk_university_16_University_of_Gloucestershire_academic_ozpzxg.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                    {
                  name: "University of Stirling",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213475/Uk_university_17_Stirling_oxa37n.jpg",
                 slug: "university-of-stirling",
                 country : "uk",
                 overview : ["The University of Stirling, a public university founded in 1967 and located in Stirling, UK, has recently achieved prestigious AACSB accreditation, recognizing the excellence of its Business education and positioning its Management School among the top 6% of Business schools globally. According to the International Student Barometer 2022, a high percentage of international students, specifically 91%, reported overall satisfaction with their experience at the university, which is further highlighted by its top rankings for campus environment, placing 1st in the UK and among the top 3 worldwide. The quality of research at the University of Stirling is also notable, with over 80% deemed world-leading or internationally excellent as per REF 2021, contributing to its placement among the Top 100 Universities in the UK for 2024. Globally, the University of Stirling is home to over 18,500 students, comprising more than 11,000 undergraduate and over 6,000 postgraduate students, with international students making up a significant portion, exceeding 30% of the total student body."],
                 academic : ["The University of Stirling offers an extensive selection of more than 300 courses, including over 170 undergraduate and more than 90 postgraduate options. Among international students, popular programs include the MBA, MS in Business Analytics, and MSc in Business and Management, with study areas at the university spanning Accounting and Finance, Economics, Computer Science and Software Engineering, Humanities, Law, and various other disciplines."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213563/Uk_university_17_Stirling_academic_hhdudr.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                    {
                  name: "Newcastle University",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213521/Uk_university_18_Newcastle_glnljc.jpg",
                 slug: "newcastle-university",
                 country : "uk",
                 overview : ["Founded in 1963, Newcastle University stands as a public research university situated in Newcastle upon Tyne, North East England, United Kingdom. Its Business School is particularly distinguished by holding triple accreditations from the Association to Advance Collegiate Schools of Business (AACSB), the European Quality Improvement System (EQUIS), and the Association of MBAs (AMBA), placing it among the top 1% of business schools globally. According to the Shiksha Popular Rankings, Newcastle University is currently ranked #28 in the UK."],
                 academic : ["Newcastle University, with its three academic faculties, offers an extensive array of programs, including more than 185 undergraduate and over 300 postgraduate options spanning across more than 50 leading disciplines of study; based on historical alumni data, some of the popular streams pursued at the university include Mathematics, History, Business Administration & Management, Geography, and Economics."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213525/Uk_university_18_Newcastle_academic_cbihfu.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                    {
                  name: "University of York",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213588/Uk_university_19_York_rx3xeh.jpg",
                 slug: "university-of-york",
                 country : "uk",
                 overview : ["The University of York is recognized as a leading UK university with a strong emphasis on high-quality teaching, impactful research, and innovation, notably excelling in the areas of Arts and Humanities and Social Sciences. As a proud member of the prestigious Russell Group, the university consistently achieves high rankings in both global and national university league tables. Beyond its academic reputation, the University of York offers a vibrant campus life, distinguished by its unique college system, and is situated in the beautiful and safe city of York. The institution is deeply committed to academic excellence, focusing on delivering high-quality teaching and research that encourages the development of independent critical thinkers among its students."],
                 academic : ["The University of York is a highly prestigious institution in the United Kingdom, recognized as part of the esteemed Russell Group of universities, and maintains a strong global presence by consistently ranking among the top 150 universities worldwide. The university is a large and diverse academic community, home to over 20,000 students, which includes a significant international population of 5,500 students representing more than 150 countries."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213598/Uk_university_19_York_academic_ukkn2a.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                    {
                  name: "University of Brighton",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745214179/Uk_university_20_Brighton_iagjaj.jpg",
                 slug: "university-of-brighton",
                 country : "uk",
                 overview : ["Founded in 1859, the University of Brighton is a public university located in Brighton, United Kingdom, recognized as one of the top-ranked universities not only in the UK but also among the best globally, having been placed in the #771-780 range in the QS World University Rankings 2024. For international students seeking admission, the university requires meeting specific English proficiency and entry requirements, and with an acceptance rate of 72% for the class of 2027, securing a place is indicated to be not highly competitive. The University of Brighton's placement services are dedicated to providing international students with opportunities to gain real-world knowledge and develop transferable skills highly valued by employers, with recent graduates finding placements at notable companies such as Rolls Royce, Nike, British Airways, and American Express."],
                 academic : ["University of Brighton Programs include a wide variety of undergraduate, graduate, apprenticeship, and top-up degree courses across diverse fields such as Applied Sciences, Architecture, Technology & Engineering, Art & Media, Business & Law, Education & Teaching, Humanities & Social Science, and Sport & Health Sciences. Several majors at Brighton University have received rankings from US News & World Report, specifically in Clinical Medicine, Infectious Diseases, and in Social Sciences & Public Health."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745214183/Uk_university_20_Brighton_academic_xwrbqi.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                      {
                  name: "University of Westminster",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213650/Uk_university_21_Westminster_dew1us.jpg",
                 slug: "university-of-westminster",
                 country : "uk",
                 overview : ["The University of Westminster is a public university located in London, UK, with a rich history dating back to 1838 when it was founded as the Royal Polytechnic Institution, making it the first polytechnic in London and one of the first in the UK before it officially became the University of Westminster in 1992. This institution maintains a strong focus on providing practical, industry-focused education and is characterized by its remarkably diverse and international student body, comprising over 19,000 students from more than 160 countries. The university offers a wide and varied range of programs, including undergraduate, postgraduate, and professional courses, delivered across its four campuses situated in Central London: Regent Street, Cavendish, Marylebone, and Harrow."],
                 academic : ["The Graduate School Board is tasked with ensuring a robust institutional framework for the university's research degree programmes, encompassing regulatory, quality assurance, and policy frameworks. To support this, the Board produces a range of publications intended for doctoral researchers and their supervisors, which serve to facilitate effective progress through Annual Progress Reviews and inform them about best practice and available opportunities for skills and professional development."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213661/Uk_university_21_Westminster_academic_geb9vo.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                       {
                  name: "University of Birmingham",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213675/Uk_university_22_birmingham_sodhkr.jpg",
                 slug: "university-of-birmingham",
                 country : "uk",
                 overview : ["Established in 1900 and located in the West Midlands, UK, the University of Birmingham is a prestigious public research university and a proud member of the Russell Group. Its highly-regarded Business School holds the coveted "triple-crown" accreditation from AACSB, AMBA, and EQUIS, a distinction held by only a small percentage of business schools globally. The university is a vibrant international hub, home to over 38,000 students, with more than 10,000 international students from approximately 150 countries, constituting almost 34% of its total student body. Recognized for its academic excellence, the University of Birmingham holds an impressive overall country-level rank of #14 according to the Shiksha Popularity Rankings. The university also boasts a remarkable legacy of research and discovery, with 10 Nobel Prize winners among its past and present staff and alumni who have made significant contributions to science, including breakthroughs ranging from the invention of the microwave to advancements in understanding the Higgs Boson and Gravitational Waves."],
                 academic : ["The University of Birmingham is renowned for providing excellent academic programs to both its international and domestic students, offering a wide variety of options at both the undergraduate and postgraduate levels, with over 350 undergraduate and 600 postgraduate programs specifically available to its international student body."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213680/uk_university_22_birmingham_academic_cu4rfc.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                       {
                  name: "University of Essex",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213690/Uk_university_23_Essex_lnkf9z.jpg",
                 slug: "university-of-essex",
                 country : "uk",
                 overview : ["Founded in 1964, the University of Essex is a top public university primarily located with its main campus in Essex, England, United Kingdom. Over the past five decades, the university has seen close to 100,000 students from more than 140 countries graduate from its programs. Home to more than 17,800 students currently, the university operates across three campuses, specifically the Colchester Campus, the Southend-On-Sea Campus, and the Loughton Campus. The university actively supports its international student community through the International Students Association, which focuses on representation and organizes various events throughout the year. Furthermore, the University of Essex is recognized for its excellent student experience, ranking in the top 25 nationally according to the Times Good University Guide."],
                 academic : ["With three academic faculties under its ambit, the University of Essex offers a range of undergraduate, postgraduate, and research degree courses to international students annually, with popular streams of study among its alumni historically including Economics, Law, Psychology, Business Administration & Management, and Political Science & Government."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213695/Uk_university_23_Essex_academic_amttlh.png",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                       {
                  name: "University of Liverpool",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213705/Uk_university_24_Liverpool_tqqxdi.jpg",
                 slug: "university-of-liverpool",
                 country : "uk",
                 overview : ["The University of Liverpool, a public research university established in Liverpool, Britain, in 1881 and granted its Royal Charter in 1903, stands as one of the top universities in the UK, offering courses at Bachelor's, Master's, and PhD levels across multiple subjects. Historically significant as one of the original six "Red Brick" Civic Universities, also known as "The Original Red Brick," the university provides programs in diverse areas of study including business, education, liberal arts, sciences, and professional studies. It enrolls a large student body of more than 22,000 students, with international students making up 32% of the total, drawing individuals from 170 countries around the world."],
                 academic : ["The University of Liverpool offers a comprehensive range of more than 400 undergraduate, postgraduate, doctoral, and online courses delivered through its academic structure comprising three colleges, which are further organized into numerous departments, schools, and institutes. The university provides academic programs across a wide variety of fields, including the Humanities, Law, Sciences, Arts, Engineering, Media, Communication Studies, Computer Science, Biological Sciences, Languages, Management, and Environmental Sciences, reflecting its diverse offerings across its multiple schools and faculties."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213709/Uk_university_24_Liverpool_academic_qj7xn3.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },
                        {
                  name: "University of Nottingham",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213720/Uk_university_25_Nottingham_bncxz8.jpg",
                 slug: "university-of-nottingham",
                 country : "uk",
                 overview : ["Founded as University College Nottingham in 1881, the University of Nottingham is a distinguished public research university located in Nottinghamshire, United Kingdom. Recognized globally, it holds a ranking of #100 in the QS World Rankings 2024 and is highly regarded for its research, rated #7 for research power in the UK by the Research Excellence Framework (REF2021), in addition to holding accreditation from the Association to Advance Collegiate Schools of Business (AACSB). The university is known for being quite selective, with an acceptance rate of around 11% and an average accepted GPA of 3.0 or higher out of 4.0. It operates across a range of campuses, including the University Park, Jubilee, Sutton Bonington, and King's Meadow campuses in the UK, as well as international campuses in China and Malaysia. Beyond academics, the University of Nottingham offers a vibrant student life with more than 200 societies, over 70 sports clubs, and various student networks, including 50 international and cultural societies catering to its diverse student body."],
                 academic : ["The University of Nottingham provides international students with a range of academic opportunities, offering undergraduate, postgraduate taught, and research courses across numerous disciplines, with popular subject areas including Arts & Humanities, Languages, Engineering, Sciences & Medicine, Social Sciences, and Business, among many others."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213732/Uk_university_25_Nottingham_acaemic_rhlyv4.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

             
                          {
                  name: "Birkbeck University of London",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213747/Uk_university_26_Birkbeck_sfjjfa.jpg",
                 slug: "birkbeck-university-of-london",
                 country : "uk",
                 overview : ["Founded in 1823 by George Birkbeck, Birkbeck, University of London is an open research university that, according to the Shiksha Grade Rankings, has received an overall B grade along with high rankings in various subjects. Based on different sources, the university maintains an overall acceptance rate of around 76%, indicating a somewhat selective admission process, and it is associated with notable bodies including the Commonwealth Universities, the Royal Academy of Dramatic Art, the European University Association, and the University of London; the university was formerly known as the London Mechanic's Institute."],
                 academic : ["Birkbeck, University of London offers a range of undergraduate and graduate courses designed for international students each year, with popular programs at the university including Accounting, Biomedical Sciences, Data Sciences and Computing, Economics, Film and Media, Geography, and Health and Social Care."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213752/Uk_university_26_Birkbeck_academic_pyj3hy.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                           {
                  name: "Queen Mary University of London",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213762/Uk_university_27_Queen_Mary_University_nwdamc.jpg",
                 slug: "queen-mary-university-of-london",
                 country : "uk",
                 overview : ["Queen Mary University of London is a public research university based in London, UK, founded in 1885 with roots tracing back to 1785. It is recognized as one of the top 10 universities in London and is highly regarded for providing state-of-the-art education and excellent opportunities to its students. The university is particularly popular among international students, comprising a significant portion of the student body with thousands enrolled from over 160 countries worldwide, far exceeding a small minority. Queen Mary's academic standing is further strengthened by the fact that its School of Business and Management holds the prestigious accreditation from the Association to Advance Collegiate Schools of Business (AACSB), and as per Shiksha popularity rankings, QMUL is ranked #31 in the UK. The university also boasts a list of popular alumni, including notable figures such as Paul Bruce Dickinson, William James O'Reilly Jr., and Prannoy Lal Roy."],
                 academic : ["Queen Mary University of London provides international students with an extensive selection of more than 700 degree courses, featuring over 300 undergraduate and 400 postgraduate options. Among the popular fields of study at QMUL are Humanities, Social Sciences, Engineering, Medicine and Dentistry, and Sciences and Engineering."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213768/Uk_university_27_Queen_Mary_University_academic_fcgg76.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                         {
                  name: "Royal Holloway University of London",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213777/Uk_university_28_Royal_Holloway_vsboec.jpg",
                 slug: "royal-holloway-university-of-london",
                 country : "uk",
                 overview : ["Founded in 1985, Royal Holloway, University of London is a public research university located in Egham, United Kingdom. The university ensures the quality of its programs through various accreditations, with all single-honors degrees accredited by the British Computer Society (BCS) and the European Quality Assurance Network for Informatics Education (EQANIE), and its School of Business & Management holding the prestigious Association to Advance Collegiate Schools of Business (AACSB) accreditation. According to the Shiksha grading system, Royal Holloway has received an overall university ranking of B++, with specific programs such as Business Economics and Politics also achieving a B++ subject ranking. The academic structure of the university is organized into several divisions, including Business & Management; Languages, Literatures and Cultures; Engineering, Physical and Mathematical Sciences; Humanities; Law and Social Sciences; Life Sciences and the Environment; and Performing and Digital Arts."],
                 academic : ["With seven academic schools under its ambit, Royal Holloway, University of London offers courses at the undergraduate, graduate, and research levels in leading fields such as Biological Sciences; Business & Management; Computer Science; Drama, Theatre & Dance; Earth Sciences; Engineering; English; Geography; Health Studies; History; Information Security; Languages, Literatures & Cultures; Law & Criminology; Liberal Arts; Mathematics; Media Arts; Music; Philosophy; Physics; Political & International Relations; Psychology; and Social Work."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213781/Uk_university_28_Royal_Holloway_academic_e45ffh.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                          {
                  name: "Goldsmiths University of London",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213792/Uk_university_29_Goldsmiths_University_of_London_a0drdn.jpg",
                 slug: "goldsmiths-university-of-london",
                 country : "uk",
                 overview : ["Goldsmiths, University of London is a constituent public research university that was established in 1891 as the Goldsmiths Technical and Recreative Institute before becoming part of the University of London and being renamed to its current form, later receiving its royal charter in 1990. This university enrolls more than 11,000 students and is considered one of the finest institutions of higher education in the UK, offering about 100 programs at both the undergraduate and postgraduate levels."],
                 academic : ["Goldsmiths, University of London, offers a diverse range of undergraduate and postgraduate programs, notably strong in the arts, humanities, social sciences, cultural studies, computing, and management, and further provides various postgraduate certificates and diplomas, as well as research degrees. The university is also recognized for its close industry connections, which play a significant role in helping students to secure leadership roles upon graduation."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742544082/Russia_university_4_academic_pic_ms0hnc.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                          {
                  name: "Royal Veterinary College",
                 image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213808/Uk_university_30_Royal_Veterinary_gbh4fo.jpg",
                 slug: "royal-veterinary-college",
                 country : "uk",
                 overview : ["The Royal Veterinary College (RVC), a distinguished member of the University of London, stands as a leading institution in veterinary and biological science, widely renowned for its excellence in teaching, research, and clinical services. Founded in 1791, it holds the notable distinction of being the oldest and largest veterinary school in the English-speaking world and is consistently ranked as the world's top veterinary school, notably by the QS World University Rankings. The RVC offers a comprehensive range of undergraduate and postgraduate programs, specializing in veterinary medicine, veterinary nursing, and various biological sciences."],
                 academic : ["The Royal Veterinary College (RVC) offers a comprehensive suite of academic programs, including undergraduate and postgraduate degrees in veterinary medicine, veterinary nursing, and biological sciences, in addition to providing Continuing Professional Development (CPD) courses specifically in veterinary medicine and veterinary nursing; the RVC is consistently recognized for its excellence, notably ranked as the top veterinary school in the world by QS World University Rankings."],
                 academicImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1745213819/Uk_university_30_Royal_Veterinary_academic_xkknde.jpg",
                 faculties : [
                    "Faculty of Applied Health Sciences",
                     "Faculty of Education",
                     "Faculty of Humanities",
                     "Faculty of Mathematics and Science",
                      "Faculty of Social Sciences",
                 ],
                 facultyImg : "https://res.cloudinary.com/dqggm4k7u/image/upload/v1742452313/MBBS_faculty_img_gjqngf.jpg",
                 affilationRecognition : ["QAA","OfS","UUK","Russell Group"],
             },

                
            ],
          },

      

      

       
    ];

    // Find the university across all countries
    let foundUniversity = null;
    for (const country of countries) {
      const university = country.univeristes.find((uni) => uni.slug === slug);
      if (university) {
        foundUniversity = university;
        break;
      }
    }

    if (!foundUniversity) {
      return NextResponse.json(
        { error: "University not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: foundUniversity });
  } catch (error) {
    console.error("Error fetching university data:", error);
    return NextResponse.json(
      { error: "Failed to fetch university data" },
      { status: 500 }
    );
  }
}
