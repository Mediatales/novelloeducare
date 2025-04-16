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
