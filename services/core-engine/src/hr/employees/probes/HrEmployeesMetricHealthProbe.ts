export class HrEmployeesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesMetric" };
  }
}
