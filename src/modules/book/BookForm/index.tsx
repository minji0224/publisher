import { MutableRefObject, Suspense, useRef } from "react";
import { StyledBookForm, } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import { useBooksData } from "../bookdata";

const BookForm = () => {

  const navigate = useNavigate();

  const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
  const publisherRef = useRef() as MutableRefObject<HTMLInputElement>;
  const authorRef = useRef() as MutableRefObject<HTMLInputElement>;
  const isbnRef = useRef() as MutableRefObject<HTMLInputElement>;
  const itemCountRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const imgRef = useRef() as MutableRefObject<HTMLInputElement>;
  const pubDateRef = useRef() as MutableRefObject<HTMLInputElement>;
  const categoryRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { data, createBookData, isValidating } = useBooksData();
  console.log("---- From페이지 데이터");
  console.log(data);
  
  

  const handleSave = () => {
    // 1.검증 2.서버연동 3.상태값변경해야함

    createBookData({
      publisher: pubDateRef.current.value,
      title: titleRef.current.value,
      author: authorRef.current.value,
      isbn: isbnRef.current.value,
      itemCount: itemCountRef.current.value,
      price: priceRef.current.value,
    });
    // navigate("/");
  }

  return (
    <StyledBookForm>
    <div>
      <h3>신간도서등록</h3>
      <form action="">
      <label><span>출판사</span><input type="text" disabled/></label>
      <label>
        <span>카테고리</span>
        <select>
          <option value="사전">사전</option>
          <option value="문학">문학</option>
          <option value="학습">학습</option>
          <option value="아동">아동</option>
          <option value="취미/실용">취미/실용</option>
          <option value="예체능">예체능</option>
          <option value="종교">종교</option>
          <option value="잡지">잡지</option>
          <option value="정치.법률">정치.법률</option>
          <option value="경제.경영">경제.경영</option>
          <option value="인문">인문</option>
          <option value="외국어">외국어</option>
          <option value="정부간행물">정부간행물</option>
          <option value="컴퓨터">컴퓨터</option>
          <option value="공학">공학</option>
          <option value="자연">자연</option>
          <option value="의학">의학</option>
          <option value="수험서">수험서</option>
        </select>
      </label>
      <label><span>도서명</span><input type="text" ref={titleRef}/></label>
      <label><span>저자</span><input type="text" ref={authorRef}/></label>
      <label><span>출간일달력?</span><input type="text" ref={pubDateRef}/></label>
      <label><span>정가</span><input type="text" ref={priceRef}/></label>
      <label><span>수량</span><input type="text" ref={itemCountRef}/></label>   
      <label><span>isbn번호</span><input type="text" ref={isbnRef}/></label>
      <label><span>이미지</span><input type="file" /></label>
      </form>
      <button onClick={handleSave}>등록</button>
    </div>
    </StyledBookForm>
  )
};

export default BookForm;