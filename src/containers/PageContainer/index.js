const PageContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default PageContainer;
