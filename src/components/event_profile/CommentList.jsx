import React from 'react';
import styled from 'styled-components';

function CommentList(props) {
  const { comments } = props;
  
  const commentsStyled = comments.map((comment, index) => {
    const { user, message } = comment;
    return (
      <li key={index}>
        <Comment>
          <AttendeeAvatar src={user.avatarUrl} alt={`${user.name}'s profile`}/>
          <div>
            <AttendeeName>{user.name}</AttendeeName>
            <span>{message}</span>
          </div>
        </Comment>
      </li>
    )
  });

  return (
    <div>
      <Title>Comments</Title>
      <StyledCommentList>{commentsStyled}</StyledCommentList>
    </div>
  );
}

export default CommentList;

const Title = styled.span`
  font-family: "Helvetica", sans-serif;
  font-size: 18px;
`;

const StyledCommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-right: 10px;
`;

const AttendeeAvatar = styled.img`
  border-radius: 50%;
  height: 50px;
  max-width: 50px;
  border: 2px solid black;
  margin-right: 10px;
`;

const AttendeeName = styled.span`
  display: block;
  font-weight: bold;    
`;