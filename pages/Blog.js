import React, { useState } from "react";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";

export default ({
  headingText = "Blog Posts",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      category: "Travel Tips",
      date: "April 21, 2020",
      title: "Safely Travel in Foreign Countries",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com",
      featured: true,
    },
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
  ],
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
          <div className="flex">
            <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center text-gray-900">
              {headingText}
            </h2>
          </div>
          <div className="mt-6 sm:-mr-8 flex flex-wrap">
            {posts.slice(0, visible).map((post, index) => {
              const PostImg = post;

              console.log("PostImg", PostImg);
              return (
                <div
                  className={
                    post.featured
                      ? "w-full!"
                      : "mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8"
                  }
                  key={index}
                  featured={post.featured}
                >
                  <a
                    className={
                      post.featured
                        ? "sm:flex-row! h-full sm:pr-4 group flex bg-gray-100 rounded-lg"
                        : "group cursor-pointer flex flex-col bg-gray-100 rounded-lg"
                    }
                    as="a"
                    href={post.url}
                  >
                    <div
                      className={
                        post.featured
                          ? "sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg xl:w-8/12 h-64 w-full bg-cover bg-center rounded-t-lg"
                          : "h-64 w-full bg-cover bg-center rounded-t-lg"
                      }
                    >
                      <img
                        src={post.imageSrc}
                        className={
                          post.featured ? "w-full object-cover h-96" : ""
                        }
                      />
                    </div>
                    <div
                      className={
                        post.featured
                          ? "sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 p-8 border-2 border-t-0 rounded-lg rounded-t-none"
                          : "p-8 border-2 border-t-0 rounded-lg rounded-t-none"
                      }
                    >
                      <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8">
                        {post.category}
                      </div>
                      <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                        {post.date}
                      </div>
                      <div className="mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300">
                        {post.title}
                      </div>
                      {post.featured && post.description && (
                        <div
                          className={
                            post.featured
                              ? "text-sm mt-3 leading-loose text-gray-600 font-medium "
                              : ""
                          }
                        >
                          {post.description}
                        </div>
                      )}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          {visible < posts.length && (
            <div className="flex justify-center">
              <button
                className="mt-16 mx-auto px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300"
                onClick={onLoadMoreClick}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com",
});
