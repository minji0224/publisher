import http from "@/utils/http";
import { useEffect, useState } from "react";

export interface ProfileData {
  id?: number;
  publisherName: string;
  email: string;
  businessRegistrationNumber: string;
}

export function useProfileData() {
  const [profiledata, setProfileData] = useState<ProfileData>();
  useEffect(() => {
    (async () => {
      try {
        const response = await http.get<ProfileData>(
          "http://localhost:8081/api/profile"
        );
        console.log(response.data);
        setProfileData(response.data);
      } catch (e: any) {
        console.log("에러");
        console.log(e);
      }
    })();
  }, []);

  return profiledata;
}
