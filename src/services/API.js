import * as axios from "axios";
import NotificationManager from "react-notifications/lib/NotificationManager";

const api = axios.create({
  baseURL: "https://localhost:44382/",
});

export const startConversation = (id) => {
  return api({
    url: "api/chat/start",
    method: "post",
    headers: { Authorization: "Bearer " + sessionStorage.getItem("idToken") },
    data: id,
  });
};

export const likeUser = ({ userId, likedUserId }) => {
  api({
    url: "/api/like/",
    method: "post",
    headers: { Authorization: "Bearer " + sessionStorage.getItem("idToken") },
    data: { userId: userId, likedUserId: likedUserId },
  })
    .then((response) => {
      const { match } = response.data;
      if (match) {
        NotificationManager.success(
          "You have a match! Check it out.",
          "Match!"
        );
      } else {
      }
      // dispatch(fetchCurrentProfileResolve(response.data));
    })
    .catch((error) => {
      // if (error.response) {
      //   dispatch(fetchCurrentProfileReject(error.response.status));
      // } else if (error.request) {
      //   dispatch(fetchCurrentProfileReject(error.request.status));
      // } else {
      //   dispatch(fetchCurrentProfileReject(error.message));
      // }
    });
};
export default api;
