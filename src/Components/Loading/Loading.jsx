import { Wrapper } from "./styles";
import Lottie from "lottie-react";
import animationData from "../../Assets/Animations/fetching.json";

const Loading = () => {
  return (
    <Wrapper>
      <Lottie
        animationData={animationData}
        autoPlay={true}
        loop={true}
        style={{ width: "60%", height: "60%" }}
      />
    </Wrapper>
  );
};

export default Loading;
