import styled from 'styled-components'

export const Kickoff = styled.small`
  display: block;
  text-align: center;
  margin-top: 20px;
`;


export const Blocks = styled.div`
  padding: 10px;
  margin: 5px auto;
  display: flex;
  align-items: center;
  max-width: 350px;
  width: 100%;
  text-align: center;
  justify-content: center;

  label{
    font-size: 11px;
  }

  &.draw{
    background-color: red;
  }

  &.win{
    background-color: green;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 125px;
  }
`;

export const Goals = styled.span`
  font-size: 22px;
  width: 20px;
  text-align: center;
  margin: 0 3px;
  font-weight: 500;
`;

export const Shield = styled.img`
  width: 38px;
  height: 38px;
  object-fit: contain;
`;
