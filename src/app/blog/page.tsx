import BlogCards from "@/components/BlogCards";
import HorizontalSwiper from "@/components/HorizontalSwiper";
import React from "react";

function page() {
  return (
    <div className="p-8">
      <div className="container m-auto">
        <HorizontalSwiper />
        <div className="">
          <BlogCards/>

        </div>
      </div>
    </div>
  );
}

export default page;
