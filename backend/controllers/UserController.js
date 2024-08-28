import User from "../models/User.js";
import UserServices from "../services/UserServices.js";

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
    try {
      const userData = req.body;
      const savedUser = await UserServices.createUser(userData);
      res.status(200).json({ message: "Usuario cadastrado", user: savedUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
