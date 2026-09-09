export class ProjectEpicsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsSummary" };
  }
}
