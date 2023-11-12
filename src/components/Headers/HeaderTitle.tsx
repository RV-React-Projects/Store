import React from "react";
import { Link } from "react-router-dom";

interface HeaderTitleProps {
  title: string;
  showLeft?: boolean;
  leftbutton?: string;
  onPressLeftButton?: () => void;
}

function HeaderTitle(props: HeaderTitleProps) {
  const {
    title,
    showLeft = false,
    leftbutton = "View All",
    onPressLeftButton,
  } = props;

  return (
    <div className="flex items-center justify-between padding_div py-5">
      <h3 className="font-semibold md:text-2xl lg:text-3xl">{title}</h3>
      <span>
        {showLeft && (
          <Link
            to="#"
            onClick={onPressLeftButton}
            className="underline text-blue-600 font-medium"
          >
            {leftbutton} <i className="ri-arrow-right-line"></i>{" "}
          </Link>
        )}
      </span>
    </div>
  );
}

export default HeaderTitle;
