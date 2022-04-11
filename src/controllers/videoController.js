import Video from "../models/Video";

// const handleSearch = (error, videos) => {
//   console.log(error, videos);

// };

// Video.find({}, (error, videos) => {
//   console.log(error, videos);
// });

export const home = async (req, res, next) => {
  try {
    console.log("start");
    const videos = await Video.find({});
    console.log(videos);
    console.log("finished");
    return res.render("home", { pageTitle: "HOME", videos: [] });
  } catch (error) {
    return res.render("Server - Error", error);
  }
};
export const watch = (req, res, next) => {
  let id = req.params.id;
  console.log(id);

  return res.render("watch", { pageTitle: `Watch` });
};
export const getEdit = (req, res, next) => {
  let id = req.params.id;

  return res.render("edit", { pageTitle: `Edit` });
};

export const postEdit = (req, res, next) => {
  let id = req.params.id;
  const title = req.body.title;

  return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res, next) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res, next) => {
  console.log(req.body);

  return res.redirect("/");
};

// export const search = (req, res, next) => {
//   return res.send("user Search");
// };
// export const remove = (req, res, next) => {
//   return res.send("Delete Videos");
// };
