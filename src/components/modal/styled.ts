import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  z-index: 101;
`;

export const ModalLayout = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;

  opacity: 0.6;
  background: #fff;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  position: absolute;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 720px;
  max-width: calc(100% - 1rem);
  padding: 2rem;

  border: 1px solid #e9e9e9;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
`;

export const PostModalGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 30px;
  margin-top: 1.5rem;
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 3fr;
    margin-top: 3rem;
  }
`;

export const PostModalAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;
