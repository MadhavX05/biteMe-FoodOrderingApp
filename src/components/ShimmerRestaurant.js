const ShimmerRestaurant = () => {
  return (
    <div className="container-md  w-[60%] m-auto mt-8">
      <div className="animate-pulse">
        <div className="flex justify-between items-center border-dashed border-b pb-16">
          <div className="basis-6/12 space-y-2 ">
            <div className="bg-gray-300 h-6 rounded-md"></div>
            <div className="bg-gray-300 w-[50%] h-6 rounded-md"></div>
          </div>

          <div className="basis-2/12 bg-gray-300 h-14 rounded-md"></div>
        </div>

        {/* Restaurant Details */}
        {Array(4)
          .fill("")
          .map((e, index) => (
            <>
              <div className="w-full my-4 bg-gray-300 h-12"></div>
              <div className="space-y-4">
                <div className="flex w-full justify-between gap-4">
                  <div className="space-y-2 grow py-4">
                    <div className="h-4 bg-gray-200 w-[80%] rounded-md"></div>
                    <div className="h-2 bg-gray-200 w-[50%] rounded-md"></div>
                    <div className="h-2 bg-gray-200 w-[20%] rounded-md"></div>
                  </div>
                  <div className="h-24 w-full basis-2/12 aspect-square md:aspect-video bg-gray-300 rounded-md"></div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default ShimmerRestaurant;
