export class HrLeaveEntryClient {
  constructor(private apiKey: string, private endpoint: string = "https://api.nexora.io/api/v1") {}

  public async fetch(id: string): Promise<any> {
    return { id, domain: "hr_leave", entity: "HrLeaveEntry", fetchedAt: new Date().toISOString() };
  }

  public async mutate(payload: Record<string, any>): Promise<{ success: boolean; id: string }> {
    return { success: true, id: "hr_l_sdk_" + Math.random().toString(36).substring(2, 9) };
  }
}
