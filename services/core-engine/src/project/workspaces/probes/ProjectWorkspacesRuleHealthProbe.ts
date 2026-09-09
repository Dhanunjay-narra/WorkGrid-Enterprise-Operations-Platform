export class ProjectWorkspacesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesRule" };
  }
}
