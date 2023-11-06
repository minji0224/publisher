import { useState } from "react";
import { StyledSidebar } from "./styles copy";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";



export function Sidebar() {


  return (
    <StyledSidebar>
    <div id="viewport">
      <div id="sidebar">
        <header>
          <Link to={"/"}>홈</Link>
        </header>
        <ul>
          <li>
            <Link to="/bookForm">도서등록</Link>
          </li>
          <li>
            <Link to="/bookList">도서재고</Link>
          </li>
        </ul>
      </div>
    </div>
    </StyledSidebar>

  )
};