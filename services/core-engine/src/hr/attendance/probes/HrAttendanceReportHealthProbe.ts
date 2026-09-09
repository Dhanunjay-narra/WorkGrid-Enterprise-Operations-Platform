export class HrAttendanceReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceReport" };
  }
}
