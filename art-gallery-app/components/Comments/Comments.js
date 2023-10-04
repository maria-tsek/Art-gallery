import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  `;
  const StyledComment = styled.li`
  background-color: var(--color-grey-green);
  border: 2px solid var(--color-blue);
  border-radius: 10px;
  padding: 0 40px;
  margin-bottom: 20px;

`;
export default function Comments({ comments }) {
  return (
    <StyledList>
      {comments?.map((comment, index) => (
        <StyledComment key={index}>
          <p>
            {"✍️"} {comment.text}
          </p>
          <p>
            {comment.time} {comment.date}
          </p>
        </StyledComment>
      ))}
    </StyledList>
  );
}
