import styles from "../PlansTable.module.scss";

const Label = (props) => {
  return (
    <div
      className={`${styles.tableCell} ${styles.cellFeature} ${props.isActive}`}
    >
      <div>
        <div className="desktopView">{props.label}</div>
        <div className="linkStyle">{props.link}</div>
      </div>
    </div>
  );
};

export default Label;
