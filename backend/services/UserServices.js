import UserRepository from "../repositories/UserRepository.js";
import bcrypt from "bcrypt";

class UserServices {
  static async createUser(userData) {
    const { name, email, phone, password, confirmPassword } = userData;

    // Validação
    if (!name || !email || !phone || !password || !confirmPassword) {
      throw new Error("Todos os campos são obrigatórios");
    }

    const userExists = await UserRepository.findByEmail(email);
    if (userExists) throw new Error("Já existe um usuário com esse email");
    if (password !== confirmPassword) {
      throw new Error("As senhas precisam ser iguais");
    }

    //create password encrypted
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await UserRepository.createUser({
      name,
      email,
      phone,
      password: passwordHash,
    });
    return newUser;
  }
}
export default UserServices;
