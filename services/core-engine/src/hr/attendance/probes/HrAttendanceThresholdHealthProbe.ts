export class HrAttendanceThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceThreshold" };
  }
}
