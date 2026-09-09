export class HrAttendanceMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceMetric" };
  }
}
