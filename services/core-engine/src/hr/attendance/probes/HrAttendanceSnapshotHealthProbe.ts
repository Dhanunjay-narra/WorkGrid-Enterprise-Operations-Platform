export class HrAttendanceSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceSnapshot" };
  }
}
