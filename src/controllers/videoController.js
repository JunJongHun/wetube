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
    return res.render("home", { pageTitle: "HOME", videos });
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
export const postUpload = async (req, res, next) => {
  const { title, description, hashtags } = req.body;
  // 데이터 베이스에 저장하는 두가지 방법
  // const video = new Video({
  //   title: title,
  //   description: description,
  //   createdAt: Date.now(),
  //   hashtags: hashtags.split(",").map((word) => `#${word}`),
  //   meta: {
  //     views: 0,
  //     rating: 0,
  //   },
  // });
  // const dbVideo = await video.save();
  // console.log(dbVideo);
  try {
    await Video.create({
      title: title,
      description: description,
      // createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      meta: {
        views: 0,
        rating: 0,
      },
    });

    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

// export const search = (req, res, next) => {
//   return res.send("user Search");
// };
// export const remove = (req, res, next) => {
//   return res.send("Delete Videos");
// };
