import { useState } from "react";
import styles from "./TimeZoneSwitch.module.scss";
import iconInfo from "../assets/iconInfo.svg";

const TimeZoneSwitch = (props) => {
  const [isOn, setIsOn] = useState(false);

  const switchZoneHandler = () => {
    setIsOn((prev) => !prev);
    props.switchZone((prev) => !prev);
  };

  const twoZoneClass = isOn && "activeZone";
  const oneZoneClass = !isOn && "activeZone";

  return (
    <div className="center">
      <div className={styles.container}>
        <div className={`${styles.oneZone} ${styles.zone} ${oneZoneClass}`}>
          Viena laiko zona
        </div>
        <div className={styles.toggleSwitch}>
          <input
            type="checkbox"
            className={styles.checkbox}
            name="label"
            id="label"
            onChange={() => switchZoneHandler()}
          />
          <label className={`${styles.label} pointer`} htmlFor="label">
            <span className={styles.inner} />
            <span className={styles.switch} />
          </label>
        </div>
        <div className={styles.twoZone}>
          <div className={`${styles.zone} ${twoZoneClass}`}>
            Dvi laiko zonos
          </div>
          <img className="icon" src={iconInfo} alt="info" />
        </div>
      </div>
    </div>
  );
};

export default TimeZoneSwitch;
