let videos = [
  {
    title: "Frist Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },

  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 2,
  },

  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res, next) => {
  return res.render("home", { pageTitle: "HOME", videos: videos });
};
export const watch = (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watch`, video: video });
};
export const edit = (req, res, next) => {
  let id = req.params.id;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}` });
};
export const search = (req, res, next) => {
  return res.send("user Search");
};
export const upload = (req, res, next) => {
  return res.send("Upload");
};
export const remove = (req, res, next) => {
  return res.send("Delete Videos");
};
