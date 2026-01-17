import api from "../services/api";

api.get("/test")
  .then(response => console.log(response))
  .catch(error => console.log(error));

export default api; 