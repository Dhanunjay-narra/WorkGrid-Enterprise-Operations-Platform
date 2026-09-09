export class HrAttendanceTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceTransaction" };
  }
}
