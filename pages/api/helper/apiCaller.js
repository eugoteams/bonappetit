/** @format */

export default async function apiCaller(url) {
  let serializedData;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive",
    },
  });
  if (response.ok) {
    serializedData = await response.json();
  } else {
    console.log("error", url);
  }

  if (response.status === 200) {
    return serializedData;
  }

  if (response.status === 429) {
    console.log("error 429", url);
  }
  return response.status;
}
