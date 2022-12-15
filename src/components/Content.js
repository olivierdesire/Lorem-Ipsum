import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  console.log(props);
  return (
    <div className={props.className}>
      <Title name={props.name} />
      <Description text={props.text} />
    </div>
  );
};

export default Content;
