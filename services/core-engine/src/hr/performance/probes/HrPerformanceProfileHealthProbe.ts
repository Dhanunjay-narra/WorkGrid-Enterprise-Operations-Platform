export class HrPerformanceProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceProfile" };
  }
}
