export class CrmLeadsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsState" };
  }
}
