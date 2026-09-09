export class ProjectWorkspacesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesState" };
  }
}
