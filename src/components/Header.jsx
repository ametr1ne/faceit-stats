import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className='w-full bg-opacity-60 bg-zinc-800 h-16 md:h-20 fixed top-0 left-0 z-10 backdrop-blur-md'>
      <div className='max-w-5xl items-center justify-center h-full flex mx-auto'>
        <Link className='logo flex items-center space-x-3 cursor-pointer' href={"/"}>
          <svg
            width='40'
            height='40'
            viewBox='0 0 128 128'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='64' cy='64' r='64' fill='#ACE1FF' />
            <path
              d='M22.448 63.712H55.952V74.272H22.448V63.712ZM23.504 100H11.024V32.8H60.08V43.264H23.504V100Z'
              fill='#163331'
            />
          </svg>
        </Link>
      </div>
    </header>
  );
};
