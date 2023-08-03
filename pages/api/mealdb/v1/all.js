/** @format */
import apiCaller from "../../helper/apiCaller";
import url from "../../helper/utitliy";

export default async function handler(req, res) {
  let methodType = req.method;
  let payload = req.body;
  if (methodType === "POST") {
    let urlGenerated = url(payload);
    let packets = await apiCaller(urlGenerated);
    let meals = packets["meals"];
    return res.status(200).json({
      payloadRecv: payload,
      urlGenerated,
      meals,
    });
  }
  return res.status(200).json({ message: "NO GET OPT" });
}
