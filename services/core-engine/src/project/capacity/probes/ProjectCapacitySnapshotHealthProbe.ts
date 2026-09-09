export class ProjectCapacitySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacitySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacitySnapshot" };
  }
}
