import { useState } from "react";
import man from "../assets/man.png";
import projectIcon from "../assets/projectIcons.svg";

interface headerProps {
  headerNames?: string[];
  children?: React.ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const StoreNavigation: React.FC<headerProps> = (props) => {
  const [darkTheme, setdarkTheme] = useState(false);

  return (
    <div>
      <div
        className={classNames(
          darkTheme ? "bg-green-300" : "bg-white",
          "flex flex-col flex-auto min-h-screen p-8 mx-auto my-auto sm:my-16 sm:mx-28   text-neutral-600  sm:rounded-xl shadow-xy-xl cursor-pointer select-none"
        )}
      >
        <div
          className={classNames(
            darkTheme ? "bg-green-300" : "bg-white",
            "flex flex-row flex-auto w-full py-1"
          )}
        >
          <nav className="flex flex-wrap w-full mx-auto">
            <div className="inline-flex brand-jkan1 mx-auto lg:mx-0 text-3xl">
              <span className="text-orange-500">M</span>Deeraj
            </div>
            <ul className="inline-flex flex-wrap w-full lg:w-fit sm:mx-auto xl:ml-28 list-none font-roboto-bold items-center">
              <li className="mx-auto my-2 lg:my-0 px-4 w-full lg:w-fit text-center">
                <a href="#projects">Projects</a>
              </li>
              <li className="mx-auto my-2 lg:my-0 px-4 w-full lg:w-fit text-center hidden lg:flex font-roboto text-sm">
                /
              </li>
              <li className="mx-auto my-2 lg:my-0 px-4 w-full lg:w-fit text-center">
                dhirajmaurya345@gmail.com
              </li>
              <li className="mx-auto my-2 lg:my-0 px-4 w-full lg:w-fit text-center hidden lg:flex font-roboto text-sm">
                /
              </li>
              <li className="mx-auto my-2 lg:my-0 px-4 w-full lg:w-fit text-center">
                dhirajmaurya345.github.io
              </li>
              {/*  */}
              <button
                className="mx-auto my-2 lg:my-0 px-4 w-full lg:w-fit text-center"
                onClick={() => setdarkTheme(!darkTheme)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 fill-neutral-600 mx-auto lg:mx-6 dark:hidden flex"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 mx-auto lg:mx-6 hidden dark:flex "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </button>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row flex-auto w-full">
          <div className="flex absolute mt-16 sm:mt-72 flex-col my-auto container h-fit max-w-fit mx-auto">
            <a
              href="https://www.linkedin.com/in/dheerajmaurya1379"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6 my-4 fill-gray-700  m-1"
              >
                <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z" />
              </svg>
            </a>
            <a href="https://github.com/dhirajmaurya345" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 72 72"
                fill="currentColor"
                className="w-6 h-6 my-4 fill-gray-700  m-1"
              >
                <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" />
                <path
                  d="M35.9985,12 C22.746,12 12,22.7870921 12,36.096644 C12,46.7406712 18.876,55.7718301 28.4145,58.9584121 C29.6145,59.1797862 30.0525,58.4358488 30.0525,57.7973276 C30.0525,57.2250681 30.0315,55.7100863 30.0195,53.6996482 C23.343,55.1558981 21.9345,50.4693938 21.9345,50.4693938 C20.844,47.6864054 19.2705,46.9454799 19.2705,46.9454799 C17.091,45.4500754 19.4355,45.4801943 19.4355,45.4801943 C21.843,45.6503662 23.1105,47.9634994 23.1105,47.9634994 C25.2525,51.6455377 28.728,50.5823398 30.096,49.9649018 C30.3135,48.4077535 30.9345,47.3460615 31.62,46.7436831 C26.2905,46.1352808 20.688,44.0691228 20.688,34.8361671 C20.688,32.2052792 21.6225,30.0547881 23.1585,28.3696344 C22.911,27.7597262 22.0875,25.3110578 23.3925,21.9934585 C23.3925,21.9934585 25.4085,21.3459017 29.9925,24.4632101 C31.908,23.9285993 33.96,23.6620468 36.0015,23.6515052 C38.04,23.6620468 40.0935,23.9285993 42.0105,24.4632101 C46.5915,21.3459017 48.603,21.9934585 48.603,21.9934585 C49.9125,25.3110578 49.089,27.7597262 48.8415,28.3696344 C50.3805,30.0547881 51.309,32.2052792 51.309,34.8361671 C51.309,44.0917119 45.6975,46.1292571 40.3515,46.7256117 C41.2125,47.4695491 41.9805,48.9393525 41.9805,51.1877301 C41.9805,54.4089489 41.9505,57.0067059 41.9505,57.7973276 C41.9505,58.4418726 42.3825,59.1918338 43.6005,58.9554002 C53.13,55.7627944 60,46.7376593 60,36.096644 C60,22.7870921 49.254,12 35.9985,12"
                  className={classNames(
                    darkTheme ? "fill-green-300" : "fill-white"
                  )}
                />
              </svg>
            </a>
          </div>

          <div className="flex flex-row flex-wrap container h-50 mt-6 sm:mt-32 mb-2">
            <div className="flex xl:order-last w-full xl:w-fit mx-auto">
              <div className="flex rounded-full md:shrink h-56 w-56 mx-auto my-2 xl:my-auto">
                <img src={man} alt="Profile Image" draggable="false" />
              </div>
            </div>

            <div className="flex flex-col p-2 container w-fit mx-auto xl:ml-38 xl:mr-0 pt-6">
              <div className="flex flex-col font-roboto-bolder text-6xl max-w-fit mx-auto xl:mx-0 font-bold">
                <h1 className="text-left w-fit pr-4">Dheeraj</h1>
                <h1 className="text-right">Maurya</h1>
              </div>
              <h3
                className="flex w-fit my-4 text-lg
                 font-bold uppercase font-roboto-bold"
              >
                Programmer, Designer & Developer
              </h3>
              <p className="flex font-roboto tracking-tight text-justify break-normal w-fit my-4 mt-8 max-w-xs">
                Experienced software engineer with good knowledge of JS,
                ReactJs and AWS. Strong backend experience, with NodeJs, AWS,
                RESTful APIs and diverse technologies. Skilled in problem
                solving and designing scalable systems.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-row flex-wrap my-1 mt-40 container h-fit max-w-full mx-auto"
          id="projects"
        >
          <div className="flex md:shrink mx-auto md:w-1/2">
            <img
              className="grayscale rounded-lg w-64 mx-auto object-cover md:h-full"
              src={projectIcon}
              alt="ChitChat Logo"
              draggable="false"
            />
          </div>
          <div className="flex flex-col px-12 my-auto container h-fit md:w-1/2 mx-auto">
            <h1 className="font-sans text-2xl text-left max-w-screen-sm font-bold">
              Angular Catalog
            </h1>
            <p className="font-sans text-justify max-w-screen-sm my-4">
              Angular Catalog Project. Features include Firebase Real Time
              Database, Angular HTTP Client, Angular Animations, Pagination,
              Smooth Image Loading using Prefetching.
            </p>
            <p className="text-left max-w-screen-sm">
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                css
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                angular
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                catalog
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                firebase
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                angular-animations
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap my-1 container h-fit max-w-full mx-auto">
          <div className="flex md:shrink mx-auto md:w-1/2">
            <img
              className="grayscale rounded-lg w-64 mx-auto object-cover md:h-full"
              src={projectIcon}
              alt="ChitChat Logo"
              draggable="false"
            />
          </div>
          <div className="flex flex-col px-12 my-auto container h-fit md:w-1/2 mx-auto">
            <h1 className="font-sans text-2xl text-left max-w-screen-sm font-bold">
              GuideHubz
            </h1>
            <p className="font-sans text-justify max-w-screen-sm my-4">
              Career Enhancement Website based on Model-View-Controller Design
              Pattern. Also includes an Admin Panel to ease the work of
              Uploading Content and Sending Promotional Emails to Subscribers
              primarily written in PHP.
            </p>
            <p className="text-left max-w-screen-sm">
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                javascript
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                mysql
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600 
                       "
              >
                css
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600 
                       "
              >
                html
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                php
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                mvc
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap my-1 container h-fit max-w-full mx-auto">
          <div className="flex md:shrink mx-auto md:w-1/2">
            <img
              className="grayscale rounded-lg w-64 mx-auto object-cover md:h-full"
              src={projectIcon}
              alt="ChitChat Logo"
              draggable="false"
            />
          </div>
          <div className="flex flex-col px-12 my-auto container h-fit md:w-1/2 mx-auto">
            <h1 className="font-sans text-2xl text-left max-w-screen-sm font-bold">
              cab-booking-api
            </h1>
            <p className="font-sans text-justify max-w-screen-sm my-4">
              REST APIs written in NodeJs and ExpressJs Framework. This
              Collection of APIs is intended for Cab Booking System and it
              includes Driver, Customer & Admin modules.
            </p>
            <p className="text-left max-w-screen-sm">
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                nodejs
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                rest-api
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                express-js
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                node-geocoder
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap my-1 container h-fit max-w-full mx-auto">
          <div className="flex md:shrink mx-auto md:w-1/2">
            <img
              className="grayscale rounded-lg w-64 mx-auto object-cover md:h-full"
              src={projectIcon}
              alt="ChitChat Logo"
              draggable="false"
            />
          </div>
          <div className="flex flex-col px-12 my-auto container h-fit md:w-1/2 mx-auto">
            <h1 className="font-sans text-2xl text-left max-w-screen-sm font-bold">
              library-management-api
            </h1>
            <p className="font-sans text-justify max-w-screen-sm my-4">
              Library Management System RESTful APIs written in Java and Spring
              Boot. Models include Book, User and Record. Used JPA Hibernate
              with MySQL Database.
            </p>
            <p className="text-left max-w-screen-sm">
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                   "
              >
                mysql
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                java
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                spring-boot
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                rest-api
              </span>
              <span
                className="inline-flex items-center rounded  px-2 py-1 text-xs font-medium text-gray-600
                       "
              >
                jpa-hibernate
              </span>
            </p>
          </div>
        </div>
        <div
          className={classNames(
            darkTheme ? "bg-green-300" : "bg-white",
            " flex flex-row p-6"
          )}
        >
          <ul className="flex flex-wrap w-1/2 sm:w-fit mx-auto list-none">
            <li className="w-full sm:w-fit mx-auto p-4 text-center font-semibold">
              Home
            </li>
            <li className="w-full sm:w-fit mx-auto p-4 text-center font-semibold">
              <a href="#projects">Projects</a>
            </li>
            <li className="w-full sm:w-fit mx-auto p-4 text-center font-semibold">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default StoreNavigation;
