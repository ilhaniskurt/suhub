import { FC } from "react";
import {
  Props,
  CheckBoxProps,
  CourseProps,
  InputProps,
} from "../helpers/props";

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
    <div className="min-w-fit w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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

export const CheckBox: FC<CheckBoxProps> = (props) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={props.id}
          type="checkbox"
          className={
            "peer w-4 h-4 border border-gray-300 rounded-lg bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          }
          onChange={props.flip}
          required={undefined}
        />
        <label
          htmlFor={props.id}
          className={
            "peer-checked:text-sky-500 ml-3 text-sm text-gray-500 dark:text-gray-300"
          }
        >
          {props.children}
        </label>
      </div>
    </div>
  );
};

export const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="text-sm text-center min-w-full text-gray-900 dark:text-white">
              <thead className="border-b">
                <tr className="font-medium">
                  <th scope="col" className="px-6 py-4">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Monday
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Tuesday
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Wednesday
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Thursday
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Friday
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Saturday
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Sunday
                  </th>
                </tr>
              </thead>
              <tbody className="font-light whitespace-nowrap">
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">8:40 - 9:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">9:40 - 10:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">10:40 - 11:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">11:40 - 12:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">12:40 - 13:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">13:40 - 14:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">14:40 - 15:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">15:40 - 16:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">16:40 - 17:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">17:40 - 18:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">18:40 - 19:30</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="px-6 py-4">Empty</td>
                  <td className="whitespace-nowrap">
                    <Course title="MATH201-D" location="fens" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Course: FC<CourseProps> = (props) => {
  return (
    <div className="text-center">
      <p>{props.title}</p>
      <p>{props.location}</p>
    </div>
  );
};
