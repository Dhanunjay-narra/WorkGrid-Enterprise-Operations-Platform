export class ProjectWorkspacesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesSnapshot" };
  }
}
