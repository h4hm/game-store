import styled from "styled-components";

const Buttons = ({ styleType, children }) => {
  let className = "Button";
  if (styleType) className += ` ${styleType}`;

  return <ButtonStyled className={className}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  &.download {
    font-size: 14px;
    background: var(--primary);
    border-radius: 999px;
    box-shadow: var(--primary) 0 10px 20px -10px;
    box-sizing: border-box;
    color: var(--white);
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
