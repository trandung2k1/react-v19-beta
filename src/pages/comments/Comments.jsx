'use client';
import { use } from 'react';
const Comments = (props) => {
    // eslint-disable-next-line react/prop-types
    const comments = use(props.commentsPromise);
    return (
        <ul>
            {comments.map((cmt) => (
                <li key={cmt.id}>{cmt.name} </li>
            ))}
        </ul>
    );
};

export default Comments;
