import MainLogo from "@src/screen_components/Header/MainLogo";
import React, { useState } from "react";
import { Button } from "keep-react";
import { ChatCircleDots, Cube, Gear } from "phosphor-react";
import _ from "lodash";

type RecurringPriceInterval = "signin" | "signup";

export default function SignUp() {
  const [active, setActive] = useState<RecurringPriceInterval>("signin");
  const intervals: RecurringPriceInterval[] = ["signin", "signup"];

  const MakeRecurrenceIntervalButtons: React.FC<{
    currentInterval: RecurringPriceInterval;
    setInterval: (interval: RecurringPriceInterval) => void;
  }> = ({ currentInterval, setInterval }) => {
    return intervals.map((interval) => {
      const className =
        currentInterval === interval
          ? `relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8 transform duration-700 ease-in-out translate-x-0`
          : `ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8 transform duration-700 ease-in-out translate-x-full`;

      const title = interval === "signin" ? "Sign In" : "Sign Up";

      return (
        <button
          key={interval}
          onClick={() => setInterval(interval)}
          type="button"
          className={className}
        >
          {title}
        </button>
      );
    });
  };

  return (
    <>
      <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("auth_modal") as HTMLDialogElement
          ).showModal()
        }
      >
        open modal
      </button>
      <dialog id="auth_modal" className="modal">
        <div className="modal-box m-0 p-0">
          <section className="bg-white dark:bg-gray-100  px-10">
            <div className="container flex items-center justify-center mx-auto">
              <form className="w-full max-w-md">
                <div className="flex justify-center mx-auto mt-10">
                  <MainLogo />
                </div>
                <div className="relative">
                  <div
                    typeof="button"
                    className={`w-[49%] absolute !z-0 h-10 top-1 left-1  ${
                      active === "signin"
                        ? "bg-gray-100 rounded-md py-2 transform duration-700 ease-in-out translate-x-o"
                        : "bg-gray-100 rounded-md py-2 transform duration-700 ease-in-out translate-x-full"
                    }`}
                  />
                  <div className="!z-10 bg-gray-300 rounded-lg b-1 border-gray-700 min-h-12 flex flex-row items-center w-full mt-10 p-1">
                    {_.map(intervals, (item, index) => (
                      <div
                        onClick={() => setActive(item)}
                        className={`w-1/2 ${active === item ? "z-10" : ""}`}
                      >
                        <p className="h-full flex flex-row text-center align-middle justify-center">
                          {item === "signin" ? "Sign In" : "Sign Up"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative flex items-center mt-8">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Username"
                  />
                </div>

                <label
                  // for="dropzone-file"
                  className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>

                  <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                  <input id="dropzone-file" type="file" className="hidden" />
                </label>

                <div className="relative flex items-center mt-6">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    type="email"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    type="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    type="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign Up
                  </button>

                  <div className="mt-6 text-center ">
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                    >
                      Already have an account?
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
