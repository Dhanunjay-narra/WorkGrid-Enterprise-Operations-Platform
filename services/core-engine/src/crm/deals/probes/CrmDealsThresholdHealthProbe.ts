export class CrmDealsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsThreshold" };
  }
}
