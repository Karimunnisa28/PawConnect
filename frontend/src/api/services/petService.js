import API from "../config";

export const petService = {
    getAllPets: () => API.get("/pets"),
    getPetById: (id) => API.get(`/pets/${id}`),
    createPet: (petData) => API.post("/pets", petData),
    updatePet: (id, petData) => API.put(`/pets/${id}`, petData),
    deletePet: (id) => API.delete(`/pets/${id}`)
};
