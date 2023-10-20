import { getCookie } from "@/utils/cookie";
import axios from "axios";
import useSWR from "swr";

const INIT_DATA: ProfileData[] = [];
const PROFILE_DATA_KEY = "/profile";
const porfileApi = axios.create({ baseURL: "http://localhost:8080/" });

export interface ProfileData {
  id?: number;
  publisherName: string;
  email: string;
  businessRegistrationNumber: string;
}

// const profileFetcher = async ([key]) => {
//   console.log("프로필조회(get)");
//   try {
//     const token = getCookie("token");
//     const response = await porfileApi.get<ProfileData[]>(key, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (e: any) {
//     console.log("프로필패처에러");
//     return INIT_DATA;
//   }
// };

// export const useProfileData = () => {
//   const { data: profileData, isValidating: isProfileValidating } = useSWR<
//     ProfileData[]
//   >([PROFILE_DATA_KEY], profileFetcher, {
//     fallbackData: INIT_DATA,
//     revalidateOnFocus: false,
//   });

//   return { profileData, isProfileValidating };
// };
