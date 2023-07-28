import { useState, useEffect } from "react";
import {
  PostImg,
  PostContainer,
  PostTag,
  PostTitle,
  PostInfoRow,
  PostInfoUnit,
  PostText,
} from "./styled";
import Modal from "../modal/modal";

interface Props {
  src: string;
  img_2x: string;
  tags: string;
  title: string;
  autor: string;
  date: string;
  views: string;
  text: string;
}

const Post = ({
  src,
  img_2x,
  tags,
  title,
  autor,
  date,
  views,
  text,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalOpen]);

  return (
    <>
      <PostContainer onClick={() => handlePostClick()}>
        <PostImg>
          <img src={src} alt="" srcSet={`${img_2x} 2x`} />
        </PostImg>
        <PostTag>{tags}</PostTag>
        <PostTitle>{title}</PostTitle>

        <PostInfoRow>
          <PostInfoUnit className="post--autor">{autor}</PostInfoUnit>
          <PostInfoUnit>{date}</PostInfoUnit>
          <PostInfoUnit>{views} Views</PostInfoUnit>
        </PostInfoRow>

        <PostText>{text}</PostText>
      </PostContainer>

      {isModalOpen && (
        <Modal
          src={src}
          img_2x={img_2x}
          tags={tags}
          title={title}
          autor={autor}
          date={date}
          views={views}
          text={text}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Post;
