import React from 'react';
import { styled } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StWrapper>
      <StHeader>
        <h1>MY TODOLIST</h1>
      </StHeader>
      {children}
      <StFooter>
        <p>this is footer</p>
      </StFooter>
    </StWrapper>
  );
};

export default Layout;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StHeader = styled.header`
  padding: 20px;
`;

const StFooter = styled.footer`
  position: absolute;
  bottom: 0;

  padding: 20px;
`;
