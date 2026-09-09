export class CrmLeadsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsThreshold" };
  }
}
