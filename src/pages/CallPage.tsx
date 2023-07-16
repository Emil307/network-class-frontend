import React from "react";
import Header from "../widgets/layout/Header";
import { styled } from "styled-components";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
`;

const Container = styled.div`
  background: var(--grey_6);
  flex: 1 1;
  width: 100%;
  padding: 41px 106px 0 123px;
`;

const CallPage: React.FC = () => {
  return (
    <Page>
      <Header />
      <Container></Container>
    </Page>
  );
};

export default CallPage;
