const Shimmer = () => {
  return (
    <div className="restaurant-list mt-8  flex flex-wrap justify-center w-[80%] m-auto">
      {Array(16)
        .fill("")
        .map((e, index) => (
          <div className="animate-pulse space-y-2  m-4" key={index}>
            <div className="bg-gray-300 w-full rounded-md aspect-video min-h-[152px] object-cover block card-img relative"></div>

            <h2 className="text-lg font-semibold mt-2 h-4 rounded-md bg-gray-300"></h2>
            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-300"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
