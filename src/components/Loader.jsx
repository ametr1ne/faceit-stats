export const Loader = () => {
  return (
    <div>
      <div className='py-3 md:py-0 max-w-5xl md:h-[160px] border rounded-md border-gray-500 px-12 mx-auto animate-pulse flex gap-4 md:gap-0 flex-col md:flex-row items-center justify-between'>
        <div className='w-[80px] md:w-[120px] h-[80px] md:h-[120px] bg-gray-300 rounded-full dark:bg-gray-700'></div>
        <div className='flex flex-col justify-center items-center'>
          <div className='h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
          <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[280px] mb-2.5'></div>
        </div>
        <div className='h-[40px] bg-gray-200 rounded-md dark:bg-gray-700 w-[141px] mb-4'></div>
      </div>

      <div className='flex gap-4 mt-4 flex-wrap md:flex-nowrap'>
        <div className='h-60 border rounded-md border-gray-500 flex flex-col animate-pulse w-full md:w-1/3 justify-center items-center'>
          <div className='h-16 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-4'></div>
          <div className='h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
        </div>
        <div className='h-60 border rounded-md border-gray-500 flex flex-col animate-pulse px-12 w-full md:w-2/3 justify-center items-center'>
          <div className='h-12 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4'></div>
          <div className='h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
        </div>
      </div>

      <div className='mt-4 h-60 border rounded-md border-gray-500 flex flex-col animate-pulse px-12 w-full justify-center items-center'>
        <div className='h-12 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4'></div>
        <div className='h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
      </div>
    </div>
  );
};
