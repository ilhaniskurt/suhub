import { FC, useEffect, useState } from "react";
import { CourseProps, TableProps } from "../helpers/props";

type Hours = {
  h8: any;
  h9: any;
  h10: any;
  h11: any;
  h12: any;
  h13: any;
  h14: any;
  h15: any;
  h16: any;
  h17: any;
  h18: any;
  h19: any;
};

type Days = {
  M: Hours;
  T: Hours;
  W: Hours;
  R: Hours;
  F: Hours;
  A: Hours;
  U: Hours;
};

type DaysKey = keyof Days;
type HoursKey = keyof Hours;

export const Table: FC<TableProps> = (props) => {
  const [courses, setCourses] = useState<Days>();

  useEffect(() => {
    if (!props.courseData) {
      return;
    }
    let days = {} as Days;
    for (const course of props.courseData) {
      for (const time of course[2]) {
        const hour = ("h" + time.slice(4, -4)) as HoursKey;
        const day = time[time.length - 1] as DaysKey;
        if (days[day]) {
          days[day][hour] = course[0];
        } else {
          let hours = {} as Hours;
          hours[hour] = course[0];
          days[day] = hours;
        }
      }
    }
    setCourses(days);
  }, [props.courseData]);

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
                  <td className="px-6 py-4">{courses?.M?.h8}</td>
                  <td className="px-6 py-4">{courses?.T?.h8}</td>
                  <td className="px-6 py-4">{courses?.W?.h8}</td>
                  <td className="px-6 py-4">{courses?.R?.h8}</td>
                  <td className="px-6 py-4">{courses?.F?.h8}</td>
                  <td className="px-6 py-4">{courses?.A?.h8}</td>
                  <td className="px-6 py-4">{courses?.U?.h8}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">9:40 - 10:30</td>
                  <td className="px-6 py-4">{courses?.M?.h9}</td>
                  <td className="px-6 py-4">{courses?.T?.h9}</td>
                  <td className="px-6 py-4">{courses?.W?.h9}</td>
                  <td className="px-6 py-4">{courses?.R?.h9}</td>
                  <td className="px-6 py-4">{courses?.F?.h9}</td>
                  <td className="px-6 py-4">{courses?.A?.h9}</td>
                  <td className="px-6 py-4">{courses?.U?.h9}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">10:40 - 11:30</td>
                  <td className="px-6 py-4">{courses?.M?.h10}</td>
                  <td className="px-6 py-4">{courses?.T?.h10}</td>
                  <td className="px-6 py-4">{courses?.W?.h10}</td>
                  <td className="px-6 py-4">{courses?.R?.h10}</td>
                  <td className="px-6 py-4">{courses?.F?.h10}</td>
                  <td className="px-6 py-4">{courses?.A?.h10}</td>
                  <td className="px-6 py-4">{courses?.U?.h10}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">11:40 - 12:30</td>
                  <td className="px-6 py-4">{courses?.M?.h11}</td>
                  <td className="px-6 py-4">{courses?.T?.h11}</td>
                  <td className="px-6 py-4">{courses?.W?.h11}</td>
                  <td className="px-6 py-4">{courses?.R?.h11}</td>
                  <td className="px-6 py-4">{courses?.F?.h11}</td>
                  <td className="px-6 py-4">{courses?.A?.h11}</td>
                  <td className="px-6 py-4">{courses?.U?.h11}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">12:40 - 13:30</td>
                  <td className="px-6 py-4">{courses?.M?.h12}</td>
                  <td className="px-6 py-4">{courses?.T?.h12}</td>
                  <td className="px-6 py-4">{courses?.W?.h12}</td>
                  <td className="px-6 py-4">{courses?.R?.h12}</td>
                  <td className="px-6 py-4">{courses?.F?.h12}</td>
                  <td className="px-6 py-4">{courses?.A?.h12}</td>
                  <td className="px-6 py-4">{courses?.U?.h12}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">13:40 - 14:30</td>
                  <td className="px-6 py-4">{courses?.M?.h13}</td>
                  <td className="px-6 py-4">{courses?.T?.h13}</td>
                  <td className="px-6 py-4">{courses?.W?.h13}</td>
                  <td className="px-6 py-4">{courses?.R?.h13}</td>
                  <td className="px-6 py-4">{courses?.F?.h13}</td>
                  <td className="px-6 py-4">{courses?.A?.h13}</td>
                  <td className="px-6 py-4">{courses?.U?.h13}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">14:40 - 15:30</td>
                  <td className="px-6 py-4">{courses?.M?.h14}</td>
                  <td className="px-6 py-4">{courses?.T?.h14}</td>
                  <td className="px-6 py-4">{courses?.W?.h14}</td>
                  <td className="px-6 py-4">{courses?.R?.h14}</td>
                  <td className="px-6 py-4">{courses?.F?.h14}</td>
                  <td className="px-6 py-4">{courses?.A?.h14}</td>
                  <td className="px-6 py-4">{courses?.U?.h14}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">15:40 - 16:30</td>
                  <td className="px-6 py-4">{courses?.M?.h15}</td>
                  <td className="px-6 py-4">{courses?.T?.h15}</td>
                  <td className="px-6 py-4">{courses?.W?.h15}</td>
                  <td className="px-6 py-4">{courses?.R?.h15}</td>
                  <td className="px-6 py-4">{courses?.F?.h15}</td>
                  <td className="px-6 py-4">{courses?.A?.h15}</td>
                  <td className="px-6 py-4">{courses?.U?.h15}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">16:40 - 17:30</td>
                  <td className="px-6 py-4">{courses?.M?.h16}</td>
                  <td className="px-6 py-4">{courses?.T?.h16}</td>
                  <td className="px-6 py-4">{courses?.W?.h16}</td>
                  <td className="px-6 py-4">{courses?.R?.h16}</td>
                  <td className="px-6 py-4">{courses?.F?.h16}</td>
                  <td className="px-6 py-4">{courses?.A?.h16}</td>
                  <td className="px-6 py-4">{courses?.U?.h16}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">17:40 - 18:30</td>
                  <td className="px-6 py-4">{courses?.M?.h17}</td>
                  <td className="px-6 py-4">{courses?.T?.h17}</td>
                  <td className="px-6 py-4">{courses?.W?.h17}</td>
                  <td className="px-6 py-4">{courses?.R?.h17}</td>
                  <td className="px-6 py-4">{courses?.F?.h17}</td>
                  <td className="px-6 py-4">{courses?.A?.h17}</td>
                  <td className="px-6 py-4">{courses?.U?.h17}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">18:40 - 19:30</td>
                  <td className="px-6 py-4">{courses?.M?.h18}</td>
                  <td className="px-6 py-4">{courses?.T?.h18}</td>
                  <td className="px-6 py-4">{courses?.W?.h18}</td>
                  <td className="px-6 py-4">{courses?.R?.h18}</td>
                  <td className="px-6 py-4">{courses?.F?.h18}</td>
                  <td className="px-6 py-4">{courses?.A?.h18}</td>
                  <td className="px-6 py-4">{courses?.U?.h18}</td>
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
