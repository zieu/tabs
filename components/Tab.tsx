import { GetServerSideProps } from "next";
import { forwardRef } from "react";
const Tab = forwardRef(({ name, id, ...props }: any, ref: any) => {
  return (
    <div
      className={`tab ${id === 1 ? "tab-active" : null}`}
      ref={ref}
      {...props}
    >
      <span>{name}</span>
      <div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L4 12"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 4L12 12"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
});

export default Tab;
