import React from "react";
import styles from "./SubmitContainer.module.scss";

const SubmitContainer = (props) => {
  return (
    <div className={styles.containter}>
      <div className={styles.inputContainer}>
        <div className={styles.descriptionInput}>
          <label className="secondaryTextStyle">Kiekis</label>
          <input
            className={`${styles.inputNumber} bold`}
            defaultValue="100.00"
            type="number"
          ></input>
        </div>
        <div>
          <label className="secondaryTextStyle">Vienetai</label>
          <select className={styles.inputType} name="type" id="type">
            <option value="eurMonth">Eurai per mėnesį</option>
            <option value="kWhMonth">kWh per mėnesį</option>
            <option value="eurYear">Eurai per metus</option>
            <option value="kWhYear">kWh per metus</option>
          </select>
        </div>
      </div>
      <div className={styles.button}>
        <button
          className={`${styles.inputButton} btnStyle pointer bold`}
          onClick={() => props.pickPlan("first")}
        >
          Rekomenduoti planą
        </button>
      </div>
    </div>
  );
};

export default SubmitContainer;
