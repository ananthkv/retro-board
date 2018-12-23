import React, { SFC, useContext, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Input, InputAdornment } from '@material-ui/core';
import useTranslations from '../../translations';
import PostItem from './Post';
import { Post } from 'retro-board-common';

interface ColumnProps {
  posts: Post[];
  icon: React.ComponentType;
  question: string;
  color: string;
  onAdd: (content: string) => void;
  onLike: (post: Post) => void;
  onDislike: (post: Post) => void;
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

const Column: SFC<ColumnProps> = ({
  posts,
  icon: Icon,
  question,
  color,
  onAdd,
  onLike,
  onDislike,
  onEdit,
  onDelete,
}) => {
  const translations = useTranslations();
  const [content, setContent] = useState('');
  const onContentChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)
  );
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      onAdd(content);
      setContent('');
    }
  });
  return (
    <ColumnWrapper>
      <Add>
        <Input
          placeholder={question}
          onChange={onContentChange}
          value={content}
          onKeyDown={onKeyDown}
          startAdornment={
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          }
        />
      </Add>
      <div>
        {posts.map(post => (
          <PostItem
            key={post.id}
            post={post}
            color={color}
            onLike={() => onLike(post)}
            onDislike={() => onDislike(post)}
            onDelete={() => onDelete(post)}
            onEdit={content =>
              onEdit({
                ...post,
                content,
              })
            }
          />
        ))}
      </div>
    </ColumnWrapper>
  );
};

const ColumnWrapper = styled.div`
  flex: 1;
`;

const Add = styled.div`
  width: calc(100% - 10px);
  margin-bottom: 20px;

  > div {
    width: 100%;
  }
  input {
    width: 100%;
  }
`;

export default Column;
