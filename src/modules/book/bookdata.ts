import axios from "axios";
import useSWR, { mutate } from "swr";

const INIT_DATA: BookData[] = [];
const BOOK_DATA_KEY = "/books";
// Axios인스턴스 생성(백엔드 API와 통신)
const bookApi = axios.create({ baseURL: "http://localhost:9090" });

interface BookData {
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
const booksFetcher = async ([key]) => {
  console.log("booksFetcher함수");
  try {
    const response = await bookApi.get<BookData[]>(
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

export const useBooksData = () => {
  const { data, mutate, isValidating } = useSWR<BookData[]>(
    [BOOK_DATA_KEY],
    booksFetcher,
    {
      fallbackData: INIT_DATA,
      revalidateOnFocus: false,
    }
  );

  console.log("---1");
  console.log(data);

  function createBookData(newBook: BookData) {
    mutate(async (prevData: BookData[] = [...INIT_DATA]) => {
      console.log("---mutate이전데이터");

      console.log(prevData);

      let nextData = [...prevData];

      try {
        const response = await bookApi.post(BOOK_DATA_KEY, newBook);
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

  return { data, createBookData, isValidating };
};
