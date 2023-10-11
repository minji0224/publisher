import {Suspense} from "react";
import { Outlet, Link } from "react-router-dom";
import { LayoutStyle } from "./LayoutStyle";

function Layout () {

  return (
    <LayoutStyle>
    <div>
      <header>헤더</header>
      <nav>
        <p>네비 : Link들이 들어가는 곳 - 페이지 경로 설정 및 이동</p>
        <li>
          <Link to="/">메인 / index</Link>
        </li>
        <li>
          <Link to="/Ex2">/Ex2 url경로</Link>
        </li>
        <li>
          <Link to="/testEx">/testEx url경로</Link>
        </li>
        
        </nav>
      <main>
        <p>설정한 메인 index페이지 먼저 나옴</p>
        <p>화면 나오는 곳 : 아래 Suspense로 감싸주어 컴포넌트들의 로딩위치</p>
        <p>렌더링하는 위치에 Route로 url경로 및 엘리먼트 설정</p>    
        <Suspense fallback={<div>...Suspense 로딩 중...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
    </LayoutStyle>
  )


}


export default Layout;