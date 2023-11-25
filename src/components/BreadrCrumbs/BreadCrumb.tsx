import { Link } from "react-router-dom";
import map from "lodash/map";

interface BreadCrumbProps {
  data?: {
    name?: string;
    path?: string;
  }[];
}

function BreadCrumb(props: BreadCrumbProps) {
  const { data } = props;
  return (
    <div className="breadcrumbs my-2 px-4 dark:text-white text-gray-600 select-none border border-blue-200 rounded-md flex flex-row items-center w-fit ">
      <ul>
        <li>
          <Link to="/">
            <i className="ri-home-4-fill pr-2 text-lg" />
          </Link>
        </li>
        {data
          ? map(data, (item, index) =>
              index === data?.length - 1 ? (
                <li className="text-base" key={index}>
                  <div key={index}>{item.name}</div>
                </li>
              ) : (
                <li key={index}>
                  <Link to={item?.path ?? ""} className="text-base">
                    {item.name}
                  </Link>
                </li>
              )
            )
          : null}
      </ul>
    </div>
  );
}

export default BreadCrumb;
