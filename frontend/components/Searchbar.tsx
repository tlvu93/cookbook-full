const Searchbar = () => {
  return (
    <div className="bg-slate-700 text-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex-1 flex items-center justify-center sm:items-stretch">
          <div className="flex-shrink-0 flex p-2 space-x-2 items-center">
            <button
              type="button"
              className="inline-flex item-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              className="px-4 py-1 bg-slate-700 border-b-gray-100 border-b-2"
              placeholder="Search by tags"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
