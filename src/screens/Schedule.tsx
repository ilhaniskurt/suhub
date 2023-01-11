import { useEffect, FC, useState } from "react";

import { Background, Card, Wrapper } from "../components/common";
import { Table } from "../components/schedule";
import { trySchedule } from "../services/schedule";
import { AuthProps } from "../helpers/props";

const Schedule: FC<AuthProps> = (props) => {

  const [ courseData, setCourseData] = useState();

  useEffect(() => {
    const inEffect = async () => {
      const data = await trySchedule(props.auth);
      if (data) {
        setCourseData(data);
      } else {
        console.warn("Schedule fetching failed");
      }
    };
    inEffect();
  }, [props.auth]);

  return (
    <Background>
      <Wrapper>
        <Card>
          <Table courseData={courseData}/>
        </Card>
      </Wrapper>
    </Background>
  );
};

export default Schedule;
