import { FC } from "react";
import { CourseProps } from "../helpers/props";

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
