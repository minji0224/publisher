import axios from "axios";
import useSWR, { mutate } from "swr";

const INIT_DATA: ProductData[] = [];
const PRODUCT_DATA_KEY = "/products";
// Axios인스턴스 생성(백엔드 API와 통신)
const productApi = axios.create({ baseURL: "http://localhost:9090" });

interface ProductData {
  id?: number;
  publisher: string;
  title: string;
  author: string;
  isbn: string;
  itemCount: string;
  price: string;
  // 출간일
  // categoryRef?: string;
  // img
}

// 백엔드 데이터 가져오는 함수
/*
  const fetcher = async (url) => {
    const res = awit axios.get(url);
    return res.data;
  }
    -> 여기 url매개변수는 useSWR의 첫번째 인자에서 받음
    -> awios는 .data에 get으로 가져온 데이터가 들어감.
*/
const productsFetcher = async ([key]) => {
  console.log("productFetcher함수");
  try {
    const response = await productApi.get<ProductData[]>(
      `${key}?_sort=id?_sort=id&_order=desc`
    );
    console.log(`패처함수내의 key값: ${key}`);
    console.log("--패처함수내의 겟 리스폰값--");
    console.log(response.data);
    return response.data;
  } catch (e: any) {
    console.log(`에러: ${INIT_DATA}.`);
    return INIT_DATA;
  }
};

export const useProductsData = () => {
  const { data, mutate, isValidating } = useSWR<ProductData[]>(
    [PRODUCT_DATA_KEY],
    productsFetcher,
    {
      fallbackData: INIT_DATA,
      revalidateOnFocus: false,
    }
  );

  console.log("---1");
  console.log(data);

  function createProductData(newBook: ProductData) {
    mutate(async (prevData: ProductData[] = [...INIT_DATA]) => {
      console.log("---mutate이전데이터");

      console.log(prevData);

      let nextData = [...prevData];

      try {
        const response = await productApi.post(PRODUCT_DATA_KEY, newBook);
        console.log(response.data);

        if (response.status === 201) {
          nextData.unshift({ ...response.data });
          console.log(201);
        }
      } catch (e: any) {
        console.log(`에러: ${e}`);
      }
      return nextData;
    }, false);
  }

  console.log("---2");
  console.log(data);

  return { data, createProductData, isValidating };
};
