import User from "../models/User";

export const getJoin = (req, res, next) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = async (req, res, next) => {
  console.log(req.body);
  const { email, username, password, password2, name, location } = req.body;
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Create Join",
      errorMessage: "Password confirmation does not match",
    });
  }

  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: "Create Join",
      errorMessage: "This username/email is already taken.",
    });
  }

  await User.create({
    email,
    username,
    password,
    name,
    location,
  });

  return res.redirect("/login");
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
