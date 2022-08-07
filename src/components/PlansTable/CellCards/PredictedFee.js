import { Fragment } from "react";
import styles from "../PlansTable.module.css";

const PredictedFee = (props) => {
  let active;
  if (props.activeTab === props.id) active = "activePlan";

  return (
    <Fragment>
      <div className={`${styles.tableCell} pointer desktopView ${active}`}>
        <div className="bold textPadding">{props.predictedFee} €/mėn.</div>
      </div>
      {props.activeTab === props.id && (
        <div className={`${styles.tableCell} mobileView ${active}`}>
          <div className="secondaryTextStyle textPadding">{props.label}</div>
          <div className="bold textPadding">{props.predictedFee} €/mėn.</div>
        </div>
      )}
    </Fragment>
  );
};

export default PredictedFee;
