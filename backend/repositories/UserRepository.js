import User from "../models/User.js";

class UserRepository {
  static async getAll() {
    return await User.find();
  }

  static async createUser(userData) {
    return await User.create(userData);
  }

  static async findByEmail(email) {
    return await User.findOne({ email });
  }

  static async findById(id) {
    return await User.User.findByPk(id);
  }
}
export default UserRepository;
