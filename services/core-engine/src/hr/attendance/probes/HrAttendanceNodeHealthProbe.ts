export class HrAttendanceNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceNode" };
  }
}
