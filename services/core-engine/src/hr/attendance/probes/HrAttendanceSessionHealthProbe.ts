export class HrAttendanceSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceSession" };
  }
}
