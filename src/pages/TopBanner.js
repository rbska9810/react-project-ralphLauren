import React from 'react'
import { PiMapPin } from "react-icons/pi";
import { Link } from 'react-router-dom';

const TopBanner = () => {
  return (
    <div className='TopBanner'>
      <p>
        Polo Members Party에 초대합니다.
        <Link to='#none'>더 알아보기</Link>
      </p>
      <Link to='#none'>
        <PiMapPin className='TopBannerIcon' />
        매장 찾기
      </Link>
    </div>
  )
}

export default TopBanner