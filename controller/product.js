const Product = require("../models/product");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    req.body.product.slug = slugify(req.body.product.title);
    const newProduct = await new Product(req.body.product).save();
    res.json(newProduct);
  } catch (err) {
    // res.status(400).send("Creation of product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.list = async (req, res) => {
  try {
    const product = await Product.find({})
      .populate("")
      .sort({ createdAt: -1 })
      .exec();
    res.json(product);
  } catch (err) {
    res.status(400).send("product list not found");
  }
};

exports.read = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).exec();
    res.json(product);
  } catch (err) {
    res.status(400).send(`Product${req.params.slug} not found`);
  }
};

exports.update = async (req, res) => {
  const { product } = req.body;
  try {
    const productName = await Product.findOneAndUpdate(
      {
        slug: req.params.slug,
      },
      { name: product, slug: slugify(product) },
      { new: true }
    ).exec();
    res.json(productName);
  } catch (err) {
    res.status(400).send("Product could not be  Updated");
  }
};

exports.remove = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      slug: req.params.slug,
    }).exec();
    res.json(product);
  } catch (err) {
    res.status(400).send("Deletion of Product failed");
  }
};
