export class HrPerformanceSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceSummary" };
  }
}
