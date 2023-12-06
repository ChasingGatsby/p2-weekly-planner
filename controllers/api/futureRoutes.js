const router = require("express").Router();
const { Future } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const futureData = await Future.findAll({
      where: { user_id: req.session.user_id },
    });
    res.status(200).json(futureData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newFuture = await Future.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newFuture);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const futureData = await Future.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!futureData) {
      res.status(404).json({ message: "Nothing found with that ID!" });
      return;
    }
    res.status(200).json(futureData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
