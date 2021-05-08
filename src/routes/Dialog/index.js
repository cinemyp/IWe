import BackTo from "../../components/BackTo";
import Chat from "../../components/Chat";
import PageContainer from "../../containers/PageContainer";

const DialogPage = () => {
  return (
    <>
      <PageContainer>
        <BackTo to="/recs" />
        <Chat />
      </PageContainer>
    </>
  );
};

export default DialogPage;
