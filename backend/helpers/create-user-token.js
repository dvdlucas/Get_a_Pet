import jwt from "jsonwebtoken";

const createUserToken = async (user, rs, res) => {
  const token = jwt.sign(
    {
      name: user.name,
      id: user.id,
    },
    "nossosecret"
  );
  return token;
};
export default createUserToken;
