export class CrmMeetingClient {
  constructor(private apiKey: string, private baseUrl: string = "https://api.nexora.io/api/v1") {}

  public async get(id: string): Promise<any> {
    return { id, domain: "crm", entity: "CrmMeeting" };
  }

  public async list(tenantId: string, limit: number = 50): Promise<any[]> {
    return [{ id: "1", tenantId, domain: "crm", entity: "CrmMeeting" }];
  }

  public async create(payload: Record<string, any>): Promise<any> {
    return { success: true, id: "crm_sdk_" + Math.random().toString(36).substring(2, 9), payload };
  }
}
