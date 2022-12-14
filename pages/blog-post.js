import React, { useState } from 'react';
import Header from '../components/headers/light.js';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import Crowdfunding from '../assets/images/Crowdfunding.png';
import Nft from '../assets/images/Nft.png';
import Head from 'next/head';
import MobileApps from '../assets/images/MobileApps.png';

export default ({
  headingText = 'Blog Posts',
  posts = [
    {
      imageSrc: Crowdfunding,
      date: 'November 28, 2022',
      title: 'A complete guide for developing Crowdfunding App in 2022',
      description:
        'In the digital economy, crowdfunding is gaining popularity and rising to the top. The size of the worldwide crowdfunding business was over $17 billion in 2021, and by 2028, it is expected to be worth over $43 billion....',
      url: '/A-complete-guide-for-developing-crowdfunding-app-in-2022',
    },
    {
      imageSrc: Nft,
      date: 'November 28, 2022',
      title: 'Development of a Whiten Apps NFT Marketplace',
      description:
        'The building of the NFT marketplace can use ready-made solutions called NFT Marketplace Clone solutions.It entails copying any well-known NFT marketplace, such as Opensea or Rarible, and implementing UI platform adjustments based on the needs of the company...',
      url: '/Development-of-a-whiten-apps-nft-marketplace-2022',
    },
    {
      imageSrc: MobileApps,
      date: 'November 28, 2022',
      title: 'The On Demand Mobile Apps in 2022',
      description: `The market has significantly shifted in favour of on-demand app upgrade as a result of the technology's quick advancement and the entry of the smart mobile sector. Now, areas that largely make up people's daily lives are being devoured by the mobile sector. Customers today need not just high...`,
      url: '/The-On-Demand-Mobile-Apps',
    },
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
    // getPlaceholderPost(),
  ],
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  return (
    <>
      <div>
        <Head>
          <title>
            Software Development Company | Custom App Developer | White Label
            Technologies
          </title>
          <meta
            name="description"
            content="Design your apps and website with top software development company at reasonable prices. Experienced custom app designers and developers. Contact us today!"
          />
          <meta
            name="keyword"
            content="custom mobile app development company, software development company,custom software development,software app developer"
          />
        </Head>
        <Header />
        <div className="min-h-screen text-secondary-500 p-8 lg:px-24 2xl:p-8 overflow-hidden">
          <div className="relative">
            <div className="max-w-screen-xl mx-auto pb-24 pt-32 2xl:pt-[9rem]">
              <div className="flex mb-8 ">
                <h2 className=" text-3xl 2xl:text-5xl font-black tracking-wide text-center text-gray-900">
                  {headingText}
                </h2>
              </div>
              <div className="sm:-mr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, visible).map((post, index) => {
                  return (
                    <div
                      className={post.featured ? ' sm:pr-8' : 'mb-10 sm:pr-8'}
                      key={index}
                      featured={post.featured}
                    >
                      <a
                        className={
                          post.featured
                            ? 'sm:flex-row! h-full sm:pr-4 group flex bg-gray-100 rounded-lg'
                            : 'group cursor-pointer flex flex-col bg-gray-100 rounded-lg'
                        }
                        as="a"
                        href={post.url}
                      >
                        <div
                          className={
                            post.featured
                              ? 'sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg xl:w-8/12 h-64 w-full bg-cover bg-center rounded-t-lg'
                              : 'h-64 w-full bg-cover bg-center rounded-t-lg'
                          }
                        >
                          <img
                            src={post.imageSrc.src}
                            className={
                              post.featured
                                ? 'object-cover w-full h-full'
                                : 'object-cover w-full h-full'
                            }
                          />
                        </div>
                        <div
                          className={
                            post.featured
                              ? 'sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 p-5 border-2 border-t-0 rounded-lg rounded-t-none'
                              : 'p-5 border-2 border-t-0 rounded-lg rounded-t-none'
                          }
                        >
                          <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8">
                            {post.category}
                          </div>
                          <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                            {post.date}
                          </div>
                          <div className="line-clamp-2 mt-1 mb-[10px] font-black text-xl leading-7 2xl:text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300">
                            {post.title}
                          </div>
                          {post.description && (
                            <div
                              className={
                                post.featured
                                  ? 'text-sm leading-6 text-gray-600 font-medium line-clamp-none md:line-clamp-4 lg:line-clamp-5'
                                  : 'text-sm leading-6 text-gray-600 font-medium line-clamp-none md:line-clamp-4 lg:line-clamp-5'
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
              {/* {visible < posts.length && (
                <div className="flex justify-center">
                  <button
                    className="mt-16 mx-auto px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300"
                    onClick={onLoadMoreClick}
                  >
                    Load More
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    'https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80',
  date: 'November 28, 2022',
  title: 'A complete guide for developing Crowdfunding App in 2022',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  url: 'https://reddit.com',
});
// {
//   imageSrc:
//     'https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80',
//   category: 'Travel Guide',
//   date: 'April 19, 2020',
//   title: 'Visit the beautiful Alps in Switzerland',
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   url: 'https://reddit.com',
// }
