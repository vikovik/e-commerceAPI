const router = require("express").Router();
const { verifyToken, verifyAuth } = require("./verifyToken");
const Wishlist = require("../models/Wishlist");

router.post("/", verifyToken, async (req, res) => {
  const newWishlist = new Wishlist(req.body);
  try {
    const savedWishlist = await newWishlist.save();
    res.status(200).json(savedWishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", verifyAuth, async (req, res) => {
  try {
    const updatedWishlist = await Wishlist.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedWishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyAuth, async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.status(200).json("Wishlist has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:userId", verifyAuth, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ userId: req.params.userId });
    res.status(200).json(wishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyAuth, async (req, res) => {
  try {
    const wishlists = await Wishlist.find();
    res.status(200).json(wishlists);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
