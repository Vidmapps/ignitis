import { useState } from "react";
import styled from "styled-components";
import styles from "./DayNightProgressBar.module.scss";
import iconSun from "../assets/iconSun.svg";
import iconMoon from "../assets/iconMoon.svg";

const Slider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 24px 0;
  outline: 0;
  height: 4px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #64e0b8 0%, #64e0b8 ${props.value}%, #c2c4d2 ${props.value}%, #c2c4d2 100%);`};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #64e0b8 40%, #64e0b8 45%);
    border-radius: 50%;
  }
`;

const DayNightProgressBar = () => {
  const [value, setValue] = useState(68);
  return (
    <div>
      <div className={styles.percentage}>
        <div className="center">
          <img className={styles.img} src={iconSun} alt="sun" />
          <div className={styles.percentageValue}>{value}%</div>
        </div>
        <div className="center">
          <div className={styles.percentageValue}>{100 - value}%</div>
          <img className={styles.img} src={iconMoon} alt="moon" />
        </div>
      </div>
      <Slider
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default DayNightProgressBar;
