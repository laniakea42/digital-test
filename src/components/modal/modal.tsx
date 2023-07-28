import { Container } from "../container";
import { useState, useEffect } from "react";
import {
  ModalBody,
  ModalLayout,
  ModalWrapper,
  PostModalGrid,
  PostModalAside,
  ModalHeading,
} from "./styled";
import {
  PostImg,
  PostInfoRow,
  PostInfoUnit,
  PostTag,
  PostText,
  PostTitle,
} from "../posts/styled";
import cross from "./img/cross.svg";

interface Props {
  src: string;
  tags: string;
  title: string;
  autor: string;
  date: string;
  views: string;
  text: string;
  handleCloseModal: () => void;
}

const Modal = ({
  src,
  tags,
  title,
  autor,
  date,
  views,
  text,
  handleCloseModal,
}: Props) => {
  return (
    <ModalWrapper>
      <ModalLayout onClick={handleCloseModal} />
      <ModalBody>
        <ModalHeading>
          <PostTitle>{title}</PostTitle>
          <button onClick={handleCloseModal}>
            <img src={cross} alt="" />
          </button>
        </ModalHeading>
        <PostModalGrid>
          <PostImg>
            <img src={src} alt="" />
          </PostImg>

          <PostModalAside>
            <PostInfoRow>
              <PostInfoUnit className="post--autor">{autor}</PostInfoUnit>
              <PostInfoUnit>{date}</PostInfoUnit>
              <PostInfoUnit>{views} Views</PostInfoUnit>
            </PostInfoRow>

            <PostText className="no-overflow">{text}</PostText>

            <PostTag>{tags}</PostTag>
          </PostModalAside>
        </PostModalGrid>
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;
