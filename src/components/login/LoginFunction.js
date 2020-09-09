import axios from "axios";

export const getUserInfo = async () => {
  const response = await axios({
    method: "get",
    url: "api/auth/getUser",
  });
  return response;
};
