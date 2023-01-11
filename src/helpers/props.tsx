import { ReactNode, Dispatch, SetStateAction } from "react";

export type AuthProps = {
  auth: any;
  setAuth: Dispatch<SetStateAction<any>>;
};

export type Props = {
  children: ReactNode;
};

export type ClickableProps = {
  onClick: () => void;
  children: ReactNode;
};

export type InputProps = {
  children: ReactNode;
  type: string;
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export type CheckBoxProps = {
  children: ReactNode;
  id: string;
  flip: () => void;
};

export type CourseProps = {
  title: string;
  location: string;
};

export type TableProps = {
  courseData: any;
};
