export class HrLeaveSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveSnapshot" };
  }
}
