import MatchBlock from "./MatchBlock";

const Matches = ({ matches, onClickMatchBlock }) => {
  return (
    <>
      {matches.map(({ id, participants }, index) => (
        <MatchBlock
          key={index}
          onClickMatchBlock={() => {
            onClickMatchBlock(id);
          }}
          name={participants[0].user.firstName}
          img={participants[0].user.photos[0].path}
        />
      ))}
    </>
  );
};

export default Matches;
