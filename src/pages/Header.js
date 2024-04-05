import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch , BsPerson, BsHeart, BsCart4  } from "react-icons/bs";

const Header = ({scrollPosition, headerColor}) => {
  const scrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  const siteMapShow = (event)=>{
    event.preventDefault();
    const siteMap = document.querySelector('.siteMap');
      siteMap.classList.add('show');
  }
  const siteMapHide = (event)=>{
    event.preventDefault();
    const siteMap = document.querySelector('.siteMap');
      siteMap.classList.remove('show');
  }



  
  return (
    <div className={scrollPosition > 44 ? 'Header on' : 'Header'}>
      <Link style={{color: headerColor}} className='logo' to={'/'} onClick={scrollTop}>ralph lauren</Link>
      <div className="gnb">
          <Link style={{color: headerColor}} to={'/ProductAll'} onClick={scrollTop}>남성</Link>
          <Link style={{color: headerColor}} to={'/ProductAll'} onClick={scrollTop}>여성</Link>
          <Link style={{color: headerColor}} to={'/ProductAll'} onClick={scrollTop}>키즈</Link>
          <Link style={{color: headerColor}} to={'/'} onClick={scrollTop}>홈</Link>
          <Link style={{color: headerColor}} to={'/ProductAll'} onClick={scrollTop}>기프트</Link>
          <Link style={{color: headerColor}} to={'/ProductAll'} onClick={scrollTop}>discover</Link>
      </div>
      <div className="HeaderIconWrap">
          <Link style={{color: headerColor}} to={'/'} onClick={scrollTop}><BsSearch /></Link>
          <Link style={{color: headerColor}} to={'/Login'} onClick={scrollTop}><BsPerson /></Link>
          <Link style={{color: headerColor}} to={'/'} onClick={scrollTop}><BsHeart /></Link>
          <Link style={{color: headerColor}} to={'/'} onClick={scrollTop}><BsCart4 /></Link>
      </div>
      <Link to={''} className='trigger' onClick={siteMapShow}>
        <span style={{backgroundColor: headerColor}}></span>
        <span style={{backgroundColor: headerColor}}></span>
        <span style={{backgroundColor: headerColor}}></span>
      </Link>
      <div className="siteMap">
        <Link to={''} className="closeBtn" onClick={siteMapHide}>
          <span></span>
          <span></span>
        </Link>
        <ul className='siteMapGnb'>
          <Link to={'/Login'}>로그인/회원가입
          <span></span>
          </Link>
          <li>
            <Link to={'/ProductAll'}>남성
            <span></span>
            </Link>
          </li>
          <li>
            <Link to={'/ProductAll'}>여성
            <span></span>
            </Link>
          </li>
          <li>
            <Link to={'/ProductAll'}>키즈
            <span></span>
            </Link>
          </li>
          <li>
            <Link to={'/'}>홈
            <span></span>
            </Link>
          </li>
          <li>
            <Link to={'/ProductAll'}>기프트
            <span></span>
            </Link>
          </li>
          <li>
            <Link to={'/ProductAll'}>discover
            <span></span></Link>
          </li>
        </ul>
        <Link className='siteMapBottom' to={''}>관심 아이템</Link>
        <Link className='siteMapBottom' to={''}>매장</Link>
      </div>
    </div>
  )
}

export default Header