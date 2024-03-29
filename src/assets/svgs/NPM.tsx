export const NPM: React.FC<React.HTMLAttributes<SVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 256 100"
      dangerouslySetInnerHTML={{
        __html: `<path d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z" fill="#CB3837"/><path d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zm42.996 0v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zm56.834-42.502h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z" fill="#FFF"/>`,
      }}
      {...props}
    ></svg>
  );
};
