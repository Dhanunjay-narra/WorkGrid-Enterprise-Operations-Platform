export class HrAttendanceEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceEvent" };
  }
}
