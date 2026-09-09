export class BiCohortsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsThreshold" };
  }
}
