import { NextResponse } from "next/server";

export async function GET() {
  try {
    const universities = [


        //canada

      {
        country: "canada",
        university: "St.Lawrence College",
      },

      {
        country: "canada",
        university: "Trent University",
      },

      {
        country: "canada",
        university: "University of Guelph",
      },

      {
        country: "canada",
        university: "University of Northern British Columbia",
      },

      {
        country: "canada",
        university: "University of Waterloo",
      },

      {
        country: "canada",
        university: "University of Windsor",
      },

      {
        country: "canada",
        university: "Wilfrid Laurier International College",
      },

      {
        country: "canada",
        university: "Wilfrid Laurier University",
      },

      {
        country: "canada",
        university: "York Ville University",
      },

      {
        country: "canada",
        university: "Ontario Tech University",
      },

      {
        country: "canada",
        university: "Herzing College",
      },

      {
        country: "canada",
        university: "Kensley College",
      },
      {
        country: "canada",
        university: "Trebas Institute",
      },
      {
        country: "canada",
        university: "Bishop's University",
      },
      {
        country: "canada",
        university: "Bow Valley College",
      },
      {
        country: "canada",
        university: "Lakeland College",
      },

      {
        country: "canada",
        university: "Medicine Hat College",
      },

      {
        country: "canada",
        university: "Acsenda School of Management",
      },
      {
        country: "canada",
        university: "Vancouver Community College",
      },

      {
        country: "canada",
        university: "Alexander College",
      },
      {
        country: "canada",
        university: "Fraser International College",
      },
      {
        country: "canada",
        university: "Kwantlen Polytechnic University",
      },
      {
        country: "canada",
        university: "North Island College",
      },
      {
        country: "canada",
        university: "Northern Lights College",
      },
      {
        country: "canada",
        university: "Okanagan College",
      },
      {
        country: "canada",
        university: "International College of Manitoba",
      },
      {
        country: "canada",
        university: "Red River College",
      },
      {
        country: "canada",
        university: "Mount Saint Vincent University",
      },
      {
        country: "canada",
        university: "Brock University",
      },
      {
        country: "canada",
        university: "Selkirk College",
      },
      // {
      //   country: "canada",
      //   university: "",
      // },


      


      //uk

      {
        country: "uk",
        university: "Coventry University",
      },

      {
        country: "uk",
        university: "London South Bank University",
      },

      {
        country: "uk",
        university: "University of Sunderland",
      },

      {
        country: "uk",
        university: "Aston University",
      },

      {
        country: "uk",
        university: "University of Central Lancashire",
      },

      {
        country: "uk",
        university: "Kingston University London",
      },


      {
        country: "uk",
        university: "The Courtauld Institute of Art",
      },

      {
        country: "uk",
        university: "University of Hull",
      },

      {
        country: "uk",
        university: "University of Aberdeen",
      },

      {
        country: "uk",
        university: "University of Huddersfield",
      },

      {
        country: "uk",
        university: "Cardiff University",
      },

      {
        country: "uk",
        university: "Durham University",
      },
      {
        country: "uk",
        university: "Lancaster University",
      },
      {
        country: "uk",
        university: "University of Leeds",
      },
      {
        country: "uk",
        university: "University of Lincoln",
      },

      {
        country: "uk",
        university: "University of Gloucestershire",
      },
      {
        country: "uk",
        university: "University of Stirling",
      },
      {
        country: "uk",
        university: "Newcastle University",
      },
      {
        country: "uk",
        university: "University of York",
      },
      {
        country: "uk",
        university: "University of Brighton",
      },
      {
        country: "uk",
        university: "University of Westminster",
      },
      {
        country: "uk",
        university: "University of Birmingham",
      },
      {
        country: "uk",
        university: "University of Essex",
      },
      {
        country: "uk",
        university: "University of Liverpool",
      },
      {
        country: "uk",
        university: "University of Nottingham",
      },
      {
        country: "uk",
        university:"Birkbeck University of London",
      },
      {
        country: "uk",
        university: "Queen Mary University of London",
      },
      {
        country: "uk",
        university: "Royal Holloway University of London",
      },
      {
        country: "uk",
        university: "Goldsmiths University of London",
      },
      {
        country: "uk",
        university: "Royal Veterinary College",
      },
      // {
      //   country: "uk",
      //   university: "",
      // },


      //singapore

      {
        country: "singapore",
        university: "PSB Academy",
      },
      {
        country: "singapore",
        university: "Dimensions College",
      },
      {
        country: "singapore",
        university: "Coleman College",
      },
      {
        country: "singapore",
        university: "Curtin University",
      },

      //poland

      {
        country : "poland",
        university : "Wroclaw University of Science and Technology",
      },
      {
        country : "poland",
        university : "Vistula University",
      },
      {
        country : "poland",
        university : "University of Wroclaw",
      },
      {
        country : "poland",
        university : "Wroclaw University of Economics",
      },
      // {
      //   country : "poland",
      //   university : "",
      // },

      //france

      {
        country : "france",
        university : "ESDES School Of Management",
      },
      {
        country : "france",
        university : "College De Paris",
      },
      {
        country : "france",
        university : "KEYCE Business School",
      },
      {
        country : "france",
        university : "Kedge Business School",
      },
      // {
      //   country : "france",
      //   university : "",
      // },

      //netherlands

      {
        country : "netherlands",
        university : "University of Amsterdam",
      },

      //germany

      {
        country : "germany",
        university : "GISMA Business School",
      },

      {
        country : "germany",
        university : "Lancaster University Leipzig",
      },

      {
        country : "germany",
        university : "Berlin School of Business and Innovation",
      },

      {
        country : "germany",
        university : "ISM (International School of Management)",
      },
     
      {
        country : "germany",
        university : "PFH Germany",
      },

       //malaysia
       {
        country : "malaysia",
        university : "Heriot Watt University",
      },

      //ireland

      {
        country : "ireland",
        university : "Technological University Dublin",
      },
      {
        country : "ireland",
        university : "National College of Ireland",
      },
      {
        country : "ireland",
        university : "Dublin City University",
      },
      {
        country : "ireland",
        university : "University College Cork",
      },

      //spain

      {
        country : "spain",
        university : "Saint Louis University Madrid",
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
