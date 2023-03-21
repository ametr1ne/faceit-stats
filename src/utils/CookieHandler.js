import Cookies from "js-cookie";

export const cookieHandler = async (cookieObject, setCookieObject, nickname) => {
  if (!cookieObject.includes(nickname)) {
    if (cookieObject.length > 7) {
      setCookieObject(cookieObject.shift());
    }
    await setCookieObject([...cookieObject, nickname]);
    Cookies.set("recent_searches", JSON.stringify([...cookieObject, nickname]), {
      path: "/",
      expires: 14,
    });
  }
};
