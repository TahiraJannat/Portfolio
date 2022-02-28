import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container md:px-20 px-8 pt-10 pb-20 mx-auto">
        <div className="flex flex-col w-full mb-10 md:text-left text-center">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className=" text-3xl font-medium font-serif mb-4">
            Skills &amp; Technologies
          </h1>
          <span className="border border-b border-gray-900 w-24 md:mx-0 mx-auto"></span>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have built many websites using Html5, CSS3, Bootstrap,Tailwind
            CSS, SCSS, JavaScript, jQuery, ReactJS and WordPress.
            <br></br>
          </p>
          <p className="py-4 bold capitalize text-lg">
            You can visit theme from the gallery.
          </p> */}
        </div>

        <div className="grid grid-cols-12 gap-4 ">
          {skills.map((skill) => (
            <div className="lg:col-span-2 sm:col-span-3 col-span-6 mx-auto bg-gray-200 w-full  pt-5 pb-2 rounded-md shadow-lg transition duration-0 hover:duration-150 cursor-default">
              <div class=" pb-3 text-center">
                <h1 class="animate-pulse listing-number-2 text-teal-500 w-10 h-10 rounded-full text-center bold border border-teal-500 py-1 text-xl mx-auto mb-4">
                  {skill.number}
                </h1>
                <h2 className="text-lg text-gray-700 text-center font-serif">
                  {skill.title}
                </h2>
              </div>
              {/* ....  */}

              {/* <div
              class="col-20 col-md-10 col-lg-6 approach-item aos-init aos-animate"
              data-aos="fade"
              data-aos-delay="200"
              data-aos-once="true"
              data-aos-mirror="false"
            >
              <div class="pr-lg-5 py-md-5 pt-5 pb-3 text-center">
                <h1 class="listing-number-2 text-teal-500 w-10 h-10 rounded-full text-center bold border border-teal-500 py-1 text-xl mx-auto mb-4">
                  1
                </h1>
                <h2 className="text-2xl text-black text-center">Html5</h2>
              </div>
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
