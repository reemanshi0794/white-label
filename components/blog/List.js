import React from "react"

const List = ({ content }) => {
  return (
    <>
      <p className="text-[#6e6e6e] text-base 2xl:text-lg leading-[26px] 2xl:leading-8 mb-4 pl-2">
        {content}
      </p>
    </>
  )
}

export default List
