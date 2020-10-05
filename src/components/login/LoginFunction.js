import axios from "axios";

export const getUserInfo = async () => {
  const response = await axios({
    baseURL: "http://localhost:3000/api",
    method: "get",
    url: "/auth/getUser",
  });
  return response;
};
