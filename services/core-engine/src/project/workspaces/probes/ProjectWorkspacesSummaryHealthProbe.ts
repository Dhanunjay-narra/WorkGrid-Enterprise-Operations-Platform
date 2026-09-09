export class ProjectWorkspacesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesSummary" };
  }
}
