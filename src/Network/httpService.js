import axios from "axios";
import { Client } from "./config.json";

const api = axios.create({
  baseURL: "http://192.168.3.39:3036"
});

//Credito Parcelado
// const createSimulationParcelado = client => {
//   return api.post(Client.urlClient, client);
// };

//Credito Antecipacao
const createSimulationAntecipacao = client => {
    return api.post("/antecipacao" , client);
};

//Credito Antecipacao
// const createPostImage = client => {
//     return api.post(Client.urlClient, client);
// };



export default {
    // createSimulationParcelado: createSimulationParcelado,
    createSimulationAntecipacao: createSimulationAntecipacao
};