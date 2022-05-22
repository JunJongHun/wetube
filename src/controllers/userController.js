import User from "../models/User";
import bcrypt from "bcrypt";

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

  try {
    await User.create({
      email,
      username,
      password,
      name,
      location,
    });
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "Create Join",
      errorMessage: error._message,
    });
  }

  return res.redirect("/login");
};
export const edit = (req, res, next) => {
  return res.send("user edit");
};
export const getLogin = (req, res, next) => {
  return res.render("login", { pageTitle: "Log in" });
};
export const postLogin = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Log in",
      errorMessage: "Don't exists username.",
    });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(400).render("login", {
      pageTitle: "Log in",
      errorMessage: "Wrong Password!",
    });
  }
  console.log("Success Login");
  return res.redirect("/");
};

export const remove = (req, res, next) => {
  return res.send("user remove");
};

export const see = (req, res, next) => {
  console.log(req);
  return res.send("user see ");
};
export const logout = (req, res, next) => {
  return res.send("user Logout");
};
