import { Event } from "../../types/GaroonTypes";
import { HttpClient } from "./HttpClient";

export class GaroonClient {
  private client: HttpClient;
  private endpoint: string;
  private path = "/g/api/v1";
  private baseUrl = location.origin;
  private header: object;

  constructor() {
    this.client = new HttpClient();
    this.endpoint = `${this.baseUrl}${this.path}`;
    this.header = { "X-Requested-With": "XMLHttpRequest" };
  }

  private buildRequestUrl(path: string): string {
    return `${this.endpoint}${path}`;
  }

  public async getEvents(
    query?: string
  ): Promise<{
    events: Event[];
    hasNext: boolean;
  }> {
    const path = `/schedule/events${query ? `?${query}` : ""}`;
    return await this.client.send({
      method: "get",
      url: this.buildRequestUrl(path),
      headers: this.header,
    });
  }
}
