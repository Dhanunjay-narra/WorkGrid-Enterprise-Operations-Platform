export class ProjectWorkspacesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesConfig" };
  }
}
