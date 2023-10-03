import styled from "styled-components";

const StyledList = styled.ul`
list-style-type: "✍️ "
`
export default function Comments({ comments }) {
  return (
    <StyledList>
      {comments.map((comment, index) => (
        <li key={index}>
          <p>{comment.text}</p>
          <p>
            {comment.time} {comment.date}
          </p>
        </li>
      ))}
    </StyledList>
  );
}
