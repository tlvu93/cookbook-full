import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonInspirationCard = () => {
  return (
    <SkeletonTheme>
      <div className='w-72 flex flex-col m-2 overflow-hidden rounded-2xl border-gray-300 border'>
        {/* Card */}
        <div className='overflow-hidden'>
          {/* Image */}
          <Skeleton height={224} />
        </div>
        <div className='w-full'>
          {/* Card Body */}
          <div className='h-80 overflow-hidden p-4 space-y-4'>
            <h1 className='text-lg font-medium'>
              <Skeleton />
            </h1>
            <p className='text-xs h-16 overflow-auto'>
              <Skeleton height={60} />
            </p>
            <div className='flex flex-col'>
              {/* Time Container 3 times*/}
              {[...Array(3)].map(() => (
                <div className='flex items-center space-x-2'>
                  <Skeleton width={150} height={16} />
                </div>
              ))}
            </div>
            <div>
              {/* Tags 3 Times*/}
              {[...Array(3)].map(() => (
                <span className='inline-flex items-center justify-center  py-1 text-xs font-bold leading-none  rounded-full'>
                  <Skeleton width={30} />
                </span>
              ))}
            </div>
            <div>
              {/* Save Buttons */}
              <Skeleton width={30} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonInspirationCard;
