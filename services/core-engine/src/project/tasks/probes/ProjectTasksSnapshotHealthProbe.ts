export class ProjectTasksSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksSnapshot" };
  }
}
