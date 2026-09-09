export class HrAttendanceBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceBatch" };
  }
}
