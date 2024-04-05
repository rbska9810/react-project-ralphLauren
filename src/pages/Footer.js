import React, { useState } from 'react'
import { Link } from 'react-router-dom';

/* react-icon */
import { FiInstagram, FiFacebook, FiYoutube, FiTwitter   } from "react-icons/fi";
import { RiKakaoTalkFill } from "react-icons/ri";

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null); // state 변경
  const toggleMenu = (menuName) => { // 메뉴를 토글하는 함수
    setOpenMenu(prevMenu => (prevMenu === menuName ? null : menuName));
  };
  return (
    <footer className='Footer'>
      <div className="footerTop">
        <ul className={openMenu === "about" ? "about show" : "about"} onClick={() => toggleMenu("about")}>
          <li>ABOUT</li>
          <li>
            <Link to={'/'}>랄프 로렌 소개</Link>
          </li>
          <li>
            <Link to={'/'}>World of RL</Link>
          </li>
          <li>
            <Link to={'/'}>브랜드 보호</Link>
          </li>
          <li>
            <Link to={'/'}>반품</Link>
          </li>
          <li>
            <Link to={'/'}>개인정보 처리방침</Link>
          </li>
          <li>
            <Link to={'/'}>이용약관</Link>
          </li>
          <li>
            <Link to={'/'}>판매약관</Link>
          </li>
          <li>
            <Link to={'/'}>사업자 정보</Link>
          </li>
          <li>
            <Link to={'/'}>쿠키 공지</Link>
          </li>
          <li>
            <Link to={'/'}>채용 정보</Link>
          </li>
        </ul>
        <ul className={openMenu === "mypage" ? "mypage show" : "mypage"} onClick={()=>{toggleMenu("mypage")}}>
          <li>계정</li>
          <li>
            <Link to={'/'}>내 계정</Link>
          </li>
          <li>
            <Link to={'/'}>주문 확인</Link>
          </li>
        </ul>
        <ul className={openMenu === "faq" ? "faq show" : "faq"} onClick={()=>{toggleMenu("faq")}}>
          <li>고객센터</li>
          <li>
            <Link to={'/'}>도움말</Link>
          </li>
          <li>
            <Link to={'/'}>배송</Link>
          </li>
          <li>
            <Link to={'/'}>반품</Link>
          </li>
          <li>
            <Link to={'/'}>기프트카드</Link>
          </li>
          <li>
            <Link to={'/'}>나만의 핏 찾기</Link>
          </li>
          <li>
            <Link to={'/'}>매장 서비스</Link>
          </li>
          <li>
            <Link to={'/'}>사이트 맵</Link>
          </li>
        </ul>
        <form className="event">
          <h4>
            이메일 수신 신청을 통해 랄프 로렌의 최신 컬렉션과 신상품, 서비스 및 이벤트에 대한 다양한 브랜드 소식을 제일 먼저 받아 보세요.
          </h4>
          <div className="emailSend">
            <input type="email" placeholder='이메일 주소 입력' />
            <button>등록</button>
          </div>
          <p>
            각 이메일에는 언제든지 구독을 취소할 수 있는 구독 취소 링크가 삽입되어 있습니다.
          </p>
          <p>
            더 자세한 정보는 개인정보 처리방침을 확인해주세요.
          </p>
        </form>
      </div>
      <div className="footerMiddle">
        <span><FiInstagram /></span>
        <span><FiFacebook /></span>
        <span><FiYoutube  /></span>
        <span><FiTwitter  /></span>
        <span><RiKakaoTalkFill /></span>

      </div>
      <div className="footerBottom">
        <p>
          © COPYRIGHT 2024 RALPH LAUREN. ALL RIGHTS RESERVED.
        </p>
        <p>
          상호명: 랄프로렌 코리아 유한회사 | 사업자 등록번호: 120-87-00270 | 통신판매업신고번호: 제2020-서울강남-01539호 [사업자정보확인] | 대표자: JAY BARRY KIMPTON(제이배리킴튼)<br/>
          주소: 서울시 강남구 학동로 343 19층 | 호스팅 서비스 사업자: 클레우드 플레어 | 고객센터: 080-566-1199| 메일문의: CUSTOMERASSISTANCE@RALPHLAUREN.CO.KR
        </p>
        <p>
          KCP 구매안전 서비스(채무지급보증)<br/>
          고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 KCP 구매안전서비스(지급보증서)를 이용하실 수 있습니다.
        </p>
      </div>
    </footer>
  )
}

export default Footer