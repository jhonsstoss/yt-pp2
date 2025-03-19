import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState<string | null>(localStorage.getItem('token')); //Inicialize como null
  const [userColor, setUserColor] = useState<string>('#ccc'); // Estado para a cor
  const [loading, setLoading] = useState(false);


  // const getUser = (token: string) => {
  //   console.log("Token sendo enviado:", token);
  //   api.get('/user/get-user', {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   }).then(({ data }) => {
  //     console.log("Resposta do getUser:", data); 
  //     setUser(data.user);
  //     setLogin(true);
  //   }).catch((error) => {
  //     console.log('Erro ao buscar usuário:', error.response?.data || error.message);

  //     // logout(); // Chama logout se o token for inválido

  //   })
  // }

  const getUser = async (token: string) => {
    setLoading(true);
    try {
      const { data } = await api.get('/user/get-user', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(data.user);
      setLogin(true);
    } catch (error) {
      console.log('Erro ao buscar usuário:', error);
      logOut();
    } finally {
      setLoading(false);
    }
  }

  const logOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
    setUser({});
  };

  useEffect(() => {
    if (token) {
      getUser(token); // Só chama getUser se o token existir
    };
  },[token])

  useEffect(() => {
    const savedColor = localStorage.getItem('userColor');
    if (savedColor) setUserColor(savedColor);
  }, []);

  const handleLogin = (email: string, password: string) => {
    api.post('/user/sign-in', {email, password}).then(({ data }) => {
      const color = generateUserColor(email); 
      setUserColor(color);
      localStorage.setItem('userColor', color); 
      setLogin(true);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      getUser(data.token);
    }).catch((error) => {
      console.log('Não foi possível fazer o login', error)
    })
  }

  // const handleLogin = async (email: string, password: string) => { // Adicione async
  //   try {
  //     const { data } = await api.post('/user/sign-in', {email, password}); // Adicione await
  //     const color = generateUserColor(email);
  //     setUserColor(color);
  //     localStorage.setItem('userColor', color);
  //     localStorage.setItem('token', data.token);
  //     setToken(data.token);
  //     await getUser(data.token); // Adicione await
  //     setLogin(true);
  //   } catch (error) {
  //     console.log('Não foi possível fazer o login', error);
  //     throw error; // Propague o erro
  //   }
  // }

  // const handleSignUp = async (name: string, email: string, password: string) => {
  //   try {
  //     const { data } = await api.post('/user/sign-up', { name, email, password });
      
  //     const color = generateUserColor(email);
  //     setUserColor(color);
  //     localStorage.setItem('userColor', color);
  //     localStorage.setItem('token', data.token);
  //     setToken(data.token);
  //     await getUser(data.token); // Adicione await
  //     setLogin(true);
      
  //     return data;
  //   } catch (error) {
  //     throw new Error('Erro ao criar conta');
  //   }
  // };
  

  const handleSignUp = async (name: string, email: string, password: string) => {
    try {
      const { data } = await api.post('/user/sign-up', {
        name,
        email,
        password
      });
      
      // Opcional: Login automático após cadastro
      const color = generateUserColor(email);
      setUserColor(color);
      localStorage.setItem('userColor', color);
      setLogin(true);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      getUser(data.token);
      
      return data;
    } catch (error) {
      throw new Error('Erro ao criar conta');
    }
  };
  

  const generateUserColor = (email: string): string => {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      hash = email.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360; // Garante um valor entre 0-359
    return `hsl(${hue}, 70%, 50%)`; // Ex: hsl(120, 70%, 50%)
  };


  return (
    <UserContext.Provider value={{
      login,
      user,
      userColor,
      handleLogin,
      handleSignUp,
      logOut
    }}>
      {children}
    </UserContext.Provider>
  )
}