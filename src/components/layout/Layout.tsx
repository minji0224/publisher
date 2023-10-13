import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { StyledLayout } from "./styles";
import { Sidebar } from "../sidebar";

function Layout() {

  return (
    <StyledLayout>
    <div id="container">
      <header>
        <p>ㅇㅇㅇ출판사</p>
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