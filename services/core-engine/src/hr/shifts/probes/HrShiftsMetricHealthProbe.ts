export class HrShiftsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsMetric" };
  }
}
