'use client';

import Input from '@/components/ui/atoms/Input';
import Link from 'next/link';
import React, { useState } from 'react';

function ProfileUser  () {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const clickHandler =()=>{

  }

  return (
    <>
    {/* <div className="flex flex-col gap-4">
      <Link
        href="#"
        onClick={() => handleLinkClick('link1')}
        className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300"
      >
        1111
      </Link>
      <Link
        href="#"
        onClick={() => handleLinkClick('link2')}
        className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300"
      >
        222
      </Link>
      <div
        className={`${
          activeLink === 'link1' ? 'block' : 'hidden'
        } bg-white p-4 rounded-md shadow-md`}
      >
        <h2 className="text-lg font-bold mb-2">Content 1</h2>
        <p className="text-gray-600">This is the content for Link 1.</p>
      </div>

      <div
        className={`${
          activeLink === 'link2' ? 'block' : 'hidden'
        } bg-white p-4 rounded-md shadow-md`}
      >
        <h2 className="text-lg font-bold mb-2">Content 2</h2>
        <p className="text-gray-600">This is the content for Link 2.</p>
      </div>



     


    </div> */}


    <div>
            <p>categories</p>
            <ul onClick={clickHandler}>
              <li>11</li>
              <li>22</li>
              <li>33</li>
            </ul>
          </div>

          <Input placeholder="شماره" type="text"/>
          </>
  );
}

export default ProfileUser ;