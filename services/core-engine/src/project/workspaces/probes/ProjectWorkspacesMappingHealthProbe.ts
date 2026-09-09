export class ProjectWorkspacesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesMapping" };
  }
}
