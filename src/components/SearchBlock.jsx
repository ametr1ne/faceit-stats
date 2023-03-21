import React from "react";
import Link from "next/link";

export const SearchBlock = ({ onChange, submitSearch, searchValue, cookieObject }) => {
  return (
    <>
      <form className='search-block mb-14'>
        <input
          className='input outline-none border-none rounded-lg text-black py-3 px-5 w-full md:w-96 font-semibold dark:text-white'
          autoFocus
          placeholder='Enter the nickname...'
          value={searchValue}
          onChange={(e) => onChange(e)}
          type='text'
        />
        <button onClick={(e) => submitSearch(e)}></button>
      </form>
      {cookieObject.length > 0 && (
        <div className='flex flex-col items-center'>
          <h3 className='mb-3 font-semibold text-xl'>Recent: </h3>
          <div className='max-w-xl flex flex-wrap'>
            {cookieObject.map((item, index) => (
              <Link
                key={index}
                href={"/player/" + item}
                className='font-medium cursor-pointer mb-3 px-2 py-1 mr-2 text-sm text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300 transition-colors duration-300'>
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
