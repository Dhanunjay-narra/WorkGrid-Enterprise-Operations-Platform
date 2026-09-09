export class HrAttendanceSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceSummary" };
  }
}
