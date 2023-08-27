import React from "react";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import BlogCard from "./subcomponents/BlogCard";

const BlogsAndNews = () => {
  const blog = [
    {
      date: "Sept 14",
      image:
        "https://cdn.logojoy.com/wp-content/uploads/2018/05/30164004/373.png",
      title: "Career Exploration Workshop",
      paragraph:
        "Are you unsure about which career path to choose? Join our Career Exploration Workshop where industry experts will guide you through various job sectors, helping you understand the skills",
    },
    {
      date: "Sept 20",
      image:
        "https://t3.ftcdn.net/jpg/05/20/29/16/360_F_520291673_MMciPpcgZIhrtr22YWDwfBcTRduD7qr5.jpg",
      title: "Resume Building Masterclass",
      paragraph:
        "Your resume is often the first impression you make on potential employers. Learn the art of creating compelling resumes that highlight your skills and experiences effectively. Our Resume Building Masterclass will cover resume writing techniques",
    },
    {
      date: "Oct 11",
      image:
        "https://img.freepik.com/premium-vector/event-management-logo_105514-2.jpg",
      title: "Interview Success Seminar",
      paragraph:
        "Nail your interviews with confidence! Our Interview Success Seminar will provide you with strategies to tackle various interview formats, answer tough questions, and present yourself as the perfect candidate ",
    },
    {
      date: "Oct 16",
      image:
        "https://marketplace.canva.com/EAE9407gQAE/1/0/1600w/canva-rose-gold-photography-circle-logo-9uq8B--Pjcs.jpg",
      title: "Networking Mixer for Professionals",
      paragraph:
        "Expand your professional network at our Networking Mixer. Connect with fellow professionals, industry experts, and potential employers in a relaxed and engaging atmosphere",
    },
  ];

  const handleScrollLeft = () => {
    document.getElementById("blog-scroll-bar").scrollLeft -= 200;
  };
  const handleScrollRight = () => {
    document.getElementById("blog-scroll-bar").scrollLeft += 200;
  };
  return (
    <div className="w-[95%]  flex flex-col justify-center items-center mt-10 gap-5 m-5 overflow-hidden ">
      <div className="w-[95%] flex flex-col gap-4">
        <div className="flex text-3xl gap-3 font-bold ">
          <span className="text-gray-600">Blogs and</span>
          <span className="text-blue-600">News</span>
        </div>
        <div className="text-gray-500 font-thin text-base">
          Exploring Trends, Tips, and Techniques in the Job Market
        </div>
      </div>
      <div className="w-[100%] flex justify-evenly items-center  ">
        <div onClick={handleScrollLeft}>
          <AiFillCaretLeft color="blue" size={25} />
        </div>

        <div
          id="blog-scroll-bar"
          className="w-[90%]  overflow-x-scroll  overflow-y-hidden    flex   scroll-smooth "
        >
          {blog.map((item) => {
            return <BlogCard item={item} />;
          })}
        </div>
        <div onClick={handleScrollRight}>
          <AiFillCaretRight color="blue" size={25} />
        </div>
      </div>
    </div>
  );
};

export default BlogsAndNews;
