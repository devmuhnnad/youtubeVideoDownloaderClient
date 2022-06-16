import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  max-width: 800px;
  margin: 8em auto 0 auto;
`;

export const Input = styled.input`
  font-size: 1.5rem;
  margin-bottom: 1em;
  padding: 0.5em 0.5em;
  outline: none;
  width: 100%;
  background-color: #cce6ff;
  color: #05080c;
  border: none;
  border-bottom: solid 0.5em #13191f;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: #13191f;
  color: #cce6ff;
  font-size: 1.1rem;
  padding: 1em 2em;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border: solid .3em #05080c;

  &:hover {
    background-color: #252f39;
  }
`;

export const Title = styled.h1`
  font-size: 6vmin;
  color: #cce6ff;
  text-align: center;
  margin-bottom: 1em;
  font-weight: normal;
`;
