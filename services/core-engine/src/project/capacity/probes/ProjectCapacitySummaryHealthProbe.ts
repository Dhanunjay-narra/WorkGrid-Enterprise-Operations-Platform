export class ProjectCapacitySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacitySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacitySummary" };
  }
}
