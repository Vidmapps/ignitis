import { Fragment } from "react";
import styles from "../PlansTable.module.css";

const ButtonSelectPlan = (props) => {
  const link =
    "https://www.ignitis.lt/lt/tarifai-klientams-gaunantiems-elektros-energija-vidutines-itampos-elektros-tinkle";

  let active = "";
  if (props.activeTab === props.id) active = "activePlan";

  return (
    <Fragment>
      <div className={`${styles.tableCell} desktopView ${active}`}>
        <a href={link}>
          <button className="planBtn btnStyle pointer bold">
            {props.activeTab === props.id ? "Pasirinktas" : "Pasirinkti planą"}
          </button>
        </a>
      </div>
      {props.activeTab === props.id && (
        <div className={`${styles.tableCell} mobileView ${active}`}>
          <a href={link}>
            <button className="planBtn btnStyle bold">
              Pasirinktas planas
            </button>
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default ButtonSelectPlan;
