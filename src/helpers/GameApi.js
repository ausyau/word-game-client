import axios from "axios";

export default class GameApi {

  /**
   * Makes an API request to the Node proxy server to retrieve words
   */
  static async request(params = {}, verb = "get") {
    try {
      return (await axios({
        baseURL: "http://localhost:3005",
        method: verb,
        url: "/words",
        params,
      })).data;
    }
    catch (err) {
      console.log("Something went wrong with API", err.response);
    }
  }

  static async getWords(params) {
    return await this.request(params);
  }

}

