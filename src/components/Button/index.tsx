import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";
import { StyledPagination } from "./styles";

const PaginationBtn = ({totalPage, setcurrentPage, currentPage, pageBtnLeft, pageBtnRight}) => {

 
  const pageButtons = [];

  for (let i = 1; i <= totalPage; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => { setcurrentPage(i-1) }}
        style={{
          backgroundColor: i-1 === currentPage ? "#1d1f20" : "white",
          color: i-1 === currentPage ? "white" : "black",
        }}>
        {i}
      </button>
    );
  }
 
  
  return (
    <StyledPagination>
    <div id="pageBtn">
      <button onClick={() => { setcurrentPage(currentPage - 1) }}disabled={!pageBtnLeft}>
        <AiOutlineLeft />
      </button>  
      {pageButtons}
      <button onClick={() => { setcurrentPage(currentPage + 1) }} disabled={!pageBtnRight}>
        <AiOutlineRight />
      </button>
    </div>
    </StyledPagination>
  )
  


};

export default PaginationBtn;