export class ProjectWorkspacesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesEvent" };
  }
}
