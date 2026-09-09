export class ProjectGanttSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttSnapshot" };
  }
}
