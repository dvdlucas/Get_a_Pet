import PetService from "../services/PetRepository.js";

class PetController {
  static async getAll(req, res) {
    try {
      const users = await PetService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json("Error fetching pets");
    }
  }
}

export default PetController;
