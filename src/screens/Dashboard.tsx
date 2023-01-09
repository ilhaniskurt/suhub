import { useEffect, FC, useState } from "react";

import { Background, Card, ColumnWrapper } from "../components/common";
import { Table } from "../components/dashboard";
import { trySchedule } from "../services/schedule";
import { AuthProps } from "../helpers/props";

const Dashboard: FC<AuthProps> = (props) => {

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
      <ColumnWrapper>
        <Card>
          <Table courseData={courseData}/>
        </Card>
      </ColumnWrapper>
    </Background>
  );
};

export default Dashboard;
