import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Understanding Next.js: A Beginner's Guide",
    description:
      "Next.js is a powerful React framework that enables server-side rendering and static site generation.",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739789017/f8dxcljajsufyrqwcphn.png",
    date: "September 10, 2024",
  },
  {
    id: 2,
    title: "10 Tips for Writing Clean and Efficient JavaScript Code",
    description:
      "Writing clean and efficient JavaScript is essential for building scalable applications.",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739789017/f8dxcljajsufyrqwcphn.png",
    date: "September 12, 2024",
  },
  {
    id: 3,
    title: "How to Optimize Your React Applications for Performance",
    description:
      "Optimizing React applications can significantly improve load times and user experience.",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1739789017/f8dxcljajsufyrqwcphn.png",
    date: "September 15, 2024",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Our Blog</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Stay updated with the latest trends, insights, and tips in web development.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <p className="text-sm text-gray-500 mt-3">{blog.date}</p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
