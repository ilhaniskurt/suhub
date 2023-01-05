import React, { ReactNode, FC, Dispatch, SetStateAction } from "react";

type Props = {
  children: ReactNode;
};

type InputProps = {
  children: ReactNode;
  type: string;
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
};

type CheckboxProps = {
  children: ReactNode;
  flip: () => void;
};

export const Background: FC<Props> = (props) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">{props.children}</section>
  );
};

export const Header: FC<Props> = (props) => {
  return (
    <h2 className="flex items-center mb-9 text-5xl font-light tracking-widest text-gray-900 dark:text-white">
      {props.children}
    </h2>
  );
};

export const ColumnWrapper: FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {props.children}
    </div>
  );
};

export const Card: FC<Props> = (props) => {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{props.children}</div>
    </div>
  );
};

export const Input: FC<InputProps> = (props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.children}
      </label>
      <input
        type={props.type}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
        required={true}
      />
    </div>
  );
};

export const PrimaryButton: FC<Props> = (props) => {
  return (
    <button
      type="submit"
      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      {props.children}
    </button>
  );
};

export const CheckBox: FC<CheckboxProps> = (props) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          onChange={props.flip}
          required={undefined}
        />
      </div>
      <div className="ml-3 text-sm">
        <label className="text-gray-500 dark:text-gray-300">
          {props.children}
        </label>
      </div>
    </div>
  );
};
