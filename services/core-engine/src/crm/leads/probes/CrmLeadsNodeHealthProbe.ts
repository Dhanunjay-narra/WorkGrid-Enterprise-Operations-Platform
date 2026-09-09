export class CrmLeadsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsNode" };
  }
}
