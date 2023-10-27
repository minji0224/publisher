import { useNavigate } from "react-router-dom";
import { BookData, SearchRequset, useBooksData, } from "../bookdata"
import { StyledBookList } from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import http from "@/utils/http";

const BookList = () => {

  const {data, isValidating} = useBooksData();
  console.log(`데이터 불러오고 있는지 ${isValidating}`);
  console.log(data);

  const size = 10;
  const [currentPage, setcurrentPage] = useState(0);
  const [pageBtnLeft, setPageBtnLeft] = useState(false);
  const [pageBtnRight, setPageBtnRight] = useState(true);
  const [totalPage, setTotalPage] = useState(0);


  // 페이징버튼 상태값
  useEffect(()=> {
    console.log(currentPage);
    
    if(currentPage > 0) {
      setPageBtnLeft(true);
    } else if (currentPage === 0 ) {
      setPageBtnLeft(false);
    }
    if ( currentPage >= totalPage -1) {
      setPageBtnRight(false);
    } else {
      setPageBtnRight(true);
    }
  }, [currentPage, totalPage]);


  const keywordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [option, setOption] = useState();
  const handleOptionValue = (e) => {
    setOption(e.target.value);
  }
  const [date, setDate] = useState();
  const handleDateValue = (e) => {
    setDate(e.target.value);
  }

  console.log(option);
  console.log(date);
  
  const handleSearch = ()=> {

    // const searchRequest: SearchRequset = {
    //   keyword: keywordRef.current.value,
    //   option: option,
    //   date: date,
    //   page: currentPage,
    //   size: size
    // };

    // (async()=> {

    //   const response = await http.post<BookData>("books/paging/search", searchRequest)
    //   console.log(response);

    //   if(response.status === 200) {
    //     const searchData =  response.data;
    //     setData[]
    //   }



    // })()

  };
  
  




 
  
  

  return (
    <StyledBookList>
    <div>
      <h3>도서재고조회</h3>
      <form action="">
        <div className="radiobox">
          <span>상품등록일</span>
          <input type="radio" name="radio" id="radio-today" value="today" onChange={handleDateValue}/>
          <label htmlFor="radio-today">오늘</label>
          <input type="radio" name="radio" id="radio-6month" value="sixMonth" onChange={handleDateValue}/>
          <label htmlFor="radio-6month">6개월</ label>
          <input type="radio" name="radio" id="radio-1year" value="oneYear" onChange={handleDateValue}/>
          <label htmlFor="radio-1year">1년</label>
          <input type="radio" name="radio" id="radio-all" value="all" onChange={handleDateValue}/>
          <label htmlFor="radio-all">전체</label>
        </div>

        <label className="querybox">
          <span>검색분류</span>
          <select value={option} onChange={handleOptionValue}>
            <option value="title" >도서명</option>
            <option value="author">저자</option>
            <option value="isbn" >isbn번호</option>
          </select>
          <input type="text" ref={keywordRef} />
          <button type="button" onClick={handleSearch}>검색</button>
          <button>초기화</button>
        </label>
      </form>
       {isValidating ? ( <div>로딩중</div>) : (
      <table>
      <thead>
        <tr>
          <th><p>번호</p></th>
          <th><p>도서명</p></th>
          <th><p>저자</p></th>
          <th><p>출간일</p></th>
          <th><p>재고</p></th>
          <th><p>isbn번호</p></th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((c, inx) => (
            <tr key={c.id}>
              <td><p>{inx + 1}</p></td>
              <td><p>{c.title}</p></td>
              <td><p>{c.author}</p></td>
              <td><p>출간일</p></td>
              <td><p>{c.quantity}</p></td>
              <td><p>{c.isbn}</p></td>
            </tr>
          ))
        ) : (
          <tr>
            <td>등록된 재고가 없습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
    )}
      <div id="pageBtn">
        <button onClick={()=>{setcurrentPage(currentPage -1 )}}>이전</button>
        <button onClick={()=>{setcurrentPage(currentPage +1 )}}>다음</button>
      </div>
    </div>
    </StyledBookList>
  )
}

export default BookList