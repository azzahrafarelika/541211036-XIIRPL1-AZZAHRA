const User = require("../models/User")

module.exports = {

//GET All Users
  index: async (req, res) => {
    try {
      const user = await User.find()
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
      });

    }catch (error) {
      res.status(400).json({sucess: false})
    }
    if (user.length > 0) {
      
    } else
      res.json({
        status: false,
        message: "data masih kosong",
      });
    res.json(user);
  },

  //GET User By ID
  show: async (req, res) => {
    try {
      const user = await User.findById();
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "data berhasil diubah",
      });
    } catch (error) {
      res.status(400).json({sucess: false})
    }
    
  },

  //CREATE User
  store: async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "data berhasil ditambah",
      });
    } catch (error) {
      res.status(400).json({sucess: false})
    }
    
  },

  //UPDATE User
  update: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "data berhasil diubah",
      });
    } catch (error) {
      res.status(400).json({sucess: false})
    }
    
  },

  //DELETE User
  delete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "data berhasil dihapus",
      })
    } catch (error) {
      res.status(400).json({sucess: false})
    }
  },
};