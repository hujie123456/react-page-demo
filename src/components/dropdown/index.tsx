import { CSSProperties, FC, ReactNode } from "react";
import classnames from "classnames";

export interface DropdownProps {
  type: "sub" | "mega";
  visible?: boolean;
  children?: ReactNode;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { type, visible, children } = props;

  const extraClassName =
    type === "sub" ? "sub-dropdown min-w-62.5 left-auto py-5 z-10" : "mega-dropdown w-full left-0 py-7.5 pl-7.5 z-20";
  const baseClassName = "absolute text-black transform preserve-3d";
  const style: CSSProperties = {
    boxShadow: "-1px 10px 80px -15px rgb(0 0 0 / 30%)",
    transformOrigin: "0 0",
    transition: "all .3s",
  };

  const className = classnames(baseClassName, extraClassName, [
    visible ? "visible -rotate-x-0 opacity-100" : "invisible -rotate-x-75 opacity-0",
  ]);

  return (
    <div className={className} style={style} onMouseEnter={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

export default Dropdown;
