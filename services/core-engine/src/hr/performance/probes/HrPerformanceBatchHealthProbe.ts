export class HrPerformanceBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceBatch" };
  }
}
