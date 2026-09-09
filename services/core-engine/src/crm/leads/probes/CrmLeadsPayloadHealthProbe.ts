export class CrmLeadsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsPayload" };
  }
}
