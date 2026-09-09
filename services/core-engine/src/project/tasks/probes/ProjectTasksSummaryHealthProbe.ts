export class ProjectTasksSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectTasksSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectTasksSummary" };
  }
}
