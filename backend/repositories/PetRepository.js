import Pet from "./models/Pet.js";

class PetRepository {
  static async getAll() {
    return await Pet.findAll();
  }
}

export default PetRepository;
