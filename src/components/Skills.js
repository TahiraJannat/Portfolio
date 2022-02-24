import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-20 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 ">
          {skills.map((skill) => (
            <div className="col-span-2 mx-auto bg-gray-200 w-full  pt-6 pb-4 rounded-md">
              <div class=" pb-3 text-center">
                <h1 class="listing-number-2 text-teal-500 w-10 h-10 rounded-full text-center bold border border-teal-500 py-1 text-xl mx-auto mb-4">
                  {skill.number}
                </h1>
                <h2 className="text-xl text-black text-center">
                  {" "}
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
