import MessageBlock from "../../Messages/MessageBlock";

const MatchBlock = ({ img, name, onClickMatchBlock }) => {
  return (
    <MessageBlock
      onClickBlock={onClickMatchBlock}
      img={img}
      name={name}
      text="Совпадение! Быстрее напишите."
    />
  );
};

export default MatchBlock;
