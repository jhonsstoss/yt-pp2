import styled from "styled-components";

const Upload = () => {
  return (
    <Container>
      <h1>Enviar Vídeo</h1>
      <FormContainer>
        <input type="file" accept="video/*" />
        <input type="text" placeholder="Título do vídeo" />
        <textarea placeholder="Descrição" />
        <button>Publicar</button>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    background: #065fd4;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background: #054daa;
    }
  }
`;

export default Upload;