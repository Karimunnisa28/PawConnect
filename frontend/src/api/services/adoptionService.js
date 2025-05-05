import API from "../config";

export const adoptionService = {
    getAllAdoptions: () => API.get("/adoptions"),
    getAdoptionById: (id) => API.get(`/adoptions/${id}`),
    createAdoption: (adoptionData) => API.post("/adoptions", adoptionData),
    applyForAdoption: (id, applicationData) => API.post(`/adoptions/${id}/apply`, applicationData)
};
