export const HeadBlock = ({ user }) => {
  return (
    <div className='relative head-block flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0 mb-6 rounded-xl py-5 px-12 overflow-hidden'>
      {user.cover_image && (
        <img
          src={user.cover_image}
          alt=''
          className='absolute top-0 left-0 -z-10 blur-sm brightness-50 w-full h-full object-cover md:h-auto'
        />
      )}
      {user.avatar ? (
        <img className='rounded-full w-[80px] md:w-[120px]' src={user.avatar} alt='avatar' />
      ) : (
        <img className='rounded-full' src={"user.png"} width={100} alt='empty_avatar' />
      )}
      <div className='flex-col justify-start items-baseline'>
        <h2 className='text-3xl text-white font-bold'>{user.nickname}</h2>
        <h4>Steam nickname: {user.steam_nickname}</h4>
      </div>
      <a
        href={user.faceit_url}
        target='_blank'
        className='text-white font-semibold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm transition-all duration-500 px-5 py-2.5 text-center'>
        FACEIT Profile
      </a>
    </div>
  );
};
