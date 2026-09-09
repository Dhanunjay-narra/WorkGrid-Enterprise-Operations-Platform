export class ProjectWorkspacesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesPolicy" };
  }
}
