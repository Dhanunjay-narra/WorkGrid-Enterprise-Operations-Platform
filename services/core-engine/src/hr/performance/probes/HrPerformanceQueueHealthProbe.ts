export class HrPerformanceQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceQueue" };
  }
}
