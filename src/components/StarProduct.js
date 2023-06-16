import React from 'react'
import "../styles/StarProduct.css"


const StarProduct = ({ starProduct }) => {
  

  return (
    <div className="starProduct">
      <div>
        <a href={"https://store.mi.com/in/item/3224100072"}>
          <img src={"https://i01.appmifile.com/webfile/globalimg/xm_event/in/fd25ef5f915f5ed77441bb41fddad233.jpg"} alt="1st Product" style={{ width: '380px', height:"300px" }} />
        </a>
      </div>
      <div className='starProducts2'>
      <a href={"https://www.mi.com/in/product/xiaomi-pad-5/"}>
          <img src={"https://i02.appmifile.com/922_operator_sg/09/12/2022/51df22ad26e594226453682c90b1a3dd.png"} alt="1st Product" style={{ width: '300px', height:"100px" }} />
        </a>
        <a href={"https://store.mi.com/in/item/3224100072"}>
          <img src={"https://i01.appmifile.com/webfile/globalimg/xm_event/in/fd25ef5f915f5ed77441bb41fddad233.jpg"} alt="1st Product" style={{ width: '300px', height:"100px" }} />
        </a>
        <a href={"https://store.mi.com/in/item/3224100072"}>
          <img src={"https://i01.appmifile.com/webfile/globalimg/xm_event/in/fd25ef5f915f5ed77441bb41fddad233.jpg"} alt="1st Product" style={{ width: '300px', height:"100px" }} />
        </a>
      </div>
    </div>
  );
};

export default StarProduct;