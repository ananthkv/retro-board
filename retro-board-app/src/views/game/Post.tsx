import React, { SFC, useContext } from 'react';
import { includes } from 'lodash';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import {
  ThumbUpOutlined,
  ThumbDownOutlined,
  DeleteForeverOutlined,
} from '@material-ui/icons';
import useTranslations from '../../translations';
import useGlobalState from '../../state';
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
  const { state } = useGlobalState();
  const user = state.username;
  const hasVoted = includes(post.likes, user) || includes(post.dislikes, user);
  return (
    <PostWrapper color={color}>
      <Typography variant="body1">
        <EditableLabel value={post.content} onChange={onEdit} />
      </Typography>
      <Controls>
        <Button onClick={onLike} disabled={hasVoted}>
          <ThumbUpOutlined style={{ color: 'green' }} />
          &nbsp;{post.likes.length}
        </Button>
        <Button onClick={onDislike} disabled={hasVoted}>
          <ThumbDownOutlined style={{ color: 'darkred' }} />
          &nbsp;{post.dislikes.length}
        </Button>
        {user === post.user && (
          <Button onClick={onDelete}>
            <DeleteForeverOutlined style={{ color: 'red' }} />
          </Button>
        )}
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
