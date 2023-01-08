import { useEffect, FC } from "react";

import { Background, Table, Card, ColumnWrapper } from "../components/common";
import { trySchedule } from "../services/schedule";
import { AuthProps } from "../helpers/props";

const Dashboard: FC<AuthProps> = (props) => {
  useEffect(() => {
    const inEffect = async () => {
      const data = await trySchedule(props.auth);
      if (data) {
        console.log(data);
      } else {
        console.warn("Schedule fetching failed");
      }
    };
    console.log(props.auth);
    inEffect();
  });

  return (
    <Background>
      <ColumnWrapper>
        <Card>
          <Table></Table>
        </Card>
      </ColumnWrapper>
    </Background>
  );
};

export default Dashboard;
