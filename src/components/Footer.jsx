const Footer = () => {
  return (
    <footer className="flex flex-col items-center lg:items-start lg:flex-row bg-slate-100 p-5 subpixel-antialiased">
      <div className="ml-0 lg:ml-24">
        <span className="uppercase text-xs font-bold text-gray-700 tracking-wide">
          online shopping
        </span>
        <ul className="flex flex-col text-gray-500 items-center lg:items-start text-sm mt-3 lg:mt-5 cursor-pointer">
          <a>Men</a>
          <a>Women</a>
          <a>Kids</a>
          <a>Beauty</a>
        </ul>
      </div>

      <div className="ml-0 lg:ml-24 mt-4 lg:mt-0 ">
        <span className="uppercase text-xs font-bold text-gray-700 tracking-wide">
          customer policies
        </span>
        <ul className="flex flex-col text-gray-500 text-sm mt-3 lg:mt-5 cursor-pointer items-center lg:items-start">
          <a>Contact Us</a>
          <a>FAQs</a>
          <a>Terms & Conditions </a>
        </ul>
      </div>

      <div className="ml-0 lg:ml-60 flex flex-col mt-7 lg:mt-0 items-center lg:items-start">
        <span className="text-gray-700 text-md font-bold">
          100% ORIGINAL <span className="font-normal">guarantee</span>
        </span>
        <span className="text-md text-gray-500">for all products</span>

        <span className="text-gray-700 text-md font-bold mt-2 lg:mt-4">
          Return within 14 days
        </span>
        <span className="text-md text-gray-500">of receiving your order</span>
      </div>

      <div className="ml-0 lg:ml-32 flex flex-col mt-5 lg:mt-auto">
        <span className="text-gray-700 text-sm">©All Rights Reserved 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
