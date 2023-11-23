import { Link } from "react-router-dom";

function MainLogo() {
  return (
    <div>
      <Link to="/" className="flex items-end">
        <div className="relative w-8 h-8 bg-[#f2f3f5] bg-opacity-75 rounded-full flex items-center justify-center -top-3 -right-1">
          <div className="w-6 h-6 bg-[#794afa] rounded-full bottom-5 right-5 opacity-40"></div>
        </div>
        <p className="font-bold text-4xl">.Store</p>
      </Link>
    </div>
  );
}

export default MainLogo;
