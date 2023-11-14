import { Link, useNavigate } from "react-router-dom";

interface HeaderTitleProps {
  title: string;
  showIcon?: boolean;
  showLeft?: boolean;
  leftbutton?: string;
  goto?: string;
}

function HeaderTitle(props: HeaderTitleProps) {
  const {
    title,
    showIcon = true,
    showLeft = false,
    leftbutton = "View All",
    goto = "#",
  } = props;

  const navigation = useNavigate();

  const onPressLeftButton = () => navigation(goto);

  return (
    <div className="flex items-center justify-between pb-4 pt-1 border-b-[0.5px] mb-5 dark:border-[#333]">
      <div className="flex items-end">
        {showIcon && (
          <div className="relative w-8 h-8 bg-[#e7efff] bg-opacity-80 rounded-full flex items-center justify-center mr-2">
            <div className="w-6 h-6 bg-[#794afa] rounded-full bottom-5 right-5 opacity-40" />
          </div>
        )}
        <h3 className="font-semibold md:text-xl lg:text-3xl dark:text-gray-200">
          {title}
        </h3>
      </div>
      <span>
        {showLeft && (
          <Link
            to={goto}
            onClick={() => onPressLeftButton()}
            className="text-blue-600 font-medium"
          >
            {leftbutton} <i className="ri-arrow-right-line"></i>{" "}
          </Link>
        )}
      </span>
    </div>
  );
}

export default HeaderTitle;
