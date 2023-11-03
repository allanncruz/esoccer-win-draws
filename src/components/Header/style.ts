import styled from 'styled-components'


export const Nav = styled.nav`
  padding: 15px 0;
  background-color: #2a2a2a;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;

    a {
      margin: 0 15px;
      color: #fff;
      &:nth-child(1){
        margin-left: 0 !important;
      }
    }
`;
