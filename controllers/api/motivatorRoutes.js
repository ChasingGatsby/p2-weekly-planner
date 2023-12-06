const router = require("express").Router();
const { Motivator } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const motivatorData = await Motivator.findAll({
      where: { user_id: req.session.user_id },
    });
    res.status(200).json(motivatorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newMotivator = await Motivator.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newMotivator);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const motivatorData = await Motivator.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!motivatorData) {
      res.status(404).json({ message: "Nothing found with that ID!" });
      return;
    }
    res.status(200).json(motivatorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
