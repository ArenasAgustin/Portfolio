const Loader = ({ isDark = false }) => {
  return (
    <div className="loading">
      <div className="loading__ring">
        <div
          className={`loading__ring-div loading__ring-div-one ${
            isDark ? "loading__ring-div--dark" : ""
          }`}
        ></div>
        <div
          className={`loading__ring-div loading__ring-div-two ${
            isDark ? "loading__ring-div--dark" : ""
          }`}
        ></div>
        <div
          className={`loading__ring-div loading__ring-div-three ${
            isDark ? "loading__ring-div--dark" : ""
          }`}
        ></div>
        <div
          className={`loading__ring-div ${
            isDark ? "loading__ring-div--dark" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
