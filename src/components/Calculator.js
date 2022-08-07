import { useState } from "react";
import DayNightProgressBar from "./DayNightProgressBar";
import SubmitContainer from "./SubmitContainer";
import TimeZoneSwitch from "./TimeZoneSwitch";
import styles from "./Calculator.module.css";

const Calculator = (props) => {
  const [showProgressBar, setShowProgressBar] = useState(false);
  const showProgressBarHandler = (zone) => setShowProgressBar(zone);

  return (
    <div className={styles.container}>
      <TimeZoneSwitch switchZone={showProgressBarHandler} />
      {showProgressBar && <DayNightProgressBar />}
      <SubmitContainer pickPlan={(plan) => props.pickPlan(plan)} />
    </div>
  );
};

export default Calculator;
