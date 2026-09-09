export class ProjectEpicsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsSnapshot" };
  }
}
