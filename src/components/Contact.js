export default function Contact() {
  return (
    <section id="contact" className="relative bg-gray-100">
      <div className="container md:px-20 px-10 pt-10 pb-20 mx-auto">
        <div className="flex flex-col w-full mb-10 md:text-left text-center">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className=" text-3xl font-medium font-serif  mb-4">
            Contact With Me
          </h1>
          <span className="border border-b border-gray-900 w-24 md:mx-0 mx-auto"></span>
        </div>
        <div className=" bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            // src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.492298759882!2d89.16277091435457!3d23.550756202291822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fee7e5ac71f785%3A0x5be33ec89b910168!2skingshuk%20press!5e0!3m2!1sen!2sbd!4v1645768825173!5m2!1sen!2sbd"
          />

          <div className="bg-gray-900 opacity-75 relative flex flex-wrap  py-10 my-10 rounded shadow-md">
            <div className="lg:w-7/12 pl-4 pr-2">
              <h2 className=" font-semibold text-white tracking-widest font-serif">
                ADDRESS
              </h2>
              <p className="mt-1 text-teal-200 text-sm font-sans">
                Kingshuk Press Road, Chaklapara. <br />
                Jhenidah, Bangladesh
              </p>
            </div>
            <div className="lg:w-5/12 pr-4 md:pl-2 pl-4 my-4 lg:mt-0">
              <h2 className="font-semibold text-white tracking-widest  font-serif">
                EMAIL
              </h2>
              <a
                href="#"
                className="text-indigo-400 leading-relaxed  font-serif"
              >
                jannat.setu95@email.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
