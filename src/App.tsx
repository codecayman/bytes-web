import React from "react";

// helpers
import styled from "styled-components";

// components
import ComingSoonPage from "./pages/ComingSoonPage";

const App = () => {
  return (
    <RootWrapper>
      <ComingSoonPage />
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export default App;
