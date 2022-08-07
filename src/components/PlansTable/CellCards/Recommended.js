const Recommended = (props) => {
  let hidden = "hidden";
  if (props.id === props.recPlan) hidden = "";

  return (
    <div>
      <div className={`recommended ${hidden} bold`}>Ignitis recomenduoja</div>
    </div>
  );
};

export default Recommended;
