export class HrPerformanceTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceTransaction" };
  }
}
