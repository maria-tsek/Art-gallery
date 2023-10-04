import styled from "styled-components";
import { comment } from "stylis";
export default function CommentForm({ onAddComment }) {
  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    gap: 10px;
    background: var(--color-blue);
    width: 50%;
  `;
  const Heading = styled.h2``;
  const Label = styled.label``;
  const Input = styled.input`
  border: 1px, solid, var(--color-red)`;
  const Button = styled.button`
    margin: 10px;
    width: fit-content;
    display: flex;
    align-self: center;

    &:hover {
      cursor: pointer;
    }
  `;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const text = Object.fromEntries(formData);
    onAddComment(text);
    console.log("text", text);
    event.target.reset();
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Heading>Comments:</Heading>
        <Label htmlFor="comment">Leave a comment:</Label>
        <Input type="text" id="comment" name="text"></Input>
        <Button>Send</Button>
      </StyledForm>
    </>
  );
}
