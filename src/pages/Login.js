import React from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({scrollPosition, setLogin}) => {
  const navigate = useNavigate();
  const LoginWeb = (event)=>{
    event.preventDefault();
    setLogin(true);
    navigate('/');
    console.log('로그인됨');
  }
  let headerColor = '#041E3A'
  return (
    <div className='Login'>
      <Header headerColor={headerColor} scrollPosition={scrollPosition}/>
      <form onSubmit={LoginWeb}>
        <h2 className='LoginTitle'>로그인</h2>
        <input type="email" placeholder='이메일 주소*'/>
        <input type="password" placeholder='비밀번호'/>
        <div className='loginRemember'>
          <Link to={''}>비밀번호를 잊으셨나요?</Link>
          <span>* 필수</span>
        </div>
        <input id='autoLogin' type="checkbox" />
        <label htmlFor="autoLogin">자동 로그인</label>
        <button type='submit' className='loginBtn'>로그인</button>
      </form>
    </div>
  )
}

export default Login