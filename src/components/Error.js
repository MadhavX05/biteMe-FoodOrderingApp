import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    // <div>
    //   <h1>Oops!</h1>
    //   <h2>Something went wrong!</h2>
    //   <h2>{err.status + ":" + err.statusText}</h2>
    // </div>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-4xl font-bold uppercase text-[#333333] my-4 flex gap-2 items-center">
        <img src="https://cdn.prod.website-files.com/5e3ce2ec7f6e53c045fe7cfa/629a083b59f47160de0040bb_Free%20Error%20State.png"></img>
        <div className="flex flex-col">
          Well, this is awkward. Looks like our code took a lunch break. Don’t
          worry, we’ll be back in no time!
          <div className="mt-10 flex justify-between text-[#FF6B6B]">
            {err.status}: {err.statusText}
            <Link to="/">
              <button className="mx-32 bg-[#4CAF50] text-white rounded-lg px-4 py-1 text-3xl">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
