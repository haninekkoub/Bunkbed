"use client";
import { useState } from "react";

export default function Ctabutton() {
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(event.target.value.trim() !== "");
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsSubmitted(true); // Set submitted state
  };
  return (
    <form
      className={` max-w-[980px] border-white pb-6 text-3xl relative flex justify-center items-center overflow-hidden transition-all duration-700 ease-in-out delay-300
      ${isSubmitted ? "w-1/6 border-b-4  " : "w-[50vw] border-b-2"}
      `}
      onSubmit={handleSubmit}
    >
      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap -z-20 transition-all duration-500 ease-in-out text-white font-Outreque opacity-50
          ${
            isSubmitted
              ? "-translate-y-1/2 delay-[1200ms]  "
              : "translate-y-full "
          }
          `}
      >
        Thank You!
      </span>
      <input
        className={`placeholder:text-white placeholder:opacity-50 fill:bg-transparent bg-transparent font-Outreque py-2  text-center focus:outline-none transition-all duration-500   ease-in-out delay-300  
        ${isSubmitted ? "translate-y-full opacity-0 w-0 px-0" : "w-full px-2"}
        `}
        type="email"
        name="email"
        placeholder="Enter Your Email Here"
        autoComplete="off"
        onChange={handleInputChange}
      />
      <button
        className={`h-full rounded-md overflow-hidden bg-[#1A1A1A] border-black border-2 flex justify-center items-center transition-all duration-1000 ease-in-out  ${
          isTyping
            ? "translate-x-0 opacity-100 w-2/12"
            : "translate-x-[100%] opacity-0 w-0"
        }
        ${isSubmitted ? "w-2/3 delay-300 submitanimation" : ""}
        `}
        type="submit"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={` transition-all duration-300 ease-in-out 
          ${isSubmitted ? "translate-x-full opacity-0" : "opacity-50"}
          `}
        >
          <path
            d="M14 7.5C14 7.66148 13.922 7.81301 13.7906 7.90687L6.79062 12.9069C6.63821 13.0157 6.43774 13.0303 6.27121 12.9446C6.10467 12.8589 6 12.6873 6 12.5L6 10L3.5 10C3.22386 10 3 9.77614 3 9.5L3 5.5C3 5.22386 3.22386 5 3.5 5L6 5L6 2.5C6 2.31271 6.10467 2.14112 6.27121 2.05542C6.43774 1.96972 6.63821 1.98427 6.79062 2.09313L13.7906 7.09314C13.922 7.18699 14 7.33853 14 7.5ZM7 3.4716L7 5.5C7 5.77614 6.77614 6 6.5 6L4 6L4 9L6.5 9C6.77614 9 7 9.22386 7 9.5L7 11.5284L12.6398 7.5L7 3.4716Z"
            fill="white"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </form>
  );
}

{
  /* <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
  When you look
  <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span class="relative text-white">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote> */
}
