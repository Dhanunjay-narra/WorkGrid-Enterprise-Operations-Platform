export class ProjectWorkspacesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesProfile" };
  }
}
