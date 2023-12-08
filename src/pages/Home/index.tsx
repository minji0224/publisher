import LineChart from "@/components/Chart/LineChart";
import PieChart from "@/components/Chart/PieChart";
import { LineChartData, PieChartData} from "@/components/Chart/data";
import { StyledChart } from "@/components/Chart/styles";
import { ProfileData, useProfileData } from "@/modules/book/profiledata";
import { getCookie } from "@/utils/cookie";
import http from "@/utils/http";
import { useEffect, useState } from "react";
import { StyledTitle } from "./styles";
import { useBooksData } from "@/modules/book/bookdata";
import { getDomain } from "@/utils/http";



const Home = () => {
  console.log(`메인페이지-현재도메인:${getDomain()}`);
  

  // 로그인 안되어있을 때
  const token = getCookie("token");
  if (!token) {
    window.location.href = `http://localhost:5000/login`;
  } 

  // 프로필 정보 불러오기
  const profileData = useProfileData();
  console.log(profileData);
  

  // 파이차트 불러오기
  const[pieData, setPieData] = useState([]);
  const[bestBook, setBestBook] = useState({title: "", author: "", uuid: "", totalCount: 0});
  const[totalData, setTotalData] = useState({totalCount: 0, totalPrice: 0}); 
  const pieChartColers = [
    "hsl(13, 70%, 50%)",
    "hsl(260, 70%, 50%)",
    "hsl(128, 70%, 50%)",
    "hsl(172, 70%, 50%)",
    "hsl(138, 70%, 50%)"
  ];

  useEffect(()=> {

    (async()=> {
      try {
        const response = await http.get<PieChartData[]>(`${getDomain()}/api/chart/pieChart`)
        console.log("파이차트");
        
        console.log(response.data);

        const result = response.data.map((item, inx) =>({
          id: item.title,
          label: item.title,
          value: item.totalCount,
          color: pieChartColers[inx],
        }));     
   
        setPieData([...result]);

        // 제일 많이 판매된 책
        const bestBook = response.data.reduce((a,b) =>(a.totalCount > b.totalCount? a: b))
        setBestBook({
          title: bestBook.title,
          author: bestBook.author,
          uuid: bestBook.uuidFilename,
          totalCount: bestBook.totalCount
        })

        // 이번달 총 판매 데이터 (이름 다시 짓긴 해야 됨)
        const totalCountSum = response.data.reduce((a,b) => a + b.totalCount, 0)
        const totalPriceSum = response.data.reduce((a,b)=> a + (b.priceSales * b.totalCount), 0)
        setTotalData({
          totalCount: totalCountSum,
          totalPrice: totalPriceSum
        });
        
      } catch (e: any) {
        console.log("파이차트에러");
      }

    })();
  }, []);

  // 라인차트 불러오기
  const [lineData, setLineData] = useState([]);
  const [TopWeekData, setTopWeekData] = useState({totalCount: 0, totalPrice: 0});
  console.log(TopWeekData);
  
  useEffect(()=> {
    (async()=> {
      try{

        const response = await http.get<LineChartData[]>(`${getDomain()}/api/chart/lineChart`)
        console.log(response.data);

        const result = [
          {
            id: "일간통계",
            color: "hsl(18, 70%, 50%)",
            data: response.data.map((i)=> ({
              x: i.saleDate,
              y: i.totalPrice
            }))
          }
        ];
          
        setLineData([...result]);


        // 라인차트에서 가져온 데이터에서 이번주 날짜만 뽑아서 금주 데이터 만들기
        const currentWeekStartDate = new Date();
        const currentWeekEndDate = new Date();
        
        currentWeekStartDate.setDate(new Date().getDate() - new Date().getDay() + 1); // 월요일
        currentWeekEndDate.setDate(new Date().getDate() - new Date().getDay() + 7); // 일요일

        currentWeekStartDate.setHours(0, 0, 0, 0); // 시간 빼고 날짜만
        currentWeekEndDate.setHours(0, 0, 0, 0); // 시간 빼고 날짜만
     
        const currentWeekData = response.data.filter(i => {
          const saleDate = new Date(i.saleDate);
          console.log(saleDate);          
        
          return saleDate >= currentWeekStartDate && saleDate <= currentWeekEndDate;
        });

        const totalCountSum = currentWeekData.reduce((a,b) => a + b.totalCount, 0);
        const totalPriceSum  = currentWeekData.reduce((a,b) => a + b.totalPrice, 0);
       
        setTopWeekData({totalCount: totalCountSum, totalPrice:totalPriceSum});
        
      }catch(e:any) {
        console.log("라인차트에러");        
      }
    })();
  }, []);

  // 판매금액에 , 붙이기
  function commas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  





  return (
  <StyledChart>

  <div id="container">   
    <h3>Best Seller</h3>
    <div id="box">
      <div id="box-2">
        {!bestBook? (
            <p>로딩중</p>
          ) : (
            <StyledTitle>             
            <div id="title">
              <div className="total imgDiv">
                  <img 
                    src={`${getDomain()}/api/books/file/b9d8c5e1-f198-412d-b299-a857d2f2c571.jpg`} /> 
              </div>
              <div className="total total-info">
                <span>이달의 도서</span>
                <p>
                  {bestBook.author}작가님의<br />
                  {bestBook.title}(이)가<br />
                  이 달 {commas(bestBook.totalCount)}권<br />
                  판매되었습니다.
                </p>

              </div> 
              <div className="total-box">
                <div className="total">
                 <span>{commas(totalData.totalPrice)}원</span>
                  <span>이번 달 판매금액</span>            
                </div>
                <div className="total">
                  <span>{commas(totalData.totalCount)}건</span>
                  <span>이번 달 판매수</span>
                </div> 
              </div>
              <div className="total-box">
                <div className="total">
                  <span>{commas(TopWeekData.totalPrice)}원</span>
                  <span>이번 주 판매금액</span>
                </div>  
                <div className="total">
                  <span>{commas(TopWeekData.totalCount)}건</span>
                  <span>이번 주 판매수</span>
                </div> 
              </div>      
            </div>
            </StyledTitle>
          )      
        }
        <div id="lineChart">
          <LineChart data={lineData} />
        </div>
      </div>   
      <div id="pieChart">
        <PieChart data={pieData} />
      </div>
    </div>
  </div>
  </StyledChart>
  )
};

export default Home;