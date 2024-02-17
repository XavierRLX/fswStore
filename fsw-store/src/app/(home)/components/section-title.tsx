import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="font-sbold mb-3 pl-5 uppercase" {...props}>
      {children}
    </p>
  );
};

export default SectionTitle;
