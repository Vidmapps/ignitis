import { useState, useEffect } from "react";
import { PlansContent, PlansLabels } from "../../data";
import Description from "./CellCards/Description";
import Fee from "./CellCards/Fee";
import PredictedFee from "./CellCards/PredictedFee";
import PriceZones from "./CellCards/PriceZones";
import Label from "./CellCards/Label";
import ButtonSelectPlan from "./CellCards/ButtonSelectPlan";
import styles from "./PlansTable.module.css";

const PlansTable = (props) => {
  const [activeTab, setActiveTab] = useState("first");
  const [recommendedPlan, setRecommendedPlan] = useState("");

  useEffect(() => {
    if (props.recPlan) {
      setRecommendedPlan(props.recPlan);
      setActiveTab(props.recPlan);
    }
  }, [props.recPlan]);

  const showTabHandler = (planId) => {
    setActiveTab(planId);
  };

  return (
    <div className={styles.table}>
      <div className={styles.tableCell}></div>
      {PlansContent.map((plan) => (
        <Description
          key={plan.id}
          id={plan.id}
          activeTab={activeTab}
          image={plan.image}
          name={plan.name}
          description={plan.description}
          recommended={recommendedPlan}
          markPlan={showTabHandler}
        />
      ))}
      <Label
        description={PlansContent[0].description}
        label={PlansLabels[0].label}
      />
      {PlansContent.map((plan) => (
        <Fee
          key={plan.id}
          id={plan.id}
          activeTab={activeTab}
          label={PlansLabels[0].label}
          fee={plan.fee}
        />
      ))}
      <Label
        description={PlansContent[1].description}
        label={PlansLabels[1].label}
        link="Iš ko susideda elektros kaina "
      />
      {PlansContent.map((plan) => (
        <PriceZones
          key={plan.id}
          id={plan.id}
          link="Iš ko susideda "
          activeTab={activeTab}
          label={PlansLabels[1].label}
          priceTwoZonesOldDay={plan.priceTwoZonesOldDay}
          priceTwoZonesNewDay={plan.priceTwoZonesNewDay}
          priceTwoZonesOldNigth={plan.priceTwoZonesOldNigth}
          priceTwoZonesNewNigth={plan.priceTwoZonesNewNigth}
        />
      ))}
      <Label
        description={PlansContent[2].description}
        label={PlansLabels[2].label}
      />
      {PlansContent.map((plan) => (
        <PredictedFee
          key={plan.id}
          id={plan.id}
          activeTab={activeTab}
          label={PlansLabels[2].label}
          predictedFee={plan.predictedFee}
        />
      ))}
      <div className={styles.tableCell}></div>
      {PlansContent.map((plan) => (
        <ButtonSelectPlan id={plan.id} activeTab={activeTab} />
      ))}
    </div>
  );
};

export default PlansTable;
