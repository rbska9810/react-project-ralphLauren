import React from 'react';
import Header from './Header';
import ProductCard from '../components/ProductCard';
import db from '../db.json'

const ProductAll = ({scrollPosition}) => {
  let headerColor = '#041E3A';



  return (
    <div className='ProductAll'>
      <Header headerColor={headerColor} scrollPosition={scrollPosition}/>
      <p className='subTitle'>남성 / 의류 /</p>
      <h2 className='title'>셔츠</h2>
      <div className="poloList">
        <h3 className='listTitle'>폴로 랄프 로렌</h3>
        <div className="productCardWrap">
          {db.polo.map((item) => (
            <ProductCard key={item.id} item={item} name='polo' />
          ))}
        </div>
      </div>
      <div className="rrlList">
        <h3 className='listTitle'>RRL</h3>
        <div className="productCardWrap">
          {db.rrl.map((item) => (
            <ProductCard key={item.id} item={item} name={'rrl'} />
          ))}
        </div>
      </div>
      <div className="purpleList">
        <h3 className='listTitle'>퍼플라벨</h3>
        <div className="productCardWrap">
          {db.purple.map((item) => (
            <ProductCard key={item.id} item={item} name={'purple'} />
          ))}
        </div>
      </div>
      <div className="bigTallList">
        <h3 className='listTitle'>Big & Tall</h3>
        <div className="productCardWrap">
          {db.bigTall.map((item) => (
            <ProductCard key={item.id} item={item} name={'bigTall'} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductAll