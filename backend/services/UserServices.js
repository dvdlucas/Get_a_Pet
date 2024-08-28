import UserRepository from "../repositories/UserRepository.js";

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

    const newUser = await UserRepository.createUser({
      name,
      email,
      phone,
      password,
    });
    return newUser;
  }
}
export default UserServices;
