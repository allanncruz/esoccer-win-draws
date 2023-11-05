import styled from 'styled-components'

export const ResultsBlocks = styled.div`
  padding: 10px;
  margin: 5px 0;
  display: flex;
  align-items: center;

  label{
    font-size: 11px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 125px;
  }
`;


export const ResultsGoals = styled.span`
  font-size: 22px;
  width: 20px;
  text-align: center;
  margin: 0 3px;
  font-weight: 500;
`;



export const ResultsShield = styled.img`
  width: 38px;
  height: 38px;
  object-fit: contain;
`;
