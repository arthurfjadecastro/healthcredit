import clientService from "../Network/httpService"
import { useFiredRequest } from "../Network/CustomHooks";

const useCreateAntecipacao = requestBody =>
  useFiredRequest(clientService.createSimulationAntecipacao, requestBody);

export default useCreateAntecipacao;