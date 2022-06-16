import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 200px;
  margin: 0 auto;
  color: white;
  text-align: center;

`;

export const Formats = styled.div`
  background-color: "#13191F";
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
  background-color: #13191F;
  padding: 1em 0;
  
`;

export const Format = styled.a`
  background-color: "#1E446A";
  color: "white";
  text-decoration: none;
  color: white;
  padding: .5em 1.5em;
  background-color: #1E446A;
  margin-bottom: .5em;
  font-size: 1.1rem;
  border: solid #05080C .3em;

  &:hover {
    background-color: #365F88;
  }


`;
