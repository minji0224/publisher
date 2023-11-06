import { Suspense, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "./styles";
import { Sidebar } from "../sidebar";
import { ProfileData, useProfileData } from "@/modules/book/profiledata";
import http from "@/utils/http";

function Layout() {

  const handleLogout = () => {
    const ask = confirm("로그아웃 하시겠습니까?");
    if(ask) {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";        
      window.location.replace("/login");
    }
  };

  const profileData = useProfileData();









  return (
    <StyledLayout>
    <div id="container">
      <header>
      {!profileData? (
          <p>로딩중</p>
        ) : (
          <p>{profileData.publisherName}님, 환영합니다!</p>
        )      
      }
      <div id="navi">
        <button onClick={handleLogout}>로그아웃</button>
        <a href="">도서몰바로가기</a>
      </div>
      </header>
      <div id="box">
        <Sidebar />
        <main>
          <Suspense fallback={<div>...Suspense 로딩 중...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
    </StyledLayout>
  )

}

export default Layout;