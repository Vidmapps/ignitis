import { useState } from "react";
import styles from "./App.module.css";
import Calculator from "./components/Calculator";
import PlansTable from "./components/PlansTable/PlansTable";

function App() {
  const [pickedPlan, setPickedPlan] = useState("");

  const pickPlanHandler = (plan) => {
    setPickedPlan(plan);
  };

  return (
    <div className={styles.container}>
      <div className="center">
        <Calculator pickPlan={pickPlanHandler} />
      </div>
      <hr />
      <PlansTable recPlan={pickedPlan} />
    </div>
  );
}

export default App;
