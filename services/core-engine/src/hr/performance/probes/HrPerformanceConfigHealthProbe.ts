export class HrPerformanceConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceConfig" };
  }
}
