import React, { useEffect } from "react"
import ReactGA from "react-ga"
import Title from "../components/blog/Title"
import Description from "../components/blog/Description"
import Image from "../components/blog/Image"
import { CrowdFundingAppData } from "../helpers/utils"
import Header from "../components/headers/light.js"
import Head from "next/head"
import Footer from "../components/footers/FiveColumnWithInputForm.js"

const Howmuchcosttodevelop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    ReactGA.pageview(window.location.pathname)
  }, [])

  const Components = {
    Title,
    Description,
    Image,
  }

  const getComponent = (type, content) => {
    const Render = Components[type]
    return <Render content={content} />
  }

  return (
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
      <div className="relative">
        <div className="max-w-screen-xl mx-auto min-h-screen px-8 lg:px-24 2xl:p-8 overflow-hidden">
          <div className=" pt-40">
            <div>
              <div className="container">
                <div className="row m-0">
                  <div className="col">
                    <h1 className="text-[#151514] text-[22px] md:text-2xl xl:text-3xl 2xl:text-[40px] font-bold mb-[14px]">
                      A complete guide for developing Crowdfunding App in 2022
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {CrowdFundingAppData.map(({ type, content, className }) => (
              <div className={className}>{getComponent(type, content)}</div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Howmuchcosttodevelop
