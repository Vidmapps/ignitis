import { Fragment } from "react";
import styles from "../PlansTable.module.scss";
import iconSunYellow from "../../../assets/iconSunYellow.svg";
import iconMoonGreen from "../../../assets/iconMoonGreen.svg";

const PriceZones = (props) => {
  let active = "";
  if (props.activeTab === props.id) active = "activePlan";

  return (
    <Fragment>
      <div className={`${styles.tableCell} pointer desktopView  ${active}`}>
        <div className="center">
          <img className="icon" src={iconSunYellow} alt="sun" />
          <div className={styles.oldPrice}>{props.priceTwoZonesOldDay}</div>
          <div className={styles.newPrice}>{props.priceTwoZonesNewDay}</div>
          <div className="textPadding secondaryTextStyle">€/kWh.</div>
        </div>
        <div className="center">
          <img className="icon" src={iconMoonGreen} alt="moon" />
          <div className={styles.oldPrice}>{props.priceTwoZonesOldNigth}</div>
          <div className={styles.newPrice}>{props.priceTwoZonesNewNigth}</div>
          <div className="textPadding secondaryTextStyle">€/kWh.</div>
        </div>
      </div>
      {props.activeTab === props.id && (
        <div className={`${styles.tableCell} mobileView ${active}`}>
          <div className="secondaryTextStyle textPadding">{props.label}</div>
          <div className="secondaryTextStyle">{props.link}</div>
          <div className="center">
            <img className="icon" src={iconSunYellow} alt="sun" />
            <div className={styles.oldPrice}>{props.priceTwoZonesOldDay}</div>
            <div className={styles.newPrice}>{props.priceTwoZonesNewDay}</div>
            <div className="textPadding secondaryTextStyle">€/kWh.</div>
          </div>
          <div className="center">
            <img className="icon" src={iconMoonGreen} alt="moon" />
            <div className={styles.oldPrice}>{props.priceTwoZonesOldNigth}</div>
            <div className={styles.newPrice}>{props.priceTwoZonesNewNigth}</div>
            <div className="textPadding secondaryTextStyle">€/kWh.</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PriceZones;
