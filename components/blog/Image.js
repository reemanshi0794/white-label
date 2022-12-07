import React from "react"

const Image = ({ content }) => {
  return (
    <div className="mb-4 md:mb-8 lg:mb-20">
      <img src={content.src} alt="post1" className="h-full object-cover" />
    </div>
  )
}

export default Image
