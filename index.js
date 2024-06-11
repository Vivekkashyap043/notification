
export default async ({ req, res, log, error }) => {

  console.log("request object is: ", req.query.id)
  
  console.log("insed the function")

  return res.json({ data: "vivek" });
};