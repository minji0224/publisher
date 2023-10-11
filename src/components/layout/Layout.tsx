import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutStyle } from "./LayoutStyle";

function Layout() {

  return (
    <LayoutStyle>
    <div>
      <header>
        <p>ㅇㅇㅇ출판사</p>
        <a href="">도서몰바로가기</a>
      </header>
      <div id="box">
        <nav>
          <div>사이드바</div>
          <div>재고관리</div>
          <div>통계</div>
        </nav>
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