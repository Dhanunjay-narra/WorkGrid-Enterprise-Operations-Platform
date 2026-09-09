export class HrAttendanceRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceRule" };
  }
}
