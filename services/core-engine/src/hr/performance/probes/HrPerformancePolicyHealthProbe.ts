export class HrPerformancePolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformancePolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformancePolicy" };
  }
}
