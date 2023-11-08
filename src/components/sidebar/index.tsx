import { useState } from "react";
import { StyledSidebar } from "./styles";
import { AiOutlineUser, AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useProfileData } from "@/modules/book/profiledata";



export function Sidebar() {
  const profileData = useProfileData();


  return (
    <StyledSidebar>

    <div id="sidebar">
      <header>
      {!profileData? (
            <p>로딩중</p>
          ) : (
            <p>{profileData.publisherName}</p>
          )      
        }
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