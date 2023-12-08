import { MutableRefObject, useEffect, useRef, useState } from "react";
import { StyledLogin } from "./styles";
import { AiOutlineLock,AiOutlineUser } from "react-icons/ai";
import { getDomain } from "@/utils/http";

const Login = () => {
  const [loginAddress, setLoginAddress] = useState("");

  useEffect(()=> {
    setLoginAddress(`${getDomain()}/api/auth/signin`);
  }, [getDomain()]);
  console.log(`로그인페이지-현재도메인:${loginAddress}`);
  

  return (
    <StyledLogin>
    <div id="body">
      <div id="box">
      <form action={loginAddress} method="post">
        <label><AiOutlineLock /><input type="text" name="publisherName" placeholder="출판사명"  /></label>
        <label><AiOutlineUser /><input type="password" name="password" placeholder="패스워드" /></label>
        <button>로그인</button>
      </form>
      </div>
    </div>
    </StyledLogin>
  )
}

export default Login;