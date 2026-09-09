export class HrPerformanceEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceEvent" };
  }
}
