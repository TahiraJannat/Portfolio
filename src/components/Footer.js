export default function Footer() {
  return (
    <header className="bg-black md:sticky top-0 z-10 border-b border-teal-400 shadow-lg transition-shadow">
      <div className="container mx-auto px-20 py-8 grid grid-cols-12 gap-4">
        <div className=" col-span-4">
          <h2 className="title-font font-medium text-gray-600 mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              Tahira Jannat
            </a>
          </h2>
        </div>
        <div className=" col-span-4">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	text-gray-600 text-sm justify-center">
            <a
              href="#projects"
              className="mr-5 hover:border-b hover:border-teal-400"
            >
              Projects
            </a>
            <a href="#skills" className="mr-5 ">
              Skills
            </a>
            <a href="#testimonials" className="mr-5 ">
              Testimonials
            </a>
          </nav>
        </div>
        <div className=" col-span-4">
          {" "}
          <a href="#contact" className="text-sm text-gray-600">
            © Tahira Jannat
            {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
          </a>
        </div>
      </div>
    </header>
  );
}
