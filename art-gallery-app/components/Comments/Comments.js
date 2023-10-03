export default function Comments({ comments }) {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <p>{comment.text}</p>
          <p>
            {comment.time} {comment.date}
          </p>
        </li>
      ))}
    </ul>
  );
}
