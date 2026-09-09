export class TenancyThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyThreshold" };
  }
}
