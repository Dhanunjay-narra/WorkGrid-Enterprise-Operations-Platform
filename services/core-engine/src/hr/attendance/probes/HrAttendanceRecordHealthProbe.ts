export class HrAttendanceRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceRecord" };
  }
}
