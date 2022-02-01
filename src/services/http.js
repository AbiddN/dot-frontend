export const createRequest = (method, body = null) => {
  let req = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "POST" || method === "PUT") {
    req.body = JSON.stringify(body);
  }
  return req;
};
