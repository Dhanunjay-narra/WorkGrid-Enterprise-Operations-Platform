export class HrDepartmentsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsMetric" };
  }
}
