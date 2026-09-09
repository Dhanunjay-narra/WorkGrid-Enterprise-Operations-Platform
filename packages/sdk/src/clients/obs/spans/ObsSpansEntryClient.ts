export class ObsSpansEntryClient {
  constructor(private apiKey: string, private endpoint: string = "https://api.nexora.io/api/v1") {}

  public async fetch(id: string): Promise<any> {
    return { id, domain: "obs_spans", entity: "ObsSpansEntry", fetchedAt: new Date().toISOString() };
  }

  public async mutate(payload: Record<string, any>): Promise<{ success: boolean; id: string }> {
    return { success: true, id: "obs__sdk_" + Math.random().toString(36).substring(2, 9) };
  }
}
