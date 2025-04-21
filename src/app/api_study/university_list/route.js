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
     

      
      
      
      

    ];

    return NextResponse.json({ data: universities });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}
