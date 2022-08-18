import { Fragment } from "react";
import styles from "../PlansTable.module.scss";

const Fee = (props) => {
  let active = "";
  if (props.activeTab === props.id) active = "activePlan";

  return (
    <Fragment>
      <div className={`${styles.tableCell} pointer desktopView ${active}`}>
        <div className="bold textPadding">{props.fee} €/mėn.</div>
      </div>
      {props.activeTab === props.id && (
        <div
          className={`${styles.tableCell} mobileView ${styles.tableCell} ${active}`}
        >
          <div className="secondaryTextStyle textPadding">{props.label}</div>
          <div className="bold textPadding">{props.fee} €/mėn.</div>
        </div>
      )}
    </Fragment>
  );
};

export default Fee;
