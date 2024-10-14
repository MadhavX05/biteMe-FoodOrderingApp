const UpdatedSoon = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="text-4xl font-bold uppercase text-[#FF5722] my-4 flex gap-2 items-center">
        <img
          src="https://play-lyst.web.app/static/media/undraw_server_down.5e08d1c8c6ab3d9610c198ead7d7ac24.svg"
          alt="Updated Soon"
          className="h-96 justify-center ml-5"
        />
        <div className="flex flex-col">
          We’re just putting on the final garnish. Stay tuned for a tasty
          update!
          <div className="mt-10 text-[#00BFFF]">
            <div className="text-2xl">
              We're just making some final tweaks. Your patience will pay
              off—promise!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedSoon;
