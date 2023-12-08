import http from "@/utils/http";
import { useEffect, useState } from "react";
import { getDomain } from "@/utils/http";

export interface ProfileData {
  id?: number;
  publisherName: string;
  email: string;
  businessRegistrationNumber: string;
}

export function useProfileData() {
  console.log(`프로필-현재도메인:${getDomain()}`);

  const [profiledata, setProfileData] = useState<ProfileData>();
  useEffect(() => {
    (async () => {
      try {
        const response = await http.get<ProfileData>(
          `${getDomain()}/api/profile`
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
