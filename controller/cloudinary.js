const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dcc1xsqhj",
  api_key: "166154348116253",
  api_secret: "i6wxCiwS5nYRzyPZiIEiV_kWSBg",
});

exports.upload = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.body.image,
    { upload_preset: "dev_setups" },
    {
      public_id: `${Date.now()}`,
      resource_type: "auto", //jpeg or png
    }
  );
  res.json({
    public_id: result.public_id,
    url: result.secure_url,
  });
};

exports.remove = async (req, res) => {
  const image_id = req.body.public_id;
  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) return res.json({ success: false, err });
    res.send("Successful");
  });
};
