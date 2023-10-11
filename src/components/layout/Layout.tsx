import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutStyle } from "./LayoutStyle";
import { Sidebar } from "../sidebar";

function Layout() {

  return (
    <LayoutStyle>
    <div id="container">
      <header>
        <p>ㅇㅇㅇ출판사</p>
        <a href="">도서몰바로가기</a>
      </header>
      <div id="box">
        <Sidebar />
        <main>
          <p>렌더링할곳</p>
          <Suspense fallback={<div>...Suspense 로딩 중...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
    </LayoutStyle>
  )

}

export default Layout;