export class ProjectWorkspacesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesBatch" };
  }
}
