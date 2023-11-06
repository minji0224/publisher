import { useState } from "react";
import { StyledSidebar } from "./styles copy";
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
        <li><Link to={"/"}>홈</Link></li>
        <li onClick={productMenu}><p>재고관리</p>{productListIcon}</li>
        {productList && (
          <ul>
            <li> <Link to="/bookForm">도서등록</Link></li>
            <li> <Link to="/bookList">도서재고</Link></li>
          </ul>
        )}
        <li onClick={toggleMenu}><p>통계관리</p>{statisticsListIcon}</li>
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