export class ProjectWorkspacesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesQueue" };
  }
}
