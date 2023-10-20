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
      <div>재고 날짜/이름별 조회 넣기</div>   
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
    <div>
      <button>이전</button>
      <button>다음</button>
    </div>
    </div>
    </StyledBookList>
  )
}

export default BookList