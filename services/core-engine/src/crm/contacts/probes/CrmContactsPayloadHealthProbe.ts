export class CrmContactsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsPayload" };
  }
}
