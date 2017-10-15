import React from 'react';

function CommentList(props) {
  return (
    <div>
      <span style={{fontFamily: '"Helvetica", sans-serif', fontSize: '18px'}}>
        Comments
      </span>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0,}}>
        {generateComments(props.comments)}
      </ul>
    </div>
  );
}

function generateComments(list) {
  return list.map((comment, index) => {
    const { user, message } = comment;
    return (
      <li key={index}>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', paddingRight: '10px' }}>
          <img src={user.avatarUrl} alt={`${user.name}'s profile`} style={imageStyle}/>
          <div>
            <span style={{display: 'block', fontWeight: 'bold'}}>{user.name}</span>
            <span>{message}</span>
          </div>
        </div>
      </li>
    )
  })
}

export default CommentList;


const imageStyle = {
  borderRadius: '50%',
  height: '50px',
  maxWidth: '50px',
  border: '2px solid black',
  marginRight: '10px',
};