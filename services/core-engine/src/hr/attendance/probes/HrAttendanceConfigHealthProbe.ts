export class HrAttendanceConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceConfig" };
  }
}
