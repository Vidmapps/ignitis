import { Fragment } from "react";
import Recommended from "./Recommended";
import styles from "../PlansTable.module.scss";

const Description = (props) => {
  const showTab = (planId) => {
    props.markPlan(planId);
  };

  let active = "";
  if (props.activeTab === props.id) active = "activePlan";

  return (
    <Fragment>
      <div
        className={`${styles.tableCell} ${props.id} ${active} pointer`}
        onClick={() => showTab(props.id)}
      >
        <Recommended id={props.id} recPlan={props.recommended} />
        <img
          className={styles.planImage}
          src={require(`../../../assets/${props.image}.png`)}
          alt="plan"
        />
        <div>{props.name}</div>
        <div className="desktopView secondaryTextStyle">
          {props.description}
          <a
            href="https://www.ignitis.lt/lt/tarifai-klientams-gaunantiems-elektros-energija-vidutines-itampos-elektros-tinkle"
            className="linkStyle"
          >
            Daugiau.
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Description;
