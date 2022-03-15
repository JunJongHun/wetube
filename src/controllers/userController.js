export const join = (req, res, next) => {
  return res.send("user join");
};
export const edit = (req, res, next) => {
  return res.send("user edit");
};
export const remove = (req, res, next) => {
  return res.send("user remove");
};
export const login = (req, res, next) => {
  return res.send("user login");
};
export const see = (req, res, next) => {
  console.log(req);
  return res.send("user see ");
};
export const logout = (req, res, next) => {
  return res.send("user Logout");
};
