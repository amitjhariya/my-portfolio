import Link from "next/link";
import React from "react";
import Centered from "../Layout/Section/Centered";

function Blogs() {
  return (
    <div className="container mx-auto max-w-screen-xl p-6 lg:py-16 lg:px-6">
      <div className="max-w-screen-sm text-left lg:mb-16 mb-8">
        <h2 className="mb-4 text-4xl lg:text-6xl tracking-tight font-extrabold text-white dark:text-white">
          Blogs
        </h2>
        <p className="font-light text-gray-200 sm:text-xl dark:text-gray-400">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
        <article className="p-6 bg-black rounded-lg border border-gray-900 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 text-gray-200">
            <span className="bg-primary-100 text-primary-200 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </span>
            <span className="text-sm">14 days ago</span>
          </div>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            <a href="#"></a>
            <Link href="/blog/1">
            How to quickly deploy a static website
            </Link>
          </h2>
          <p className="mb-5 font-light text-gray-100 dark:text-gray-400">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers.
          </p>
          <div className="flex justify-end items-center sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm sm:text-base text-gray-100 dark:text-primary-500 hover:underline"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
        <article className="p-6 bg-black rounded-lg border border-gray-900 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 text-gray-200">
            <span className="bg-primary-100 text-primary-200 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </span>
            <span className="text-sm">14 days ago</span>
          </div>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            <a href="#">How to quickly deploy a static website</a>
          </h2>
          <p className="mb-5 font-light text-gray-100 dark:text-gray-400">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers.
          </p>
          <div className="flex justify-end items-center sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm sm:text-base text-gray-100 dark:text-primary-500 hover:underline"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
        <article className="p-6 bg-black rounded-lg border border-gray-900 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 text-gray-200">
            <span className="bg-primary-100 text-primary-200 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </span>
            <span className="text-sm">14 days ago</span>
          </div>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            <a href="#">How to quickly deploy a static website</a>
          </h2>
          <p className="mb-5 font-light text-gray-100 dark:text-gray-400">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers.
          </p>
          <div className="flex justify-end items-center sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm sm:text-base text-gray-100 dark:text-primary-500 hover:underline"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
        <article className="p-6 bg-black rounded-lg border border-gray-900 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 text-gray-200">
            <span className="bg-primary-100 text-primary-200 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </span>
            <span className="text-sm">14 days ago</span>
          </div>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            <a href="#">How to quickly deploy a static website</a>
          </h2>
          <p className="mb-5 font-light text-gray-100 dark:text-gray-400">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers.
          </p>
          <div className="flex justify-end items-center sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm sm:text-base text-gray-100 dark:text-primary-500 hover:underline"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
        <article className="p-6 bg-black rounded-lg border border-gray-900 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 text-gray-200">
            <span className="bg-primary-100 text-primary-200 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </span>
            <span className="text-sm">14 days ago</span>
          </div>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            <a href="#">How to quickly deploy a static website</a>
          </h2>
          <p className="mb-5 font-light text-gray-100 dark:text-gray-400">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers.
          </p>
          <div className="flex justify-end items-center sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm sm:text-base text-gray-100 dark:text-primary-500 hover:underline"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
        <article className="p-6 bg-black rounded-lg border border-gray-900 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 text-gray-200">
            <span className="bg-primary-100 text-primary-200 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </span>
            <span className="text-sm">14 days ago</span>
          </div>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            <a href="#">How to quickly deploy a static website</a>
          </h2>
          <p className="mb-5 font-light text-gray-100 dark:text-gray-400">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers.
          </p>
          <div className="flex justify-end items-center sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm sm:text-base text-gray-100 dark:text-primary-500 hover:underline"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
        <article className="p-6 bg-black rounded-lg border border-gray-900 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 text-gray-200">
            <span className="bg-primary-100 text-primary-200 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </span>
            <span className="text-sm">14 days ago</span>
          </div>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            <a href="#">How to quickly deploy a static website</a>
          </h2>
          <p className="mb-5 font-light text-gray-100 dark:text-gray-400">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers.
          </p>
          <div className="flex justify-end items-center sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm sm:text-base text-gray-100 dark:text-primary-500 hover:underline"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
        <article className="p-6 bg-black rounded-lg border border-gray-900 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 text-gray-200">
            <span className="bg-primary-100 text-primary-200 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </span>
            <span className="text-sm">14 days ago</span>
          </div>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
            <a href="#">How to quickly deploy a static website</a>
          </h2>
          <p className="mb-5 font-light text-gray-100 dark:text-gray-400">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers.
          </p>
          <div className="flex justify-end items-center sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm sm:text-base text-gray-100 dark:text-primary-500 hover:underline"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Blogs;
