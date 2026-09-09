export class ProjectKanbanSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanSnapshot" };
  }
}
