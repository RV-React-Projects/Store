import { Link, useNavigate } from "react-router-dom";
import map from "lodash/map";

interface BreadCrumbProps {
  data?: {
    name?: string;
    path?: string;
  }[];
}

function BreadCrumb(props: BreadCrumbProps) {
  const navigate = useNavigate();

  function gotoHome() {
    navigate("/");
  }

  function goto(path: string) {
    navigate(path);
  }

  const { data } = props;
  return (
    <div className="breadcrumbs my-2 px-4 dark:text-white text-gray-600 select-none border border-blue-200 rounded-md flex flex-row items-center w-fit ">
      <ul>
        <li>
          <div className="cursor-pointer" onClick={gotoHome}>
            <i className="ri-home-4-fill pr-2 text-lg" />
          </div>
        </li>
        {data
          ? map(data, (item, index) =>
              index === data?.length - 1 ? (
                <li className="text-base" key={index}>
                  <div key={index}>{item.name}</div>
                </li>
              ) : (
                <li key={index}>
                  <div
                    onClick={() => goto(item?.path ?? "")}
                    className="text-base cursor-pointer"
                  >
                    {item.name}
                  </div>
                </li>
              )
            )
          : null}
      </ul>
    </div>
  );
}

export default BreadCrumb;
