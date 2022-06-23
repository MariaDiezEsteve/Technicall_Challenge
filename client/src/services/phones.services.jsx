import service from "./config.services";

const getAllPhone = () => {
    return service.get("/phones")
}

const getAllPhonesDetails = (id) => {
    return service.get("/phones/:id")
}

export {getAllPhone, getAllPhonesDetails}