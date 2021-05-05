import MatchBlock from "./MatchBlock";

const Matches = ({ matches, onClickMatchBlock }) => {
  return (
    <>
      {matches.map((conversation, index) => (
        <MatchBlock
          key={index}
          onClickMatchBlock={() => {
            onClickMatchBlock(conversation.id);
          }}
          name={conversation.participants[0].user.firstName}
          img={conversation.participants[0].user.photos[0].path}
        />
      ))}
    </>
  );
};

export default Matches;
