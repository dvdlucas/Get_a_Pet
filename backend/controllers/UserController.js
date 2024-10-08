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

      if (req.file) {
        userData.image = req.file.filename;
      } else {
        return res.status(400).json({ error: "A imagem é obrigatória" });
      }

      const token = await UserServices.createUser(userData);
      res.status(201).json({
        message: "Usuário registrado com sucesso",
        token,
      });
    } catch (error) {
      if (
        error.message.includes("obrigatório") ||
        error.message.includes("senhas")
      ) {
        return res.status(400).json({ error: error.message });
      }

      if (error.message.includes("email")) {
        return res.status(409).json({ error: error.message });
      }
      res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const token = await UserServices.loginUser(email, password);
      res.status(200).json({
        message: "Usuário Logado com sucesso",
        token,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message && "Credenciais inválidas",
      });
    }
  }

  static async checkUser(req, res) {
    try {
      const token = req.headers.authorization;
      const user = await UserServices.getUserByToken(token);
      res.status(200).json({ user });
    } catch (error) {
      res.status(401).json({
        message: error.message,
      });
    }
  }

  static async getById(req, res) {
    const id = req.params.id;
    try {
      const user = await UserServices.getById(id);
      res.status(201).json({ user });
    } catch (error) {
      res.status(401).json({
        message: "Usuário não encontrado",
      });
    }
  }

  static async editUser(req, res) {
    try {
      const id = req.params.id;
      const userData = req.body;
      if (req.file) {
        userData.image = req.file.filename;
      } else {
        return res.status(400).json({ error: "A imagem é obrigatória" });
      }
      await UserServices.editUser(id, userData);
      res.status(200).json({ message: "Usuário Atualizado com sucesso" });
    } catch (error) {
      res.status(401).json({
        message: error.message,
      });
    }
  }
}
export default UserController;
