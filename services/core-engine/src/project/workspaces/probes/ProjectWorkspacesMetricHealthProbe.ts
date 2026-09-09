export class ProjectWorkspacesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesMetric" };
  }
}
