import styled from 'styled-components';
import { View, Text } from 'react-native';
import * as React from "react";


const Header = ({title}) => {
  return (
    <HeaderWrapper>
      <HeaderStatusBar />
      <TextWrapper>
        {title}
      </TextWrapper>
    </HeaderWrapper>
  )
}

export const HOCHeader = (title) => {
    return <Header title={title} />
}

export default Header;

const HeaderStatusBar = styled(View)`
  height: 25px;
  background: blue;
`;
styled.view

const HeaderWrapper = styled(View)`
  height: 70px;
  border-bottom-width: 1px;
  background: #3f51b5;
  justify-content: center;
  align-items: center
`;
const TextWrapper = styled(Text)`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;