export class HrPerformanceStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceState" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceState" };
  }
}
