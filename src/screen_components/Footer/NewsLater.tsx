import EmailBox from "./EmailBox";

function NewsLater() {
  return (
    <div className=" w-full h-fit bg-dark_color text-white">
      <div className="padding_div xl:flex lg:block w-full items-center">
        <div className="w-full sm:text-base md:text-xl">
          <p className="lg:text-3xl sm:text-xl mb-2">Join Our Newsletter</p>
          <p className="">
            Get E-mail updates about our latest shop and
            <span className="ml-2 text-red-300 font-bold">Special Offers</span>
          </p>
        </div>
        <EmailBox />
      </div>
    </div>
  );
}

export default NewsLater;
