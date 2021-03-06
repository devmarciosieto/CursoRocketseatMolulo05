import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  color: ${props => (props.error ? 'red' : '#fff')};
  small {
    font-size: 14px;
    color: #333;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 3px solid #eee;
    padding: 10px 15px;
    border-radius: 10px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
  props.loading &&
   css`
    svg {
      animation: ${rotate} 2s linear infinite;
  `}
`;

export const List = styled.ul`
     li {
        padding: 15px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & + li {
        border-top: 2px solid #eee;
      }
      }

      a {
        color: #7159c1;
        text-decoration: none;
      }

`;
