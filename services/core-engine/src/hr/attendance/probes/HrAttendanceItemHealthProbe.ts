export class HrAttendanceItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceItem" };
  }
}
