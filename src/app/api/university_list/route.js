import { NextResponse } from "next/server";

export async function GET() {
  try {
    const universities = [
      {
        country: "uzbekistan",
        university: "Samarkand State Medical University",
      },
      {
        country: "uzbekistan",
        university: "Tashkent Medical Academy University",
      },
      {
        country: "uzbekistan",
        university: "Tashkent State Dental Institute",
      },
      {
        country: "uzbekistan",
        university: "Andijan State Medical Institute",
      },
      {
        country: "uzbekistan",
        university: "Fergana State Medical University",
      },
      {
        country: "uzbekistan",
        university: "Bukhara State Medical University",
      },
      {
        country: "uzbekistan",
        university: "Tashkent State Pediatric University",
      },
      {
        country: "uzbekistan",
        university: "Akfa University Medical School",
      },
      {
        country: "uzbekistan",
        university: "Andijan State Medical Institute",
      },

      //russia
      {
        country: "russia",
        university: "North-Western State Medical University",
      },
      {
        country: "russia",
        university: "Saint Petersburg State Pediatric Medical University",
      },
      {
        country: "russia",
        university: "Ivanovo State Medical University",
      },
      {
        country: "russia",
        university: "Tver State Medical University",
      },
      {
        country: "russia",
        university: "Kabardino-Balkarian State University",
      },
      {
        country: "russia",
        university: "Ryazan State Medical University",
      },
      {
        country: "russia",
        university: "Bashkir State Medical University",
      },
      {
        country: "russia",
        university: "OMSK State Medical University",
      },
      {
        country: "russia",
        university: "Ulyanovsk state University",
      },
      {
        country: "russia",
        university: "OREL State Medical University",
      },
      {
        country: "russia",
        university: "Kursk State Medical University",
      },
      {
        country: "russia",
        university: "Orenburg State Medical University",
      },
      {
        country: "russia",
        university: "Mari State Medical University",
      },
      {
        country: "russia",
        university: "Kemerovo State Medical University",
      },
      {
        country: "russia",
        university: "Pskov State Medical University",
      },
      {
        country: "russia",
        university: "Perm State Medical University",
      },
      {
        country: "russia",
        university: "Tula State University",
      }, 
      {
        country: "russia",
        university: "Kalmyk State University",
      }, 
      {
        country: "russia",
        university: "Dagestan State Medical University",
      }, 
      {
        country: "russia",
        university: "Ural State Medical University",
      }, 
      {
        country: "russia",
        university: "Privolzhsky Research Medical University",
      }, 
      {
        country: "russia",
        university: "Irkutsk State Medical University",
      }, 
      {
        country: "russia",
        university: "Samara State Medical University",
      }, 
      {
        country: "russia",
        university: "Chelyabinsk State University",
      }, 
      {
        country: "russia",
        university: "Immanuel Kant Baltic Federal University",
      }, 
      {
        country: "russia",
        university: "Siberian State Medical University",
      }, 
      {
        country: "russia",
        university: "I.M Sechenov First Moscow State Medical University",
      }, 
      {
        country: "russia",
        university: "Pirogov Russian National Research Medical University",
      }, 
      {
        country: "russia",
        university: "Far Eastern Federal University",
      }, 
      {
        country: "russia",
        university: "Altai State Medical University",
      },  
      
      //kyrgyztan

      {
        country: "kyrgyzstan",
        university: "Asian Medical Institute",
      },
      {
        country: "kyrgyzstan",
        university: "OSH State Medical University",
      },
      {
        country: "kyrgyzstan",
        university: "International School of Medicine (ISM)",
      },
      {
        country: "kyrgyzstan",
        university: "Kyrgyz State Medical University",
      },


      //Kazakhstan

      {
        country: "Kazakhstan",
        university: "Kazakh Russian Medical University (KRMU)",
      },
      {
        country: "Kazakhstan",
        university: "Kazakh National Medical University",
      },
      {
        country: "Kazakhstan",
        university: "Al-Farabi National Medical University",
      },
      {
        country: "Kazakhstan",
        university: "South Kazakh Medical Academy",
      },

      //Georgia
      {
        country: "Georgia",
        university: "International School of Medical",
      },
      {
        country: "Georgia",
        university: "East European University",
      },
      {
        country: "Georgia",
        university: "Georgian National University",
      },
      {
        country: "Georgia",
        university: "Batumi Shota Rustaveli State University",
      },
      {
        country: "Georgia",
        university: "David Tvildiani Medical University",
      },
      {
        country: "Georgia",
        university: "Tbilisi State Medical University",
      },
      {
        country: "Georgia",
        university: "New Vision Medical University",
      },

      //Armenia

      {
        country: "Armenia",
        university: "Yerevan Haybusak University",
      },
      {
        country: "Armenia",
        university: "Mkhitar Gosh Armenian-Russian International University",
      },
      {
        country: "Armenia",
        university: "University of Traditional Medicine",
      },
      {
        country: "Armenia",
        university: "Yerevan State Medical University",
      },
      {
        country: "Armenia",
        university: "Armenian Medical Institute",
      },
      {
        country: "Armenia",
        university: "St.Tereza Medical University",
      },


      //Belarus
      {
        country: "Belarus",
        university: "Belarusian State Medical University",
      },
      {
        country: "Belarus",
        university: "Gomel State Medical University",
      },
      {
        country: "Belarus",
        university: "Grodno State Medical University",
      },
      {
        country: "Belarus",
        university: "Batumi Shota Rustaveli State University",
      },


      //Bangladesh
      {
        country: "Bangladesh",
        university: "Dhaka National Medical College",
      },
      {
        country: "Bangladesh",
        university: "Bangladesh Medical College",
      },
      {
        country: "Bangladesh",
        university: "Tairunnessa Memorial Medical College",
      },
      {
        country: "Bangladesh",
        university: "Jahurul Islam Medical College",
      },
      {
        country: "Bangladesh",
        university:  "Holy Family Red Crescent Medical",
      },
      {
        country: "Bangladesh",
        university: "Medical College For Women & Hospital",
      },
      {
        country: "Bangladesh",
        university: "Sylhet Women Medical College Sylhet",
      },
      {
        country: "Bangladesh",
        university: "TMSS Medical College",
      },
      {
        country: "Bangladesh",
        university: "Community Based Medical College Mymensingh",
      },
      {
        country: "Bangladesh",
        university:  "International Medical College Tongi",
      },

      //Nepal
      {
        country: "Nepal",
        university: "Kathmandu University School of Medical Sciences",
      },
      {
        country: "Nepal",
        university: "Manipal College of Medical Sciences",
      },
      {
        country: "Nepal",
        university: "Maharajgunj Medical Campus, IOM",
      },
      {
        country: "Nepal",
        university: "Nepal army institute of health science",
      },
      {
        country: "Nepal",
        university: "Nepal Medical College",
      },
      {
        country: "Nepal",
        university: "Kathmandu Medical College",
      },
      {
        country: "Nepal",
        university: "Lumbini Medical College",
      },
      {
        country: "Nepal",
        university: "Birat Medical College",
      },
      {
        country: "Nepal",
        university: "Devdaha Medical college",
      },
      {
        country: "Nepal",
        university: "Nepalgunj Medical College",
      },
      {
        country: "Nepal",
        university: "Chitwan Medical College",
      },
      {
        country: "Nepal",
        university: "Universal College of Medical Sciences",
      },
      {
        country: "Nepal",
        university: "National Medical College",
      },
      {
        country: "Nepal",
        university: "Janaki Medical College",
      },
      {
        country: "Nepal",
        university: "Kist Medical College",
      },
      {
        country: "Nepal",
        university: "Gandaki Medical College",
      },

      //Poland
      {
        country: "Poland",
        university: "University of Warmia and Mazury",
      },
      {
        country: "Poland",
        university: "Nicolaus Copernicus University",
      },
      {
        country: "Poland",
        university: "Poznan University of Medical Science",
      },
      {
        country: "Poland",
        university: "Jagiellonian University Medical College",
      },
      {
        country: "Poland",
        university: "Medical University of Silesia",
      },

      //Ukraine
      {
        country: "Ukraine",
        university: "Danylo Halytsky Lviv National Medical University"
      },
      {
        country: "Ukraine",
        university: "Ternopil National Medical University",
      },
      {
        country: "Ukraine",
        university: "O.O Bogomolets National Medical University",
      },
      {
        country: "Ukraine",
        university: "Vinnytsia National Medical University",
      },
      {
        country: "Ukraine",
        university: "Sumy State Medical University",
      },
      {
        country: "Ukraine",
        university: "Kharkiv National Medical University",
      },
      {
        country: "Ukraine",
        university: "V.N. Karazin Kharkiv National University",
      },
      {
        country: "Ukraine",
        university: "Black Sea National University",
      },
      {
        country: "Ukraine",
        university: "Bukovinian State Medical University",
      },
      {
        country: "Ukraine",
        university: "Poltava Medical University",
      },
      {
        country: "Ukraine",
        university: "Dnipro State Medical University",
      },
      {
        country: "Ukraine",
        university: "Uzhhorod National Medical University",
      },
      {
        country: "Ukraine",
        university:"Taras Shevchenko National University",
      },

      //Bosnia
      {
        country: "Bosnia",
        university: "University of Mostar",
      },
      {
        country: "Bosnia",
        university: "University of East Sarajevo",
      },
      {
        country: "Bosnia",
        university: "Sarajevo School of Science and Technology",
      },
      
      
      //Serbia

      {
        country: "serbia",
        university: "University of Belgrade",
      },
      {
        country: "serbia",
        university: "University of Novi Sad",
      },
      

    ];

    return NextResponse.json({ data: universities });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}
