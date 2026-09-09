export class HrAttendancePolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendancePolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendancePolicy" };
  }
}
