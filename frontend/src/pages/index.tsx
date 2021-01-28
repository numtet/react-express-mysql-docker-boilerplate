import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  & > .bar {
  }
`;

interface Props {
  foo: string;
}

const Hoge: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <div>Hello!</div>
    </Wrapper>
  );
};

export default Hoge;
