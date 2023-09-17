import React, { useState } from "react";
import money from "../images/money.jpeg";

const Calculator = () => {
  const [age, setAge] = useState(null);
  const [retirementage, setRetirementage] = useState(null);
  const [lifeAge, setLifeAge] = useState(null);
  const [noInterestMoney, setnoInterestMoney] = useState(null);
  const [inflation, setInflation] = useState(null);
  const [valuewithInflation, setValuewithInflation] = useState(null);
  const [withSevenInterest, setSevenInterest] = useState(null);
  const [saving, setSaving] = useState(null);

  return (
    <div className="flex gap-2 w-screen justify-center items-center">
      <form class=" my-auto mt-[5rem] ml-12">
        <h1 className="text-[2.2rem] underline mb-[3rem]">
          Calculate your retirement money
        </h1>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Your Current Age
            </label>
            <input
              type="number"
              onChange={(e) => setAge(e.target.value)}
              class="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              placeholder="36"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Your Monthly savings
            </label>
            <input
              type="number"
              onChange={(e) => setSaving(e.target.value)}
              class="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              placeholder="36"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Your expected savings at the time of retirement
            </label>
            <input
              type="number"
              class="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              placeholder="36"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Your retirement age
            </label>
            <input
              onChange={(e) => setRetirementage(e.target.value)}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              placeholder="60"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Your Life Expectancy
            </label>
            <input
              onChange={(e) => setLifeAge(e.target.value)}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="85"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Inflation rate
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="6.65"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[1.5rem]">
            Your total money by the time your retire without Investment:{" "}
            <span className="text-red-700">
              Rs. {saving * 12 * (retirementage - age)}
            </span>
          </p>
          <p className="text-[1.5rem]">
            Value of your money by the time you retire without investment(with
            7% inflation rate):{" "}
            <span className="text-red-700">
              Rs {saving * 12 * Math.pow(0.03, retirementage - age)}
            </span>
          </p>
          <p className="text-[1.5rem]">
            Your total money by the time your retire with FD/saving (assuming
            8%):{" "}
            <span className="text-red-700">
              Rs {saving * 12 * Math.pow(1.08, retirementage - age) * 2}
            </span>
          </p>
          <p className="text-[1.5rem]">
            Your total money by the time your retire with Investments like
            mutuals, schemes, etc (assuming 15%):{" "}
            <span className="text-red-700">
              Rs {saving * 12 * Math.pow(1.15, retirementage - age) * 4}
            </span>
          </p>
        </div>

        <div className="text-[2.5rem] mt-[5rem] mb-[5rem]">
          Hence to reach your goal it's important to invest and not just keep it
          in your boxes
        </div>
      </form>
      <img className="ml-12" src={money}></img>
    </div>
  );
};

export default Calculator;
