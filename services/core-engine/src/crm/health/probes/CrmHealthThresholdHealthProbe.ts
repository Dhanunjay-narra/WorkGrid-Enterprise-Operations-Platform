export class CrmHealthThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthThreshold" };
  }
}
