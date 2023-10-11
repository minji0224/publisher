import { useState } from "react";
import { StyledSidebar } from "./styled";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";



export function Sidebar() {
  const [statisticsList, setStatisticsList] = useState(false);
  const [productList, setProductList] = useState(false);

  const [productListIcon, setProductListIcon] = useState(<AiOutlineDown />); 
  const [statisticsListIcon, setStatisticsListIcon] = useState(<AiOutlineDown />); 

  const productMenu = () => {
    setProductList(!productList);
    setProductListIcon(productList ? <AiOutlineDown /> : <AiOutlineUp />)
  };

  const toggleMenu = () => {
    setStatisticsList(!statisticsList);
    setStatisticsListIcon(statisticsList ? <AiOutlineDown /> : <AiOutlineUp />)
  };

  return (
    <StyledSidebar>
    <div>
      <ul>
        <li onClick={productMenu}>재고관리{productListIcon}</li>
        {productList && (
          <ul>
            <li> <Link to="/product">도서등록</Link></li>
            <li>도서재고</li>
          </ul>
        )}
      </ul>
      <ul>
        <li onClick={toggleMenu}>통계관리{statisticsListIcon}</li>
        {statisticsList && (
          <ul>
            <li>어쩌구</li>
            <li>저쩌구</li>
          </ul>
        )}
      </ul>
    </div>
    </StyledSidebar>

  )
};