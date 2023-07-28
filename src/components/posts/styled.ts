import styled from "styled-components";

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding-top: 3rem;
  padding-bottom: 5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 48px 40px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 10rem;
  }
`;

export const PostImg = styled.div`
  height: 230px;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 300ms ease-out;
  }
  &:hover img {
    transform: scale(1.05);
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  &:hover ${PostImg} img {
    transform: scale(1.05);
  }
`;

export const PostTag = styled.div`
  color: #eb0028;
  font-size: 13px;
  font-weight: 700;
  line-height: 13px;
`;

export const PostTitle = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 30px;
`;

export const PostInfoUnit = styled.div`
  color: #9b9b9b;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1;
  &.post--autor {
    color: #000;
    font-weight: 500;
  }
  & + & {
    position: relative;
    &::before {
      content: " ";
      position: absolute;
      left: -8px;
      top: 50%;
      border-radius: 50%;
      transform: translateY(-50%);
      background: #d7d7d7;
      width: 3px;
      height: 3px;
    }
  }
`;

export const PostInfoRow = styled.div`
  display: flex;
  gap: 13px;
`;

export const PostText = styled.p`
  margin: 0;
  color: #929292;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.42;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-bottom: 0;
  overflow: hidden;
  -webkit-line-clamp: 4;
  &.no-overflow {
    text-overflow: inherit;
    overflow: visible;
    -webkit-line-clamp: inherit;
  }
`;

export const NoResults = styled.div`
  padding-top: 3rem;
  text-align: center;
  font-weight: 700;
`;
