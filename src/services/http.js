export const createRequest = (method, body = null, auth = false) => {
  let req = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "POST" || method === "PUT") {
    req.body = JSON.stringify(body);
  }

  if(auth){
    req.headers["Authorization"] = localStorage.getItem("token");
  }
  console.log(req)
  return req;
};
