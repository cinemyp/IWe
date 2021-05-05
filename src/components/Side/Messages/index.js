import MessageBlock from "./MessageBlock";

const Messages = ({ messages }) => {
  return (
    <>
      {messages.map(({ name, lastMessageText }, index) => (
        <MessageBlock key={index} name={name} text={lastMessageText} />
      ))}
    </>
  );
};

export default Messages;
