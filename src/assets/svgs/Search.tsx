function Search(props: any) {
  const { width = "40px", height = "40px", fill = "#000" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M269.46 1163.45c-6.29 0-11.389-5.01-11.389-11.2 0-6.19 5.099-11.21 11.389-11.21 6.29 0 11.39 5.02 11.39 11.21 0 6.19-5.1 11.2-11.39 11.2zm18.228 5.8l-8.259-8.13c2.162-2.35 3.491-5.45 3.491-8.87 0-7.32-6.026-13.25-13.46-13.25-7.434 0-13.46 5.93-13.46 13.25 0 7.31 6.026 13.24 13.46 13.24a13.52 13.52 0 008.472-2.96l8.292 8.16c.405.4 1.06.4 1.464 0 .405-.39.405-1.04 0-1.44z"
        transform="translate(-256 -1139)"
        fill={fill}
        stroke="none"
        strokeWidth={1.5}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Search;
