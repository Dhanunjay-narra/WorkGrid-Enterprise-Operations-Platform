export class HrPerformanceTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceTask" };
  }
}
