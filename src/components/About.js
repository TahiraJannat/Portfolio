import { FaFacebook, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
export default function About() {
  return (
    <section id="about" className=" h-96">
      <div className="container mx-auto flex lg:px-40 px-10 md:pt-24 pt-12 md:pb-32 pb-0 md:flex-row flex-col items-center">
        <div class=" w-56 h-56 rounded-full bg-user-image  bg-cover bg-no-repeat bg-center border border-gray-600 mb-5"></div>
        <div className="lg:flex-grow md:w-1/2 w-full md:pl-20 pl-0 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font  text-xl mb-4 font-light font-serif text-gray-600 uppercase">
            Hi, My Name is
          </h1>
          <span className="border border-b border-gray-900 w-24"></span>
          <h1 className="title-font text-5xl mb-1 mt-4 font-medium text-black font-serif capitalize">
            Tahira Jannat
          </h1>
          <h1 className="title-font text-2xl mb-4 font-medium text-gray-700 font-serif capitalize">
            Frontend Developer
          </h1>
          <p className="mb-8 leading-relaxed text-gray-600 capitalize">
            Seeking a challenging position as Frontend Web Developer that
            enables me to make positive contributions to the company by
            utilizing my skills in the field.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/tahira.jannat.19/"
              className="inline-flex text-gray-600  focus:outline-none hover:text-gray-400 text-xl transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/tahira-jannat-2ab91018b/"
              className="ml-4 inline-flex text-gray-600  focus:outline-none hover:text-gray-400 text-xl transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/TahiraJannat"
              className="ml-4 inline-flex text-gray-600  focus:outline-none hover:text-gray-400 text-xl transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.fiverr.com/tahira_jannat"
              className="ml-4 inline-flex text-white   hover:bg-gray-400 text-xs bg-gray-600 p-1 rounded-full transition duration-300"
            >
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
