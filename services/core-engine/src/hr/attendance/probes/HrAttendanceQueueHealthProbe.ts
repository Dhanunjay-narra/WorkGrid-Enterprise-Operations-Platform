export class HrAttendanceQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceQueue" };
  }
}
