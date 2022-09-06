import React from "react";

export const LinkedIn: React.FC<React.HTMLAttributes<SVGElement>> = (props) => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 121.48 85.04"
        dangerouslySetInnerHTML={{
          __html: `<g data-name="Layer 2"><g data-name="Layer 1"><path d="M119 13.28a15.23 15.23 0 0 0-10.79-10.74C98.73 0 60.74 0 60.74 0s-38 0-47.46 2.54A15.21 15.21 0 0 0 2.54 13.28C0 22.75 0 42.52 0 42.52s0 19.77 2.54 29.24A15.21 15.21 0 0 0 13.28 82.5C22.75 85 60.74 85 60.74 85s38 0 47.47-2.54A15.23 15.23 0 0 0 119 71.76c2.53-9.47 2.53-29.24 2.53-29.24s-.05-19.77-2.53-29.24Z" style="fill:red"/><path style="fill:#fff" d="m48.59 60.74 31.57-18.22L48.59 24.3v36.44z"/></g></g>`,
        }}
        {...props}
      ></svg>
    </React.Fragment>
  );
};
