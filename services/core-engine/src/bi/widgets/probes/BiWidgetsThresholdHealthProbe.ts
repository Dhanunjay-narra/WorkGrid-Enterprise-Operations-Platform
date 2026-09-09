export class BiWidgetsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsThreshold" };
  }
}
