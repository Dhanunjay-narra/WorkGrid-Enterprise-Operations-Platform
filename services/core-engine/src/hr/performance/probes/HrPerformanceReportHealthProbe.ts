export class HrPerformanceReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceReport" };
  }
}
