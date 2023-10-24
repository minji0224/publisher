import LineChart from "@/components/Chart/LineChart";
import PieChart from "@/components/Chart/PieChart";
import { StyledChart } from "@/components/Chart/styles";
import { ProfileData } from "@/modules/book/profiledata";
import { getCookie } from "@/utils/cookie";
import http from "@/utils/http";
import { useEffect, useState } from "react";

const Home = () => {

  const token = getCookie("token");
  if (!token) {
    window.location.href = "http://localhost:5000/login";
  } 

  const[ profiledata, setProfileData] = useState<ProfileData>();
  useEffect(() => {
    (async () => {
      try {
        const response = await http.get<ProfileData>("http://localhost:8080/profile")
        console.log(response.data);
        setProfileData(response.data);
      } catch (e: any) {
        console.log("에러");
        console.log(e);       
      }
    })();
  }, [])

  
  const pieData = 
  [
    {
      "id": "자바스크립트",
      "label": "자바스크립트",
      "value": 209,
      "color": "hsl(13, 70%, 50%)"
    },
    {
      "id": "sass",
      "label": "sass",
      "value": 553,
      "color": "hsl(260, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 479,
      "color": "hsl(128, 70%, 50%)"
    },
    {
      "id": "c",
      "label": "c",
      "value": 534,
      "color": "hsl(172, 70%, 50%)"
    },
    {
      "id": "make",
      "label": "make",
      "value": 43,
      "color": "hsl(138, 70%, 50%)"
    }
  ]

  const barData =
  [
    {
      "country": "AD",
      "hot dog": 191,
      "hot dogColor": "hsl(43, 70%, 50%)",
      "burger": 39,
      "burgerColor": "hsl(146, 70%, 50%)",
      "sandwich": 136,
      "sandwichColor": "hsl(264, 70%, 50%)",
      "kebab": 66,
      "kebabColor": "hsl(20, 70%, 50%)",
      "fries": 108,
      "friesColor": "hsl(266, 70%, 50%)",
      "donut": 118,
      "donutColor": "hsl(316, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 104,
      "hot dogColor": "hsl(331, 70%, 50%)",
      "burger": 72,
      "burgerColor": "hsl(54, 70%, 50%)",
      "sandwich": 74,
      "sandwichColor": "hsl(204, 70%, 50%)",
      "kebab": 171,
      "kebabColor": "hsl(258, 70%, 50%)",
      "fries": 141,
      "friesColor": "hsl(144, 70%, 50%)",
      "donut": 117,
      "donutColor": "hsl(306, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 93,
      "hot dogColor": "hsl(7, 70%, 50%)",
      "burger": 95,
      "burgerColor": "hsl(12, 70%, 50%)",
      "sandwich": 148,
      "sandwichColor": "hsl(211, 70%, 50%)",
      "kebab": 99,
      "kebabColor": "hsl(7, 70%, 50%)",
      "fries": 8,
      "friesColor": "hsl(43, 70%, 50%)",
      "donut": 170,
      "donutColor": "hsl(141, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 169,
      "hot dogColor": "hsl(268, 70%, 50%)",
      "burger": 17,
      "burgerColor": "hsl(244, 70%, 50%)",
      "sandwich": 27,
      "sandwichColor": "hsl(167, 70%, 50%)",
      "kebab": 21,
      "kebabColor": "hsl(314, 70%, 50%)",
      "fries": 30,
      "friesColor": "hsl(6, 70%, 50%)",
      "donut": 167,
      "donutColor": "hsl(182, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 193,
      "hot dogColor": "hsl(84, 70%, 50%)",
      "burger": 162,
      "burgerColor": "hsl(294, 70%, 50%)",
      "sandwich": 12,
      "sandwichColor": "hsl(308, 70%, 50%)",
      "kebab": 99,
      "kebabColor": "hsl(88, 70%, 50%)",
      "fries": 83,
      "friesColor": "hsl(344, 70%, 50%)",
      "donut": 91,
      "donutColor": "hsl(215, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 47,
      "hot dogColor": "hsl(287, 70%, 50%)",
      "burger": 74,
      "burgerColor": "hsl(263, 70%, 50%)",
      "sandwich": 57,
      "sandwichColor": "hsl(184, 70%, 50%)",
      "kebab": 7,
      "kebabColor": "hsl(256, 70%, 50%)",
      "fries": 72,
      "friesColor": "hsl(37, 70%, 50%)",
      "donut": 143,
      "donutColor": "hsl(21, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 74,
      "hot dogColor": "hsl(223, 70%, 50%)",
      "burger": 49,
      "burgerColor": "hsl(160, 70%, 50%)",
      "sandwich": 46,
      "sandwichColor": "hsl(183, 70%, 50%)",
      "kebab": 27,
      "kebabColor": "hsl(63, 70%, 50%)",
      "fries": 94,
      "friesColor": "hsl(254, 70%, 50%)",
      "donut": 79,
      "donutColor": "hsl(299, 70%, 50%)"
    }
  ]

  const lineData = 
  [
    {
      "id": "일별 판매 금액",
      "color": "hsl(18, 70%, 50%)",
      "data": [
        {
          "x": "일별",
          "y": 100
        },
        {
          "x": "helicopter",
          "y": 151
        },
        {
          "x": "boat",
          "y": 250
        },
        {
          "x": "train",
          "y": 268
        },
        {
          "x": "subway",
          "y": 274
        },
        {
          "x": "bus",
          "y": 259
        },
        {
          "x": "car",
          "y": 50
        },
       
      ]
    },
  ]


  return (
  <StyledChart>
  <div id="container">   
    <div id="box">
      {!profiledata? (
          <p>로딩중</p>
        ) : (
          <div id="div">
            <div>
              <p>{profiledata.publisherName}</p>
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