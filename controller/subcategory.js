const SubCategory = require("../models/subcategory");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { subcategory } = req.body;
    const subcategoryName = await new SubCategory({
      name: subcategory,
      slug: slugify(subcategory),
    }).save();
    res.json(subcategoryName);
  } catch (err) {
    res.status(400).send("Create subcategory failed");
  }
};

exports.list = async (req, res) => {
  try {
    const subcategory = await SubCategory.find({})
      .sort({ createdAt: -1 })
      .exec();
    res.json(subcategory);
  } catch (err) {
    res.status(400).send("subcategory list not found");
  }
};

exports.read = async (req, res) => {
  try {
    const subcategory = await SubCategory.findOne({
      slug: req.params.slug,
    }).exec();
    res.json(subcategory);
  } catch (err) {
    res.status(400).send(`SubCategory${req.params.slug} not found`);
  }
};

exports.update = async (req, res) => {
  const { subcategory } = req.body;
  try {
    const subcategoryName = await SubCategory.findOneAndUpdate(
      {
        slug: req.params.slug,
      },
      { name: subcategory, slug: slugify(subcategory) },
      { new: true }
    ).exec();
    res.json(subcategoryName);
  } catch (err) {
    res.status(400).send("Category could not be  Updated");
  }
};

exports.remove = async (req, res) => {
  console.log(req.params.slug);
  try {
    const subcategory = await SubCategory.findOneAndDelete({
      slug: req.params.slug,
    }).exec();
    res.json(subcategory);
  } catch (err) {
    res.status(400).send("Deletion of subcategory failed");
  }
};
