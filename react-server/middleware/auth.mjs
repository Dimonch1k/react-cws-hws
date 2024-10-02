import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "tokenSecret");
    req.user = decoded;
    console.log(req.user);

    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};

export default auth;
