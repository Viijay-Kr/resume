import React from "react";

export const LightMode: React.FC<React.HTMLAttributes<SVGElement>> = (
  props
) => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 30 30"
        dangerouslySetInnerHTML={{
          __html: `<circle cx="15" cy="15" r="6"/><path d="M15 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zM5 16H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm22 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM6.51 24.49a1 1 0 0 1-.7-.3 1 1 0 0 1 0-1.41l1.41-1.42a1 1 0 0 1 1.42 1.42l-1.42 1.41a1 1 0 0 1-.71.3zM22.07 8.93a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l1.42-1.41a1 1 0 0 1 1.41 1.41l-1.41 1.42a1 1 0 0 1-.71.29zm1.42 15.56a1 1 0 0 1-.71-.3l-1.42-1.41a1 1 0 0 1 1.42-1.42l1.41 1.42a1 1 0 0 1 0 1.41 1 1 0 0 1-.7.3zM7.93 8.93a1 1 0 0 1-.71-.29L5.81 7.22a1 1 0 0 1 1.41-1.41l1.42 1.41a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29z"/>`,
        }}
        {...props}
      ></svg>
    </React.Fragment>
  );
};
