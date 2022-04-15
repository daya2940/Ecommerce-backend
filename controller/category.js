const Category = require("../models/category");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { category } = req.body;
    const categoryName = await new Category({
      name: category,
      slug: slugify(category),
    }).save();
    res.json(categoryName);
  } catch (err) {
    res.status(400).send("Create category failed");
  }
};

exports.list = async (req, res) => {
  try {
    const category = await Category.find({}).sort({ createdAt: -1 }).exec();
    res.json(category);
  } catch (err) {
    res.status(400).send("category list not found");
  }
};

exports.read = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug }).exec();
    res.json(category);
  } catch (err) {
    res.status(400).send(`Category${req.params.slug} not found`);
  }
};

exports.update = async (req, res) => {
  const { category } = req.body;
  try {
    const categoryName = await Category.findOneAndUpdate(
      {
        slug: req.params.slug,
      },
      { name: category, slug: slugify(category) },
      { new: true }
    ).exec();
    res.json(categoryName);
  } catch (err) {
    res.status(400).send("Category could not be  Updated");
  }
};

exports.remove = async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({
      slug: req.params.slug,
    }).exec();
    res.json(category);
  } catch (err) {
    res.status(400).send("Deletion category failed");
  }
};
