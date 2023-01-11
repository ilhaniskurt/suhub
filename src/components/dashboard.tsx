import { FC } from "react";
import { Props, ClickableProps } from "../helpers/props";

export const DashboardWrapper: FC<Props> = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around px-6 py-8 mx-auto md:h-screen lg:py-0">
      {props.children}
    </div>
  );
};

export const ClickableCard: FC<ClickableProps> = (props) => {
  return (
    <div onClick={props.onClick} className="transition-all cursor-pointer hover:scale-110 min-w-fit bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{props.children}</div>
    </div>
  );
};
