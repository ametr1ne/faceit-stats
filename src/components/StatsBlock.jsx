export const StatsBlock = ({ stats }) => {
  return (
    <div className='w-full rounded-lg relative dark:bg-zinc-800 mt-3'>
      <div className='dark:border-gray-600'>
        <div
          className='p-4 bg-white rounded-lg md:p-8 dark:bg-zinc-800'
          id='stats'
          role='tabpanel'
          aria-labelledby='stats-tab'>
          <small className='absolute top-4 left-1/2 -translate-x-1/2'>All time</small>
          <dl className='grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8'>
            <div className='flex flex-col items-center justify-center text-center'>
              <dt className='mb-2 text-3xl font-extrabold'>{stats["Average Headshots %"]}%</dt>
              <dd className='font-light text-gray-500 dark:text-gray-400'>Average Headshots</dd>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <dt className='mb-2 text-3xl font-extrabold'>{stats["Average K/D Ratio"]}</dt>
              <dd className='font-light text-gray-500 dark:text-gray-400'>Average K/D</dd>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <dt className='mb-2 text-3xl font-extrabold'>{stats["Matches"]}</dt>
              <dd className='font-light text-gray-500 dark:text-gray-400'>Matches</dd>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <dt className='mb-2 text-3xl font-extrabold'>{stats["Win Rate %"]}%</dt>
              <dd className='font-light text-gray-500 dark:text-gray-400'>Win Rate</dd>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <dt className='mb-2 text-3xl font-extrabold'>{stats["Wins"]}</dt>
              <dd className='font-light text-gray-500 dark:text-gray-400'>Wins</dd>
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <dt className='mb-2 text-3xl font-extrabold'>{stats["Longest Win Streak"]}</dt>
              <dd className='font-light text-gray-500 dark:text-gray-400'>Longest Win Streak</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
