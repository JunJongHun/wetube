import Video from "../models/Video";

// const handleSearch = (error, videos) => {
//   console.log(error, videos);

// };

// Video.find({}, (error, videos) => {
//   console.log(error, videos);
// });

export const home = async (req, res, next) => {
  try {
    // console.log("start");
    const videos = await Video.find({});
    // console.log(videos);
    // console.log("finished");
    console.log(videos);
    return res.render("home", { pageTitle: "HOME", videos });
  } catch (error) {
    return res.render("Server - Error", error);
  }
};
export const watch = async (req, res, next) => {
  let id = req.params.id;
  // console.log(id);
  const video = await Video.findById(id);
  // console.log(video);
  if (video === null) {
    return res.render("404", { pageTitle: "Video not found" });
  } else {
    return res.render("watch", { pageTitle: video.title, video });
  }
};
export const getEdit = async (req, res, next) => {
  let id = req.params.id;
  const video = await Video.findById(id);
  if (video === null) {
    return res.render("404", { pageTitle: "Video not found" });
  } else {
    return res.render("edit", { pageTitle: `Edit ${video.title}`, video });
  }
};

export const postEdit = async (req, res, next) => {
  let id = req.params.id;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  console.log(video);
  if (video === null) {
    return res.render("404", { pageTitle: "Video not found" });
  } else {
    await Video.findByIdAndUpdate(id, {
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect(`/video/${id}`);
  }
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
      hashtags: Video.formatHashtags(hashtags),
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

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Video.findByIdAndDelete(id);

  return res.redirect("/");
};
