export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10 border-b border-teal-400 shadow-lg transition-shadow">
      {/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <h2 className="title-font font-medium text-gray-500 mb-4 md:mb-0">
    <a href="#about" className="ml-3 text-xl">
      Tahira Jannat
    </a>
  </h2>
  <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
    <a
      href="#projects"
      className="mr-5 text-white hover:border-b hover:border-teal-400"
    >
      Projects
    </a>
    <a href="#skills" className="mr-5 text-white">
      Skills
    </a>
    <a href="#testimonials" className="mr-5 text-white">
      Testimonials
    </a>
  </nav>
  <a
    href="#contact"
    className="inline-flex items-center bg-teal-400 border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0"
  >
    Hire Me
   
  </a>
</div> */}
      <div className="container mx-auto px-20 py-5 grid grid-cols-12 gap-4">
        <div className=" col-span-2">
          <h2 className="title-font font-medium text-gray-500 mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              Tahira Jannat
            </a>
          </h2>
        </div>
        <div className=" col-span-7 md:border-l md:border-gray-700">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-left text-base">
            <a
              href="#projects"
              className="mr-10 text-white hover:border-b hover:border-teal-400"
            >
              Projects
            </a>
            <a href="#skills" className="mr-10 text-white">
              Skills
            </a>
            <a href="#testimonials" className="mr-10 text-white">
              Testimonials
            </a>
          </nav>
        </div>
        <div className="col-span-3 text-right">
          <a
            href="#contact"
            className="inline-flex items-center bg-teal-400 border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
