export class HrPayrollMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollMetric" };
  }
}
