import { MutableRefObject, useRef } from "react";
import { StyledLogin } from "./styles";
import { AiOutlineLock,AiOutlineUser } from "react-icons/ai";

const Login = () => {

  return (
    <StyledLogin>
    <div id="body">
      <div id="box">
      <form action="http://localhost:8080/auth/signin" method="post">
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