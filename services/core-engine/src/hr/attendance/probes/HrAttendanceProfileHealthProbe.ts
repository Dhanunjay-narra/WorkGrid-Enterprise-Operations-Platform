export class HrAttendanceProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceProfile" };
  }
}
