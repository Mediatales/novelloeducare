import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { country } = params;

    // This is your countries data - you can move this to a separate data file
    const countries = [
      //France

      {
        country: 'France',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744364304/france_university_isnmbw.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744364383/France_main_image_bzrs8s.png",
        overviewText: "France distinguishes itself as an attractive destination for international students through its commitment to academic excellence, evidenced by its numerous prestigious universities and specialized schools offering high-quality education and globally recognized qualifications, coupled with the advantage of affordable education, particularly at its public universities which feature relatively low tuition fees compared to many other Western nations; furthermore, France provides an unparalleled opportunity for cultural immersion, exposing students to its rich tapestry of art, history, cuisine, and overall culture, thereby creating a unique and enriching learning environment that extends beyond the classroom; the experience of studying in France can also significantly enhance one's resume and open doors to a multitude of international career paths, while the country fosters a diverse and welcoming environment characterized by a thriving international student community that embraces individuals from all corners of the globe.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744364378/France_overview_img_lpbbre.jpg",
        quickFacts: ["Paris", "39%", "Euro", "Approx. 6.83 crores"],
    
            
        eligibilityPoints: [
            {
                title: "Financial Requirements",
                description: "You need to demonstrate you have sufficient funds to cover tuition fees, living expenses, and any expenses related to dependents."
            },
            {
                title: "Age Requirement",
                description: "While there's no specific minimum age, you typically need to have completed 10+2 education and be 17 years old."
            },
            {
                title: "Academic Qualifications",
                description: "For Bachelor's programs, you'll typically need a high school diploma earned after at least 12 years of schooling."
            },
            {
                title: "Specific Course Requirements",
                description: "Some courses may require past work experience or specific letters of recommendation."
            },
        ],
        mbbsBenefits: [
            {
                title: "Global Recognition",
                description: "Degrees from French institutions are highly respected worldwide."
            },
            {
                title: "Affordable Tuition Fees",
                description: "Public universities charge relatively low tuition compared to other Western countries."
            },
    {
                title: "Cultural Diversity",
                description:  "France is a melting pot of cultures, with a thriving international student community."
            },
    {
                title: "Career Opportunities",
                description: "Access to internships, work placements, and post-graduation work opportunities."
            },
        ],
        advantages: ["Affordable education", "High-Quality Education" ,"Recognized Degrees" ,"Wide Range of Programs"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744364310/France_university_owpuzb.jpg",
     },

     //italy

     {
        country: 'Italy',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744359180/italy_logo_mhs4en.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744360063/Italy_main_img_mwshrr.jpg",
        overviewText: "Italy presents a uniquely compelling experience for international students who are in pursuit of an affordable yet high-quality education, immersed within a vibrant and historically rich culture, and strategically positioned within Europe, with numerous universities, especially those boasting a long and distinguished history, renowned for their academic prestige and the global recognition of their degrees.  Novello Educare can significantly assist prospective students in realizing this opportunity by providing expert guidance on identifying suitable Italian universities and programs that align with their academic and career goals, navigating the often intricate application processes for both universities and the necessary student visas, offering support in understanding the specific admission requirements and documentation needed by Italian institutions, providing insights into the cultural nuances and practicalities of living in Italy, and offering valuable advice on financial planning and scholarship opportunities to help make studying in Italy a reality.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744359184/italy_overview_img_fuixzm.jpg",
        quickFacts: ["Rome", "20%", "Euro", "Approx. 5.9 crores"],
    
            
        eligibilityPoints: [
            {
                title: "Financial Requirements",
                description: "You need to demonstrate you have sufficient funds to cover tuition fees, living expenses, and any expenses related to dependents."
            },
            {
                title: "Age Requirement",
                description: "While there's no specific minimum age, you typically need to have completed 10+2 education and be 17 years old."
            },
            {
                title: "Academic Qualifications",
                description: "For Bachelor's programs, you'll typically need a high school diploma earned after at least 12 years of schooling."
            },
            {
                title: "Specific Course Requirements",
                description: "Some courses may require past work experience or specific letters of recommendation."
            },
        ],
        mbbsBenefits: [
            {
                title: "Affordable Tuition",
                description: "Compared to many other countries, tuition fees in Italy are relatively low, making it an accessible option for international students."
            },
            {
                title: "Career Opportunities",
                description: "Studying in Italy can provide valuable skills and connections that can lead to career opportunities both in Italy and internationally."
            },
    {
                title: "Research Opportunities",
                description:  "Australian universities are leading research institutions, providing international students with opportunities to conduct research and contribute to advancements."
            },
    {
                title: "Networking and Global Contacts",
                description: "Studying in Italy provides opportunities to build relationships with international students and faculty, expanding one's global network."
            },
        ],
        advantages: ["World-Class Education", "High-Quality Education" ,"Recognized Degrees" ,"Wide Range of Programs"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744359187/itealy_university_y5y4wf.jpg",
    },

    

    //australia
    {
        country: 'Australia',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744347853/Australia_logo_pfy93j.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744348480/Beutifull_country_aus_on5yqn.jpg",
        overviewText: "Australia stands as a highly sought-after destination for international students drawn by its combination of high-quality education, enriching diverse cultural experiences, and promising potential career opportunities, all underpinned by a well-regarded higher education system that boasts numerous universities consistently ranking among the world's best, further enhanced by the appealing opportunities for students to engage in part-time work during their studies and the attractive prospect of obtaining post-study work visas upon graduation. Novello Educare can significantly assist you through this entire journey by providing expert guidance in identifying suitable courses and universities, streamlining the application process, offering support and advice with your student visa application, helping you understand the English language requirements and preparation, providing valuable insights into pre-departure planning including accommodation and living costs, and assisting with financial planning considerations to ensure a smooth transition to studying in Australia.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744349369/Australia_overview_img_z9d9d2.jpg",
        quickFacts: ["Canberra", "20%", "Australian Dollar", "Approx. 2.67 crores"],
    
            
        eligibilityPoints: [
            {
                title: "Financial Requirements",
                description: "You need to demonstrate you have sufficient funds to cover tuition fees, living expenses, and any expenses related to dependents."
            },
            {
                title: "Age Requirement",
                description: "While there's no specific minimum age, you typically need to have completed 10+2 education and be 17 years old."
            },
            {
                title: "Academic Qualifications",
                description: "Specific courses may have requirements for minimum academic scores, such as a minimum percentage in Class 12 exams or a good Bachelor's degree."
            },
            {
                title: "Specific Course Requirements",
                description: "Some courses may require past work experience or specific letters of recommendation."
            },
        ],
        mbbsBenefits: [
            {
                title: "World-Class Education",
                description: "Australia is known for its high-quality education system and research facilities, offering students a chance to learn from renowned institutions and experts."
            },
            {
                title: "Career-Focused Programs",
                description: "Many Australian universities offer programs designed to equip students with the skills and knowledge needed for successful careers in various fields."
            },
    {
                title: "Research Opportunities",
                description:  "Australian universities are leading research institutions, providing international students with opportunities to conduct research and contribute to advancements."
            },
    {
                title: "Cultural Diversity",
                description: "Australia is a melting pot of cultures, offering international students the opportunity to experience different cultures and broaden their perspectives."
            },
        ],
        advantages: ["Affordability", "Multicultural Environment" ,"Networking opportunities" ,"Increased global perspective"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744352438/Australia_advantage_img_hnxwzi.png",
    },

    //USA

    {
        country: 'USA',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744365265/USA_logo_vwf1or.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744365468/Usa_overview_img_tpw7fs.jpg",
        overviewText: "Studying in the United States as an international student presents a vast and diverse landscape of academic programs and institutions, encompassing everything from large, research-intensive universities at the forefront of innovation to smaller, intimate liberal arts colleges that emphasize a broad and well-rounded education; as a global leader in higher education, the U.S. is renowned for its cutting-edge curriculum and abundant research opportunities across numerous fields, providing international students with unparalleled access to advanced knowledge and resources, while simultaneously offering the significant benefits of a rich multicultural environment and the invaluable chance to expand their global network and broaden their cultural perspectives through interaction with students and faculty from around the world.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744365259/usa_university_ecceof.jpg",
        quickFacts: ["Washington, D.C", "95%", "Dollar", "Approx. 34.01 crores"],
    
            
        eligibilityPoints: [
            {
                title: "GPA",
                description: "While specific GPA requirements vary by university, many top-tier institutions look for applicants with GPAs between 2.0 and 3.0 on a 4.0 scale."
            },
            {
                title: "Age Requirement",
                description: "While there's no specific minimum age, you typically need to have completed 10+2 education and be 18 years old."
            },
            {
                title: "Academic Qualifications",
                description: "Completion of secondary school education, equivalent to a 12-year US education, is a fundamental requirement."
            },
            {
                title: "Specific Scores",
                description: "Minimum TOEFL scores typically range from 61 to 100, depending on the university and program."
            },
        ],
        mbbsBenefits: [
            {
                title: "Diverse Programs",
                description: "Students can choose from a vast selection of academic disciplines and specializations, catering to various interests and career goals."
            },
            {
                title: "Top-Ranked Universities",
                description: "The USA boasts some of the best universities globally, offering a wide array of programs and research opportunities."
            },
    {
                title: "Advanced Research Facilities",
                description:  "Access to cutting-edge research facilities and laboratories provides students with hands-on experience and opportunities for groundbreaking research."
            },
    {
                title: "Career Prospects",
                description: "A degree from a US institution is highly valued globally, leading to increased career opportunities and advancement. "
            },
        ],
        advantages: ["Global Recognition", " World-Class Education" ,"Networking opportunities" ,"Diverse Cultural Experiences"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744369409/Usa_advantage_pic_rkyvfy.jpg",
    },

    //canada
    {
        country: 'Canada',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744354555/canada_logo_na4lal.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744354564/canada_country_xv8vsw.jpg",
        overviewText: "To pursue studies in Canada as an international student, the essential first step involves securing a study permit, which grants you the authorization to enroll at a designated learning institution (DLI), and depending on your citizenship, you will also need to obtain either a visitor visa or an Electronic Travel Authorization (ETA) to legally enter the country; the standard application process generally entails diligently researching and identifying a suitable academic program and university that aligns with your goals, followed by ensuring you meet all the specified eligibility criteria set forth by the institution and immigration authorities, meticulously preparing all the necessary supporting documents, and finally, proceeding to apply for your study permit once you have received a formal letter of acceptance from a recognized DLI.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744354971/Canada_overview_img_k4mwdm.jpg",
        quickFacts: ["Ottawa", "60%", "Canadian dollar (CAD)", "Approx. 4.01 crores"],
    
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
   
            
            ],
            
        eligibilityPoints: [
            {
                title: "Minimum Grades",
                description: "Generally, a minimum of 65% for humanities and 70-80% for science/commerce streams in Class XII is required."
            },
            {
                title: "Age Requirement",
                description: "While there's no specific minimum age, you typically need to have completed 10+2 education and be 17 years old."
            },
            {
                title: "GPA",
                description: "For master's programs, a minimum GPA of 3 on a 4-point scale is often required."
            },
            {
                title: "Specific Course Requirements",
                description: "Each university and program will have its own specific admission requirements, which may include specific subjects studied in high school, prior coursework, and/or standardized test scores."
            },
        ],
        mbbsBenefits: [
            {
                title: "World-Class Education",
                description: "Canadian universities and colleges are known for their rigorous academic standards, world-class faculty, and innovative teaching methods."
            },
            {
                title: "Affordable Education",
                description: "Compared to other popular destinations like the US or the UK, tuition fees in Canada are generally more affordable."
            },
    {
                title: "Safe and Secure Environment",
                description:  "Canada is known for its low crime rates and a stable political system, creating a safe and secure environment for international students."
            },
    {
                title: "Research Opportunities",
                description: "Canadian universities are renowned for their research activities, providing international students with opportunities to contribute to cutting-edge research."
            },
        ],
        advantages: ["High-Quality Education", "Affordability" ,"Multicultural Environment" ,"Safety and Security"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744358711/Canada_advantage_pic_rtw6hn.jpg",
    },

    //UK

    {
        country: 'UK',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744607101/UK_logo_pmutsi.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744607372/Uk_main_image_h5fwtf.jpg",
        overviewText: "The UK stands as a sought-after destination for international students aspiring to a high-caliber education within a diverse and dynamic setting, celebrated for its globally acclaimed universities, an extensive array of academic programs, and a distinguished reputation for academic rigor; furthermore, international students in the UK are afforded the advantage of pursuing part-time employment opportunities, making it an attractive choice for those seeking both academic advancement and practical experience. The compelling reasons to choose the UK for studies are numerous, starting with its world-class education system, where numerous universities consistently achieve top global rankings, ensuring a prestigious and impactful learning experience; additionally, UK universities present diverse course offerings spanning undergraduate and postgraduate degrees, alongside valuable English language programs, catering to a wide spectrum of academic interests and needs; the flexibility inherent in the UK education system further enhances its appeal, empowering students to tailor their academic journeys by integrating courses from various disciplines, thereby fostering a personalized and enriching educational pathway.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744607344/Uk_country_rd7md2.png",
        quickFacts: ["London", "84%", "Pound Sterling", "Approx. 6.84 crores"],
         univeristes: [
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

            ],
            
        eligibilityPoints: [
            {
                title: "Academic Qualifications",
                description: "Academic qualifications for their chosen course, such as Indian students typically requiring completion of Class 12 with a strong academic record for undergraduate studies."
            },
            {
                title: "Age Requirement",
                description: "You must be 16 or over."
            },
            {
                title: "Student Visa",
                description: "You'll need to apply for a Student Route visa."
            },
            {
                title: "Language Proficiency Test Scores",
                description: " Submit scores from an approved English language proficiency test, such as IELTS."
            },
        ],
        mbbsBenefits: [
            {
                title: "High-Quality Education",
                description: "The UK is known for its academic excellence, with many of its universities consistently ranked among the best in the world."
            },
            {
                title: "Cultural Diversity",
                description: "The UK is a multicultural society, offering international students the opportunity to interact with people from diverse backgrounds and experience new cultures."
            },
    {
                title: "Career Opportunities",
                description:  "A UK degree is recognized globally, opening doors to a wide range of job opportunities both in the UK and internationally."
            },
    {
                title: "Networking Opportunities",
                description: "Studying in the UK provides opportunities to connect with international students and build a global network."
            },
        ],
        advantages: ["World-Class Education and Research", " Diverse and International Environment" ,"Affordability" ,"Support for International Students"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744609447/Uk_advantage_img_fmlrvu.jpg",
    },

    //newzealand

    {
        country: 'New Zealand',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374876/poland_logo_rajiqp.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744697392/Poland_main_img_erp3mh.jpg",
        overviewText: "New Zealand stands as a sought-after destination for international students, acclaimed for its high-quality education system and internationally recognized qualifications; the country presents a diverse range of study pathways, spanning vocational training to higher education, with its universities consistently achieving high global rankings; furthermore, New Zealand fosters a supportive environment for international students, including the provision of post-study work visa opportunities; the compelling reasons to choose New Zealand for education include its well-regarded education system, which is closely monitored by the government to ensure consistent quality, and the global recognition of degrees and diplomas earned from New Zealand institutions, thereby facilitating international employment prospects for graduates.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744697363/Poland_overview_img_cblagj.jpg",
        quickFacts: [ "Wellington","95%", "Dollar (NZD)", "Approx. 52.2 lakhs"],
        
            
        eligibilityPoints: [
            {
                title: "Academic Qualifications",
                description: "You'll need to demonstrate your qualifications are recognized in New Zealand."
            },
            {
                title: "Language Proficiency",
                description: "You'll need to demonstrate competent English proficiency, often through an IELTS test (e.g., IELTS 6.5 overall)."
            },
            {
                title: "Financial Resources",
                description: "While there's no fixed amount, you'll likely need to show a bank statement or other financial documents that demonstrate your ability to cover your expenses for the duration of your study program."
            },
            {
                title: "Student Visa",
                description: "If you need a visa to study in Poland, you'll need to apply for a student visa."
            },
        ],
        mbbsBenefits: [
            {
                title: "Affordable Education",
                description: "Compared to other popular study destinations, New Zealand offers a more affordable cost of living and tuition fees."
            },
            {
                title: "High-Quality Education",
                description: "New Zealand's education system is well-regarded and monitored by the government, ensuring consistent quality."
            },
    {
                title: "Globally Recognized Qualifications",
                description:  "Degrees and diplomas from New Zealand institutions are internationally recognized, making it easier for students to find employment globally."
            },
    {
                title: "Supportive Environment",
                description: "New Zealand provides a supportive and welcoming environment for international students, including various support services and a strong code of practice for student care."
            },
        ],
        advantages: ["Cost-Effectiveness", "Multicultural Environment" ,"Future-Focused Education" ,"Global Recognition"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744697378/Poland_advantage_img_bbykw6.jpg",
    },

    //finland

    {
        country: 'Finland',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744701398/Finland_logo_scomvp.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744701406/Finland_main_img_duhzjy.jpg",
        overviewText: "Finland presents a valuable opportunity to access world-class learning within a secure and welcoming environment, characterized by a diverse array of programs taught in English; Finland is globally recognized for its strong emphasis on innovation, its commitment to providing high-quality education, and its student-focused pedagogical approaches; while tuition fees are generally considered affordable in comparison to many other international study destinations, it's important to note that non-EU/EEA students may be required to pay for English-taught programs, although a variety of scholarships are available to help offset these costs; the compelling reasons for Indian students to choose Finland include its consistently high-ranking universities, renowned for their research orientation and innovative practices, and the relatively affordable tuition fees for English-taught programs when compared to numerous other countries.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744701402/Finland_overview_img_pb2juz.jpg",
        quickFacts: [ "Helsinki","57%", "Euro (EUR)", "Approx. 55.8 lakhs"],
        
            
        eligibilityPoints: [
            {
                title: "Academic Qualifications",
                description: "You'll need a high school diploma equivalent to the Finnish matriculation examination or similar qualifications."
            },
            {
                title: "Language Proficiency",
                description: "You'll likely need to demonstrate English proficiency, which can be done through test scores (IELTS, TOEFL, PTE, etc.), or by providing proof of previous education in English."
            },
            {
                title: "Financial Resources",
                description: "You'll need to demonstrate that you have sufficient funds to support yourself while studying in Finland, usually requiring a bank statement showing at least 6720 EUR per year."
            },
            {
                title: "Student Visa",
                description: "Non-EU/EEA citizens will need a student visa to study in Finland."
            },
        ],
        mbbsBenefits: [
            {
                title: "Affordable Education",
                description: "While non-EU/EEA students may need to pay tuition fees for some master's programs, these are generally lower than in many other countries, and scholarships are available."
            },
            {
                title: "High-Quality Education",
                description: "Finland is renowned for its excellent education system, which emphasizes critical thinking and student-centered learning."
            },
    {
                title: "Work Opportunities",
                description:  "International students can work part-time during their studies and full-time during vacations, allowing them to gain valuable work experience."
            },
    {
                title: "Supportive Environment",
                description: "Finnish universities provide extensive support services for international students, including orientation programs, language courses, and housing assistance."
            },
        ],
        advantages: ["Cost-Effectiveness", "Multicultural Environment" ,"Future-Focused Education" ,"Global Recognition"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744701410/Finland_advantage_img_izqjan.jpg",
    },

    //hungary

    {
        country: 'Hungary',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744698223/hungary_logo_wrbhow.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744697392/Poland_main_img_erp3mh.jpg",
        overviewText: "Hungary stands as an attractive destination for international students seeking affordable yet high-quality education, particularly renowned for its programs in medicine and engineering; the country provides a range of both public and private universities, with annual tuition fees at public institutions generally ranging from 1,200 to 5,000 EUR for most degree programs; additionally, the cost of living in Hungary is relatively low, with students typically requiring approximately 450 to 550 EUR per month to cover their expenses; the key advantages of choosing Hungary for studies include its affordability as one of the most budget-friendly European options for international students, coupled with the high quality of education offered by its universities, especially in scientific disciplines such as medicine and engineering.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744699129/Hungary_overview_img_fot2xe.jpg",
        quickFacts: [ "Budapest","57%", "Hungarian Forint", "Approx. 95.9 lakhs"],
        
            
        eligibilityPoints: [
            {
                title: "Academic Qualifications",
                description: "High School Diploma: Proof of completion of secondary education is required for Bachelor's programs."
            },
            {
                title: "Language Proficiency",
                description: "For programs taught in English, IELTS (5.5-6.0) or TOEFL (79-92) are common requirements."
            },
            {
                title: "Financial Resources",
                description: "Students need to demonstrate they have sufficient funds to cover tuition fees, living expenses, and other costs."
            },
            {
                title: "Student Visa",
                description: "Passport (validity should be exceeded at least six months beyond your entry date)."
            },
        ],
        mbbsBenefits: [
            {
                title: "Affordable Education",
                description: "Tuition fees in Hungary are generally more affordable than in many other European countries."
            },
            {
                title: "High-Quality Education",
                description: "Hungarian universities, like University of Szeged and Eötvös Loránd University, are highly ranked and recognized worldwide."
            },
    {
                title: "Career Opportunities",
                description:  "Students can often find part-time jobs while studying to help with living expenses."
            },
    {
                title: "International Opportunities",
                description: "Many local and international companies offer internship positions to students, providing opportunities to build professional networks."
            },
        ],
        advantages: ["Cost-Effectiveness", "Multicultural Environment" ,"Future-Focused Education" ,"Global Recognition"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744699146/Hungary_advantage_img_fyipih.jpg",
    },

    //poland

    {
        country: 'Poland',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742374876/poland_logo_rajiqp.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744697392/Poland_main_img_erp3mh.jpg",
        overviewText: "Poland's higher education landscape encompasses over 400 institutions, many of which now deliver study programs in English, catering to an international student body; Jagiellonian University in Cracow, established in 1364 as Poland's oldest university, boasts an illustrious alumni including astronomer Nicolaus Copernicus, Pope John Paul II, and two Nobel laureates, while the University of Warsaw, founded in 1816 as Poland's largest university, also claims a distinguished list of graduates such as Israel’s first Prime Minister David Ben-Gurion and the renowned composer Frédéric Chopin; Poland's higher education system is further distinguished by its specialized technical universities, which annually produce tens of thousands of experts in fields like engineering and computer science, with Warsaw University of Technology and AGH University of Science and Technology earning exceptional recognition in international rankings, alongside numerous other reputable institutions.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744697363/Poland_overview_img_cblagj.jpg",
        quickFacts: [ "Berlin","56%", "Euro", "Approx. 8.33 crores"],
        
            
        eligibilityPoints: [
            {
                title: "Academic Qualifications",
                description: "You need a matriculation certificate or an equivalent document proving you are eligible for higher education in your home country."
            },
            {
                title: "Language Proficiency",
                description: "You'll need to demonstrate proficiency in English, often through standardized tests like TOEFL, IELTS, PTE Academic, or Duolingo."
            },
            {
                title: "Financial Resources",
                description: "While there's no fixed amount, you'll likely need to show a bank statement or other financial documents that demonstrate your ability to cover your expenses for the duration of your study program."
            },
            {
                title: "Student Visa",
                description: "If you need a visa to study in Poland, you'll need to apply for a student visa."
            },
        ],
        mbbsBenefits: [
            {
                title: "Affordable Education",
                description: "Tuition fees are significantly lower than in many Western European countries, making it an attractive option for international students."
            },
            {
                title: "High-Quality Education",
                description: "Polish universities are recognized for their academic rigor and offer a wide range of programs in various fields, including engineering, medicine, and the humanities."
            },
    {
                title: "Career Opportunities",
                description:  "Poland's growing economy and diverse job market offer numerous opportunities for international graduates to gain work experience and pursue their careers."
            },
    {
                title: "Supportive Environment",
                description: "Poland boasts a rich history, diverse cultural heritage, and welcoming people, providing a unique and enriching experience for international students."
            },
        ],
        advantages: ["Cost-Effectiveness", "Multicultural Environment" ,"Future-Focused Education" ,"Global Recognition"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744697378/Poland_advantage_img_bbykw6.jpg",
    },

    //germany

    {
        country: 'Germany',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1744633985/germany_logo_qtxk4i.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744634223/Germany_country_cy2sbr.jpg",
        overviewText: "Germany presents a significant opportunity for international students, particularly due to its largely tuition-free public universities, yet prospective students must navigate specific prerequisites. A crucial requirement is possessing a recognized university entrance qualification (HZB) or its equivalent, such as the Abitur, with resources like the DAAD database or anabin available for verification. Language proficiency is also paramount; for German-taught programs, demonstrating competence through examinations like DSH or TestDaF is necessary. Conversely, English-taught programs may necessitate the submission of scores from standardized tests such as IELTS or TOEFL. Navigating these eligibility criteria, including academic qualifications and language skills, is a key step in the German university application process.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744634316/Germany_overview_ys1hbe.jpg",
        quickFacts: [ "Berlin","56%", "Euro", "Approx. 8.33 crores"],
        
            
        eligibilityPoints: [
            {
                title: "Higher Education Entrance Qualification",
                description: "A recognized high school diploma or equivalent is needed. For Indian students, this often means demonstrating that their high school diploma is equivalent to the German Abitur."
            },
            {
                title: "Language Proficiency",
                description: "If the program is taught in German, proof of German language proficiency (e.g., DSH or TestDaF) is usually required. If the program is taught in English, a test like IELTS or TOEFL may be needed."
            },
            {
                title: "Financial Resources",
                description: "International students need to demonstrate that they can cover their living expenses in Germany."
            },
            {
                title: "Student Visa",
                description: "International students generally need a student visa to study in Germany."
            },
        ],
        mbbsBenefits: [
            {
                title: "Affordable Education",
                description: "Public universities in Germany generally offer free or very low-cost tuition for both domestic and international students."
            },
            {
                title: "High-Quality Education",
                description: "German universities are consistently ranked among the best globally, offering a wide range of programs in various fields."
            },
    {
                title: "Career Opportunities",
                description:  "Germany has a strong economy and a high demand for skilled labor, particularly in STEM fields."
            },
    {
                title: "Supportive Environment",
                description: "Germany has a growing number of international students and provides various resources and support services to help them succeed."
            },
        ],
        advantages: ["Cost-Effectiveness", "Multicultural Environment" ,"Future-Focused Education" ,"Global Recognition"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744696811/Germany_advantage_img_rijlhw.jpg",
    },

    //Dubai

    {
        country: 'Dubai',
        flag_link: 'https://res.cloudinary.com/dqggm4k7u/image/upload/v1742375108/dubai_logo_eey2a7.png',
        mainImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744632349/Dubai_main_img_fcqd5s.jpg",
        overviewText: "Dubai presents a compelling proposition for international students, offering a unique confluence of high-quality education, promising career prospects, and a dynamic multicultural environment; although not a conventional choice for studying abroad, Dubai distinguishes itself by providing a noteworthy combination of relatively affordable tuition and living expenses in comparison to other popular international study destinations, coupled with a flourishing economy and accessible visa regulations, thereby establishing itself as an increasingly appealing option for students seeking global education; key advantages of choosing Dubai include its affordable cost of living and tuition, robust career prospects arising from its rapid economic expansion and diverse industrial sectors, a diverse educational landscape encompassing numerous top-tier universities and colleges offering a wide array of academic programs, and a rich cultural immersion experience in a city renowned for its multiculturalism and blend of traditions.",
        overviewImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744632365/Dubai_overview_img_wqvvdf.jpg",
        quickFacts: [ "75%", "Dirham (AED)", "Approx. 36.4 lakhs"],
        
            
        eligibilityPoints: [
            {
                title: "Academic Qualifications",
                description: "A minimum of 12 years of schooling is generally required for undergraduate programs."
            },
            {
                title: "Specific Program Requirements",
                description: "Some programs might have additional requirements like the SAT, GRE, GMAT, or other standardized tests."
            },
            {
                title: "Financial Requirements",
                description: "You'll need to demonstrate that you have sufficient funds to cover tuition fees, living expenses, and other costs."
            },
            {
                title: "Language Proficiency Test Scores",
                description: " Submit scores from an approved English language proficiency test, such as IELTS."
            },
        ],
        mbbsBenefits: [
            {
                title: "Affordable Cost",
                description: "Dubai offers relatively affordable tuition and living costs compared to other popular study-abroad locations."
            },
            {
                title: "Strong Career Prospects",
                description: "Dubai's rapid economic growth and diverse industries create numerous job opportunities for graduates."
            },
    {
                title: "Global Network",
                description: "Studying in Dubai provides access to a global network of students and faculty, fostering international perspectives."
            },
    {
                title: "Work Opportunities",
                description: "International students can pursue part-time work and internships to gain practical experience and financial support."
            },
        ],
        advantages: ["Cost-Effectiveness", "Multicultural Environment" ,"Future-Focused Education" ,"Global Recognition"],
        advantageImg: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1744632494/Dubai_advantage_lynxin.jpg",
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
