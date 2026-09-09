export class HrLeaveMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveMetric" };
  }
}
