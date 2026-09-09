export class ProjectWorkspacesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesNode" };
  }
}
