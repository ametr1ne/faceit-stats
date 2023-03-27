export const Loader = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-20 flex justify-center items-center'>
      <div className='rounded-full w-10 h-10 bg-white animate-bounce'>
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
      </div>
    </div>
  );
};
