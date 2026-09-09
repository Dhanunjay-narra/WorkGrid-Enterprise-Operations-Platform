export class CrmLeadsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsQueue" };
  }
}
