import React from "react";
import Header from "../../components/headers";

const PublicContent = () => (
  <div>
    Please just our space and make your self productive in Job search feild.
  </div>
);

const AutheticatedContent = () => <div> Your total states </div>;

const Home = () => {
  const { token } = localStorage;

  return (
    <div className="App">
      <Header />
      {token ? <AutheticatedContent /> : <PublicContent />}
    </div>
  );
};

export default Home;
