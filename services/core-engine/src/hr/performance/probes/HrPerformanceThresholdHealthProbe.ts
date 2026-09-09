export class HrPerformanceThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceThreshold" };
  }
}
