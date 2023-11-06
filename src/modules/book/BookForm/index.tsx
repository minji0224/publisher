import { MutableRefObject, Suspense, useRef, useState, useEffect } from "react";
import { StyledBookForm, } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import { BookData, useBooksData } from "../bookdata";
import axios from "axios";
import{ProfileData, useProfileData} from "../profiledata"
import { getCookie } from "@/utils/cookie";
import http from "@/utils/http";

const BookForm = () => {

  const navigate = useNavigate();

  const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
  const authorRef = useRef() as MutableRefObject<HTMLInputElement>;
  const isbnRef = useRef() as MutableRefObject<HTMLInputElement>;
  const quantityRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceStandardRef = useRef() as MutableRefObject<HTMLInputElement>;
  const fileRef = useRef() as MutableRefObject<HTMLInputElement>;
  const pubDateRef = useRef() as MutableRefObject<HTMLInputElement>;
  const formRef = useRef<HTMLFormElement>();
  const [categoryName, setCategoryName] = useState("사전");
  const handleCategoryNameValue = (e) => {
    setCategoryName(e.target.value);   
  };
  
  const [books, setBooks] = useState<BookData[]>([]);

  const profileData = useProfileData();





  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", fileRef.current.files[0]);

    const createRequest = {
      publisher: profileData.publisherName,
      categoryName: categoryName,
      title: titleRef.current.value,
      author: authorRef.current.value,
      pubDate: pubDateRef.current.value,      
      priceStandard: priceStandardRef.current.value,
      quantity: quantityRef.current.value,
      isbn: isbnRef.current.value,
    }
    formData.append("createRequest", new Blob([JSON.stringify(createRequest)],{ type: "application/json" } ));

    (async()=> {
      const response = await http.post<BookData>("books/with-file", formData);
      console.log(response);


      if(response.status === 201) {
        console.log("201");
        formRef.current.reset();
        // setBooks이 필요한지
        setBooks([{...response.data}, ...books]);
        console.log(books);
        
        navigate("/")        
      }
    })();
  }


  return (
    <StyledBookForm>
    <div>
      <h3>신간도서등록</h3>
      <form onSubmit={handleBook} ref={formRef}>
      <label>
        <span>출판사</span>
        {!profileData? (
          <p>로딩중</p>
        ) : (
          <input type="text" value={profileData.publisherName} readOnly />
        )      
      }
      </label>
      <label>
        <span>카테고리</span>
        <select value={categoryName} onChange={handleCategoryNameValue}>
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
      <label><span>정가</span><input type="text" ref={priceStandardRef}/></label>
      <label><span>수량</span><input type="text" ref={quantityRef}/></label>   
      <label><span>isbn번호</span><input type="text" ref={isbnRef}/></label>
      <label><span>이미지</span><input type="file" multiple accept="image/*, video/*" ref={fileRef} /></label>
      <button type="submit">등록</button>
      </form>
      
    </div>
    </StyledBookForm>
  )
};

export default BookForm;