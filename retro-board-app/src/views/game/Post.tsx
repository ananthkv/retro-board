import React, { SFC, useContext } from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import {
  ThumbUpOutlined,
  ThumbDownOutlined,
  DeleteForeverOutlined,
} from '@material-ui/icons';
import useTranslations from '../../translations';
import EditableLabel from '../../components/EditableLabel';
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
      <Typography variant="body1">
        <EditableLabel value={post.content} onChange={onEdit} />
      </Typography>
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
  background-color: ${props => props.color};
  margin: 5px;
  padding: 5px;
  border-radius: 1px;
  box-shadow: 2px 2px 5px 0px rgba(173, 173, 173, 1);
`;

const Content = styled.div``;

const Controls = styled.div``;

export default PostItem;
