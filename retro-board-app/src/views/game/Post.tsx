import React, { SFC, useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import {
  ThumbUpOutlined,
  ThumbDownOutlined,
  DeleteForeverOutlined,
} from '@material-ui/icons';
import useTranslations from '../../translations';
import { Post } from 'retro-board-common';

interface PostItemProps {
  post: Post;
  color: string;
  onLike: () => void;
  onDislike: () => void;
  onEdit: (content: string) => void;
  onDelete: () => void;
}

const PostItem: SFC<PostItemProps> = ({
  post,
  color,
  onLike,
  onDislike,
  onEdit,
  onDelete,
}) => {
  const translations = useTranslations();

  return (
    <PostWrapper color={color}>
      <Content>{post.content}</Content>
      <Controls>
        <Button onClick={onLike}>
          <ThumbUpOutlined />
          &nbsp;{post.likes.length}
        </Button>
        <Button onClick={onDislike}>
          <ThumbDownOutlined />
          &nbsp;{post.dislikes.length}
        </Button>
        <Button onClick={onDelete}>
          <DeleteForeverOutlined />
        </Button>
      </Controls>
    </PostWrapper>
  );
};

const PostWrapper = styled<{ color: string }, 'div'>('div')`
  border: 1px solid grey;
  border-radius: 5px;
  background-color: ${props => props.color};
  margin: 5px;
`;

const Content = styled.div``;

const Controls = styled.div``;

export default PostItem;
