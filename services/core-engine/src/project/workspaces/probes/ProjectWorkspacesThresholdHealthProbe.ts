export class ProjectWorkspacesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesThreshold" };
  }
}
