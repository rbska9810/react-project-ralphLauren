import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item, name}) => {

  const navigate = useNavigate();
  const goToDetail = ()=>{
    navigate(`/Product/${name}/${item.id}`);
    window.scrollTo(0, 0);
  }
  


  return (
    <div className='ProductCard' onClick={goToDetail}>
      <img src={item.img} alt="img"/>
      <div className="cardTextBox">
        <h4 className='cardTitle'>{item?.title}</h4>
        <h6 className='cardSubTitle'>{item?.subTitle}</h6>
        <p className='cardPrice'>₩ {item?.price.toLocaleString('ko-KR')}</p>
        <span className='cardTag'>{item?.tag}</span>
        <span className='cardColor'>{item?.color}</span>
      </div>
    </div>
  )
}

export default ProductCard