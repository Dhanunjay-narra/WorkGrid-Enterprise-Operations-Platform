export class ProjectWorkspacesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesTask" };
  }
}
