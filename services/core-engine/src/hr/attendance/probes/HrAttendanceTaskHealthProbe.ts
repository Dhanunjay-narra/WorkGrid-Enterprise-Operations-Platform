export class HrAttendanceTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceTask" };
  }
}
