import { useNavigate } from "react-router-dom";
import { useBooksData, } from "../bookdata"
import { StyledBookList } from "./styles";

const BookList = () => {

  const {data, isValidating} = useBooksData();
  console.log(`데이터 불러오고 있는지 ${isValidating}`);
  console.log(data);
  // console.log(data.length);
 
  
  

  return (
    <StyledBookList>
    <div>
      <h3>도서재고조회</h3>
      <form action="">
        <div className="radiobox">
          <span>상품등록일</span>
          <input type="radio" name="radio" id="radio-today" />
          <label htmlFor="radio-today">오늘</label>
          <input type="radio" name="radio" id="radio-1month" />
          <label htmlFor="radio-1month">1개월</label>
          <input type="radio" name="radio" id="radio-6month" />
          <label htmlFor="radio-6month">6개월</label>
          <input type="radio" name="radio" id="radio-all" />
          <label htmlFor="radio-all">전체</label>
        </div>

        <label className="querybox">
          <span>검색분류</span>
          <select name="" id="">
            <option value="">도서명</option>
            <option value="">저자</option>
            <option value="">isbn번호</option>
          </select>
          <input type="text" />
          <button>검색</button>
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
        <button>이전</button>
        <button>다음</button>
      </div>
    </div>
    </StyledBookList>
  )
}

export default BookList