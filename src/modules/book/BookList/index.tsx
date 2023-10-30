import { useNavigate, useRevalidator } from "react-router-dom";
import { BookData, SearchRequset, useBooksData, } from "../bookdata"
import { StyledBookList } from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import http from "@/utils/http";

const BookList = () => {

  const PAGE_SIZE = 10;
  const [currentPage, setcurrentPage] = useState(0);
  const [pageBtnLeft, setPageBtnLeft] = useState(false);
  const [pageBtnRight, setPageBtnRight] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  console.log(`현재페이지: ${currentPage}`);
  console.log(`왼쪽페이지버튼: ${pageBtnLeft}`);
  console.log(`오른쪽페이지버튼: ${pageBtnRight}`);
  console.log(`받아온데이터의토탈페이지: ${totalPage}`);
  
  const {data, isValidating} = useBooksData(currentPage, PAGE_SIZE);
  const [searchBooks, setSearchBooks] = useState<BookData[]>([]);
  console.log(`기존데이터 불러오고 있는지 ${isValidating}`);
  console.log("---기존데이터");
  console.log(data);
  console.log(data.content);
  console.log("---검색데이터"); 
  console.log(searchBooks);

  // 패처로 받아온 데이터로 토탈페이지 상태값 넣기.
  useEffect(()=> {
    if(data) {
      setTotalPage(data.totalPages)
    }
  }, [data])




  // 페이징버튼 상태값
  useEffect(()=> {
    
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


  // 검색창 내부 상태관리
  const keywordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [option, setOption] = useState("title");
  const handleOptionValue = (e) => {
    setOption(e.target.value);
  }
  const [date, setDate] = useState();
  const handleDateValue = (e) => {
    setDate(e.target.value);
  }

  console.log(`검색옵션값: ${option}`);
  console.log(`검색날짜값: ${date}`);
  
  // 검색하는 함수
  const handleSearch = ()=> {

    const searchRequest: SearchRequset = {
      keyword: keywordRef.current.value,
      option: option,
      date: date,
      page: currentPage,
      size: PAGE_SIZE
    };

    (async()=> {

      try{
        const response = await http.post("books/paging/search", searchRequest)
        console.log(response.data);
        if(response.data.content.length === 0){
          alert("검색결과가 없습니다.")
        }

        // 서버에서 페이지객체로 리스폰 받았기때문에 필요한 북데이터를 형식에 맞게 넣어주기
        const searchBookDataResponse  = response.data.content.map( i => ({
          id: i.id,
          publisher: i.publisher,
          categoryName: i.categoryName,
          title: i.title,
          author: i.author,
          pubDate: i.pubDate,
          priceStandard: i.priceStandard,
          quantity: i.quantity,
          isbn: i.isbn,
        }));

        setSearchBooks([...searchBookDataResponse]);
        setTotalPage(response.data.totalPages);     
        
      } catch(e:any) {
        console.log("검색에러");       
      }
    })()
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
      {searchBooks.length > 0 ? (
                searchBooks.map((book, index) => (
                  <tr key={book.id}>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.pubDate}</td>
                    <td>{book.quantity}</td>
                    <td>{book.isbn}</td>
                  </tr>
                ))
              ) : (
                data.content.length > 0 ? (
                  data.content.map((book, index) => (
                    <tr key={book.id}>
                      <td>{index + 1}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.pubDate}</td>
                      <td>{book.quantity}</td>
                      <td>{book.isbn}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>등록된 재고가 없습니다.</td>
                  </tr>
                )
              )}
      </tbody>
    </table>
    )}
      <div id="pageBtn">
        <button onClick={()=>{setcurrentPage(currentPage -1 )}} disabled={!pageBtnLeft}>이전</button>
        <button onClick={()=>{setcurrentPage(currentPage +1 )}} disabled={!pageBtnRight}>다음</button>
      </div>
    </div>
    </StyledBookList>
  )
}

export default BookList