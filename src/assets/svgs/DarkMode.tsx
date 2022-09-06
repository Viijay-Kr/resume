import React from "react";

export const DarkMode: React.FC<React.HTMLAttributes<SVGElement>> = (props) => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 24 24"
        dangerouslySetInnerHTML={{
          __html: `<path d="M12,22C6.5,22,2,17.5,2,12c0-4.7,3.4-8.9,8-9.8c0.4-0.1,0.9,0.1,1.1,0.5c0.2,0.4,0.1,0.9-0.2,1.2C9.7,5.1,9,6.8,9,8.5
			c0,3.6,2.9,6.5,6.5,6.5c1.7,0,3.4-0.7,4.6-1.9c0.3-0.3,0.8-0.4,1.2-0.2c0.4,0.2,0.6,0.6,0.5,1.1C20.9,18.6,16.7,22,12,22z
			 M7.6,5.3C5.4,6.8,4,9.2,4,12c0,4.4,3.6,8,8,8c2.8,0,5.2-1.4,6.7-3.6c-1,0.4-2.1,0.6-3.2,0.6C10.8,17,7,13.2,7,8.5
			C7,7.4,7.2,6.3,7.6,5.3z"/>`,
        }}
        {...props}
      ></svg>
    </React.Fragment>
  );
};
