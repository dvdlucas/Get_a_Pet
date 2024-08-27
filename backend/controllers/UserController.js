import User from "../models/User.js";

class UserController {
  static async getAll(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Error fetching users" });
    }
  }

  static async createUser(req, res) {
    const { name, email, phone, password, image } = req.body;
    const user = new User({ name, email, phone, password, image });
    try {
      const savedUser = await user.save();
      res.status(200).json({ message: "Usuario cadastrado", user: savedUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
