import LineChart from "@/components/Chart/LineChart";
import PieChart from "@/components/Chart/PieChart";
import { LineChartData, PieChartData } from "@/components/Chart/data";
import { StyledChart } from "@/components/Chart/styles";
import { ProfileData, useProfileData } from "@/modules/book/profiledata";
import { getCookie } from "@/utils/cookie";
import http from "@/utils/http";
import { useEffect, useState } from "react";

const Home = () => {

  // 로그인 안되어있을 때
  const token = getCookie("token");
  if (!token) {
    window.location.href = "http://localhost:5000/login";
  } 

  // 프로필 정보 불러오기
  const profileData = useProfileData();

  // 파이차트 불러오기
  const[pieData, setPieData] = useState([]);
  const[BookImg, setBookImg] = useState("");
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
        const response = await http.get<PieChartData[]>("http://localhost:8080/test/pieChart")
        console.log(response.data);

        const result = response.data.map((item, inx) =>({
          id: item.title,
          label: item.title,
          value: item.totalCount,
          color: pieChartColers[inx],
        }));     
        console.log(result);

        // 제일 많이 판매된 책의 uuid만 뽑기
        const uuid = response.data.reduce((a,b) =>(a.totalCount > b.totalCount? a: b)).uuidFilename
        
        setPieData([...result]);
        setBookImg(uuid);
        console.log(uuid);
        

        
      } catch (e: any) {
        console.log("파이차트에러");
      }

    })();
  }, []);

  // 라인차트 불러오기
  const [lineData, setLineData] = useState([]);
  useEffect(()=> {
    (async()=> {
      try{

        const response = await http.get<LineChartData[]>("http://localhost:8080/test/lineChart")
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
          
        console.log(result);
        setLineData([...result])
        
      }catch(e:any) {
        console.log("라인차트에러");        
      }
    })();
  }, []);



  return (
  <StyledChart>
  <div id="container">   
    <div id="box">
      {!profileData? (
          <p>로딩중</p>
        ) : (
          <div id="div">
            <div>
              <p>{profileData.publisherName}</p>
              <p>이미지넣기</p>
            </div>
            <p>통계넣기</p>         
          </div>
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
  </StyledChart>
  )
};

export default Home;