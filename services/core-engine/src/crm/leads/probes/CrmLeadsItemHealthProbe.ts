export class CrmLeadsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsItem" };
  }
}
