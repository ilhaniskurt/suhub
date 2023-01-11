import { FC, useState } from "react";

import { Background } from "../components/common";
import { DashboardWrapper, ClickableCard } from "../components/dashboard";
import { AuthProps } from "../helpers/props";
import Schedule from "./Schedule";

const Dashboard: FC<AuthProps> = (props) => {
  const [dashboard, setDashboard] = useState(true);

  const routes = {
    profile: "",
    schedule: <Schedule auth={props.auth} setAuth={props.setAuth} />,
    transcript: "",
  };
  type routeKey = keyof typeof routes;

  const [route, setRoute] = useState<routeKey>("profile");

  const handleAction = (route: string) => {
    setRoute(route as routeKey);
    setDashboard(false);
  };

  return (
    <>
      {dashboard ? (
        <Background>
          <DashboardWrapper>
            <ClickableCard onClick={() => handleAction("profile")}>
              Profile
            </ClickableCard>
            <ClickableCard onClick={() => handleAction("schedule")}>
              Schedule
            </ClickableCard>
            <ClickableCard onClick={() => handleAction("transcript")}>
              Transcript
            </ClickableCard>
          </DashboardWrapper>
        </Background>
      ) : (
        <>{routes[route]}</>
      )}
    </>
  );
};

export default Dashboard;
