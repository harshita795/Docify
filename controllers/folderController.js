const { Folder } = require("../models");

const folder = async (req, res) => {
  try {
    const { name, type, maxFileLimit } = req.body;

    const response = await Folder.create({ name, type, maxFileLimit });
    return res.status(200).json({ message: "Folder created !!", response });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in creating the folder", error: error.message });
  }
};

module.exports = folder;
