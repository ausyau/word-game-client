import axios from "axios";

export default class GameApi {

  /**
   * Makes an API request to the Node proxy server to retrieve words
   */
  static async request(params = {}, verb = "get") {
    try {
      let response = await axios({
        baseURL: "http://localhost:3005",
        method: verb,
        url: "/words",
        params,
      })
      let { data, status } = response;
      return { data, status };
    }
    catch (err) {
      return {
        status: 500,
        message: "Something went wrong with API"
      };
    }
  }

  static async getWords(params) {
    return await this.request(params);
  }

}

