import { useState } from "react";
import { StyledSidebar } from "./styles copy";
import { AiOutlineUser, AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";



export function Sidebar() {


  return (
    <StyledSidebar>

    <div id="sidebar">
      <header>
        <h3>출판사이름</h3>
      </header>
      <ul>
        <li>
        <Link to={"/"}><AiOutlineHome/>HOME</Link>
        </li>
        <li>
          <Link to="/bookForm"><AiOutlinePlus/>Registration</Link>
        </li>
        <li>
          <Link to="/bookList"><AiOutlineSearch/>Search</Link>
        </li>
      </ul>
    </div>

    </StyledSidebar>

  )
};