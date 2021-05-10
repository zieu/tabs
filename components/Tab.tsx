import { forwardRef } from "react";
const Tab = forwardRef(
  (
    { name, id, tabs, setTabs, renderClose, isActive, ...props }: any,
    ref: any
  ) => {
    const onClose = () => {
      renderClose &&
        setTabs(
          tabs.filter((tab) => {
            return tab.id !== id;
          })
        );
    };

    const mouseDownHandler = (event) => {
      // event.type === "mousedown" && setTabs();

      const mouseWheelClick = event.button === 1;
      if (mouseWheelClick) {
        onClose();
      }
    };

    return (
      <div
        onMouseDown={mouseDownHandler}
        className={`tab ${isActive && "tab-active"}`}
        ref={ref}
        {...props}
      >
        <span>{name}</span>
        <div>
          {renderClose && (
            <svg
              onClick={onClose}
              className="close-btn"
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
          )}
        </div>
      </div>
    );
  }
);

export default Tab;
