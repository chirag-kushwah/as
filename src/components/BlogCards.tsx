import React from "react";

const BlogCards = () => {
  const blogs = [
    {
      id: 1,
      date: "2024-11-09",
      title:
        "Lorem indians a Necessitatibus voluptatibus sapiente officiis, debitis inventore molestiae ",
      image: "./img37.jpeg",
    },
    {
      id: 2,
      date: "2024-11-10",
      title:
        "Lorem indians a Necessitatibus voluptatibus sapiente officiis, debitis inventore molestiae ",
      image: "./img31.jpeg",
    },
    {
      id: 3,
      date: "2024-11-10",
      title:
        "Lorem indians a Necessitatibus voluptatibus sapiente officiis, debitis inventore molestiae ",
      image: "./img31.jpeg",
    },
    {
      id: 4,
      date: "2024-11-10",
      title:
        "Lorem indians a Necessitatibus voluptatibus sapiente officiis, debitis inventore molestiae ",
      image: "./img31.jpeg",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl text-[var(--greenBackground)] font-bold mb-6">
        All Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="shadow-lg rounded-md overflow-hidden hover:shadow-lg transition-shadow "
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-45 object-cover"
            />
            <div className="p-4 text-justify">
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <h3 className="text-md font-semibold mb-2 ">{blog.title}</h3>
              <p className="text-blue-600 text-sm hover:underline">See More</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
