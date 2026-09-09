export class HrAttendanceStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceState" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceState" };
  }
}
