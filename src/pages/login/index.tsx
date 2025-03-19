// import { useContext, useState } from "react";
// import { UserContext } from "../../context/UserContext";



// const Login = () => {
//   const { handleLogin } = useContext(UserContext)

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <>
//       <div>login</div>
//       <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={() => handleLogin(email, password)}>Login</button>
//     </>
//   );
// };

// export default Login;

import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await handleLogin(email, password);
      navigate('/'); // Redireciona para home após login
    } catch (error) {
      setError('Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <LoginButton onClick={handleSubmit}>
          Entrar
        </LoginButton>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SignupText>
          Não tem uma conta? <span onClick={() => navigate('/signup')}>Crie uma</span>
        </SignupText>
      </LoginBox>
    </Container>
  );
};

export default Login;

// Estilos
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

const LoginBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  color: #065fd4;
  margin-bottom: 30px;
  font-size: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #065fd4;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #065fd4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #054daa;
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  margin: 15px 0;
  font-size: 14px;
`;

const SignupText = styled.div`
  margin-top: 20px;
  color: #606060;
  font-size: 14px;

  span {
    color: #065fd4;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;