import styled from "styled-components";
import Image from "next/image";
import { FormEventHandler } from "react";

const ModalContainer = styled.div<{ $open: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #00000050;
  z-index: 0;

  display: ${({ $open }) => ($open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const BodyModalContainer = styled.form`
  background-color: #250e36;
  border: 1px solid #4b2964;
  border-radius: 4px;
  padding: 48px;
  width: 100%;
  max-width: 434px;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Exit = styled.button`
  border: 0;
  background: none;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

interface IProps {
  controller: { open: boolean; setOpen: (open: boolean) => void };
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: JSX.Element | JSX.Element[];
}

export const Modal: React.FC<IProps> = (props) => {
  const {
    controller: { open, setOpen },
    children,
    onSubmit,
  } = props;
  return (
    <ModalContainer $open={open}>
      <BodyModalContainer onSubmit={onSubmit}>
        <Exit onClick={() => setOpen(false)}>
          <Image src="./exit.svg" alt="exit" width={14.6} height={14} />
        </Exit>
        {children}
      </BodyModalContainer>
    </ModalContainer>
  );
};
