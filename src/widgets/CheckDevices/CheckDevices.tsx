import { useRef } from "react";
import Webcam from "react-webcam";
import cameraOn from "../../../public/icons/videocamera-on.svg";
import cameraOff from "../../../public/icons/videocamera-off.svg";
import microOn from "../../../public/icons/microphone-on.svg";
import microOff from "../../../public/icons/microphone-off.svg";
import { styled } from "styled-components";
import { SwitchDevice } from "../../features/DeviceSetting";

const Container = styled.div`
  position: relative;
`;

const SwitchBlock = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const CheckDevices: React.FC = () => {
  const webcam = useRef<Webcam>(null);

  return (
    <Container>
      <Webcam
        audio={false}
        ref={webcam}
        mirrored={true}
        width={100 + "%"}
        height={370}
      />
      <SwitchBlock>
        <SwitchDevice iconOn={microOn} iconOff={microOff} />
        <SwitchDevice iconOn={cameraOn} iconOff={cameraOff} />
      </SwitchBlock>
    </Container>
  );
};

export default CheckDevices;
