import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Parents = () => {
  return (
    <div>
      <p>부모 Route</p>
      <section>
        <p>하위 라우트 렌더링하는 곳</p>
        <Suspense fallback={<div>...하위 라우트 로딩중...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  )
}

export default Parents;