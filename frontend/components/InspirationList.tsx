import Container from './Container';
const API_URL = 'https://wbs-cookbook-backend.herokuapp.com';
const RecipeCard = (data) => {
  console.log(data);
  console.log(API_URL + data.attributes.images.data[0].attributes.url);
  return (
    <div className='w-72 flex flex-col m-2 overflow-hidden rounded-2xl border-gray-300 border'>
      {/* Card */}
      <div className='overflow-hidden'>
        {/* Image */}
        <img
          className='h-56'
          src={API_URL + data.attributes.images.data[0].attributes.url}
        />
      </div>
      <div className='w-full'>
        {/* Card Body */}
        <div className='h-80 overflow-hidden p-4 space-y-4'>
          <h1 className='text-lg font-medium'>{data.attributes.recipe_name}</h1>
          <p className='text-xs h-16 overflow-auto'>
            {data.attributes.description}
          </p>
          <div className='flex flex-col'>
            {/* Time Container*/}
            <div className='flex items-center space-x-2'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <p className='text-sm'>Prep time ~20 minutes</p>
            </div>
            <div className='flex items-center space-x-2'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <p className='text-sm'>Cooking time ~30 minutes</p>
            </div>
            <div className='flex items-center space-x-2'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <p className='text-sm'>Total time ~50 minutes</p>
            </div>
          </div>
          <div>
            {/* Tags */}
            <span className='inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-yellow-600 rounded-full'>
              Spaghetti
            </span>
            <span className='inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>
              Meat
            </span>
            <span className='inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-yellow-500 rounded-full'>
              Noodles
            </span>
          </div>
          <div>
            {/* Save Buttons */}
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InspirationList = ({ recipes }) => {
  console.log(recipes);
  return (
    <Container>
      <div>
        <div>
          <h1 className='text-2xl'>Inspiration</h1>
        </div>
        <div className='flex flex-wrap'>
          {/* {recipes.data.map((data) => (
            <RecipeCard {...data} />
          ))} */}
        </div>
      </div>
    </Container>
  );
};

export default InspirationList;
