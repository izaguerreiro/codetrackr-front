import React from 'react';

import './App.css';

function AppLogin() {
  return (
    <div className='App-login'>
        <div className='App-login-card'>
            <div className='App-login-card-frame'>
                <h3>Login</h3>   
                <text>Bem vindo! Por favor, insira seus dados.</text>  
                <br/>
                <input type='text' placeholder='Usuário'></input>
                <input type='password' placeholder='Senha'></input>
                <br/>
                <button className='primary-button' onClick={'/'}>Entrar</button>
                <br />
                <a href='#'>Esqueci minha senha</a>
            </div>
        </div>
    </div>
    
  );
}

export default AppLogin;
