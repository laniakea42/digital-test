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
  tags: string;
  title: string;
  autor: string;
  date: string;
  views: string;
  text: string;
  key: number;
}

const Post = ({ key, src, tags, title, autor, date, views, text }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = (key: number) => {
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
      <PostContainer onClick={() => handlePostClick(key)}>
        <PostImg>
          <img src={src} alt="" />
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
