export class EvtEventBatchClient {
  constructor(private apiKey: string, private baseUrl: string = "https://api.nexora.io/api/v1") {}

  public async get(id: string): Promise<any> {
    return { id, domain: "events", entity: "EvtEventBatch" };
  }

  public async list(tenantId: string, limit: number = 50): Promise<any[]> {
    return [{ id: "1", tenantId, domain: "events", entity: "EvtEventBatch" }];
  }

  public async create(payload: Record<string, any>): Promise<any> {
    return { success: true, id: "eve_sdk_" + Math.random().toString(36).substring(2, 9), payload };
  }
}
