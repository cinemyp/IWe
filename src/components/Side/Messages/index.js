import MessageBlock from "./MessageBlock";

const Messages = ({ messages, onClickMessageBlock, openedDialog }) => {
  return (
    <>
      {messages.map(({ id, participants }, index) => (
        <MessageBlock
          key={index}
          name={participants[0].user.firstName}
          img={participants[0].user.photos[0].path}
          active={openedDialog === id}
          onClickBlock={() => {
            onClickMessageBlock(id);
          }}
        />
      ))}
    </>
  );
};

export default Messages;
