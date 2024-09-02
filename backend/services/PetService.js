import PetRepository from "../repositories/PetRepository.js";

class PetService {
  static async getAll() {
    return await PetRepository.getAll();
  }
}
export default PetService;
