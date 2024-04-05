import React, { useEffect, useState } from 'react'
import Header from './Header'
import db from '../db.json'
import { useParams } from 'react-router-dom';

const Detail = ({ scrollPosition }) => {
  let headerColor = '#041E3A';
  const [product, setProduct] = useState(null);
  let { name, id } = useParams();

  useEffect(() => {
    if (name === 'polo') {
      const poloProduct = db.polo.find((item) => item.id === parseInt(id));
      setProduct(poloProduct)
    } else if (name === 'rrl') {
      const rrlProduct = db.rrl.find((item) => item.id === parseInt(id));
      setProduct(rrlProduct)
    } else if (name === 'purple') {
      const purpleProduct = db.purple.find((item) => item.id === parseInt(id));
      setProduct(purpleProduct)
    } else {
      const bigTallProduct = db.bigTall.find((item) => item.id === parseInt(id));
      setProduct(bigTallProduct)
    }

  }, [name, id])



  return (
    <div className='Detail'>
      <Header headerColor={headerColor} scrollPosition={scrollPosition} />
      <div className="DetailLeft">
        <img src={product?.img} alt="img" />
      </div>
      <div className="DetailRight">
        <h4 className='DetailTitle'>{product?.title}</h4>
        <h6 className='DetailSubTitle'>{product?.subTitle}</h6>
        <p className='DetailPrice'>₩ {product?.price.toLocaleString('ko-KR')}</p>
        <div className="size">
          <p>사이즈 : </p>
          <div className="sizeBtn">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
        </div>
        <button className='cartPlus'>쇼핑백에 추가</button>
      </div>
    </div>
  )
}

export default Detail