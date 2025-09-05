import React from "react";

const Page = () => {
  const mainBlog = {
    title:
      "The Landscape of Education in India: Challenges, Opportunities, and the Road Ahead",
    datePublished: "2024-11-09 07:38:38",
    dateUpdated: "2024-11-10 10:58:58",
    image: "./img31.jpeg",
    content: {
      intro: "India, a land of diverse cultures, languages, and traditions, is also home to one of the largest education systems in the world...",
      historicalEvolution:
        "Education in India has a rich history. Ancient learning institutions such as Takshashila and Nalanda...",
      currentState:
        "India's education system is vast and complex, catering to over 250 million students...",
      keyAspects:
        "Some key aspects of the current education system include: 1. School Education... 2. Higher Education...",
      keyChallenges: "Despite the progress, India's education sector faces several hurdles...",
    },
    relatedBlogs: [
      {
        title:
          "Digital SAT - Digital Scholastic Aptitude Test",
        link: "#",
        image: "./img32.jpeg",
      },
      {
        title: "Digital SAT - Digital Scholastic Aptitude Test",
        link: "#",
        image: "./img31.jpeg",
      },
      {
        title: "What is the Advanced Placement (AP) Exam?",
        link: "#",
        image: "./img33.jpeg",
      },
      {
        title: "What is the GMAT Exam?",
        link: "#",
        image: "./img31.jpeg",
      },
    ],
    categories: [
      "Education",
      "Test Preparation",
      "Extracurricular Development",
      "Personal Statement and Essay Writing",
      "Letters of Recommendation",
      "Application Strategy and Planning",
      "Scholarship and Financial Aid",
      "Guidance",
    ],
  };

  return (
    <div>
    <div className="container mx-auto py-6 pb-30">
      {/* Main Row */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Blog Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{mainBlog.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            <span>Published on: {mainBlog.datePublished}</span>
            <span className="mx-2">|</span>
            <span>Updated on: {mainBlog.dateUpdated}</span>
          </div>
          <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
            <img
              src={mainBlog.image}
              alt={mainBlog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-3">

          <p className="text-gray-700 mb-4">{mainBlog.content.intro}</p>
          <h2 className="text-xl font-semibold mb-2">
            Historical Evolution of Education in India
          </h2>
          <p className="text-gray-700 mb-4">
            {mainBlog.content.historicalEvolution}
          </p>
          <h2 className="text-xl font-semibold mb-2">
            Current State of Education
          </h2>
          <p className="text-gray-700 mb-4">{mainBlog.content.currentState}</p>
          <h2 className="text-xl font-semibold mb-2">
            Some Key Aspects of the Current Education System
          </h2>
          <p className="text-gray-700 mb-4">{mainBlog.content.keyAspects}</p>
          <h2 className="text-xl font-semibold mb-2">Key Challenges</h2>
          <p className="text-gray-700 mb-4">{mainBlog.content.keyChallenges}</p>
        </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Related Blogs</h3>
            {mainBlog.relatedBlogs.map((blog, index) => (
              <div
                key={index}
                className="flex items-center mb-4 last:mb-0"
              >
                <div className="w-16 h-16 mr-4 overflow-hidden rounded">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href={blog.link}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {blog.title}
                </a>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className=" flex flex-wrap gap-2">
              {mainBlog.categories.map((category, index) => (
                <li key={index} className="text-gray-700 text-sm border border-gray-400 px-4 py-2">
                  <a href="#" className="hover:text-blue-600">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Blogs Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Related Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {mainBlog.relatedBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-50 overflow-hidden rounded-t-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">
                  {mainBlog.datePublished}
                </p>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <a
                  href={blog.link}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
