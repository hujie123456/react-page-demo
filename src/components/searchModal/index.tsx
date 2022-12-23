import { useFirst } from "@/hooks";
import { useBoolean } from "ahooks";
import classNames from "classnames";
import { FC, ReactNode } from "react";
import "./style.scss";

interface SearchModalProps {
  children?: ReactNode;
  visible: boolean;
}

const SearchModal: FC<SearchModalProps> = (props) => {
  const { visible } = props;

  const first = useFirst(visible);

  const baseClassName = "modal";
  const className = classNames(baseClassName, [visible ? "block show" : "none"]);

  return <>{first ? <div className={"" + className}>123</div> : null}</>;
};

export default SearchModal;
