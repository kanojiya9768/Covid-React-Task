
const Heading = ({ heading, headingClassName, icon, iconcLassName }) => {
  return (
    <h1 className={`${headingClassName}`}>
      <icon.icon className={`${iconcLassName}`} />{" "}
      {heading}
    </h1>
  );
};

export default Heading;
