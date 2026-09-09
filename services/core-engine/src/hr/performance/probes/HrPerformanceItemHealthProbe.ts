export class HrPerformanceItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceItem" };
  }
}
