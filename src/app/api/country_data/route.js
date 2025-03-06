export async function GET() {
    const data = [
        { 
            country: "Uzbekistan",
            flag_link: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png",
        },
        { 
            country: "USA",
            flag_link: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png",
        },
        { 
            country: "Canada",
            flag_link: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png",
        },
        { 
            country: "Australia",
            flag_link: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739792761/o4dr7q3ihsoh9ccgkxz6.png",
        },
    ];

    return Response.json({ data });
}