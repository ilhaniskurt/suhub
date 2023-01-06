import axios from "axios";
import { useEffect } from "react";
import { Background, Table, Card, ColumnWrapper } from "../helpers/components";

import { trySchedule } from "../services/schedule";

const Dashboard = () => {
  useEffect(() => {
    const inEffect = async () => {
      const data = await trySchedule();
      if (data) {
        console.log(data);
      } else {
        console.warn("Schedule fetching failed");
      }
    };
    inEffect();
    console.log(axios.defaults.data);
  }, []);

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
