import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "./styles";
import { Sidebar } from "../sidebar";

function Layout() {

  const handleLogout = () => {
    const ask = confirm("로그아웃 하시겠습니까?");

    if(ask) {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";        
      window.location.replace("/login");
    }
  };

  return (
    <StyledLayout>
    <div id="container">
      <header>
        <p>ㅇㅇㅇ출판사</p>
        <button onClick={handleLogout}>로그아웃</button>
        <a href="">도서몰바로가기</a>
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