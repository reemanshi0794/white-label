import React from 'react';
import Description from './Description';
import SubsubHeading from './SubsubHeading';

const BulletList = ({ content }) => {
  return (
    <>
      <div className="mb-4 md:mb-8">
        <ul className=" list-none">
          <li>{content}</li>
        </ul>
      </div>
    </>
  );
};

export default BulletList;
