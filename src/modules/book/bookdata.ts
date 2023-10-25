import { getCookie } from "@/utils/cookie";
import axios from "axios";
import useSWR, { mutate } from "swr";

const INIT_DATA: BookData[] = [];
const BOOK_DATA_KEY = "/books";
// Axios인스턴스 생성(백엔드 API와 통신)
const bookApi = axios.create({ baseURL: "http://localhost:8080" });

export interface BookData {
  id?: number;
  publisher: string;
  categoryName: string;
  title: string;
  author: string;
  pubDate: string;
  priceStandard: string;
  quantity: string;
  isbn: string;
  file?: BookFile;
}

export interface BookFile {
  contentType: string;
  originalFileName: string;
  uuidFileName: string;
}

/*
  - 백엔드 데이터 가져오는 함수
  const fetcher = async (url) => {
    const res = awit axios.get(url);
    return res.data;
  }
    -> 여기 url매개변수는 useSWR의 첫번째 인자에서 받음
    -> awios는 .data에 get으로 가져온 데이터가 들어감.
*/
const booksFetcher = async ([key]) => {
  console.log("책조회(get)");
  try {
    const token = getCookie("token");
    const response = await bookApi.get<BookData[]>(
      `${key}?_sort=id?_sort=id&_order=desc`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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

  return { data, createBookData, isValidating };
};
