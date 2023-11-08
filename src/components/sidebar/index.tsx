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
            <div id="profile">
              <img width="96" height="96" 
                src="https://img.icons8.com/external-zen-filled-royyan-wijaya/96/external-atom-astronomy-zen-filled-royyan-wijaya.png" 
                alt="external-atom-astronomy-zen-filled-royyan-wijaya"/>
                <span>{profileData.publisherName}님</span>
                <span>환영합니다.</span>
            </div>
            
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