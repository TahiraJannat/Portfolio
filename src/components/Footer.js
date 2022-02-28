export default function Footer() {
  return (
    <footer className="bg-gray-800 md:sticky top-0 z-10 border-b border-white shadow-lg transition-shadow font-serif">
      <div className="container mx-auto md:px-20 px-10 py-8 grid grid-cols-12 gap-4">
        <div className=" md:col-span-3 col-span-12 md:text-left text-center">
          <h2 className="title-font font-medium text-gray-400  ">
            <a href="#about" className=" text-2xl">
              Tahira Jannat
            </a>
          </h2>
        </div>
        <div className=" md:col-span-5 col-span-12 md:border-l md:border-gray-400	text-gray-400 text-center">
          <nav className="md:mr-auto ml-4 md:py-1   text-base justify-center">
            <a
              href="#projects"
              className="mr-8 hover:border-b hover:border-teal-400"
            >
              Projects
            </a>
            <a href="#skills" className="mr-8 ">
              Skills
            </a>
            <a href="#contact" className="mr-5 ">
              Contact Me
            </a>
          </nav>
        </div>
        <div className=" md:col-span-4 col-span-12 md:pl-4 md:border-l md:border-gray-400	text-gray-400 text-center">
          {" "}
          <a href="#contact" className="text-base ">
            © Tahira Jannat
            {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}
