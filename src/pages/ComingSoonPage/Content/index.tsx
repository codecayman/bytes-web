import React from "react";

// helpers
import styled from "styled-components";

// components
import { Zoom } from "react-reveal";
import { Link } from "@material-ui/core";
import NotifyMeForm from "./NotifyMeForm";

// images
import BytesLogo from "../../../resources/images/logo/bytes-logo.png";
import RightSideBackground from "../../../resources/images/background/coming-soon-background.jpg";

const Content = () => {
  const bytesDocumentLink =
    "https://docs.google.com/document/d/1CxU-VtHOApkKG5FqagaRYLjcM73uFoYELE8Ado1vapg/edit";

  return (
    <Wrapper>
      <ContentSection>
        <StyledLogoImage src={BytesLogo} />

        <Zoom>
          <TitleTextWrapper>We're launching soon!</TitleTextWrapper>

          <DescriptionTextWrapper>
            We are going to launch our website Very soon.
            <br />
            Stay Tune.
          </DescriptionTextWrapper>

          <GetNotifiedText> Get notified when we launch</GetNotifiedText>

          <NotifyMeForm />

          <ReadMoreText>
            Read more about{" "}
            <Link
              href={bytesDocumentLink}
              onClick={console.log}
              target="_blank"
            >
              Bytes
            </Link>
          </ReadMoreText>
        </Zoom>
      </ContentSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  background-image: url(${RightSideBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  overflow: auto;
  overflow-x: hidden;
`;

const ContentSection = styled.section`
  width: 600px;
  height: 100%;
  max-width: 100%;

  padding: 40px;
  margin-top: 10%;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

const StyledLogoImage = styled.img`
  width: auto;
  height: 350px;
`;

const TitleTextWrapper = styled.div`
  margin-bottom: 10px;

  color: #4925c6;
  font-size: 45px;
  font-weight: 500;

  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

const DescriptionTextWrapper = styled.div`
  text-align: center;
  font-size: 18px;
  color: #848591;
  line-height: 25px;
`;

const ReadMoreText = styled(DescriptionTextWrapper)`
  margin-top: 25px;
`;

const GetNotifiedText = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;

  font-size: 18px;
  color: #2f3538;
`;

export default Content;
