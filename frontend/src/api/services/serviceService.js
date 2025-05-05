import API from "../config";

export const serviceService = {
    getAllServices: () => API.get("/services"),
    getServiceById: (id) => API.get(`/services/${id}`),
    createService: (serviceData) => API.post("/services", serviceData),
    bookService: (serviceId, bookingData) => API.post(`/services/${serviceId}/book`, bookingData)
};
