import axios from "axios";
import { imgApiUrl } from "./config";

export const fetchUserImg = async (userGender: string): Promise<string> => {
  try {
    while (true) {
      const response = await axios.get(imgApiUrl);
      const user = response.data.results[0];
      const pictureUrl = user.picture.large;
      console.log(pictureUrl);
     const checkGender = `/${userGender}/`

      if (pictureUrl.includes(checkGender)) {
        console.log("Matches");
        return pictureUrl;
      } else {
      }
    }
  } catch (err) {
    throw err;
  }
};
