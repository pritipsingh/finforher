import { mutuals } from "../apis/apis";
import NavMain from "../Components/NavMain";
const Mutuals = () => {
  mutuals.map((api) => {
    console.log(api);
  });
  return (
    <div>
      <NavMain />
      <div className=" w-[90vh]min-h-screen mt-[5rem] ml-[5rem] mb-[5rem] ">
        <h1 className="text-xl font-bold">
          {" "}
          Which mutual fund is best for homemaker?
        </h1>
        <p>
          There are numerous types of mutual funds available. A homemaker should
          select a fund that meets their financial goals and fits within risk
          appetite.
        </p>
        <br></br>
        <h1 className="text-xl font-bold">How can a homemaker save money?</h1>
        <p>
          Investing in a mutual fund through SIP is a great way to save money as
          a small amount of money is invested into these funds at periodic
          intervals.
        </p>
        <br></br>
        <h1 className="text-xl font-bold">How can a woman grow financially?</h1>
        <p>
          The financial markets have become easily accessible due to the
          internet and developments in technology. A woman has an incredible
          opportunity to grow financially by investing in the various investment
          vehicles available.
        </p>
      </div>

      <h1 className="text-center text-[2.5rem]">Explore Mutual funds</h1>
      <div className="grid grid-cols-2 mx-12 mb-[5rem]">
        {mutuals.map((api) => (
          <div class=" w-[50rem] mx-auto ml-5 gap-2 mt-8 ">
            <div class="p-4  border-2 border-black rounded-md">
              <span class="inline-block flex items-center gap-5 text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
                <h1 className="text-[2rem] ">{api.name}</h1>
              </span>
              <div className="flex justify-between">
                <div>
                  <h1 class="text-2xl font-semibold pt-[2rem] text-gray-700 capitalize">
                    Returns: {api.Return}
                  </h1>
                  <h1 class="text-2xl font-semibold text-gray-700 capitalize">
                    Current Value: {api.CurrentValue}
                  </h1>
                </div>
                <div>
                  <h1 class="text-2xl font-semibold pt-[2rem] text-gray-700 capitalize">
                    MinInvest: {api.MinInvest}
                  </h1>
                  <h1 class="text-2xl font-semibold text-gray-700 capitalize">
                    AUM: {api.AUM}
                  </h1>
                </div>
              </div>

              <a
                href="#"
                class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mutuals;
