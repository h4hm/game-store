import styled from "styled-components";

const Buttons = ({ styleType, children }) => {
  let className = "Button";
  if (styleType) className += ` ${styleType}`;

  return <ButtonStyled className={className}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  &.download {
    font-size: 14px;
    background: #5e5df0;
    border-radius: 999px;
    box-shadow: #5e5df0 0 10px 20px -10px;
    box-sizing: border-box;
    color: #fff;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
  }
`;

export default Buttons;
