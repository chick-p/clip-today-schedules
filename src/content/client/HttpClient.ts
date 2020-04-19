import Axios from "axios";

type HttpMethod = "get" | "post" | "put" | "delete";

type RequestConfig = {
  method: HttpMethod;
  url: string;
  headers: object;
  data?: object;
};

export class HttpClient {
  async send<T extends object>(options: RequestConfig): Promise<T> {
    let data;
    try {
      const response = await Axios(options);
      data = response.data;
    } catch (err) {
      console.error(err);
    }
    return data;
  }
}
