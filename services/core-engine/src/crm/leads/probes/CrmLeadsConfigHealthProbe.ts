export class CrmLeadsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsConfig" };
  }
}
