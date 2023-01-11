import { FC, useState } from "react";

import { Background, Header } from "../components/common";
import { DashboardWrapper, ClickableCard } from "../components/dashboard";
import { AuthProps } from "../helpers/props";
import Schedule from "./Schedule";
import { ReactComponent as TranscriptLogo } from "../transcript.svg";
import { ReactComponent as ScheduleLogo } from "../timetable.svg";

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
              <Header>Profile</Header>
            </ClickableCard>
            <ClickableCard onClick={() => handleAction("schedule")}>
              <Header>Schedule</Header>
              <ScheduleLogo className="w-32 h-32" />
            </ClickableCard>
            <ClickableCard onClick={() => handleAction("transcript")}>
              <Header>Transcript</Header>
              <TranscriptLogo className="w-32 h-32" />
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
