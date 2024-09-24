import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const theme = {
    light: [
      '#ebedf0', // level0
      '#c084f5', // level1
      '#a35cf5', // level2
      '#8530f5', // level3
      '#6600ff', // level4
    ],
    dark: [
      '#333333', // level0
      '#c084f5', // level1
      '#a35cf5', // level2
      '#8530f5', // level3
      '#6600ff', // level4
    ],
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="KhaledAbdElazem"
        blockSize={15}
        blockMargin={5}
        theme={theme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
