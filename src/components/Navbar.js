import { FaBars } from "react-icons/fa";
export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0  border-b border-gray-500 shadow-lg transition-shadow font-serif z-20">
      <div className="container mx-auto md:px-20 px-10 py-5 grid grid-cols-12 gap-4">
        <div className=" md:col-span-4 col-span-6">
          {/* <div>
            <a href="#about" className="circle">
              {" "}
            </a>
            <a href="#projects" className="circle">
              {" "}
            </a>
            <a href="#skills" className="circle">
              {" "}
            </a>
          </div> */}
          <h2 className="title-font font-medium text-gray-900 mb-4 md:mb-0">
            <a href="#about" className="md:ml-3 ml-0 text-2xl">
              Tahira Jannat
            </a>
          </h2>
        </div>
        <div className=" md:col-span-8 col-span-6 md:border-l md:border-gray-600 text-right">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 text-base_lg z-30">
            <input type="checkbox" id="check" />
            <label
              for="check"
              className="checkbtn text-gray-900  float-right cursor-pointer text-2xl py-4"
            >
              <FaBars />
            </label>

            {/* <a href="#"  className="logo">
              <img src="img/logo.png" alt="logo" />
            </a> */}
            <ul className=" float-right mr-10 menu">
              <a
                href="#projects"
                className="relative mr-10 text-gray-900 hover:border-b hover:border-teal-400 text-right pb-1"
              >
                Projects
              </a>
              <a href="#skills" className="relative mr-10 text-gray-900 pb-1">
                Skills
              </a>
              <a
                href="#testimonials"
                className="relative mr-10 text-gray-900 pb-1"
              >
                Fiverr
              </a>
              <a href="#contact" className=" relative mr-10 text-gray-900 pb-1">
                Contact Me
              </a>
            </ul>
          </nav>
        </div>
        {/* <div   className="col-span-3 text-right">
          <a
            href="#contact"
              className="inline-flex items-center bg-teal-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0"
          >
            Hire Me
          </a>
        </div> */}
      </div>
    </header>
  );
}
